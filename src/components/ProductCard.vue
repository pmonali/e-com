<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h4 class="product-name">{{ product.name }}</h4>
    <p class="product-price">{{ product.price }}</p>
    <button class="product-button">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-name {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.product-price {
  margin-bottom: 0.5rem;
}

.product-button {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
