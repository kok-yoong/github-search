import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { tsExternalModuleReference } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('check keyword',()=>{
const query = "asp.net"
//expect



});