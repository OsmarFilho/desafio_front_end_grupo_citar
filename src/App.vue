<template>
  <div id="app">
      <nav class="justify-content-center navbar navbar-light bg-light mb-3">
        <a class="navbar-brand text-center" href="#">
          <img :src="require('@/assets/images/logo.jpg')" width="40" height="40" class="d-inline-block align-top" alt="">
          Grupo Citar
        </a>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>
