# Project P

Notes on steroids

## Pages

- [RESTful API](docs/API.md)
- [Screens](docs/Screens.md)

## Dimensions

- user: email, password, image

User has inbox with all new activities in his projects

- project: description, participants

Project has dashboard where you can:
- set description
- add participants
- see activities as list
- see activities by user as report 
  - notes created
  - questions created
  - tasks created
  - replies
  - task done
  - questions answered

- note: type, description (first line is title), creator, time of creation, attachments, assignee

Types of notes:
- note
- task: has status: done/undone
- question: has status: answered by reply

All type of notes (n, t, q) supports replies, attachments (files), tags (labels)
Notes can be groupped by tags
Notes can be converted (copied) to another type of note

## Features

User can:
- create quick note
- drag and drop between tags
- reply
- add attachments
- set status of tasks as done
- set status of questions as answered
- assign note to participant (from project participants)

## Architecture
- DB: MongoDB
- Front: AngularJS
- Back: ExpressJS
- Communication back-front - RESTful API
- Communication front-front - angular dispetcher

- TBD - Communication back-gront WebSocket

