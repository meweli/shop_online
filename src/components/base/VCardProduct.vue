<template>
    <div class="product">
        <img
            :src="image"
            class="product__img">
        <a
            href="#"
            class="product__name">
                {{ name }}
        </a>
        <p class="product__price">
            $ {{ price }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'VCardProduct',
    props: {
        image: String,
        name: String,
        price: Number
    }
})
</script>

<style lang="scss" scoped>
@import "~@/scss/styles.scss";
    .product {
        border: 1px solid;
        margin: 10px;
        background: $color-4;
    }
    .__name {
        font-display: ff-2;
    }

</style>
