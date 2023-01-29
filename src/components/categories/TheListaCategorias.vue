<template>
  <div class="cell">
    <ul class="lista">
      <li 
      v-for="categoria in lista"
      :key="categoria.id"
      class="lista__item">
        <router-link
        class ="lista__item__link"
        :to="{name: 'categorias', params: {'category': categoria.name_unique} }">
        {{ categoria.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import apiCategorias from '../../api/categories';

export default defineComponent({
  name:'TheListaCategorias',
  data() {
    return {
      lista: []
    }
  },
  methods: {
    cargarCategorias: function() {
      apiCategorias.listaCategorias().then(
        (response) => {
          this.lista = response.data
        }
      )
    }
  },
  beforeMount () {
    this.cargarCategorias()
  }
})
</script>

<style lang="scss" scoped>
.lista {
  list-style: none;
  padding: 35px;
  margin: 0px;
}
.lista__item {
  line-height: 3;
  display: block;
  :hover {
    background-color: lightblue;
  }
}
</style>
