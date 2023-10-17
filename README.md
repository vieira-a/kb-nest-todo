<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Learning <a href="https://nestjs.com" target="_blank">Nest.js</a>, a progressive framework for building efficient and scalable server-side applications.</p>

## Wellcome to my project

This is a small project that contains the basic principles of the NestJS framework; a basic C.R.U.D. for a Task Manager (the famous TODO App). I hope you enjoy it!

### How to use

#### Requeriments

- Ensure that you have [Node.js](https://nodejs.org/en) installed on your system.
- Ensure that you have [Docker](https://www.docker.com) installed on you system.

**Steps**

**1 - Clone the repository**

```
git clone https://github.com/vieira-a/kb-nest-todo.git
```

**2 - Enter in the project folder**

```
cd kb-nest-todo
```

**Project structure**

```
src
├── app.module.ts
├── config
│   └── postgres.service.ts
├── db
│   ├── data-source.ts
│   └── migrations
├── main.ts
├── task
│   ├── dto
│   │   ├── add-task.dto.ts
│   │   ├── load-task.dto.ts
│   │   └── update-task.dto.ts
│   ├── entities
│   │   └── task.entity.ts
│   ├── task.controller.ts
│   ├── task.module.ts
│   └── task.service.ts
└── user
    ├── constants.ts
    ├── login
    │   ├── dto
    │   │   └── login.dto.ts
    │   ├── login.controller.ts
    │   ├── login.module.ts
    │   └── login.service.ts
    ├── signup
    │   ├── dto
    │   │   └── signup.dto.ts
    │   ├── entities
    │   │   └── signup.entity.ts
    │   ├── signup.controller.ts
    │   ├── signup.module.ts
    │   └── signup.service.ts
    └── utils
        ├── bcrypt-adapter.ts
        ├── check-user-account.ts
        └── index.ts
```
**3 - Install dependencies**
```
npm install
```
**4 - Create a .env file with following template**
```
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_ADMIN_EMAIL=
SECRET=
```
**5 - Create and execute the Postgres docker image**
*The docker-compose.yml file uses the .env references*
```
  docker compose up -d
```
**Start application**
```
npm run start
```
Server started at `http://localhost:3000`

Swagger at `http://localhost:3000/api`

Now, you can access the following endpoints:

> POST /task

*Create a new task*

**Model**
```
{
  "title": "Task title",
  "description": "Task description",
  "status": "open"
}
```
*Status model can be: * 'open', 'doing', 'done'*

> GET /task

*Load all tasks*

**Response**
```
{
  "message": "Tasks loaded successfully",
  "data": [
    {
      "id": "uuid-generated-id",
      "title": "Task title"
    }
  ]
}
```
> PUT /task/:id

*Update an existent task*

**Response**
```
{
  "message": "Tasks updated successfully",
}
```
> DELETE /task/:id

*Delete an existent task*

```
**Response**

{
  "message": "Tasks deleted successfully",
}
```

> GET /login

*Get JWT token*

**Response**
```
{
  "message": "Login successfully",
  "token": "jwt_token
}
```

**Release notes (on develop)**

- Implemented signup use case
- Create relationship between Task and User
- Implemented login use case with JWT token generation

Made by [Anderson Vieira](https://linkedin/in/vieira-a)
