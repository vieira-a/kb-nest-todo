# Under construction

## New features

### Authentication
  
  **Requeriments**

  - [x] Check if username exists

  **Exceptions**

  - [x] Return 401 if username not exists
  - [x] Return 401 to incorrect password
  - [x] Return 500 if throws an error

  **Success**

  - [x] Decode hashed password
  - [x] Compare the provided password with decoded hash
  - [x] Return 200 with token

### Authorization
  
  **Requeriments**
  
  - [x] Only signed user (with token) can create tasks
  - [x] Only signed user (with token) can delete your own task


  **Exceptions**

  - [x] Return 401 if token is not provided
  - [x] Return 500 if throws an error

  **Success**

  - [x] The AddTask usecase receives a user token, extract the userId and generate new task
  - [x] Get user account by id
  - [x] Insert userId on the task creation

### Other API routes

 - [x] Get tasks by user id
  