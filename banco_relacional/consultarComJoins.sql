<<<<<<< HEAD
SELECT * FROM prefeitos;
SELECT * FROM cidades;


SELECT * FROM cidades c JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c RIGHT OUTER JOIN prefeitos p ON c.id = p.cidade_id;

-- Não suportado
-- SELECT * FROM cidades c FULL JOIN prefeitos p on c.id = p.cidade_id;

-- Alternativa
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id
-- Union All traz as duplicações
-- Union All
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;