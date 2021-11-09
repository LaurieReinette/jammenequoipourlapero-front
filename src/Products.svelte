
<script>
    import { mainStore } from './store.js';
	let products = [];
	
	const unsubscribe = mainStore.subscribe(data => {
        products = data
	});
</script>
<div class="row">
    <div class="col-md-6 m-auto">
        <div class="text-center">
            <button class="btn btn-primary bn632-hover bn21" type="button" >Non, j'emmène autre chose</button>
        </div>
    </div>
</div>

{#each products as product}  
	<div class="row mb-3">
        <div class="col-md-6 m-auto">
            <div class="card m-auto" style="width: 18rem;">
                <img src={product.image} class="card-img-top" alt="une image1">
                <div class="card-body">
                    <p class="card-text">{product.name}</p>
                </div>
            </div>
        </div>
    </div>
{/each}
<!-- <div class="row">
    <div class="col-md-6 m-auto">
        <div class="card m-auto" style="width: 18rem;">
            <img src="./images/image1.jpg" class="card-img-top" alt="une image1">
            <div class="card-body">
                <p class="card-text">Chips</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 m-auto">
        <div class="card m-auto" style="width: 18rem;">
            <img src="./images/image2.jpg" class="card-img-top" alt="une image2">
            <div class="card-body">
                <p class="card-text">Rhum</p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-6 m-auto">
        <div class="card m-auto" style="width: 18rem;">
            <img src="./images/image3.jpg" class="card-img-top" alt="une image3">
            <div class="card-body">
                <p class="card-text">Coca</p>
            </div>
        </div>
    </div>
</div> -->

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
