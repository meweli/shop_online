<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 medium-2 large-3">
                <the-lista-categorias />
            </div>
        </div>
        <div class="cell small-12 medium-10 large-9">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import TheListaCategorias from '@/components/categories/TheListaCategorias.vue';
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'CategoriasPage',
    components: {
        TheListaCategorias
    }
})
</script>

<style lang="scss" scoped>

</style>