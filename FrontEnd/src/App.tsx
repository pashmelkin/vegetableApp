import Button from '@material-ui/core/Button';
import './App.css';
import {ApiCall} from './utils/ApiCall';
import React from "react";

export default function App() {

  return (
        <Button variant="contained" color="primary" onClick={ApiCall}>
          Get Vegetables
        </Button>
  );
}

