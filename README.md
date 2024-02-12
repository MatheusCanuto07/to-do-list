### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js e npm: [Download aqui](https://nodejs.org/)
- .NET Core SDK 8.0: [Download aqui](https://dotnet.microsoft.com/download)
- MySQL e MYSQL Workbench: [Download aqui](https://dev.mysql.com/downloads/)

### Passos para Inicializar o Projeto

#### 1. Clone o repositório

Abra um terminal e clone o repositório do seu projeto:

```bash
git clone https://github.com/MatheusCanuto07/to-do-list.git
cd [seucaminho]/to-do-list
```

#### 2. Configuração do Projeto ASP.NET Core

- Abra o terminal na pasta do projeto da API.

```bash
cd [seucaminho]/ToDoListApi
```

- Instale as dependências do NuGet e configure a string de conexão:

```bash
dotnet restore
```

- No aquivo ConnectionContext.cs dentro da pasta Infraestrutura, modifique a string de conexão com base na sua conexão MySql

```bash
  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
      string stringConexao = "Server=localhost;Port=3306;Database=db_todolist;User Id=root;Password=DtiDigital@2024;";
  
      optionsBuilder.UseMySql(connectionString: stringConexao, serverVersion: ServerVersion.AutoDetect(stringConexao));
  } 
```

- No banco de dados rode o SQL abaixo para a criação do banco e tabela:

```bash
CREATE DATABASE db_todolist;
USE db_todolist;

CREATE TABLE Tasks (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255),
    DataCriacao DATETIME(6)
);

SELECT * FROM Tasks;
```

- Inicie a API:

```bash
dotnet run
```

A API estará acessível em `https://localhost:7281`.

#### 3. Configuração do Projeto React

- Abra outro terminal e vá para a pasta do projeto React:

```bash
cd [seucaminho]/to-do-list
```

- Instale as dependências do npm:

```bash
npm install
```

#### 4. Inicie o Projeto React

- Inicie o aplicativo React:

```bash
npm start
```

O aplicativo React estará acessível em `http://localhost:3000`.
