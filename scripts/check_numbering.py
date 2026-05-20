"""
Verifica a numeracao dos arquivos de imagem em cada manual.

Aceita dois padroes de nomenclatura:
  - Sequencial:    `1-foo.png`, `2-bar.png`, ...
  - Por secao:     `3.1 foo.png`, `3.2 bar.png`, `4.1 ...`, ...

Para o padrao sequencial, exige numeros estritamente crescentes 1..N na
ordem em que as imagens aparecem no index.md.

Para o padrao por secao, exige que dentro de cada secao os sub-itens estejam
em ordem crescente (3.1, 3.2, 3.3 ...) e que as secoes apareçam em ordem
crescente (3 antes de 4).

Ignora `padrao-XX-*.png` (fluxo padrao de acesso).
"""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANUAIS_DIR = ROOT / "manuais"
IGNORADOS = {"compilados"}

RE_HTML = re.compile(
    r'''src\s*=\s*(["'])\s*(imagens/[^"']+?)\s*\1''',
    re.IGNORECASE,
)
RE_SECAO = re.compile(r"^(\d+)[.\-](\d+)\b")
RE_SEQ = re.compile(r"^(\d+)\b")


def extrair_refs(index_md: Path) -> list[str]:
    if not index_md.is_file():
        return []
    texto = index_md.read_text(encoding="utf-8", errors="replace")
    return [
        m.group(2).split("/", 1)[1]
        for m in RE_HTML.finditer(texto)
    ]


def main() -> int:
    manuais = sorted(
        d for d in MANUAIS_DIR.iterdir()
        if d.is_dir() and d.name not in IGNORADOS
    )

    print("=" * 78)
    print("VERIFICACAO DE NUMERACAO")
    print("=" * 78)

    problemas = 0
    for manual in manuais:
        index_md = manual / "index.md"
        if not index_md.is_file():
            continue
        refs = [r for r in extrair_refs(index_md) if not r.startswith("padrao-")]

        if not refs:
            print(f"\n--- {manual.name}: SEM IMAGENS NUMERADAS ---")
            continue

        # Tenta padrao por secao: X.Y
        secao_tuples: list[tuple[int, int]] = []
        # Tenta padrao sequencial: X
        seq_nums: list[int] = []
        sem_prefixo = 0
        for r in refs:
            m_sec = RE_SECAO.match(r)
            if m_sec:
                secao_tuples.append((int(m_sec.group(1)), int(m_sec.group(2))))
            else:
                m_seq = RE_SEQ.match(r)
                if m_seq:
                    seq_nums.append(int(m_seq.group(1)))
                else:
                    sem_prefixo += 1

        # Escolhe o padrao predominante
        if len(secao_tuples) > len(seq_nums):
            # Padrao por secao
            ordem_ok = secao_tuples == sorted(secao_tuples)
            if ordem_ok:
                print(f"\n--- {manual.name}: OK (padrao secao X.Y) ---")
                print(f"    {len(secao_tuples)} imagens, {secao_tuples[0][0]}.{secao_tuples[0][1]} -> {secao_tuples[-1][0]}.{secao_tuples[-1][1]}")
            else:
                problemas += 1
                print(f"\n--- {manual.name}: FORA DE ORDEM (padrao secao) ---")
                print(f"    sequencia capturada: {secao_tuples}")
                print(f"    esperado ordenado:   {sorted(secao_tuples)}")
        elif seq_nums:
            esperado = list(range(1, len(seq_nums) + 1))
            if seq_nums == esperado:
                print(f"\n--- {manual.name}: OK (padrao sequencial) ---")
                print(f"    {len(seq_nums)} imagens, 1..{seq_nums[-1]}")
            else:
                problemas += 1
                print(f"\n--- {manual.name}: PROBLEMA (padrao sequencial) ---")
                print(f"    sequencia capturada: {seq_nums}")
                print(f"    esperado:            {esperado}")
        else:
            print(f"\n--- {manual.name}: SEM PREFIXO NUMERICO ({sem_prefixo} refs) ---")

    print("\n" + "=" * 78)
    print(f"Manuais com problemas de numeracao: {problemas}")
    return 0 if problemas == 0 else 1


if __name__ == "__main__":
    import sys
    sys.exit(main())
