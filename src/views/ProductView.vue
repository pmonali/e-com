<template>
  <div class="product-list-container">
    <h1>Product List</h1>
    <ul class="product-list">
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.thumbnail" :alt="product.title" />
        <div class="product-details">
          <h3>{{ product.title }}</h3>
          <p>Price: ${{ product.price }}</p>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      category: "",
      cart: [],
    };
  },
  mounted() {
    this.category = this.$route.params.category; // Get the category from the route parameters
    this.fetchProducts();
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.category === this.category
      );
    },
  },
  methods: {
    fetchProducts() {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          if (data && data.products) {
            this.products = data.products;
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    addToCart(product) {
      this.cart.push(product);
      alert("Product added to cart!");
    },
  },
};
</script>

<style>
.product-list-container {
  margin: 1rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-card {
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: 200px; /* Adjust the height as per your preference */
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
}

.product-details {
  margin-top: 1rem;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}

p {
  margin: 0;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
