# Install node.js
## https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

## Install node more recent
nvm install node

## Install node chosing the version
nvm install node 8 

## Show all node versions
nvm ls

flinox@nb:~/Projects/github.com/flinox/node.js$ nvm ls
->      v12.2.0
default -> node (-> v12.2.0)

The -> indicates what version are using.

## To change version
nvm use 9

## Enter REPL mode do node
node
Welcome to Node.js v12.2.0.
Type ".help" for more information.
>

press CTRL + C two times to exit

## Show informations about node, v8 and another librarys
node -p "process.versions"

## REPL mode edition mode
.editor

## REPL mode to show all functions to use about GLOBAL object
TAB + TAB

