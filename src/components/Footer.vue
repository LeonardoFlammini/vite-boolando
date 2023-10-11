<script>
  export default {
    name: 'Footer',

  }
</script>

<template>
  <footer>
  <div class="container d-flex">
    <div class="info">
      <div class="company">Booleando s.r.l.</div>
      
      <nav>
        <ul>
          <li><a href="#">Informazioni Legali</a></li>
          <li><a href="#">Informazioni sulla Privacy</a></li>
          <li><a href="#">Diritto di recesso</a></li>
        </ul>
      </nav>
    </div>
    <div class="menu">
      <div class="cta">Trovaci anche su</div>
      <nav>
        <ul>
          <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-square-pinterest"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-square-youtube"></i></a></li>
        </ul>
      </nav>
    </div>
  </div>

</footer>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars" as *;
footer {
  background-color: $footer-color;
  color: white;
  padding: 30px 0;
  .container {
    justify-content: space-between;
  }
  
  .company,
  .cta {
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .info{
    a{
      font-size: 0.8rem;
    }
  } 
  .menu {
    a{
      font-size: 1.2rem;
    }
  }
}
</style>