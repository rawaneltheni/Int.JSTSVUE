<template>
  <div
    v-for="product in products"
    :key="product.id"
    class="product-card"
  >
    <img :src="product.img" :alt="product.name" class="product-img" />

    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <button @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },

  setup(props, { emit }) {
    const addToCart = (product) => {
      emit('add-to-cart', product)
    }

    return {
      products: props.products,
      addToCart
    }
  }
}
</script>


<style scoped>
    .product-card {
        border: 1px solid #ddd;
        border-radius: 12px;
        padding: 15px;
        margin: 10px;
        width: 150px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .product-card.hovered {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .product-img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .product-info h3 {
        margin: 5px 0;
        font-size: 16px;
    }

    .product-info button {
        background-color: #4CAF50;
        border: none;
        padding: 8px 12px;
        color: white;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .product-info button:hover {
        background-color: #45a049;
        transform: scale(1.05);
    }

    /* Product Grid */
    .products-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 20px;
        padding: 20px 40px;
        min-height: calc(100vh - 100px);
        background-color: #ecf0f1;
        box-sizing: border-box;
    }
</style>