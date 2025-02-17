<template>
    <div class="floating-circle"></div>
    <div class="floating-circle"></div>
    <div class="floating-circle"></div>
    <header class="header">
        <div class="grid-overlay" ref="gridOverlay"></div>
        <div class="container d-flex flex-col justify-content-center">
            <Cover />
        </div>
    </header>
    <main class="container">
        <div class="d-flex flex-wrap my-5">
            <div
                class="flex-grow-1 px-4"
                style="min-width: 300px; flex-basis: 50%"
            >
                <Experience />
            </div>
            <div
                class="flex-grow-1 px-4"
                style="min-width: 300px; flex-basis: 50%"
            >
                <TechStack />
            </div>
        </div>
        <Features />
        <!-- <hr /> -->
        <!-- <hr />
    <Projects /> -->
        <!-- <hr /> -->
        <About />
    </main>
</template>
<script>
import Cover from '../components/index/cover.vue';
import Features from '../components/index/features.vue';
import Projects from '../components/index/projects.vue';
import About from '../components/index/about.vue';
import Experience from '../components/index/experience.vue';
import TechStack from '@/components/index/TechStack.vue';

export default {
    components: {
        Cover,
        Features,
        Projects,
        About,
        Experience,
        TechStack,
    }
};
</script>

<style scoped>
.header {
    position: relative;
    overflow: hidden;
    min-height: 400px;
}

body {
    background-color: rgb(12, 10, 27);
}

:global(body) {
    background-image: linear-gradient(#ffffff0c 1px, transparent 1px),
        linear-gradient(90deg, #ffffff04 1px, transparent 1px);
    background-size: 50px 50px;
    background-color: rgb(12, 10, 27);
}

.grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.grid-tile {
    position: absolute;
    width: 50px;
    height: 50px;
    animation: fadeInOut 2s ease-in-out;
}

@keyframes fadeInOut {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    33% {
        transform: translate(200px, -250px) rotate(120deg);
    }
    66% {
        transform: translate(-200px, 200px) rotate(240deg);
    }
    100% {
        transform: translate(0, 0) rotate(360deg);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(.5);
    }
    50% {
        transform: scale(1.2);
    }
}

.header::before,
.header::after,
main::before {
    content: '';
    position: fixed;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(255, 217, 0, 0.15), rgba(255, 217, 0, 0.05));
    filter: blur(50px);
    z-index: -1;
    animation: float 15s ease-in-out infinite;
}

.header::before {
    top: -100px;
    left: -100px;
    animation-delay: 0s;
}

.header::after {
    bottom: 20%;
    right: 10%;
    animation-delay: -5s;
}

main::before {
    top: 40%;
    left: 30%;
    animation-delay: -10s;
}

.floating-circle {
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(255, 217, 0, 0.08), rgba(255, 217, 0, 0.02));
    filter: blur(50px);
    z-index: -1;
    animation: 
        float 15s ease-in-out infinite,
        pulse 8s ease-in-out infinite;
}

.floating-circle:nth-child(1) {
    top: -100px;
    left: -100px;
    animation-delay: 0s, 2s;
}

.floating-circle:nth-child(2) {
    bottom: 20%;
    right: 10%;
    animation-delay: -5s, 0s;
}

.floating-circle:nth-child(3) {
    top: 40%;
    left: 30%;
    animation-delay: -10s, 4s;
}
</style>
