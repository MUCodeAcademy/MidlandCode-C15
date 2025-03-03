# Desktop Tools for SQL and PostGres

Being able to write queries is important but how do you write those queries when you need to connect to a database remotely? That's where desktop tools come into play. There are different tools depending on what SQL language you are using (MySQL, PostGres, etc.) and how much control you want over your database. We'll be looking at a couple different options you can use ranging from the most simplistic to ones that give you the most control. We'll also look at how to set up a local database for testing purposes. The resources below are not the only ones available they are simply some of the ones we will be using in this course.

## MAMP

[MAMP](https://www.mamp.info/en/downloads/) allows you to create a simple MySQL server locally and interact with it via PhPMyAdmin. This is the most simplistic of tools but allows you to get an introduction to the world of database management. The fact that it allows for you to set up a local database quickly without much configuration needed allows you to test things out without having to learn a complex program. The lack of complexity however does mean that you can't do more complex actions without extra steps involved. While we are going to be using it to create actual databases locally, we'll be connecting to them with MySQL work bench

## MySQL Workbench

[MySQL Workbench](https://dev.mysql.com/downloads/workbench/) is built by Oracle to be used with MySQL. It is a much more robust tool and allows you to customize tables and set up new tables in databases both remote and locally. The tool provides you with as much access as your permissions allow.

## PGAdmin

[PGAdmin](https://www.pgadmin.org/) is an open source technology that allows you to connect and setup tables and rows/columns in a PostGres database. Much like MySQL workbench it allows you as much control as your permissions allow.
