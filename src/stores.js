import { writable } from 'svelte/store';


let data = [];

const apiURL = "http://127.0.0.1:8001/random_products";

async function getData(){
    const response = await fetch(apiURL);
    data = (await response.json());
	// console.log('Response:', data);
    mainStore.set(data)
}
getData();

export const mainStore = writable(data);