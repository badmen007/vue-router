<template>
  <div class="home">
    <router-link to="/a">切a</router-link>
    <router-link to="/b">切b</router-link>
    <router-view></router-view> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
