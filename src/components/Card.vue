<script>

export default {
  name: "Card",
  props:{
    productObj: Object
  }
}
</script>

<template>
  <div class="col d-flex justify-content-center ">
    <div class="card" style="width: 18rem;">
      <div 
        class="image-container"
        @mouseenter="$emit(handleImage)"
        @mouseleave="$emit(handleImage)"
      >
        <img :src="productObj.primaryImage" class="card-img-top" :alt="productObj.marca">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ productObj.marca }}</h5>
        <p class="card-text">{{ productObj.modello }}</p>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
// .image-container{
//   &:hover{

//   }
// }
</style>