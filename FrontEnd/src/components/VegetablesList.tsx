import {ApiCallAsync} from '../utils/ApiCallAsync';
import React, {useState} from "react";
import config from '../config.json';
import {IVegetable} from '../model/IVegetable';
import {Button} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Copyright from "./Copyright";

export  default function VegetablesList() {
    const [items, setItems] = useState<IVegetable[]>([]);
    async function GetItems (config: { url: string; port: string; route: string; }) {
        setItems( await ApiCallAsync(config));
    }

    React.useEffect( () => {
        const apiConfig = config.PokemonApi;

        GetItems(apiConfig);
    }, [])


        return (
            <React.Fragment>
                <Container  maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {items.map((item) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card >
                                    <CardContent >
                                        <Typography>
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <footer >
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                    <Copyright />
                </footer>
            </React.Fragment>

        );
}

