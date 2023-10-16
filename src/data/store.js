import { reactive } from "vue";
import productsModule from "./Array"

export const store = reactive ({
  productsArray: productsModule
});