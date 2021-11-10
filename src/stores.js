import { writable } from 'svelte/store';


let data = [];

const apiURL = "https://jemmenequoipourlaperoback.lauriereinette.fr/api/random_products";

async function getData(){
    const response = await fetch(apiURL);
    data = (await response.json());
	// console.log('Response:', data);
    mainStore.set(data)
}
getData();

export const mainStore = writable(data);