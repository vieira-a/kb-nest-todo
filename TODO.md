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

  **Exceptions**

  - [x] Return 401 if token is not provided
  - [x] Return 500 if throws an error

  **Success**

  - [ ] The AddTask usecase receives a user token, extract the userId and generate new task
  - [ ] Get user account by id
  - [ ] Insert userId on the task creation
  