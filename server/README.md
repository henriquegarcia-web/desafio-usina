# Desafio Biblioteca de Filmes - SERVIDOR

## Configaração do banco de dados

Para rodar o projeto, você precisa configurar o banco de dados PostgreSQL. Caso esteja usando Docker, o banco de dados será configurado automaticamente. Caso contrário, execute os comandos abaixo no seu banco de dados PostgreSQL:

```sql
   -- Criação da tabela de usuários
   CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Criação da tabela de gêneros para armazenar os gêneros de filmes
   CREATE TABLE IF NOT EXISTS genres (
      genre_id SERIAL PRIMARY KEY,
      name VARCHAR(100) UNIQUE NOT NULL
   );

   -- Inserção de gêneros iniciais na tabela genres
   INSERT INTO genres (name) VALUES
      ('Ação'),
      ('Drama'),
      ('Comédia'),
      ('Terror'),
      ('Ficção Científica')
   ON CONFLICT DO NOTHING;

   -- Criação da tabela de filmes
   CREATE TABLE IF NOT EXISTS movies (
      movie_id SERIAL PRIMARY KEY,
      user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      genre VARCHAR(100) NOT NULL REFERENCES genres(name),
      year INT CHECK (year >= 1888) NOT NULL,
      duration INT CHECK (duration > 0) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Criação da tabela de avaliações
   CREATE TABLE IF NOT EXISTS ratings (
      rating_id SERIAL PRIMARY KEY,
      user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
      movie_id INT NOT NULL REFERENCES movies(movie_id) ON DELETE CASCADE,
      rating INT CHECK (rating >= 1 AND rating <= 5) NOT NULL,
      review TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Índices para otimizar consultas
   CREATE INDEX IF NOT EXISTS idx_movies_user_id ON movies(user_id);
   CREATE INDEX IF NOT EXISTS idx_ratings_user_id ON ratings(user_id);
   CREATE INDEX IF NOT EXISTS idx_ratings_movie_id ON ratings(movie_id);
```

## Instalação e Uso

1. Para instalar as dependências do servidor (back-end), navegue até a pasta "server":

   > Na raiz do projeto: `cd server` e em seguida `npm install` ou `yarn`

2. Crie um arquivo .env na raiz da pasta 'server' com os dados:

   `DB_HOST=localhost` <br/>
   `DB_PORT=5432` <br/>
   `DB_NAME=nome_escolhido_da_db` <br/>
   `DB_USER=user_escolhido_da_db` <br/>
   `DB_PASSWORD=senha_escolhida_da_db` <br/>
   `JWT_SECRET=K9j@7Wj$ZkL8#f2qTq&2wVpP9rB3Fq@1eA$5nL8qQ4z!Y3hW9#JtZq6M!Gm@2E` <br/>
   `PORT=5000` <br/>

3. Inicie o servidor de desenvolvimento:

   > Dentro da pasta 'server': `npm run dev` ou `yarn dev`

4. Abra seu navegador da web:

   > Visite `http://localhost:5000` para visualizar o servidor.
