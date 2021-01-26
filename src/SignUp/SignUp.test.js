import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';

it('renders SignUp component without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
