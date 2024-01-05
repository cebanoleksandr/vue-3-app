<script>
</script>

<template>
  <nav class="navbar has-shadow is-primary mb-4">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2387/2387635.png"
          alt="site logo"
          style="max-height: 60px;"
          class="py-2 px-2"
        >
      </a>
      <a class="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <div class="navbar-menu" id="nav-links">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/todos" class="navbar-item">Todos</router-link>
      </div>
    </div>
  </nav>
</template>

<style></style>