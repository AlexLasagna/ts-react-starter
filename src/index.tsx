import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App color="Blue" />,
  document.getElementById('root') as HTMLElement
);

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept();
}