import Button from '@material-ui/core/Button';
import './App.css';
import {ApiCall} from './utils/ApiCall';
import React from "react";
import config from './config.json';

export default function MainButtonGet( ) {
  const vegeConfig = config.VegetableApi;
    return (
        <Button variant="contained" color="primary" onClick={ () => { ApiCall(vegeConfig)} }>
          Get Vegetables
        </Button>
  );
}

