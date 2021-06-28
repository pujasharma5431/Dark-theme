
import { Paper } from '@material-ui/core';
import './App.css';
import { useState } from 'react';
import ButtonAppBar from './components/AppBar';
import SimpleCard from './components/Card';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles' 
function App() {
  const[darkMode,setDarkMode]=useState(false)

  const theme =createMuiTheme({
    palette:{
      type:darkMode?"dark":"light"
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{
        height:"150vh"
      }}>
    <div className="App">
<ButtonAppBar checked={darkMode} change={()=>setDarkMode(!darkMode)}/>
<SimpleCard/>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
