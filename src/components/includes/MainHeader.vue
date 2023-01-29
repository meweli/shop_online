<template>
    <div class="header">
        <a href="#" class="header__logo">Catalogue</a>
        
        <ul class="header__menu">
            <li class="header__menu__item">
                <router-link :to="{ name: 'products' }" class="header__menu__item__link">
                    Products
                </router-link>
            </li>
             <li class="header__menu__item">
                <router-link
                 :to= "{ name: 'categorias', params: {'category': ' '}}"
                 class="header__menu__item__link">
                    Categories
                </router-link>
            </li>
            <li class="header__menu__item">
                <router-link to="/login">Login</router-link>
            </li>
            <li class="header__menu__item">
              <router-link to="/register">Register</router-link>
            </li>
            <li class="header__menu__item">
                <router-link to="/userID">User ID</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
@import "~@/scss/styles.scss";
.header {
    border: 1px solid;
    background-color: mistyrose;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
}

</style>
