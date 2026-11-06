# Product Management API

A backend REST API for managing product data, built using native Node.js HTTP module and MySQL.

This project focuses on understanding backend fundamentals, modular architecture, HTTP request handling, database operations, and input validation without relying on backend frameworks such as Express.js.

## Features

- Create a new product
- Retrieve all products
- Retrieve a product by ID
- Update an existing product
- Delete a product
- Request body parsing
- Input validation
- Centralized error handling
- Modular backend architecture
- Parameterized SQL queries to prevent SQL injection

## Tech Stack

- **Node.js** — JavaScript runtime
- **Native HTTP Module** — HTTP server
- **MySQL** — Relational database
- **mysql2** — MySQL database driver
- **dotenv** — Environment variable management
- **ES Modules** — JavaScript module system

## Project Structure

```text
product-management-api/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── product.controller.js
│   │   ├── repositories/
│   │   │   └── product.repository.js
│   │   ├── routes/
│   │   │   └── product.routes.js
│   │   ├── services/
│   │   │   └── product.service.js
│   │   └── utils/
│   │       ├── catchAsync.js
│   │       ├── parseBody.js
│   │       ├── response.js
│   │       └── validator.js
│   ├── .env.example
│   ├── app.js
│   └── package.json
├── database/
│   ├── schema.sql
│   └── seed.sql
├── .gitignore
├── README.md
└── server.js
```

## Requirements

Make sure you have installed:

- Node.js
- MySQL Server
- Git

## Installation

### 1. Clone the repository

```bash
git https://github.com/Reychan-Abdillah/product-management-api.git
cd product-management-api
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` directory by copying `.env.example`.

```bash
cp .env.example .env
```

Configure the database credentials in `.env` according to your local MySQL setup.

### 4. Set up the database

Open MySQL Workbench and execute these files in order:

1. `database/schema.sql`
2. `database/seed.sql`

The first file creates the database structure, while the second inserts initial sample data.

### 5. Start the server

Return to the project root:

```bash
cd ..
node server.js
```

The API server will start on the port configured in the project.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |

## Database

The project uses MySQL to store product data.

The database schema and initial sample data are provided in the `database` directory.

## Environment Variables

Database credentials are configured through environment variables.

Refer to `.env.example` for the required configuration.

**Never commit your actual `.env` file or expose database credentials in a public repository.**

## License

This project is licensed under the ISC License.