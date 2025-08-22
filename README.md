# node-express-api-boilerplate

Welcome to the node-express-api-boilerplate! This README will help you set up the database, run the development server, and understand the available REST API endpoints.

---

- [node-express-api-boilerplate](#node-express-api-boilerplate)
  - [Setup](#setup)
    - [Recommended Node Version](#recommended-node-version)
    - [1. Start PostgreSQL Database](#1-start-postgresql-database)
      - [Option 1: Manual Docker Run](#option-1-manual-docker-run)
      - [Option 2: Docker Compose](#option-2-docker-compose)
    - [2. Start Development Server](#2-start-development-server)
    - [3. Run Tests](#3-run-tests)
  - [API Endpoints](#api-endpoints)
    - [1. Health Check](#1-health-check)
    - [2. Users](#2-users)
      - [Create a User](#create-a-user)
      - [Get All Users](#get-all-users)
      - [Get User by ID](#get-user-by-id)

## Setup

### Recommended Node Version

Ensure you have **Node.js version 20 or higher** installed on your system. You can verify your current Node.js version by running:

```bash
node -v
```

If you need to update or install Node.js, visit the [official Node.js downloads page](https://nodejs.org/) or use a version manager like [nvm](https://github.com/nvm-sh/nvm) for easier management.

### 1. Start PostgreSQL Database

#### Option 1: Manual Docker Run

```bash
sudo docker run \
    --name pg15 \
    -p 5432:5432 \
    -d \
    --rm \
    -e POSTGRES_PASSWORD=postgres \
    -v ~/PostgresData/15:/var/lib/postgresql/data \
    -v ~/Downloads:/tmp/Downloads \
    postgres:15
```

#### Option 2: Docker Compose

From the project root:

```bash
sudo docker compose up -d
```

### 2. Start Development Server

```bash
yarn install
```

```bash
yarn dev
```

**Example Message on Start up:**

```json
Server running on http://localhost:3000
Database connection established successfully 🚀
Models synced successfully ✅
```

### 3. Run Tests

```bash
yarn test
```

---

## API Endpoints

Below is a summary of the available REST API endpoints, including example requests and responses.

### 1. Health Check

- **GET** `/health`

**Request:**

```bash
curl -X GET http://localhost:3000/health
```

**Response:**

```json
{
  "status": "ok"
}
```

---

### 2. Users

#### Create a User

- **POST** `/users`

**Request:**

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Andrew",
    "email": "andrew@example.com"
  }'
```

**Response:**

```json
{
  "id": 1,
  "name": "Andrew",
  "email": "andrew@example.com",
  "createdAt": "2025-08-16T20:00:00.000Z",
  "updatedAt": "2025-08-16T20:00:00.000Z"
}
```

#### Get All Users

- **GET** `/users`

**Request:**

```bash
curl -X GET http://localhost:3000/users
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Andrew",
    "email": "andrew@example.com",
    "createdAt": "2025-08-16T20:00:00.000Z",
    "updatedAt": "2025-08-16T20:00:00.000Z"
  }
]
```

#### Get User by ID

- **GET** `/users/:id`

**Request:**

```bash
curl -X GET http://localhost:3000/users/1
```

**Response:**

```json
{
  "id": 1,
  "name": "Andrew",
  "email": "andrew@example.com",
  "createdAt": "2025-08-16T20:00:00.000Z",
  "updatedAt": "2025-08-16T20:00:00.000Z"
}
```

---
