<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <div class="cart">
      <router-link to="/Cart.vue">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
        </svg>
        <span>{{ cartCount }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    header: String,
    cartCount: {
      type: Number,
      default: 0
    }
  }
}
</script>


<style>
/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #2c3e50;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.header h1 {
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  margin: 0;
}

.cart {
  position: relative;
}

.cart span {
  position: absolute;
  top: -8px;
  right: -8px;
  background: red;
  color: white;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>