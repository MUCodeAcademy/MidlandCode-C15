## Check if git is installed

- git -v

## Add your email and username to VSCode

- git config --global user.name "Your username"
- git config --global user.email "email@email.com"

## Cloning a Repository

- git clone URL
- cd repositoryName
- Open the folder up in a new Visual Studio window

## Adding Local Files to Existing GitHub Repository

- git init -b main
- git add .
- git commit -m "commit message"
- git remote add origin URL
- git push origin main

## Pushing Changes from Local to Remote

- git add .
- git commit -m "commit message"
- git push remote_repository_name branch_name

## Getting Updates from Remote Repository

- git fetch remote_repository_name
- git merge remote_repository_name

    OR

- git pull remote_repository_name

## Removing a Remote Repository

- git remote rm remote_repository_name

## Open the terminal
- CTRL and pressing backtick (the button to the left of the 1 key on the top row, looks like this: ` )