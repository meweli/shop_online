<template>
  <div class="home">
    <navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/home/navbar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
  },
});
</script>
