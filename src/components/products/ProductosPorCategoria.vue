<template>
    <div class="cell grid-x grid-margin">
        <div class="cell small-6 medium-4 large-3"
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

<script>

import VCardProduct from '@/components/base/VCardProduct.vue';
import { defineComponent} from 'vue';
import apiProduct from '@/api/product';

export default defineComponent({
    name: 'ProductosPorCategoria',
    components: {
        VCardProduct
    },
    data() {
        return {
            products: []
        }
    },
    watch: {
        '$route.params.category':function() {
            this.filtrarProductos()
        }
    },
    methods: {
        filtrarProductos: function () {
            let filtros = 'category=' + this.$route.params.category
            apiProduct.filtrarProductos().then(
                (response) => {
                    this.products = response.data.results
                }
            )
        }
    },
    beforeMount () {
        this.filtrarProductos()
    }
})
</script>

<style lang="scss" scoped>

</style>
