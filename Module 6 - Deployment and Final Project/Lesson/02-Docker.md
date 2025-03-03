# Docker

First, install Docker: https://www.docker.com/products/docker-desktop

Optional: Install the Docker VSCode extenstion

## How can Docker help in development?

- The main point is consistent functionality.
- Standardization of applications is huge during the entirety of the dev lifecycle.
- Massively speeds up deployment.
- Allows for consistency across environments to allow for continuous deployment and testing.
- Segregation and Security. By having everything contained (literally) in it's own space it reduces cross contamination of any malicious code / security vulnerabilities that might exist on a non containerized application

## Step By Step Guide

I would highly recommend following this guide: https://docs.docker.com/language/nodejs/containerize

This is the TL:DR from that guide:

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Run `docker init` in the terminal. This will create some files for you, you just need to give it some information so that it can configure those files. You can also manually set those files up yourself, but it's easier with `docker init`.
6. Build and start the containers using `docker compose up --build -d`. The -d is for running it in the background and is optional.
7. (optional) If you have errors while running this, try running `docker-compose down`, then `docker-compose up -d`.
8. Check the status of your containers using `docker-compose ps`. This will show you if the containers are running properly.
9. Open a web browser and navigate to `http://localhost:3000`. This should load your frontend application if it's set up correctly.
10. Test the backend. You can use tools like Postman or CURL to make requests to `http://localhost:8080` (or whatever port your server is running on) and verify the responses.

## More Advanced Development with Docker

There are plenty more options and a ton of great resources on the docs for docker. I would recommend taking a look at their docs to see what all you can do.
