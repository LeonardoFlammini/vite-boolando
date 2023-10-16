<script>
  export default {
    name: 'Header'
  }
</script> 

<template>
  <header>
  <div class="header-fixed d-flex">

    <div class="container">
      <div class="menu d-flex">
        
        <nav class="categories">
  
          <ul>
            <li><a href="#">Donna</a></li>
            <li><a href="#">Uomo</a></li>
            <li><a href="#">Bambino</a></li>
          </ul>
  
        </nav>
        
        <div class="logo">
          <img src="boolean-logo.png" alt="logo" title="booleando">
        </div>
  
        <nav class="icons d-flex">
  
          <ul>
            <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
            <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
            <li><a href="#"> <i class="fa-solid fa-bag-shopping"></i> </a></li>
          </ul>
  
        </nav>
  
      </div>
    </div>

  </div>
</header>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars" as *;
header{
  background-color: var(--red-header);
  color: white;
  font-size: 0.95rem;
  .header-fixed{
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 80px;
    background-color: $red-header;
    box-shadow:0px 2px 10px grey;
  }
  .menu{
    justify-content: space-between;
    align-items: center;
    .logo {
      flex-basis: 50%;
      text-align: center;
      img {
        width: 150px;
      }
    }
    .categories,
    .icons {
      flex-basis: 25%;
    }
    .icons {
      flex-direction: row-reverse;
    }
  }
}

</style>