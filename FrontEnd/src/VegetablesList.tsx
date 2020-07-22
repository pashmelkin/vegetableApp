import {ApiCallAsync} from './utils/ApiCallAsync';
import React, {useState, useEffect} from "react";
import config from './config.json';
import {IVegetable} from './model/IVegetable';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import {FormGroup} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import green from "@material-ui/core/colors/green";


export  default function VegetablesList() {
    const [items, setItems] = useState<IVegetable[]>([]);


    useEffect( () => {
        const apiConfig = config.PokemonApi;
        async function GetItems (config: { url: string; port: string; route: string; }) {

            setItems( await ApiCallAsync(config));
        }

        GetItems(apiConfig);
    }, [])


        return (
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {items.map((item) => (
                            <Grid key={item.name} item>
                                <Paper> {item.name}</Paper>
                                <Paper> {(item ==== null) item.url?.match(/\d+$/)[0]}</Paper>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox name="checkedA" color="default"/>}
                                        label="select"
                                    />
                                </FormGroup>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>




        );
}

