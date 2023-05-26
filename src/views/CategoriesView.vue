<template>
  <div class="categories">
    <h3 class="title is-3">Categories</h3>
    <div class="category-grid">
      <category-card
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: "CategoriesView",
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Electronics",
          image: "images/ele.jpg",
        },
        { id: 2, name: "Clothing", image: "../images/fs.jpg" },
        { id: 3, name: "Books", image: "../images/book.jpg" },
        {
          id: 4,
          name: "Home & Garden",
          image: "../images/homedec.jpg",
        },
        { id: 5, name: "Toys & Games", image: "../images/toy.jpg" },
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>
