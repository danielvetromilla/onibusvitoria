# Ônibus Cidade de Vitória

Dados estruturados dos ônibus da cidade de Vitória.

## Objetivo

Tornar o acesso fácil a informações sobre transporte público na cidade de Vitória. Coletar, organizar e corrigir informações sobre pontos de ônibus, linhas, itinerários, horários e etc.

Permitir a utilização dos dados para visualização de dados, criação de gráficos (via D3.js, Paper.js, Processing e etc), tabelas, animações, mashups e outras formas de exibir o conteúdo utilizando formatos padrões como [GeoJSON](http://geojson.org/) e [YAML](http://www.yaml.org/).

## Como contribuir

Você pode ajudar esse projeto corrigindo informações, informando bugs, criando documentação, divulgando, desenolvendo uma API, sugerindo novas ideias, entre outras mais. Alguns exemplos:

- Adicionar tabelas de horário
- Mapear os trajetos das linhas
- Corrigir erros de digitação
- Atualizar informações gerais
- Desenvolver uma API externa para consulta
- Criar um website para referência e documentação

## Arquivos

- [stops.geojson](data/stops.geojson) - localização dos pontos de ônibus da cidade.
- [streets.json](data/streets.json) - logradouros e linhas disponíveis em cada uma delas
- [lines.json](data/lines.json) - informações sobre as linhas, viagens de ida/volta e as ruas (itinerário) de cada uma
- [final_stops.json](data/final_stops.json) - lista das linhas de ônibus com destino no mesmo ponto final

## Fontes

- [Ponto Vitória](http://rast.vitoria.es.gov.br/pontovitoria/)
- [Itinerários e horários de ônibus municipais](http://sistemas.vitoria.es.gov.br/redeiti/)
