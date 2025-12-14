<template>
    <!-- <Header :header="`${name}'s Shopping Cart`"></Header> -->
    <Header header="Shopping Cart"></Header>

</template>

<script>
import {ref} from 'vue'
import Header from '@/components/Header.vue'
export default {
  components: { Header },
    setup(){
        const name = ref('Rana')
        return{
            name
        }
    }

}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: #fff;
}

.product-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 15px 25px rgba(0,0,0,0.2);
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
  color: #333;
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
</style>