# Gerenciador de Usuários e Tarefas
API RESTful desenvolvida em **Node.js** com **TypeScript** e **Prisma ORM**, conectada a um banco de dados **PostgreSQL**.  
Permite o gerenciamento de usuários e tarefas, incluindo autenticação, criação, listagem e atualização de status.

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Joi (validações)
- Dotenv

---

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Matheuspgonsalves/user_tasks_and_tasks_manager.git
   cd user_tasks_and_tasks_manager
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie o arquivo .env**
   ```bash
   cp .env.example .env
   ```

---

## 💾 Banco de Dados

Este projeto utiliza **PostgreSQL** como banco de dados principal.  
Antes de rodar a aplicação, certifique-se de que o banco está **instalado e em execução** na sua máquina.

1. **Crie o banco de dados**
   - Via terminal:
     ```bash
     createdb pg-tasks-manager
     ```
     ou utilize ferramentas gráficas como **pgAdmin** ou **DBeaver**.

2. **Atualize a variável de ambiente**
   - No arquivo `.env`, configure a variável de conexão com o banco:
     ```env
     DATABASE_URL="postgresql://postgres:SENHA@localhost:5432/pg-tasks-manager?schema=public"
     ```

3. **Empurre o schema para o banco**
   ```bash
   npx prisma db push
   ```

4. **Verifique o banco de dados**
   ```bash
   npx prisma studio
   ```

---

## ⚙️ Configure o Prisma

- Inicialize o Prisma (caso ainda não tenha o schema):
  ```bash
  npx prisma init
  ```

- Gere o cliente Prisma:
  ```bash
  npx prisma generate
  ```

- Crie as tabelas no banco:
  ```bash
  npx prisma db push
  ```

---

## ▶️ Execute o Servidor

- **Modo desenvolvimento:**
  ```bash
  npm run dev
  ```

- **Modo produção:**
  ```bash
  npm run build
  npm start
  ```

---

## 👨‍💻 Autor
**Matheus Pereira Gonsalves**  
Desenvolvedor Backend • Node.js | TypeScript | Prisma  
[🔗 LinkedIn](https://linkedin.com/in/matheuspgonsalves) • [💻 GitHub](https://github.com/Matheuspgonsalves)