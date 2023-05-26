<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide.src">
      <img :src="slide.src" :alt="slide.alt" class="carousel__image" />
      <div class="carousel__caption">{{ slide.caption }}</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "HomeView",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          src: "/images/1.jpg",
          alt: "Slide 1",
          caption: "Welcome to our online store!",
        },
        {
          src: "/images/3.jpg",
          alt: "Slide 2",
          caption: "New arrivals now in stock",
        },
        {
          src: "/images/6.jpg",
          alt: "Slide 3",
          caption: "Free shipping on all orders over $50",
        },
      ],
    };
  },
});
</script>
<style scoped>
.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.carousel__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  text-align: center;
}

.carousel__item {
  min-height: 50%;
  width: 50%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
