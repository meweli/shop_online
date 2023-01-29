<template>
<div class="navbar">
    <h1 class="navbar__title">Welcome to our store</h1>
    <div class="navbar__copy">
        <p class="navbar__copy__text">
            Shop at the official site of <b>Shop non Stop</b> and discover the latest tendencies, all inspired by the finesse of Capitalism. Login to access our products or sign up today for <b>Shop non Stop</b> membership.
        </p>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar'
})
</script>

<style lang="scss" scoped>
@import "~@/scss/styles.scss";
.navbar {
    border: 1px solid;
    text-align: center;
}

</style>