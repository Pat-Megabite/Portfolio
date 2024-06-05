<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <footer class="container-fluid bg-dark footer">
        <div class="row">
            <div class="col d-flex flex-column align-items-center">
                <img src="../assets/logoHeader.svg" class="img-fluid" alt="pat.au">
            </div>
            <div class="col d-flex flex-column">
                <h5>Links</h5>
                <RouterLink class='nav-link' to="/">Home</RouterLink>
                <RouterLink class='nav-link' to="/about">About</RouterLink>
                <RouterLink class='nav-link' to="/projects">Projects</RouterLink>
            </div>
            <div class="col d-flex flex-column">
                <h5>Get in touch!</h5>
                <div class="d-flex flex-row">
                    <a class='icon-link' href="mailto:pat@pat.au"> 
                        <img src="../assets/envelope.svg" width="32" height="32" >
                    </a>
                    <a class='icon-link' href="#"> 
                        <img src="../assets/linkedin.svg" width="32" height="32" >
                    </a>
                </div>
            </div>
        </div>
        <div class="row text-center mt-1">
            <hr>
            <p class="">Built and designed by Pat. All Rights Reserved 2024</p>
        </div>
    </footer>
</template>

<style scoped>
.icon-link {
    margin: 10px;
}
.footer {
    color: white;
    padding: 1rem 0 0 1rem;
}
.nav-link {
    color: #e3dddc;
}
a.router-link-active {
  color: white;
  font-weight: bold;
}
</style>