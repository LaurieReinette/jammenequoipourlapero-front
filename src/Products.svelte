
<script>
    import { mainStore } from './stores.js';
    import Button from './Button.svelte';

	let products = [];

	//souscription au store , si modif les données seront rechargées automatiquement
	mainStore.subscribe(data => {
        products = data
	});
</script>

<Button/>

<div class="row mb-3">
    {#each products as product}  
        <div class="col-lg-4 m-auto">
            <div class="card m-auto" style="width: 18rem;">
                <img src={product.image} class=" img-thumbnail" alt="une image1">
                <div class="card-body">
                    <p class="card-text">{product.name}</p>
                </div>
            </div>
        </div>
    {/each}
</div>
