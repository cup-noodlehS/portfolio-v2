<template>
    <div class="techstack">
        <h1 class="fw-semibold mb-3">TechStack.order_by('proficiency')</h1>
        <div class="d-flex flex-wrap gap-3 items">
            <a v-for="item in items" :key="item.name" :href="item.link" target="_blank" class="techstack-item d-flex align-items-center gap-2 item">
                <img :src="item.url" :alt="item.name" class="logo" />
                <p class="m-0 fs-4">{{ item.name }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Python',
                    url: 'images/techstack/python.svg',
                    link: 'https://www.python.org/'
                },
                {
                    name: 'JavaScript',
                    url: 'images/techstack/js.svg',
                    link: 'https://www.javascript.com/'
                },
                {
                    name: 'Vue.js',
                    url: 'images/techstack/vue.svg',
                    link: 'https://vuejs.org/'
                }, 
                {
                    name: 'Django',
                    url: 'images/techstack/django.svg',
                    link: 'https://www.djangoproject.com/'
                }, 
                {
                    name: 'React.js',
                    url: 'images/techstack/react.svg',
                    link: 'https://reactjs.org/'
                },
                {
                    name: 'Next.js',
                    url: 'images/techstack/nextjs.svg',
                    link: 'https://nextjs.org/'
                },
                {
                    name: 'Tailwind',
                    url: 'images/techstack/tailwindcss.svg',
                    link: 'https://tailwindcss.com/'
                },
                {
                    name: 'SASS',
                    url: 'images/techstack/sass.svg',
                    link: 'https://sass-lang.com/'
                },
                {
                    name: 'OpenAI API',
                    url: 'images/techstack/openai.svg',
                    link: 'https://www.openai.com/'
                },
                {
                    name: 'Node.js',
                    url: 'images/techstack/nodejs.svg',
                    link: 'https://nodejs.org/'
                },
                {
                    name: 'Express.js',
                    url: 'images/techstack/express.svg',
                    link: 'https://expressjs.com/'
                },
                {
                    name: 'PostgreSQL',
                    url: 'images/techstack/postgresql.svg',
                    link: 'https://www.postgresql.org/'
                },
                {
                    name: 'MongoDB',
                    url: 'images/techstack/mongodb.svg',
                    link: 'https://www.mongodb.com/'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.techstack {
    max-width: 100vw;
    h1 {
        word-wrap: break-word;
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