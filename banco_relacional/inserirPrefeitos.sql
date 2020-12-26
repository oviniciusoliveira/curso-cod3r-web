SELECT * FROM cidades

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 4),
    ('Zenaldo Coutinho', NULL);

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES 
    ('Rafael Greca', NULL)

-- cidade_id é chave unica / nao sera possivel adicionar um novo prefeito
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 4)

SELECT * FROM prefeitos