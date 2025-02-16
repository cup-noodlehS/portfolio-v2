<template>
    <div
        id="home"
        class="home d-flex justify-content-center align-items-center flex-wrap gap-5"
    >
        <img ref="meImg" src="images/gwapo.png" alt="" id="meImg" class="p-0" />
        <div class="home-content">
            <div class="text">
                <h4 class="mb-3">Hello, they call me "Don";</h4>
                <h5>
                    I am a <span class="yellow">full-stack developer</span> who loves to
                    create;&#41;
                </h5>
            </div>
            <div
                class="links mt-5 d-flex gap-2 flex-wrap justify-content-center justify-content-md-start"
            >
                <a
                    href="https://docs.google.com/document/d/1S6GlI8iNzV1x96EFbUg3G5K0j2JufXCh2ZP0D4HsCnk/edit?usp=sharing"
                    target="_blank"
                >
                    <Button class="button-1 rounded-pill">Resume</Button>
                </a>
                <div class="d-flex gap-2">
                    <a href="https://github.com/cup-noodlehS" target="_blank">
                        <Button class="button-2"
                            ><img src="images/github.svg" alt="" class=""
                        /></Button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sheldonarthur/"
                        target="_blank"
                    >
                        <Button class="button-2"
                            ><img
                                src="images/linkedin.svg"
                                alt=""
                                class="" /></Button
                    ></a>
                    <a
                        href="mailto:sheldonarthursagrado@gmail.com"
                        target="_blank"
                    >
                        <Button class="button-2"
                            ><img
                                src="images/mail.svg"
                                alt=""
                                class="pt-1" /></Button
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/index/Button.vue";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const meImg = ref(null);
const meImgRadius = ref([38, 62, 61, 39, 28, 43, 57, 72]);
const direction = ref([true, true, true, true, true, true, true, true]);

const x = ref(0);
const testFunction = () => {
    console.log("testFunction", x.value);
    x.value = 5;
    console.log("testFunction", x.value);
};

const animateRadius = async () => {
    try {
        while (true) {
            for (let i = 0; i < meImgRadius.value.length; i++) {
                if (meImgRadius.value[i] >= 100 || meImgRadius.value[i] <= 20) {
                    direction.value[i] = !direction.value[i];
                }
                if (direction.value[i]) {
                    meImgRadius.value[i]++;
                } else {
                    meImgRadius.value[i]--;
                }
            }

            const [r1, r2, r3, r4, r5, r6, r7, r8] = meImgRadius.value;
            meImg.value.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%`;

            await wait(60);
        }
    } catch (error) {
        console.error("Error in animation:", error);
    }
};

onMounted(() => {
    animateRadius();
    testFunction();
});
</script>

<style scoped>
.home {
    min-height: 100lvh;
    padding-top: 90px;
}

#meImg {
    max-width: 400px;
    border-radius: 38% 62% 61% 39% / 28% 43% 57% 72%;
    border: solid 3px #f1f178;
    box-shadow: 0 0 20px 5px #f1f178;
    -webkit-user-drag: none;
}
.home-content {
    width: 50%;
}

h5 {
    font-size: 3rem !important;
    font-weight: 1000;

    @media screen and (max-width: 768px) {
        font-size: 2rem !important;
    }
}
.yellow {
    color: rgb(241, 241, 120);
}

/* #meImg:hover {
  animation: shake 1s;
} */

.home-links {
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    box-shadow: 2px 2px 0 rgb(255, 255, 255);
    transition: all 0.2s ease;
}

.home-links:hover {
    transform: translate(-5px, -5px);
    box-shadow: 7px 7px 0 rgb(255, 255, 255);
}

@media (max-width: 768px) {
    .home {
        flex-direction: column;
    }
    #meImg {
        width: 60%;
        /* height: 100%; */
    }

    .home-content {
        width: 100%;
    }

    h4 {
        font-size: 1rem;
    }
}
</style>
