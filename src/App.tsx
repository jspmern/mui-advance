import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import StyleComponent from './component/StyleComponentWithoutMui';
import StyleComponentWithMuiComponent from './component/StyleComponentWithMuiComponent';
import CustomThemeComp from './component/CustomThemeComp';
import { ThemeProvider } from '@emotion/react';
import theme from './component/customTheme';

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* //this is for style function  */}
      {/* //in this component we crate custom comp but all is html tags */}
      {/* <StyleComponent /> */}

      {/* //in this component we are creating custom comp but all are mui comp */}
      {/* <StyleComponentWithMuiComponent /> */}

      {/* //custom theme  */}
      <ThemeProvider theme={theme}>
        <CustomThemeComp />
      </ThemeProvider>
    </div>
  );
}

export default App;
