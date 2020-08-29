import {ApiCallAsync} from '../utils/ApiCallAsync';
import React, {useState} from "react";
import config from '../config.json';
import {IVegetable} from '../model/IVegetable';
import Album from './Album';

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
            <Album/>

        );
}

