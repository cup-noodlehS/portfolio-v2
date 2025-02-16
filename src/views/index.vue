<template>
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
    },
    mounted() {
        this.initializeGrid();
    },
    methods: {
        initializeGrid() {
            const overlay = this.$refs.gridOverlay;
            const cols = Math.ceil(window.innerWidth / 50);
            const rows = Math.ceil(overlay.offsetHeight / 50);
            
            setInterval(() => {
                const x = Math.floor(Math.random() * cols);
                const y = Math.floor(Math.random() * rows);
                
                const tile = document.createElement('div');
                tile.className = 'grid-tile';
                tile.style.left = `${x * 50}px`;
                tile.style.top = `${y * 50}px`;
                tile.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                
                overlay.appendChild(tile);
                
                setTimeout(() => {
                    overlay.removeChild(tile);
                }, 2000);
            }, 200);
        }
    }
};
</script>

<style scoped>
.header {
    background-image: linear-gradient(#ffffff0c 1px, transparent 1px),
        linear-gradient(90deg, #ffffff04 1px, transparent 1px);
    background-size: 50px 50px;
    background-color: rgb(12, 10, 27);
    position: relative;
    overflow: hidden;
    min-height: 400px;
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
</style>
