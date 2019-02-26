import * as React from 'react';

// styles
import { ExampleContent } from './styles';

interface IPage {
  color: string;
}

class App extends React.Component<IPage, {}> {
  public render() {
    return (
      <ExampleContent>
        <h1>Welcome to React with Typescript</h1>
        <p>props color is: {this.props.color}</p>
      </ExampleContent>
    );
  }
}

export default App;
