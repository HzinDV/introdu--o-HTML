# Kiosque do Chef - Documentação da API

## Visão Geral

Bem-vindo à documentação da API do Kiosque do Chef. Esta API fornece endpoints para gerenciar informações de clientes para um quiosque culinário. As principais entidades são clientes, e você pode realizar operações como criar, recuperar, atualizar e excluir registros de clientes.

## APIs de Clientes

- **Criar Cliente:**
  - **URL:** `/clientes`
  - **Método:** `POST`
  - **Consumir:** `application/x-www-form-urlencoded` ou `application/json`
  - **Descrição:** Cria um novo registro de cliente.
  - **Parâmetros:**
    - `customer` (Corpo da Requisição): Objeto CustomerEntity com detalhes do cliente.
  - **Resposta:**
    - Status: `302 Found`
    - Localização: [https://hzindv.github.io/introdu--o-HTML/](https://hzindv.github.io/introdu--o-HTML/)

- **Recuperar Clientes:**
  - **URL:** `/clientes`
  - **Método:** `GET`
  - **Produzir:** `application/json`
  - **Descrição:** Recupera uma lista de todos os clientes.
  - **Resposta:**
    - Status: `200 OK`
    - Corpo: Lista de objetos CustomerEntity.

- **Atualizar Cliente:**
  - **URL:** `/clientes/{id}`
  - **Método:** `PUT`
  - **Consumir:** `application/x-www-form-urlencoded` ou `application/json`
  - **Produzir:** `application/json`
  - **Descrição:** Atualiza um registro existente de cliente.
  - **Parâmetros:**
    - `id` (Variável de Caminho): ID do cliente a ser atualizado.
    - `customer` (Corpo da Requisição): Objeto CustomerEntity com detalhes atualizados.
  - **Resposta:**
    - Status: `200 OK`
    - Corpo: Objeto CustomerEntity atualizado.

- **Excluir Cliente:**
  - **URL:** `/clientes/{id}`
  - **Método:** `DELETE`
  - **Descrição:** Exclui um registro de cliente.
  - **Parâmetros:**
    - `id` (Variável de Caminho): ID do cliente a ser excluído.
  - **Resposta:**
    - Status: `204 No Content`

## Entidade Cliente

### Atributos

- `id` (Long): Identificador único para o cliente.
- `name` (String): Nome do cliente.
- `email` (String): Endereço de e-mail do cliente.
- `gender` (GenderEnum): Gênero do cliente (MAN, WOMAN, OTHER).
- `birthdate` (LocalDate): Data de nascimento do cliente.
- `favoriteDrink` (String): Bebida favorita do cliente.
- `favoriteMusicType` (String): Tipo de música favorita do cliente.
- `phoneNumber` (String): Número de telefone do cliente.
- `promotions` (boolean): Indica se o cliente está inscrito em promoções.

## GenderEnum

### Valores Enumerados

- `MAN`
- `WOMAN`
- `OTHER`

## Configuração do Banco de Dados

A aplicação utiliza o PostgreSQL como banco de dados. A configuração pode ser encontrada no arquivo `application.properties`:

```properties
# Configuração do Banco de Dados
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=xxxxx
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
