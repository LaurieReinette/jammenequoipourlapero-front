
<script>
    import { productsStore } from './stores.js';
    import Button from './Button.svelte';

	let products = [];

	//souscription au store , si modif les données seront rechargées automatiquement
	productsStore.subscribe(data => {
        products = data
	});
</script>

<Button/>

<div class="row mb-3">
    {#each products as product}  
        <div class="col-lg-4 mb-3">
            <div class="card m-auto" style="width: 15rem;">
                <img src={product.image} class="" alt="une image1">
                <div class="card-body">
                    <p class="card-text">{product.name}</p>
                    <p class="card-text">{product.brand}</p>
                </div>
            </div>
        </div>
    {/each}
</div>

<Button/>

<style>
    img{
        min-height: 200px;
        max-height: 300px;
    }
    .card-body{
        background-image: url('/images/carreaux.jpg');
    }
</style>
