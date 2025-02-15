<template>
    <header class="header">
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
        <hr />
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
};
</script>
