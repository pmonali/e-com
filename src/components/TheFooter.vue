<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <h4 class="title is-4">About My Store</h4>
          <p>
            My Store is a leading online retailer of quality products at
            affordable prices. We specialize in electronics, home goods, and
            fashion items.
          </p>
        </div>
        <div class="column is-one-third">
          <h4 class="title is-4">Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping Information</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
          </ul>
        </div>
        <div class="column is-one-third">
          <h4 class="title is-4">Connect With Us</h4>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <hr />
      <p class="has-text-centered">
        &copy; My Store 2023. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.css";

.footer {
  background-color: #f5f5f5;
  padding: 2rem 1rem;
}

.footer .columns {
  margin-bottom: 2rem;
}

.footer h4 {
  margin-bottom: 1rem;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

.social-icons {
  display: flex;
}

.social-icons .icon {
  margin-right: 0.5rem;
}

.has-text-centered {
  text-align: center;
}
</style>
