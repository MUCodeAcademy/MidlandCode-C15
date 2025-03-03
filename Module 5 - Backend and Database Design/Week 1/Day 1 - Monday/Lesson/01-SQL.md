# Databases

A database is essentially just a place where you store data. For instance, if you needed to store usernames, passwords, or any other information that needs to persist between the user's , you would use a database.

## Different Types of Database Languages

- SQL (or relational) Databases:
  - Tabular data
  - Everything is interconnected (or can be).
  - Doesn't allow for easy changing of Schema, but easy to follow when the schema is well built.
  - Simple to use data queries that follow mostly semantic key words.
- NoSQL Databases:
  - With node, one of the biggest ones is MongoDB.
  - Allows for you to have a ton of flexibility in how you set up your Schema, OR how you change your schema depending on user/info given
  - Information can be stored as column-oriented, document-oriented, many others.
  - Has easy horizontal scalability, meaning that you can grow faster in some cases.

## How To SQL

- Depending on what you want to do, you start your `query` with one of several keywords:
  - Select
  - Insert
  - Update
  - Create Table
  - Alter Table
  - Drop Table
- From there you can easily define what you're going to access by table, column name, or conditional options.
- Conditional Keywords:
  - NOT NULL
  - WHERE
  - IN (x,y,z,...)
  - HAVING
  - LIKE (%hi%)
- Join Tables using type Join keyword and the type of Join you want:

![Join Table](https://i.stack.imgur.com/UI25E.jpg)
