import {ApiCallAsync} from './utils/ApiCallAsync';
import React, {useState} from "react";
import config from './config.json';
import {IVegetable} from './model/IVegetable';

export  default function VegetablesList() {
    const [items, setItems] = useState<IVegetable[]>([]);


    React.useEffect( () => {
        const apiConfig = config.PokemonApi;
        async function GetItems (config: { url: string; port: string; route: string; }) {

            setItems( await ApiCallAsync(config));
        }

        GetItems(apiConfig);
    }, [])


        return (
            <ul className="mdc-list mdc-list--two-line">
                {items.map(item =>
                    (
                      <li key={item.name}>{item.name}</li>

                    ))
                }
            </ul>


        );
}

