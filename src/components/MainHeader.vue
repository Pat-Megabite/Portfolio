<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
export default {

    watch: {
        '$route' () {
            if(getComputedStyle(this.$refs.content).display !== 'none' && getComputedStyle(this.$refs.navbar).display !== 'none'){
                this.$refs.navbar.click();
            }
        }
    }
}
</script>

<template>
<div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md ">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to='/'>
                <img src="../assets/HomeLogo.svg" class='logo' alt="Home">
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ref="navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="content">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item p-1 {'active': $route.path === '/'}">
                    <RouterLink class='nav-link' to="/">Home</RouterLink>
                </li>
                <li class="nav-item p-1 {'active': $route.path === '/about'}" >
                    <RouterLink class='nav-link' to="/about">About</RouterLink>
                </li>
                <li class="nav-item p-1 {'active': $route.path === '/projects'}">
                    <RouterLink class='nav-link' to="/projects">Projects</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>
 
<style scoped>
.logo {
    height: 30px;
    width: 200px;
}
a.router-link-active {
  color: white;
  font-weight: bold;
}
@media (min-width: 768px) {
    .navbar-collapse {
        margin-right: 4rem;
    }
    .logo {
        width: 400px;
        height: 60px;
    }
}
.nav-link {
    color: #e3dddc;
}

</style>