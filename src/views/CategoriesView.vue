<template>
  <div class="categories">
    <h3 class="title is-3">Categories</h3>
    <div class="category-grid">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="`/category/${category.name}`"
        class="category-card"
      >
        <img :src="category.image" :alt="category.name" />
        <h4 class="uppercase">
          <strong>{{ category.name }}</strong>
        </h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesView",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "smartphones",
          image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        {
          id: 2,
          name: "laptops",
          image: "https://i.dummyjson.com/data/products/6/1.png",
        },

        {
          id: 3,
          name: "fragrances",
          image: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        },
        {
          id: 4,
          name: "skincare",
          image: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
        },
        {
          id: 5,
          name: "groceries",
          image: "https://i.dummyjson.com/data/products/21/thumbnail.png",
        },
        {
          id: 6,
          name: "home-decoration",
          image: "https://i.dummyjson.com/data/products/26/1.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.categories {
  margin: 1rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card img {
  width: 100%;
  height: 200px; /* Adjust the height as per your preference */
  object-fit: cover; /* Preserve the aspect ratio and fill the available space */
}

.category-card h4 {
  margin-top: 0.5rem;
}

h4.uppercase {
  text-transform: uppercase;
}
</style>
