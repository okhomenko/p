# RESTful API

## Projects

`/projects`

- GET - list of projects
- GET /:id - project
- POST - create project (description)
- PUT /:id - update project (description)
- DELETE /:id - remove project

## Users

`/users`

- GET - list of users
- GET /:id - user
- POST - create user (email, password)
- PUT - update user (password, image)

### by Project

`/projects/:projectId/users`

- GET - list of users in project
- POST /:id - add user to project
- DELETE /:id - remove user from project

### Inbox

`/users/:id/inbox` - only GET




