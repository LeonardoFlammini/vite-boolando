<script>
import {store} from "../data/store"
import Card from "./Card.vue";
  export default {
    name: 'Main',
    components:{
      Card
    },
    data(){
      return{
        store
      }
    },
    methods:{
      handleImage(index){
        store.productsArray[index].isSecondary = !store.productsArray[index].isSecondary
        console.log(store.productsArray[index].isSecondary);
      }
    },
    mounted(){
      console.log(store.productsArray);
    }
  }
</script>

<template>
  <main>
  <div class="container pt-80">
    <div class="row row-cols-3">
      <Card 
      v-for="(product,index) in store.productsArray"
      :key="index"
      :productObj="product"
      @handleImage = "handleImage(index)"
      />
    </div>
  </div>
</main>
</template>


<style scoped lang="scss">
@use "../scss/partials/vars" as *;
.pt-80{
  padding-top: 80px;
}
// main {
//   padding-top: 80px;
//   .container {
//     gap: 10px;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-content: start;
//     margin: 40px auto;
//   }
//   .card {
//     flex-basis: 30%;
//     max-width: 300px;
//     min-width: 250px;
//     cursor: pointer;

//     .std-img,
//     .hover-img {
//       position: relative;
//     }
//     .hover-img {
//       display: none;
//     }
//     .favourite {
//       position: absolute;
//       display: flex;
//       right: 0;
//       top: 10px;
//       justify-content: center;
//       align-items: center;
//       height: 50px;
//       width: 50px;
//       background-color: white;
//       font-size: 1.2rem;
//       &:hover{
//         color: $red-discount;
//       }
//     &:hover {
//       .std-img {
//         display: none;
//       }
//       .hover-img {
//         display: block;
//       }
//     }
//   }
//   .box{
//     color: white;
//     font-size: 0.8rem;
//     position: absolute;
//     bottom: 50px;
//     display: none;
//     .stb,
//     .dsc {
//       padding: 5px 10px;
//     }
//     .dsc {
//       background-color: var(--red-discount);
//     }
//     .stb {
//       background-color: var(--green);
//     }
//     .details {
//       padding-top: 5px;
//       .description {
//         text-transform: uppercase;
//         font-weight: bold;
//       }
//       .brand {
//         font-size: 0.8rem;
//         font-weight: 300;
//       }
//       .price.dsc {
//         color: var(--red-discount);
//         text-decoration: none;
//         &::after{
//           content: "\20AC";
//         }
//       }
//       .price{
//         padding-left: 5px;
//         text-decoration: line-through;
//         &::after{
//           content: "\20AC";
//         }
//       }
//     }
//   }
//   .card.dsc{
//     .box {
//       display: block;
//       .stb {
//         display: none;
//       }
//     }
//   }
//   .card.stb{
//     .box {
//       display: block;
//       .dsc {
//         display: none;
//       }
//     }
//   }
//   .card.dsc-stb{
//     .box {
//       display: block;
//       .stb {
//         display: inline-block;
//       }
//     }
//   }
//   }

// }


// .favourite:hover {
//   color: $red-discount;
// }

</style>