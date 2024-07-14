<script setup>
import IconDisplay from '@/components/IconDisplay.vue';
let iconsProgramming = [{
    value: "bootstrap"
},
{
    value: "csharp"
},
{
    value: "css"
},
{
    value: 'html'
},
{
    value: 'java'
},
{
    value: 'javascript'
},
{
    value: 'nodejs'
},
{
    value: 'python'
},
{
    value: 'tailwind'
},
{
    value: 'vuejs'
}];
let iconsOperations = [{
    value: 'bash'
},
{
    value: 'trello'
},
{
    value: 'docker'
},
{
    value: 'git'
},
{
    value: 'mongo'
},
{
    value: 'mysql'
},
{
    value: 'linux'
},
{
    value: 'azure'
},
{
    value: 'windows'
},
{
    value: 'aws'
}]
</script>

<template>
    <div class="main">
        <div class="container-fluid text-light">
            <div class="position-relative row flex-column flex-md-row ">
                <div class="col my-4 ">
                    <img src="../assets/square-me.png" class="profile mx-auto d-block">
                </div>
                <div class="col text-center mt-4 text">                 
                    <h3>About Me</h3>
                    <p>I am a lifelong learner that has always wanted to know how and why something works.
                        This passion for learning has lead me to pursue studies in science (Chemistry and Molecular Biology)
                        and more recently in the field of Computer Science and IT. <br>
                        Currently I am particularly interested in the domains of web development and cybersecurity. I am not only interested in designing and devloping systems
                        but also in the management of IT infrastructure. <br> <br>
                        Over the last several years, while studying, I have pursued my passion of cooking by working within kitchens.
                        Over the course of this work I have been able to work with and learn from many great chefs and teams. 
                        Through teamwork, organisation and attention to detail I have been able to achieve accomplishments in this area I am proud of 
                        such as working within a GFG hatted kitchen and making the jam that filled the best jam donut in Australia for 2 years running.
                    </p>
                    <IconDisplay :icons="iconsProgramming" :directionRight="true"/>
                    <IconDisplay :icons="iconsOperations" :directionRight="false"/>
                </div>
            </div>
            <div class="row mt-1 flex-column flex-md-row justify-content-center">
                <div class="col infoCards">
                    <div class="card mb-1 text-white bg-dark">
                        <div class="card-header ">Education</div>
                        <div class="card-body">
                            <h5 class="card-title">Bachelor of Computer Science - Deakin University</h5>
                            <p class="card-text">Expected graduation: Feburary 2026</p>
                            <p class="card-text">Achieving distinction WAM</p>
                            <p class="card-text">Relevant coursework: </p>
                            <ul>
                                <li>Object Orientated Development (D)</li>
                                <li>Data Structures and Algorithms (C)</li>
                                <li>Database Fundamentals (HD)</li>
                                <li>Secure Coding (HD)</li>
                                <li>Networks and Communication (D)</li>
                                <li>Network Forensics (D)</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="col infoCards">
                    <div class="card mb-1 text-white bg-dark">
                        <div class="card-header ">Certifications</div>
                        <div class="card-body">
                            <h5 class="card-title">Certified Application Security Engineer (Java)</h5>
                            <p class="card-text">EC-Council - 2023 </p>
                            <h5 class="card-title">SC-900: Microsoft Security, Compliance, and Identity Fundamentals</h5>
                            <p class="card-text">Microsoft - 2023 </p>
                            <h5 class="card-title">MS-900: Microsoft 365 Fundamentals</h5>
                            <p class="card-text">Microsoft - 2023 </p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
    .profile {

        border-radius: 10%;
        max-width: 300px;
        height: auto;
        box-shadow: 2rem 1rem 2px gray ;
    }
    .profileReversed {

    border-radius: 10%;
    max-width: 300px;
    height: auto;
    box-shadow: -2rem -1rem 2px gray ;
}
@media (min-width: 768px) {
    .infoCards {
        max-width: 40%;
    }
    .text {
        margin-right: 5rem;
        padding-right: 0rem;
        text-align: start !important;
    }
    .textRight {
        margin-left: 5rem;
        padding-right: 5rem;
        text-align: end !important;
    }

}    
</style>