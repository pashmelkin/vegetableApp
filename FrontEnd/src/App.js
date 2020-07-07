import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import ApiCall from './utils/ApiCall';



function App() {

  return (
    <div>
        <Button variant="contained" color="primary" onClick={ApiCall}>
          Get Vegetables
        </Button>
    </div>
  );
}

export default App;
