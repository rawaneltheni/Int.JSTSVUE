<template>
  <h1>{{ name }}'s Cart</h1>

  <Products
    :products="products"
    @add-to-cart="addToCart"
  />
</template>

<script>
import { ref , reactive } from 'vue' // ref: for primitive data , reactive: for objects and arrays
import Products from '@/components/Product.vue'

export default {
  components: { Products },

  setup() {
    const name = ref('Rana')

    const products = reactive([
      { id: 1, name: 'Laptop', img: 'https://via.placeholder.com/100' },
      { id: 2, name: 'Headphones', img: 'https://via.placeholder.com/100' },
      { id: 3, name: 'Keyboard', img: 'https://via.placeholder.com/100' }
    ])

    const addToCart = (product) => {
      alert(`${product.name} added!`)
    }

    return {
      name,
      products,
      addToCart
    }
  }
}
</script>
