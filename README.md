# React Personal Shopping List
React Application build with Vite.

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

## Starting project setup

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



> [!NOTE]
> Note ...