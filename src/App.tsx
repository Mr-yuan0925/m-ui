import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <h2>Welcome to React</h2>
        <h3>Welcome to React</h3>
          <Button>按钮</Button>
          <Button size={ButtonSize.medium} >按钮</Button>
          <Button size={ButtonSize.large} btnType={ButtonType.Primary} >按钮</Button>
          <Button disabled size={ButtonSize.large} btnType={ButtonType.Danger} >禁止按钮</Button>
          <Button disabled size={ButtonSize.large} btnType={ButtonType.link} href={"https://www.baidu.com"} >禁止按钮</Button>
      <p>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
