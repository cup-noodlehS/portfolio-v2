<template>
  <div id="featured" class="my-5 container overflow-x-hidden">
    <h1 class="">_featuredProjects</h1>
    <hr />
    <div class="mt-5 container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="featured-section"
        ref="projectItems"
        :class="{
          'slide-from-left': visibleProjects[index] && (index % 2 === 0),
          'slide-from-right': visibleProjects[index] && (index % 2 !== 0),
          'hidden': !visibleProjects[index]
        }"
      >
        <div class="row">
          <div v-if="index % 2 == 0 || screenWidth <= 992" class="col-12 col-lg-6">
            <div
              class="img-cont"
            >
              <a :href="project.link" target="_blank">
                <img :src="project.imgUrl" class="featured-img" alt="" />
              </a>
            </div>
          </div>
          <div class="featured-description col-12 col-lg-6">
            <h1>{{ project.title }}</h1>
            <h4>{{ project.subtitle }}</h4>
            <span class="project-description">
              {{ project.description }}
            </span>
            <div class="my-3">
              <div 
                v-for="(skill, index) in project.skills" 
                :key="skill" 
                :class="{'badge1': index !== 0, 'badge1-first': index === 0}"
              >
                <div class="no-highlight">{{ skill }}</div>
              </div>
            </div>
            <div class="d-flex gap-2 justify-content-start">
              <a :href="project.link" target="_blank"
                ><Button class="button-1">take a look</Button></a
              >
              <a :href="project.github" target="_blank" class="">
                <Button class="button-2"
                  ><img src="images/github.svg" alt="" class="pt-1"
                /></Button>
              </a>
            </div>
          </div>
          <div v-if="index % 2 != 0 && screenWidth > 992" class="col-12 col-lg-6">
            <div
              class="img-cont"
            >
              <a :href="project.link" target="_blank">
                <img :src="project.imgUrl" class="featured-img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center gap-3 fs-5 justify-content-center">
        <a
          href="https://github.com/cup-noodlehS"
          class="d-flex align-items-center gap-2 text-white"
          target="_blank"
        >
          View more on my github
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      screenWidth: 0,
      projects: [
        {
          imgUrl: "images/wrytopia.png",
          title: "wrytopia",
          subtitle: "Business Website",
          description:
            "Wrytopia is a reliable third-party agent committed to assisting global English writers by providing high-quality writing services that pave the way for your writing carer.",
          skills: ["Frontend web", "Vue.js", "BootstrapCSS", "SCSS", "Lottie"],
          link: "https://wrytopia.vercel.app/",
          github: "https://github.com/cup-noodlehS/wrytopia-v2.0",
        },
        {
          imgUrl: "images/gallery.png",
          title: "MooNine Gallery",
          subtitle: "An Art Auction Website",
          description:
            "A website that allows users to view and bid on art pieces. It also allows artists to upload their art pieces for auction.",
          skills: [
            "Full Stack Web",
            "Django",
            "DRF",
            "Next.js",
            "TailwindCSS",
            "Material UI",
            "Daisy UI",
            "SCSS",
            "PostgreSQL",
            "Cloudinary",
          ],
          link: "https://moonine.vercel.app/",
          github: "https://github.com/cup-noodlehS/art-gallery-api",
        },
        {
          imgUrl: "images/dfa.png",
          title: "FaVisualizer",
          subtitle: "Finite Automata Website",
          description:
            "A website  for generating Deterministic Finite Automata (DFA) graph from a regex input, and checking the if a DFA accepts a given string. ",
          skills: [
            "Frontend Web",
            "Next.js",
            "Zustand",
            "TailwindCSS",
            "SCSS",
            "IDB",
            "ReactFlow",
          ],
          link: "https://favisualizer.vercel.app/",
          github: "https://github.com/innovustech/finite-automata-visualizer",
        },
        {
          imgUrl: "images/beacon.png",
          title: "Beacon",
          subtitle: "AI Career Guidance Website",
          description:
            "A ingenious career guidance application. Seamlessly integrating AI algorithms with user feedback, Beacon crafts tailor-made career roadmaps, empowering individuals to navigate their professional trajectories with confidence and clarity.",
          skills: [
            "Full Stack Web",
            "OpenAI API",
            "D3.js",
            "Next.js",
            "Django",
            "Firebase",
            "TailwindCSS",
            "SCSS",
          ],
          link: "https://beaconph.site",
          github: "https://github.com/innovustech/beacon",
        },
        // {
        //   imgUrl: "images/campgo.png",
        //   title: "CampGo",
        //   subtitle: "Campground Website",
        //   description:
        //     "Its core functionality revolves around offering users an immersive experience, granting them access to a curated collection of campgrounds situated in diverse locations, each accompanied by comprehensive details \n\n (Note: this is not available as of the moment because cyclic.sh is down)",
        //   skills: [
        //     "BackendWeb",
        //     "EJS",
        //     "Node.js",
        //     "Express.js",
        //     "MongoDB",
        //     "Mapbox",
        //     "Cloudinary",
        //     "BootstrapCSS",
        //   ],
        //   link: "https://vast-rose-drill-boot.cyclic.app/",
        //   github: "https://github.com/cup-noodlehS/CampGo.git",
        // },
        // {
        //   imgUrl: "images/cmscblog.png",
        //   title: "CMSC-21 Blog",
        //   subtitle: "Blog about our CMSC-21 course in UP Cebu",
        //   description:
        //     "We are Computer Science students from the University of the Philippines Cebu, and we've whipped up this cool blog as part of our coursework",
        //   skills: ["EJS", "Node.js", "Express.js"],
        //   link: "https://cmsc21-blogs.vercel.app/",
        //   github: "https://github.com/cup-noodlehS/CMSC21Blogs.git",
        // },
      ],
      visibleProjects: [],
    };
  },
  created() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
    this.visibleProjects = new Array(this.projects.length).fill(false);
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = this.$refs.projectItems.findIndex(
            (item) => item === entry.target
          );
          if (index !== -1) {
            this.visibleProjects[index] = entry.isIntersecting;
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px'
      }
    );

    this.$refs.projectItems.forEach((item) => {
      observer.observe(item);
    });
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
  display: block;
  position: relative;
  border-radius: 10px;
  box-shadow: rgba(253, 227, 0, 0.4) -5px 5px, rgba(194, 185, 7, 0.3) -10px 10px,
    rgba(255, 243, 6, 0.2) -15px 15px, rgba(194, 191, 4, 0.1) -20px 20px,
    rgba(251, 255, 0, 0.05) -25px 25px;
  margin-bottom: 2rem;
}

.featured-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
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

.badge1-first {
  display: inline-block;
  background-color: rgb(236, 236, 191);
  color: rgb(18, 32, 57);
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
  will-change: transform, opacity;
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

.project-description {
  white-space: pre-line;
  font-size: 1.1rem;
}
.no-highlight {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}

.hidden {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.8s ease;
}

.slide-from-left {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.8s ease;
}

.slide-from-right {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.8s ease;
}

.hidden:nth-child(even) {
  transform: translateX(100px);
  transition: all 0.8s ease;
}
</style>
