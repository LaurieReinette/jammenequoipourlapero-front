import { writable } from 'svelte/store';


let data = [];
// let loader = false;

const apiURL = "https://jemmenequoipourlaperoback.lauriereinette.fr/api/random_products";

async function getData(){    

    const response = await fetch(apiURL);
    data = (await response.json());
    productsStore.set(data);
}
getData();

export const productsStore = writable(data);
// export const loaderStore = writable(loader);