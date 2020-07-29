import {ApiCallAsync} from './utils/ApiCallAsync';
import React, {useState} from "react";
import config from './config.json';
import {IVegetable} from './model/IVegetable';

export  default function VegetablesList() {
    const [items, setItems] = useState<IVegetable[]>([]);
    async function GetItems (config: { url: string; port: string; route: string; }) {
        console.log("Calling GetITems with " +  JSON.stringify(config));
        setItems( await ApiCallAsync(config));
        console.log("items:" +  items.length);
    }

    React.useEffect( () => {
        document.title = 'Get Vegetables...';
        console.log("Calling useEffect");

        const apiConfig = config.PokemonApi;
        async function GetItems2 (config: { url: string; port: string; route: string; }) {
            console.log("Calling GetITems2");
            setItems( await ApiCallAsync(config));
            console.log("items:" +  items.length);
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

