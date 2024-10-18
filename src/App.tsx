import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import StyleComponent from './component/StyleComponentWithoutMui';
import StyleComponentWithMuiComponent from './component/StyleComponentWithMuiComponent';

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* //this is for style function  */}
      {/* //in this component we crate custom comp but all is html tags */}
      {/* <StyleComponent /> */}

      {/* //in this component we are creating custom comp but all are mui comp */}
      <StyleComponentWithMuiComponent />
    </div>
  );
}

export default App;
