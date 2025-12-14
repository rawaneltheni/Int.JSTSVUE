<template>
  <div
    v-for="product in products"
    :key="product.id"
    class="product-card"
  >
    <img :src="product.img" :alt="product.name" class="product-img" />

    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <button @click="add(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit }) {
    const { products } = toRefs(props) 

    const add = (product) => {
      emit('add-to-cart', product)
    }

    return {
      products,
      add
    }
  }
}
</script>
