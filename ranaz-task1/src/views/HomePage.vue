<template>
  <Header :header="'Shopping List'" :cart-count="cart.length" />

  <Products
    :products="products"
    @add-to-cart="addToCart"
  />
</template>

<script>
import { reactive, ref } from 'vue'
import Products from '@/components/Product.vue'
import Header from '@/components/Header.vue'

export default {
  components: { Products, Header },

  setup() {
    const products = reactive([
      { id: 1, name: 'Laptop', img: '/imgs/laptop.png' },
      { id: 2, name: 'Headphones', img: '/imgs/headphones.png' },
      { id: 3, name: 'Keyboard', img: '/imgs/keyboard.png' }
    ])

    // Cart state
    const cart = reactive([])

    const addToCart = (product) => {
      cart.push(product) // add product to cart
      alert(`${product.name} added!`)
    }

    return {
      products,
      addToCart,
      cart
    }
  }
}
</script>


<style scoped>
    @media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 20px;
    }

    .products-container {
        padding: 15px 20px;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }

    .header h1 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    }
</style>
