<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          width="100"
          height="100"
        />
        <h3>{{ product.title }}</h3>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [], // Initialize as empty array
      category: "smartphones",
      cart: [],
    };
  },
  mounted() {
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
