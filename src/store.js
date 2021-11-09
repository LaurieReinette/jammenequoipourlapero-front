import { writable } from 'svelte/store';


let data = [];

const apiURL = "http://hp-api.herokuapp.com/api/characters";

async function getData(){
    const response = await fetch(apiURL);
    data = (await response.json()).slice(0,20);
	// console.log('Response:', data);
    mainStore.set(data)
}
getData();

export const mainStore = writable(data);