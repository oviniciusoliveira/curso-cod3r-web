SELECT e.nome AS Empresa, c.nome Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id and c.id = eu.cidade_id
and sede