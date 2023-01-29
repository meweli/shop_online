<template>
    <div class="cell grid-x grid-margin-x">
        <div 
        class="cell small-6 medium-4 large-3"
        v-for="product in products"
        :key="product.id">
        <v-card-product 
            :image="product.main_image"
            :name="product.name"
            :price="parseFloat(product.price)"
        />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import apiProduct from '@/api/product'
import VCardProduct from '@/components/base/VCardProduct.vue'
import popularProducts from '@/components/products/popularProducts.vue';

export default defineComponent({
    name: 'popularProducts',
    components: {
        VCardProduct
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        cargarProductos: function () {
            apiProduct.popularProducts().then(
                (response: any) => {
                    this.products = response.data.results
                }
            )
        }
    },
    mounted () {
        this.cargarProductos()
    }
})
</script>

<style lang="scss" scoped>

</style>
