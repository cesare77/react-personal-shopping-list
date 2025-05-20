# React Personal Shopping List
React Application build with Vite that explore the _React state management_ using _Context_ and _Hooks_.

## Git commands mostly used

- `git remote add origin <repository url>` to sync project to remote
- `git push --force -u -origin master` to push to remote
- `git add .` to add changes to commit
- `git commit -m "message"` to do commit with message
- `git push -u origin master` to push changes to origin
- `git log --oneline` to view commit logs
- `git status` to view current git status

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Starting project setup and scaffolding + basic structure

`npm create vite@latest [project-name]` to create a React project using Vite, then follow the prompts. After project creation go to project folder and run these commands: `npm install` and `npm run dev` to try application.

## Setup Json server
We'll follow instruction in this page to create a fake server https://my-json-server.typicode.com/:
1. Create a repository on GitHub (<your-username>/<your-repo>)
2. Create a db.json file
3. Visit https://my-json-server.typicode.com/<your-username>/<your-repo> to access your server

No registration. Nothing to install.

We can also install [JSON Server|https://github.com/typicode/json-server] in Local environment and it is my choice.

`npm install json-server` to install Json Server and then create a file db.json and pass it to Json Sever Cli with this command
`npx json-server db.json` or `json-server --watch db.json`, run json-server --help for a list of options.

## State management
_React Context API_ is a very important part of React, with Context we can share state across multiple components even when you are not specifically passing  them as Props from a parent component.

We'll do it with _createContext_ method that creates a Context Object that consists of two React components called _Provider_ and _Consumer_.
Provider is where the initial value of the context is placed and this/these value/s can be accessed by components that areare the Consumer(s).

We'll create a _ContextProvider_ component and wrap all the routes inside that provider, in this way, using _children_ prop of the provider, all of the components that will be wrapped inside that Context Component can retrieve the data for the value from a _Consumer_.

We now retrieve data using _useContext_ Hook by passing the _ListsContext_ provider that we have created.

> Relative commit: Introduce the data retrieving feature made with Context API.

We'll create another Context in the same manner as above and we'll explore the _Nesting Context_ case.
Nesting Context is not ideal because we'll retrieve more data then we need.

> Relative commit: Create and use Context and Nesting Context in the routes.

> [!NOTE]
> Note ...