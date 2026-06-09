"""
Varre todos os manuais em manuais/<manual>/ e verifica:
  1. Imagens referenciadas no index.md mas inexistentes em imagens/ (links quebrados)
  2. Imagens existentes em imagens/ mas nao referenciadas no index.md (orfas)
  3. Especificamente, presenca e referencia das 5 imagens padrao do bloco de
     Acesso e Autenticacao:
        padrao-01-acesso-portal.png
        padrao-02-selecao-area.png
        padrao-03-login.png
        padrao-04-ambiente-dev.png
        padrao-05-hub-ferramentas.png

Uso: python scripts/check_images.py
"""

from __future__ import annotations
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANUAIS_DIR = ROOT / "manuais"
IGNORADOS = {"compilados"}

PADRAO_ESPERADO = [
    "padrao-01-acesso-portal.png",
    "padrao-02-selecao-area.png",
    "padrao-03-login.png",
    "padrao-04-ambiente-dev.png",
    "padrao-05-hub-ferramentas.png",
]

IMG_EXT = {".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"}

# Captura referencias em duas formas:
#  1) Atributo HTML: src="imagens/..." (espacos sao permitidos dentro das aspas)
#  2) Markdown:      ![alt](imagens/...) ou ![alt](<imagens/...>)
RE_HTML = re.compile(
    r'''src\s*=\s*(["'])\s*(imagens/[^"']+?)\s*\1''',
    re.IGNORECASE,
)
RE_MD = re.compile(
    r'\]\(\s*<?\s*(imagens/[^)>\n]+?)\s*>?\s*\)',
    re.IGNORECASE,
)


def listar_imagens(pasta: Path) -> set[str]:
    if not pasta.is_dir():
        return set()
    return {
        p.name
        for p in pasta.iterdir()
        if p.is_file() and p.suffix.lower() in IMG_EXT
    }


def _normalizar(caminho: str) -> str:
    # remove %20, anchors e querystring; tira "imagens/"
    nome = caminho.split("/", 1)[1]
    nome = nome.split("#", 1)[0].split("?", 1)[0]
    # decodifica %20 e similares
    try:
        from urllib.parse import unquote
        nome = unquote(nome)
    except Exception:
        pass
    return nome.strip()


def extrair_refs(index_md: Path) -> set[str]:
    if not index_md.is_file():
        return set()
    texto = index_md.read_text(encoding="utf-8", errors="replace")
    refs: set[str] = set()
    for m in RE_HTML.finditer(texto):
        refs.add(_normalizar(m.group(2)))
    for m in RE_MD.finditer(texto):
        refs.add(_normalizar(m.group(1)))
    return refs


def main() -> int:
    if not MANUAIS_DIR.is_dir():
        print(f"ERRO: pasta nao encontrada: {MANUAIS_DIR}")
        return 2

    manuais = sorted(
        d for d in MANUAIS_DIR.iterdir()
        if d.is_dir() and d.name not in IGNORADOS
    )

    total_quebrados = 0
    total_orfaos = 0
    total_padrao_faltando = 0
    relatorio_padrao: list[tuple[str, list[str], list[str]]] = []

    print("=" * 78)
    print("VARREDURA DE IMAGENS DOS MANUAIS")
    print("=" * 78)

    for manual in manuais:
        index_md = manual / "index.md"
        pasta_img = manual / "imagens"

        if not index_md.is_file():
            print(f"\n[!] {manual.name}: nao tem index.md - pulando")
            continue

        imagens_existentes = listar_imagens(pasta_img)
        refs = extrair_refs(index_md)

        quebrados = sorted(refs - imagens_existentes)
        orfaos = sorted(imagens_existentes - refs)

        # Detecta diferencas de caixa que passariam batido no Windows mas
        # quebrariam no Linux (Jekyll/GitHub Pages).
        lower_disco = {n.lower(): n for n in imagens_existentes}
        case_mismatch: list[tuple[str, str]] = []
        for r in refs:
            if r in imagens_existentes:
                continue
            real = lower_disco.get(r.lower())
            if real and real != r:
                case_mismatch.append((r, real))

        # Verifica especificamente as imagens padrao
        padrao_ausente_arquivo = [
            n for n in PADRAO_ESPERADO if n not in imagens_existentes
        ]
        padrao_ausente_ref = [
            n for n in PADRAO_ESPERADO
            if n in imagens_existentes and n not in refs
        ]

        status = "OK" if not (quebrados or padrao_ausente_arquivo) else "PROBLEMA"
        print(f"\n--- {manual.name} [{status}]")
        print(f"    imagens em disco : {len(imagens_existentes)}")
        print(f"    referencias no md: {len(refs)}")

        if quebrados:
            total_quebrados += len(quebrados)
            print(f"    [QUEBRADO] referenciados mas nao existem ({len(quebrados)}):")
            for n in quebrados:
                print(f"        - {n}")

        if orfaos:
            total_orfaos += len(orfaos)
            # Apenas listar, sem quebrar - pode ser intencional
            print(f"    [ORFAO] em disco mas sem referencia ({len(orfaos)}):")
            for n in orfaos:
                print(f"        - {n}")

        if case_mismatch:
            print(f"    [CAIXA] referencia x disco diferem na caixa ({len(case_mismatch)}):")
            for ref, real in case_mismatch:
                print(f"        - ref: {ref}")
                print(f"          fs : {real}")

        if padrao_ausente_arquivo or padrao_ausente_ref:
            total_padrao_faltando += (
                len(padrao_ausente_arquivo) + len(padrao_ausente_ref)
            )
            relatorio_padrao.append(
                (manual.name, padrao_ausente_arquivo, padrao_ausente_ref)
            )

    print("\n" + "=" * 78)
    print("RELATORIO DAS 5 IMAGENS PADRAO (Acesso e Autenticacao)")
    print("=" * 78)
    if not relatorio_padrao:
        print("Todos os manuais possuem as 5 imagens padrao e as referenciam.")
    else:
        for nome, falta_arq, falta_ref in relatorio_padrao:
            print(f"\n>>> {nome}")
            if falta_arq:
                print(f"    arquivo ausente em imagens/:")
                for n in falta_arq:
                    print(f"        - {n}")
            if falta_ref:
                print(f"    arquivo existe mas nao e referenciado no index.md:")
                for n in falta_ref:
                    print(f"        - {n}")

    print("\n" + "=" * 78)
    print("RESUMO")
    print("=" * 78)
    print(f"Manuais analisados   : {len(manuais)}")
    print(f"Refs quebradas       : {total_quebrados}")
    print(f"Imagens orfas        : {total_orfaos}")
    print(f"Falhas no padrao 01-05: {total_padrao_faltando}")

    return 0 if total_quebrados == 0 and total_padrao_faltando == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
