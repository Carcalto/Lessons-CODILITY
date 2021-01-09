import requests
import zipfile
import os
import collections
from bs4 import BeautifulSoup
import sys

STORAGE_PATH = "/tmp/mega"
FILENAME = "resultados.zip"
FILE_PATH = os.path.join(STORAGE_PATH, FILENAME)
INSIDE_FILENAME = "d_megasc.htm"
URL = "http://www1.caixa.gov.br/loterias/_arquivos/loterias/D_mgsasc.zip"

if not os.path.isdir(STORAGE_PATH):
    try:
        os.makedirs(STORAGE_PATH)
    except OSError, e:
        print "ERRO: Nao foi possi­vel criar o diretorio '%s'.\nVerifique!"
        sys.exit()

print "- Baixano o arquivo de resultados..."

f = requests.get(URL)

with open(FILE_PATH, "wb") as myzip:
    myzip.write(f.content)
    myzip.close()

print "- Pronto! Extraindo..."

if zipfile.is_zipfile(FILE_PATH):
    zip = zipfile.ZipFile(FILE_PATH)
    zip.extract(INSIDE_FILENAME)

print "- Abrindo arquivo para buscar os resultados..."

html = open(INSIDE_FILENAME).read()
soup = BeautifulSoup(html)

tds = lambda node: [ x.text for x in node if x not in ('\n', ' ')]
nros = [ tds(x)[2:8] for x in soup.body.table.contents[2:] if x not in ('\n', ' ')]

print "- Verificando os numeros mais utilizados..."

usados = dict([ (x,0) for x in range(1,61)])
for sorteio in nros:
    for nro in sorteio:
        usados[ int(nro) ] += 1

usados_ordenados = collections.OrderedDict([ (y,usados[y]) for y in sorted(usados, key=usados.get, reverse=True) ])

print "Os nros que mais foram sorteados na MEGASENA:"
for k in usados_ordenados.keys():
    print "%02d" % k, ":", usados_ordenados[k], "vezes"