import React from 'react';
import ReactDOM from 'react-dom';
import Header from  './Header';
import Body from  './Body';
import ToolBar from  './ToolBar';
ReactDOM.render(
  <div>
    <Header />
    <ToolBar />
    <Body />
  </div>, 
  document.getElementById('container')
);
