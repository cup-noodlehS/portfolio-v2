<template>
  <div class="techstack">
    <h1 class="fw-semibold mb-3">TechStack.order_by('proficiency')</h1>
    <div class="d-flex flex-column gap-3 justify-content-center items">
      <div class="tech-grid">
        <a
          v-for="item in items"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="techstack-item d-flex align-items-center gap-2 item"
        >
          <i :class="item.icon" class="mdi"></i>
          <div class="d-flex flex-column gap-1 w-100">
            <p class="m-0 fs-6">{{ item.name }}</p>
            <div class="progress">
              <div 
                class="progress-bar" 
                :style="{ width: isVisible ? item.proficiency + '%' : '0%' }"
                ref="progressBars"
              ></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const highlights = [
  // {
  //   name: "Python",
  //   url: "images/techstack/python.svg",
  //   link: "https://www.python.org/",
  // },
  // {
  //   name: "JavaScript",
  //   url: "images/techstack/js.svg",
  //   link: "https://www.javascript.com/",
  // },
  // {
  //   name: "Vue.js",
  //   url: "images/techstack/vue.svg",
  //   link: "https://vuejs.org/",
  // },
  // {
  //   name: "Django",
  //   url: "images/techstack/django.svg",
  //   link: "https://www.djangoproject.com/",
  // },
  // {
  //   name: "Next.js",
  //   url: "images/techstack/nextjs.svg",
  //   link: "https://nextjs.org/",
  // },
  // {
  //   name: "Tailwind",
  //   url: "images/techstack/tailwindcss.svg",
  //   link: "https://tailwindcss.com/",
  // },
];
const items = [
  {
    name: "Python",
    icon: "mdi-language-python",
    link: "https://www.python.org/",
    proficiency: 100
  },
  {
    name: "JavaScript",
    icon: "mdi-language-javascript",
    link: "https://www.javascript.com/",
    proficiency: 100
  },
  {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    link: "https://www.typescriptlang.org/",
    proficiency: 100
  },
  {
    name: "Vue.js",
    icon: "mdi-vuejs",
    link: "https://vuejs.org/",
    proficiency: 90
  },
  {
    name: "Django",
    icon: "mdi-alpha-d-box",
    link: "https://www.djangoproject.com/",
    proficiency: 90
  },
  {
    name: "Next.js",
    icon: "mdi-alpha-n-box",
    link: "https://nextjs.org/",
    proficiency: 70
  },
  {
    name: "React.js",
    icon: "mdi-react",
    link: "https://reactjs.org/",
    proficiency: 70
  },
  {
    name: "Svelte",
    icon: "mdi-alpha-s-box",
    link: "https://svelte.dev/",
    proficiency: 90
  },
  {
    name: "FastAPI",
    icon: "mdi-alpha-f-box",
    link: "https://fastapi.tiangolo.com/",
    proficiency: 60
  },
  {
    name: "Docker",
    icon: "mdi-docker",
    link: "https://www.docker.com/",
    proficiency: 80
  },
  {
    name: "AWS",
    icon: "mdi-aws",
    link: "https://aws.amazon.com/",
    proficiency: 80
  },
  {
    name: "Tailwind",
    icon: "mdi-tailwind",
    link: "https://tailwindcss.com/",
    proficiency: 100
  },
  {
    name: "Node.js",
    icon: "mdi-nodejs",
    link: "https://nodejs.org/",
    proficiency: 50
  },
  {
    name: "Express.js",
    icon: "mdi-alpha-e-box",
    link: "https://expressjs.com/",
    proficiency: 60
  },
  {
    name: "PostgreSQL",
    icon: "mdi-database",
    link: "https://www.postgresql.org/",
    proficiency: 80
  },
  {
    name: "MongoDB",
    icon: "mdi-leaf",
    link: "https://www.mongodb.com/",
    proficiency: 60
  },
];

const isVisible = ref(false);
const progressBars = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.1 }
  );

  // Observe the first progress bar (since they're all in the same container)
  if (progressBars.value[0]) {
    observer.observe(progressBars.value[0]);
  }
});
</script>

<style scoped lang="scss">
.techstack {
  max-width: 100vw;
  h1 {
    word-wrap: break-word;
  }
}

.highlights {
  .highlight {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 150px;
    border-radius: 5px 20px 5px;
    border: solid 1px white;
    box-shadow: -5px 5px 0 rgb(255, 255, 255);

    &:hover {
      transform: translate(5px, -5px);
      box-shadow: -10px 10px 0 rgb(255, 255, 255);
    }

    .mdi.tech-icon {
      font-size: 90px;
    }
  }
}

.items {
  margin-bottom: 50px;
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .item {
    border: solid 1px rgb(247, 247, 193);
    padding: 5px 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.034);
    box-shadow: 0 0 7px rgba(248, 255, 151, 0.479);
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: all 0.1s ease;
    &:hover {
      transform: scale(1.05);
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 7px rgba(248, 255, 151, 0.479);
    }

    .mdi {
      font-size: 30px;
    }
  }
}

.progress {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;

  .progress-bar {
    height: 100%;
    background-color: rgb(241, 241, 120);
    transition: width 1s ease; // Increased duration for more noticeable effect
    width: 0%; // Start at 0
  }
}
</style>
