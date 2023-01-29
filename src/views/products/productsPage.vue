<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
        <h1 class="cell title">Product list</h1>
        <popular-products />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import popularProducts from '@/components/products/popularProducts.vue'

export default defineComponent({
    name: 'productsPage',
    components: {
        popularProducts
    }
})
</script>

<style lang="scss" scoped>
@import "~@/scss/styles.scss";
    .title {
        font-family: $ff-1;
        text-align: center;
        font-size: 30px;
    }

</style>
