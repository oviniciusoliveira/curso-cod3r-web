SELECT
    regiao AS 'Regiao',
    sum(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total desc

SELECT
    sum(populacao) AS Total
FROM estados

SELECT avg(populacao) as MEDIA
FROM estados