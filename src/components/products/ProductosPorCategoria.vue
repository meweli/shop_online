<template>
    <div class="cell grid-x grid-margin">
        <div class="cell small-6 medium-4 large-3"
            v-for="n in 12"
            :key="n">
            <v-card-product
            image="product.main_image"
            name="product.name"
            price="parseFloat(product.price)"
        />
        </div>
    </div>
</template>

<script>

import VCardProduct from '@/components/base/VCardProduct.vue';
import { defineComponent} from 'vue';

export default defineComponent({
    name: 'ProductosPorCategoria',
    components: {
        VCardProduct
    }
})
</script>

<style lang="scss" scoped>

</style>
