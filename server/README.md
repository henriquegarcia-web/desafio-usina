# Desafio Biblioteca de Filmes - SERVIDOR

## Instalação e Uso

1. Para instalar as dependências do servidor (back-end), navegue até a pasta "server":

   > Na raiz do projeto: `cd server` e em seguida `npm install` ou `yarn`

2. Inicie o servidor de desenvolvimento:

   > Dentro da pasta 'server': `npm run dev` ou `yarn dev`

3. Abra seu navegador da web:

   > Visite `http://localhost:5000` para visualizar o servidor.

   CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE
   );

CREATE TABLE movies (
id SERIAL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
title VARCHAR(255) NOT NULL,
genre VARCHAR(100) NOT NULL,
year INT CHECK (year >= 1888) NOT NULL,
duration INT CHECK (duration > 0) NOT NULL
);

CREATE TABLE ratings (
id SERIAL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
movie_id INT NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
rating INT CHECK (rating >= 1 AND rating <= 5) NOT NULL,
review TEXT
);

-- Índices
CREATE INDEX idx_movies_user_id ON movies(user_id);
CREATE INDEX idx_ratings_user_id ON ratings(user_id);
CREATE INDEX idx_ratings_movie_id ON ratings(movie_id);
