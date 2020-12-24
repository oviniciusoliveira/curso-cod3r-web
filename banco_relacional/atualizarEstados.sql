UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

SELECT nome
FROM estados
WHERE sigla = 'MA'

SELECT  estados.nome AS nome, 
        estados.sigla AS sigla 
FROM estados
WHERE sigla = 'MA'

SELECT est.nome AS nome,
       est.sigla AS sigla
FROM estados est
WHERE sigla = 'MA'

UPDATE estados
SET nome = "Paraná",
    populacao = 11.32
WHERE sigla = 'PR'

SELECT
    nome,           
    sigla,
    populacao
FROM estados
WHERE sigla = 'PR'