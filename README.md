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

## Optimize the Use of Context Mutating it with Hooks

We'll get data conditionally from the Context, we'll create a function that is added to the value of Context and can be invoked from any of the coponents that are nested in this Context.
In this way we''ll efficiently load only the data that we need.

We'll create that implementing and using life cycles in functional components.

> Relative commit: optimize Nested Context data fetching.

## Advanced state management with useReducer
Another way to add data to the _Provider_ is by using a pattern similar to _Flux_ which is introduced by Facebook.
We'll implement a central place where data is stored and this data can be read by the view and to do it we''ll use the _useReducer_ Hook that can be used to return data not from a locale state but from any data variable.
_useReducer_ will take an initial state and a function that determines which data should be returned.

> Todo: resolve this Eslint -> Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.eslint(react-refresh/only-export-components).

All of the data in your application is now being loaded using the _Providers_, which means it's now detached from the views. Also, the _useDataFetching_ Hook is completely removed, making your application structure more readable.
Not only can you use the context API with this pattern (Flux) to make data available to many components, but you can also mutate the data.

> Relative commit: Advanced state management with useReducer + Flux Pattern.

## Mutating data in the Provider
_Flux_ Pattern cam be used not only to retrieve data but also to mutate data.
The behaviour remain the same, we _dispatch_ an action that would trigger the request to the server and, based on the outcome, the _reducer_ will utate the data with this result.

Now we implement the operation to add item by updating the Provider for _items_.
The current implementation only mutate data in the Provider and it's not modufy the data (items) in the json server.

> Todo Extra: Find and Implement the operation to mutate data also in json-server file db.json.

> Todo Extra: Implement all _CRUD_ Operations for the application.

> Relative commit: Mutating data in the Provider.

## Create an application Context
Now we have more Providers and Consumers in the application we have for example _ListsContextProvider_ and _ItemsContextProvider_ that wrap all the application _routes_.
We want to create an Application Context in similar way like some state management packages like _Redux_.
We'll use the _useContext_ Hook as a _Consumer_ to retrieve values from the _Provider_ of the _Context_ that was passed to it that is _ListsContextProvider_ and _ItemsContextProvider_.

> Relative commit: Create an application Context.

## Splitting code with React Suspense
_Suspense_ is a React feature that can be used to split code that is to split the compiled code (bundle) into smaller chunks.
In this way we can prevent the browser from downloading the entire bundle with our compiled code at once, instead we can load bundle in chunks depending on the components that are rendered by the browser.

Suspense must be used together with the lazy method, which involves using JavaScript dynamic imports to load the component only when requested.

In the _App.jsx_ we use _lazy_ method to import components for our pages and in the return statement we wrap _AppContext_ with _Suspense_ that must be used with a fallback that will be displayed when the dyamically inported components are being loaded.

In the end we use _vite-plugin-webpackchunkname_ to add this _Webpack_ feature in vite for chunk naming.
More on that at: https://www.npmjs.com/package/vite-plugin-webpackchunkname

`npm install --save-dev vite-plugin-webpackchunkname` to install.

> Relative commit: Splitting code with React Suspense.

Further read at:
- https://react.dev/learn/managing-state
- https://react.dev/reference/react/useContext
- https://react.dev/reference/react/Suspense


> [!NOTE]
> Note ...