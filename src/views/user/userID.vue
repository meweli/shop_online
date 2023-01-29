<template>
  <div id="display">Email: {{ email }}</div>
  <div id="display">Password: {{ pwd }}</div>
  <div id="display">Auth. token: {{ data }}</div>
</template>

<script>
    export default {
        data () {
            return {
                data: ''
            }
        },
        email () {
            return {
                email: ''
            }
        },
        pwd () {
            return {
                pwd: ''
            }
        },
        mounted () {
            this.data = localStorage.getItem('token');
            this.email = localStorage.getItem('email');
            this.pwd = localStorage.getItem('pwd')
        }
    }
</script>