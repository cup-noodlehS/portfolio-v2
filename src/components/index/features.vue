<template>
  <div id="featured" class="my-5 container">
    <h1 class="">_featuredProjects {{ screenWidth }}</h1>
    <hr />
    <div class="mt-5 container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="featured-section"
      >
        <div class="row">
          <div
            v-if="index % 2 == 0 || screenWidth <= 992"
            class="img-cont col-12 col-lg-6"
          >
            <img :src="project.imgUrl" class="featured-img" alt="" />
          </div>
          <div class="featured-description col-12 col-lg-6">
            <h1>{{ project.title }}</h1>
            <h4>{{ project.subtitle }}</h4>
            <h5>
              {{ project.description }}
            </h5>
            <div class="mb-3">
              <div v-for="skill in project.skills" key="skill" class="badge1">
                <div>{{ skill }}</div>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <a :href="project.link" target="_blank"
                ><button class="view me-2">take a look</button></a
              >
              <a
                :href="project.github"
                target="_blank"
                class="home-links btn btn-dark mx-2"
                ><img src="images/github.svg" alt="" class="pt-1"
              /></a>
            </div>
          </div>
          <div
            v-if="index % 2 != 0 && screenWidth > 992"
            class="img-cont col-12 col-lg-6"
          >
            <img :src="project.imgUrl" class="featured-img" alt="" />
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3 fs-5 justify-content-center">
        View more on my
        <a
          href="https://github.com/cup-noodlehS"
          class="d-flex align-items-center gap-2 text-white"
        >
          github
          <img src="images/github.svg" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: 0,
      projects: [
        {
          imgUrl: "images/campgo.png",
          title: "CampGo",
          subtitle: "Campground Website",
          description:
            "Its core functionality revolves around offering users an immersive experience, granting them access to a curated collection of campgrounds situated in diverse locations, each accompanied by comprehensive details",
          skills: [
            "EJS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mapbox",
            "Cloudinary",
            "BootstrapCSS",
          ],
          link: "https://vast-rose-drill-boot.cyclic.app/",
          github: "https://github.com/cup-noodlehS/CampGo.git",
        },
        {
          imgUrl: "images/wrytopia.png",
          title: "wrytopia",
          subtitle: "Business Website",
          description:
            "Wrytopia is a reliable third-party agent committed to assisting global English writers by providing high-quality writing services that pave the way for your writing carer.",
          skills: ["Vue.js", "BootstrapCSS", "SCSS", "Lottie"],
          link: "https://wrytopia.vercel.app/",
          github: "https://github.com/cup-noodlehS/CampGo.git",
        },
        {
          imgUrl: "images/dfa.png",
          title: "FaVisualizer",
          subtitle: "Finite Automata Website",
          description:
            "A website  for generating Deterministic Finite Automata (DFA) graph from a regex input, and checking the if a DFA accepts a given string. ",
          skills: [
            "Next.js/React.js",
            "Zustand",
            "TailwindCSS",
            "SCSS",
            "IDB",
            "ReactFlow",
          ],
          link: "https://favisualizer.vercel.app/",
          github: "https://github.com/maxellmilay/finite-automata-visualizer",
        },
        {
          imgUrl: "images/cmscblog.png",
          title: "CMSC-21 Blog",
          subtitle: "Blog about our CMSC-21 course in UP Cebu",
          description:
            "We are Computer Science students from the University of the Philippines Cebu, and we've whipped up this cool blog as part of our coursework",
          skills: ["EJS", "Node.js", "Express.js"],
          link: "https://cmsc21-blogs.vercel.app/",
          github: "https://github.com/cup-noodlehS/CMSC21Blogs.git",
        },
      ],
    };
  },
  created() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style scoped>
h1 {
  font-weight: 1000;
}

h4 {
  color: rgb(241, 241, 120);
  font-weight: 600;
  margin-bottom: 1rem;
}

.img-cont {
  aspect-ratio: 16/9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 3%;
  box-shadow: rgba(253, 227, 0, 0.4) -5px 5px, rgba(194, 185, 7, 0.3) -10px 10px,
    rgba(255, 243, 6, 0.2) -15px 15px, rgba(194, 191, 4, 0.1) -20px 20px,
    rgba(251, 255, 0, 0.05) -25px 25px;
  margin-bottom: 2rem;
}

.featured-img {
  height: 100%;
}

.badge1 {
  display: inline-block;
  background-color: rgb(18, 32, 57);
  padding: 5px 10px;
  border-radius: 25px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

.view {
  color: rgb(12, 10, 27);
  font-weight: 1000 !important;
  padding: 0.8rem 1.2rem;
  background-color: rgb(241, 241, 120);
  border-radius: 5px;
  border: none;
  box-shadow: 3px 3px 0 rgb(255, 255, 255);
  transition: all 0.2s ease;
}

.view:hover {
  transform: translate(-5px, -5px);
  box-shadow: 8px 8px 0 rgb(255, 255, 255);
  filter: brightness(120%);
}

.featured-section {
  margin-bottom: 120px !important;
}

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
</style>
