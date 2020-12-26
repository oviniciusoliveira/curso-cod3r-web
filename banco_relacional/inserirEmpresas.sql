ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 73794651000174),
    ('Vale', 64864963000116),
    ('Cielo', 37655522000131);

-- DESCRIBE ?
DESC empresas;
DESC prefeitos;
SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 6, 1),
    (1, 2, 0),
    (2, 6, 0),
    (2, 2, 1);