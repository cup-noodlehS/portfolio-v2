<template>
  <div class="techstack">
    <h1 class="fw-semibold mb-3">TechStack.order_by('proficiency')</h1>
    <div class="highlights d-flex gap-4 justify-content-center mb-4">
      <a
        v-for="highlight in highlights"
        :key="highlight.name"
        class="highlight text-decoration-none"
        :href="highlight.link"
        target="_blank"
      >
        <img :src="highlight.url" alt="JavaScript" class="logo" />
        <p class="m-0 fs-5 text-white">{{ highlight.name }}</p>
      </a>
    </div>
    <div class="d-flex flex-wrap gap-3 justify-content-center items">
      <a
        v-for="item in items"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="techstack-item d-flex align-items-center gap-2 item"
      >
        <img :src="item.url" :alt="item.name" class="logo" />
        <p class="m-0 fs-4">{{ item.name }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
const highlights = [
  {
    name: "Python",
    url: "images/techstack/python.svg",
    link: "https://www.python.org/",
  },
  {
    name: "JavaScript",
    url: "images/techstack/js.svg",
    link: "https://www.javascript.com/",
  },
  {
    name: "Vue.js",
    url: "images/techstack/vue.svg",
    link: "https://vuejs.org/",
  },
  {
    name: "Django",
    url: "images/techstack/django.svg",
    link: "https://www.djangoproject.com/",
  },
  {
    name: "Next.js",
    url: "images/techstack/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind",
    url: "images/techstack/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
];
const items = [
  {
    name: "React.js",
    url: "images/techstack/react.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "SASS",
    url: "images/techstack/sass.svg",
    link: "https://sass-lang.com/",
  },
  {
    name: "OpenAI API",
    url: "images/techstack/openai.svg",
    link: "https://www.openai.com/",
  },
  {
    name: "Node.js",
    url: "images/techstack/nodejs.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    url: "images/techstack/express.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    url: "images/techstack/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    url: "images/techstack/mongodb.svg",
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

    img {
      width: 90px;
      height: 90px;
      border-radius: 10px;
    }
  }
}

.items {
  margin-bottom: 50px;
  .item {
    border: solid 1px rgba(255, 255, 255, 0.493);
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

    .logo {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
