# React Context API

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.

## Props drilling:

Props drilling is when a higher component owns a piece of data that a lower component needs, you will need to pass props down to components for the sole purpose of passing it down to the child component that needs it.

Lets take a look at this example:

```jsx
// App.js

class App extends Component {
  state = {
    theme: "dark",
  };

  render() {
    return <Toolbar theme={this.state.theme} />;
  }
}

const Toolbar = ({ theme }) => (
  <div className="toolbar">
    <Submenu theme={theme} />
  </div>
);

const Submenu = ({ theme }) => (
  <ul className="toolbar-submenu">
    <li>
      <Button theme={theme} text="button1" />
    </li>
    <li>
      <Button theme={theme} text="button2" />
    </li>
  </ul>
);

const Button = ({ theme, text }) => (
  <button style={{ backgroundColor: theme === "dark" ? "black" : "blue" }}>
    {text}
  </button>
);

export default App;
```

We had to pass down props through multiple levels until it got to the button which decided how the button will look, what if we needed that in another component that's not the toolbar?

Imagine other buttons in the app.

That's when Props drilling becomes a problem, code becomes messy, a lot of redundant code.

## How can we solve this problem?

React provides us with the Context API.

Context in English means "a frame that surrounds the event and provides resources for its appropriate interpretation".

In React terms, It's the information that the component needs to decide some decisions on it's behaviour and appearance.

## What's Context in React?

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### OK I think i got it... show me code!

But first we will go over the API:

### 1. React.createContext

```jsx
const MyContext = React.createContext(defaultValue);

export default MyContext;
```

Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

### 2. Context.Provider

Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

```jsx
import MyContext from "./MyContext";
const App = () => (
  <MyContext.Provider value={/* some value */}>
    {/* React children (components) that can subscribe and see the value passed above */}
  </MyContext.Provider>
);
```

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

### 3. Context.Consumer

```jsx
import MyContext from "./MyContext";

const Button = () => (
  <MyContext.Consumer>
    {(value) => <button /* render something based on the context value */ />}
  </MyContext.Consumer>
);
```

A React component that subscribes to context changes. This lets you subscribe to a context within a function component.

Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

### 4. Class.contextType

```jsx
import MyContext from "./MyContext";

class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* perform a side-effect at mount using the value of MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* render something based on the value of MyContext */
  }
}

MyClass.contextType = MyContext;
```

The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.

## Example

Lets see how we can do the previous example with Context instead of props drilling:

```jsx
// ThemeContext.js
import { createContext } from "react";

const ThemeContext = createContext({ theme: "light" });

export default ThemeContext;
```

```jsx
// App.js
import React from "react";
import ThemeContext from "./ThemeContext";

class App extends Component {
  state = {
    theme: "dark",
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme }}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

const Submenu = ({ theme }) => (
  <ul className="toolbar-submenu">
    <li>
      <Button text="button1" />
    </li>
    <li>
      <Button text="button2" />
    </li>
  </ul>
);

const Toolbar = () => (
  <div className="toolbar">
    <Submenu />
  </div>
);

const Button = ({ text }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <button style={{ backgroundColor: theme === "dark" ? "black" : "blue" }}>
        {text}
      </button>
    )}
  </ThemeContext.Consumer>
);

export default App;
```

Go back to the initial props drilling example and compare the code.

## Exercise

Enough talking, lets do an exercise.

1. clone this repo
2. `npm i && npm start`

### Task

Open the repo in your editor, you will find a react app that has a lot of components, take your time reading the code.

You will notice that it applies props drilling extensively.

Try the app, you will find weird behaviour, I didn't know how to fix the bugs, can you help me here?

Once you finish and its working as intended, **refactor the code to use Context**.

## Last 10 mins:

Casual talking about When to use context, When not to use context.

Everything here was taken from https://reactjs.org/docs/context.html
