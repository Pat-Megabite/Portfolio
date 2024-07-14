<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="main d-flex align-items-center">
        <div class="container-fluid text-light">
            <div class="container-fluid hero">
                <div class="row flex-column align-items-center flex-md-row justify-items-center">
                    <div class="col position-relative text-center">
                        <h1>pat@localhost: ~$</h1>
                        <div class="d-flex justify-content-center">
                            <a class='icon-link p-1 mx-1' href="mailto:hi@patstuart.au">
                                <img src="../assets/envelope.svg" width="48" height="58">
                            </a>
                            <a class='icon-link p-1 mx-1' href="www.linkedin.com/in/patrick-stuart-aus">
                                <img src="../assets/linkedin.svg" width="48" height="48">
                            </a>
                            <a class='icon-link p-1 mx-1' href="https://github.com/Pat-Megabite">
                                <img src="../assets/github.svg" width="48" height="48">
                            </a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <RouterLink class="btn btn-outline-light mx-2" to="/about">About Me</RouterLink>
                            <RouterLink class="btn btn-outline-light mx-2" to="/projects">Projects</RouterLink>
                        </div>
                    </div>
                    <div class="col mt-3 d-flex flex-column cards position-relative">
                        <div class="card mb-1 text-white bg-dark">
                            <div class="card-header ">Project</div>
                            <div class="card-body">
                                <h5 class="card-title">What's On</h5>
                                <p class="card-text">A site to show where movies and TV shows are avaliable in Australia. Utilises a backend built with Express to fetch and serve content via an API which is then dynamically rendered in Vue.</p>
                                <div class="d-flex flex-row justify-content-center ">
                                    <a class='icon-link p-1 mx-1' href='https://github.com/Pat-Megabite/WhatsOn'> 
                                        <img src="../assets/github.svg" width="32" height="32" >
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-1 text-white bg-dark">
                            <div class="card-header ">Project</div>
                            <div class="card-body">
                                <h5 class="card-title">This Site</h5>
                                <p class="card-text">Built with Vue 3 and Bootstrap this site was a project in itself. Everything was built by hand with the exception of the tsparticle library.</p>
                                <div class="d-flex flex-row justify-content-center">
                                    <a class='icon-link p-1 mx-1' href="https://github.com/Pat-Megabite/Portfolio"> 
                                        <img src="../assets/github.svg" width="32" height="32" >
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
.heroText {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width:992px) {
    .heroText {
        padding-left: 5rem;
        padding-right: 5rem;
    }
}

.cont {
    padding: 0;
}

.cards {
    margin-right: 2rem;
}

.main {
    padding: 0;
}

.hero {
    --bs-gutter-x: 0;
    padding: 0;
    margin: 1rem 0 1rem 0;

}
</style>