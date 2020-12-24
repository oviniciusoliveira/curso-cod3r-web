SELECT
    *
FROM
    estados
SELECT
    sigla as 'Sigla',
    nome as 'Nome do Estado'
FROM
    estados
WHERE
    regiao = 'Sul'
SELECT
    nome,
    regiao,
    populacao
FROM
    ESTADOS
WHERE
    populacao >= 10
ORDER BY populacao DESC