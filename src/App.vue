<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import { loadSlim } from 'tsparticles-slim';

const particlesInit = async engine => {
    await loadSlim(engine);
};
</script>

<template>
  <div class='d-flex flex-column' id="app">
    <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#212529'
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        }
                    },
                    detectRetina: true
                }"
        />
    <MainHeader/>
    <RouterView id="content" v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
    <MainFooter id="footer"/>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #212529;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
#app {
  width: 100%;
  min-height: 100vh;
}
#footer {
  width: 100%;
  position: relative;
}
#content {
  flex-grow: 2;
}
</style>
