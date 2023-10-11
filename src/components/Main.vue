<script>
  export default {
    name: 'Main',

  }
</script>

<template>
  <main>
  <div class="container d-flex">
    <div class="card dsc-stb">
      <div class="std-img">
        <img src="img/1.webp" alt="1">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>    
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>     
      <div class="hover-img">
        <img src="img/1b.webp" alt="1b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>      
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
    <div class="card dsc">
      <div class="std-img">
        <img src="img/2.webp" alt="2">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>    
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="hover-img">
        <img src="img/2b.webp" alt="2b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>     
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
    <div class="card dsc">
      <div class="std-img">
        <img src="img/3.webp" alt="3">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>  
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="hover-img">
        <img src="img/3b.webp" alt="3b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>   
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
    <div class="card dsc-stb">
      <div class="std-img">
        <img src="img/4.webp" alt="4">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>   
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="hover-img">
        <img src="img/4b.webp" alt="4b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>     
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
    <div class="card">
      <div class="std-img">
        <img src="img/5.webp" alt="5">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>      
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="hover-img">
        <img src="img/5b.webp" alt="5b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>
      
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
    <div class="card stb">
      <div class="std-img">
        <img src="img/6.webp" alt="6">
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>  
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="hover-img">
        <img src="img/6b.webp" alt="6b">
        
        <div class="favourite d-flex">
          <i class="fa-regular fa-heart"></i>
        </div>      
        <div class="box">
          <span class="dsc">-50%</span>
          <span class="stb">Sostenibilità</span>
        </div>
      </div>
      <div class="details">
        <div class="brand">Levi's</div>
        <div class="description">relaxed fit tee unisex</div>
        <span class="price dsc">14,99</span>
        <span class="price">29,99</span>
      </div>
    </div>
  </div>
</main>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars" as *;

/* main  */

main {
  padding-top: 80px;
}

main .container {
  gap: 10px;
  flex-wrap: wrap;
	justify-content: center;
	align-content: start;
  margin: 40px auto;
}






/* card empty  */

main {
  .card {
    flex-basis: 30%;
    max-width: 300px;
    min-width: 250px;
    cursor: pointer;

    .std-img,
    .hover-img {
      position: relative;
    }
    .hover-img {
      display: none;
    }
    .favourite {
    position: absolute;
    display: flex;
    right: 0;
    top: 10px;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: white;
    font-size: 1.2rem;
  }
  }

}





.card .box{
  color: white;
  font-size: 0.8rem;
  position: absolute;
  bottom: 50px;
  display: none;
}

.card .box .stb,
.card .box .dsc {
  padding: 5px 10px;
}

.card .box .dsc {
  background-color: var(--red-discount);
}
.card .box .stb {
  background-color: var(--green);
}

.card .details {
  padding-top: 5px;
}

.card .details .brand {
  font-size: 0.8rem;
  font-weight: 300;
}

.card .details .description {
  text-transform: uppercase;
  font-weight: bold;
}

.card .details .price.dsc {
  color: var(--red-discount);
  text-decoration: none;
}

.card .details .price{
  padding-left: 5px;
  text-decoration: line-through;
}

.card .details .price.dsc::after,
.card .details .price::after{
  content: "\20AC";
}

/* card discount  */

.card.dsc .box {
  display: block;
}
.card.dsc .box .stb {
  display: none;
}

/* card sostenibility  */

.card.stb .box {
  display: block;
}
.card.stb .box .dsc {
  display: none;
}

/* card discount sostenibility */

.card.dsc-stb .box {
  display: block;
}

.card.dsc-stb .box .stb {
  display: inline-block;
}


/* hover  */

.card:hover .std-img {
  display: none;
}

.card:hover .hover-img {
  display: block;
}

.favourite:hover {
  color: var(--red-discount);
}

</style>