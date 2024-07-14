<script>

export default {
    props: {
        icons: Array,
        directionRight: Boolean
    },
    methods: {
        getURL(icon) {
            return new URL(`../assets/icons/${icon.value}.svg`, import.meta.url)
        }
    }
}

</script>


<template>
    <div class="container-fluid slideSet mb-1">
        <div v-for="icon in icons" :key="icon.value" class='iconContainer' :class=" directionRight ? 'slideSetChildRight':'slideSetChildLeft'">
            <img :src="getURL(icon)" class="icon">
        </div>
    </div>
</template>

<style>
 .slideSet {
    position:relative;
    overflow: hidden;
    height: 2rem;
 }
 @media (min-width: 992px) {
    .slideSet {
        height: 3rem;
    }
}
@media (min-width: 1200px) {
    .slideSet {
        height: 4rem;
    }
}
 .iconContainer {
    position: absolute;
    height:100%;
    width: 10%;
 }
 .icon {
    height:100%;
    width: auto;
 }
 .slideSetChildRight {
    right:100%;
    animation: 10s autoplay infinite linear;
 }
 .slideSetChildLeft {
    left:100%;
    animation: 10s autoplayLeft infinite linear;
 }
 @keyframes autoplay {
    0% {right:100%;
        opacity: 0%;}
    10% { opacity: 10%;}
    50% { opacity: 100%;}
    90% { opacity:10%;}
    100% {right:0%; opacity: 0%;}
 }
 @keyframes autoplayLeft {
    0% {left:100%;
        opacity: 0%;}
    10% { opacity: 10%;}
    50% { opacity: 100%;}
    90% { opacity:10%;}
    100% {left:0%; opacity: 0%;}
 }
 .slideSet > *:nth-child(1) {animation-delay: 0s}
 .slideSet > *:nth-child(2) {animation-delay: 1s}
 .slideSet > *:nth-child(3) {animation-delay: 2s}
 .slideSet > *:nth-child(4) {animation-delay: 3s}
 .slideSet > *:nth-child(5) {animation-delay: 4s}
 .slideSet > *:nth-child(6) {animation-delay: 5s}
 .slideSet > *:nth-child(7) {animation-delay: 6s}
 .slideSet > *:nth-child(8) {animation-delay: 7s}
 .slideSet > *:nth-child(9) {animation-delay: 8s}
 .slideSet > *:nth-child(10) {animation-delay: 9s}
</style>