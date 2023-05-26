<template>
  <div
    class="category-card"
    :style="{ backgroundImage: 'url(' + category.image + ')' }"
  >
    <router-link :to="'/categories/' + category.id" class="category-link">
      <h3 class="category-title">{{ category.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.category-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.category-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.category-title {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card:hover .category-link {
  opacity: 1;
}
</style>
