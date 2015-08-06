# JSON Web Token Authentication Server
This repository will container a simple authentication server to do these kind of actions for users: register, activate, forgot password and authenticate.

## Why do I need this?
The main point for this project is to have an API gateway, which will authenticate users and redirect them where they need to be (if allowed ofcourse). Authentication is used based on JSON Web Tokens. I will soon update this README with some more information.

## Quick install
Rename `sample.config.js` to `config.js` and supply your own values. secret and salt could be empty for testing purposes. You DO need to supply a data uri string. I included a little example in the sample config file. After that, run a quick `npm install` on your clone of this repository and then use `node server.js` to get yourself going. I use a very handy tool called: nodemon. This tool will restart your server when something changes in your code. It can be easily install by typing: `npm install nodemon -g` then a simple `nodemon server.js` will be enough.

## Please note
This is a work in progress. Once a user is registered, they will see a message that an activation e-mail has been send to them. This is not true as I did not implement e-mail functionality in this project (help will be welcome though).
