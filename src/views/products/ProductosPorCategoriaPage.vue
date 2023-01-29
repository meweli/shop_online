<template>
    <div>
        <productos-por-categoria />
    </div>
</template>

<script lang="ts">

import ProductosPorCategoria from '@/components/products/ProductosPorCategoria.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ProductosPorCategoriaPage',
    components: {
        ProductosPorCategoria
    }
})
</script>

<style lang="scss" scoped>

</style>
