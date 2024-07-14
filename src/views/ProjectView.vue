<script setup>
function getURL(icon) {
            return new URL(`../assets/projects/${icon}.png`, import.meta.url)
}
//Use 16:9 pics
let projects = [{
    id:1,
    title: "What's On",
    desc: "A site to show where movies and TV shows are avaliable in Australia. Utilises a backend built with Express to fetch and serve content via an API which is then dynamically rendered in Vue.",
    pic: 'screen',
    tags: ['web development'], 
    github: 'https://github.com/Pat-Megabite/WhatsOn',
},
{
    id:2,
    title: 'This Site',
    desc: "Built with Vue 3 and Bootstrap this site was a project in itself. Everything was built by hand with the exception of the tsparticle library.",
    pic: 'screen',
    tags: ['web development'],
    github: 'https://github.com/Pat-Megabite/Portfolio'
},
{
    id:3,
    title:'All Day',
    desc: 'SOP platform specifically designed for hospitatlity, managing recipes, standard procedures and information from a single point of truth. This product is currently being developed with the vision to become a SaaS product.',
    pic: 'screen',
    tags: ['web development']
}
]
</script>

<template>
    <div class="main">
        <div class="container-fluid">
            <div class="container-fluid row">
            </div>
            <div class="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div class="col" v-for="project in projects" :key="project.id">
                    <div class="card mb-1 text-white bg-dark">
                        <img :src=getURL(project.pic) class="card-img-top" :alt='project.title'>
                        <div class="card-body text-center justify-content-center">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <p class="card-text">{{ project.desc }}</p>
                            <div class="d-flex flex-row justify-content-center">
                                <a class='icon-link p-1 mx-1' v-if="project.github" :href="project.github"> 
                                <img src="../assets/github.svg" width="32" height="32" >
                                </a>
                            <a class='icon-link p-1 mx-1' v-if="project.demo" :href="project.demo"> 
                                <img src="../assets/demo.svg" width="32" height="32" >
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>