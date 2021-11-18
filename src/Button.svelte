<script>
    import { productsStore } from './stores.js';
    let newData = [];

    const apiURL = "https://jemmenequoipourlaperoback.lauriereinette.fr/api/random_products";
    
    async function getData(){
        const response = await fetch(apiURL);
        newData = (await response.json());
        productsStore.set(newData);
    }
    function handleClick () {
        window.scrollTo(0, 0);
        getData();
    }
</script>

<div class="row">
    <div class="col-md-6 mx-auto mb-3">
        <div class="text-center">
            <button class="btn btn-primary bn632-hover bn21" type="button" on:click={handleClick}>Non merci, une autre idée stp !</button>
        </div>
    </div>
</div>

<style>
    .bn632-hover {
    /* width: 160px; */
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    }

    .bn632-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    }

    .bn632-hover:focus {
    outline: none;
    }

    .bn632-hover.bn21 {
        background-image: linear-gradient(
        to right,
        #fc6076,
        #ff9a44,
        #ef9d43,
        #e75516
        );
        box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.75);
    }
</style>