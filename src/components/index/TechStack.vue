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
          <p class="m-0 fs-6">{{ item.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  },
  {
    name: "JavaScript",
    icon: "mdi-language-javascript",
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Vue.js",
    icon: "mdi-vuejs",
    link: "https://vuejs.org/",
  },
  {
    name: "Django",
    icon: "mdi-alpha-d-box",
    link: "https://www.djangoproject.com/",
  },
  {
    name: "Next.js",
    icon: "mdi-alpha-n-box",
    link: "https://nextjs.org/",
  },
  {
    name: "React.js",
    icon: "mdi-react",
    link: "https://reactjs.org/",
  },
  {
    name: "Svelte",
    icon: "mdi-alpha-s-box",
    link: "https://svelte.dev/",
  },
  {
    name: "FastAPI",
    icon: "mdi-alpha-f-box",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    name: "Docker",
    icon: "mdi-docker",
    link: "https://www.docker.com/",
  },
  {
    name: "AWS",
    icon: "mdi-aws",
    link: "https://aws.amazon.com/",
  },
  {
    name: "Tailwind",
    icon: "mdi-tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: "mdi-nodejs",
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: "mdi-alpha-e-box",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    icon: "mdi-database",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: "mdi-leaf",
    link: "https://www.mongodb.com/",
  },
];
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
</style>
