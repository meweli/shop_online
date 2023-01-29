<template>
  <main-header />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from '@/components/includes/MainHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainHeader
  }
})
</script>


<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
</style>
