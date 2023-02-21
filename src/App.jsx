import Todo from "./components/Todo";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
