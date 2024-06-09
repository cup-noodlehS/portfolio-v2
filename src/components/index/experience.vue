<template>
  <div id="experience" class="my-5">
    <h1>experience(self):</h1>
    <h4 class="mb-5">_what i have done?</h4>
    <div class="d-flex flex-wrap">
      <div v-for="(company, index) in experience" :key="index" class="exp-box">
        <a :href="company.link" target="_blank" class="text-decoration-none">
          <h4 class="title">{{ company.company }}</h4>
        </a>
        <ul>
          <li v-for="position in company.positions" :key="position.title">
            <p class="sub-title">{{ position.title }}</p>
            <div class="d-flex m-1">
              <div class="vr me-3"></div>
              <div>
                <p class="date">{{ position.date }}</p>
                <p class="skills">
                  <span v-for="(skill, index) in position.skills" :key="skill">
                    {{ skill }}
                    <span v-if="index < position.skills.length - 1">· </span>
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const experience = [
  {
    company: "BPOSeats",
    link: "https://www.linkedin.com/company/bposeats/mycompany/",
    positions: [
      {
        title: "Full Stack Developer",
        date: "October 2023 - Present",
        skills: ["Django", "Vue.js", "Python"],
      },
      {
        title: "Full Stack Developer Intern",
        date: "September 2023",
        skills: ["Django", "Vue.js", "Python", "PostgreSQL", "SCSS"],
      },
    ],
  },
  {
    company: "Wrytopia",
    link: "https://www.linkedin.com/company/wrytopiaonline/",
    positions: [
      {
        title: "Lead Web Developer",
        date: "August 2023 - Febuary 2024",
        skills: ["Vue.js", "SCSS", "Bootstrap", "Lottie"],
      },
    ],
  },
  {
    company: "Innovustech",
    link: "https://github.com/innovustech/",
    positions: [
      {
        title: "Fullstack Web Developer",
        date: "Febuary 2024 - Present",
        skills: ["Next.js", "Django", "Tailwind", "Zustand", "Figma"],
      },
    ],
  },
];
</script>
<style scoped>
h1 {
  font-weight: 1000;
}
h4 {
  color: rgb(241, 241, 120);
  font-weight: 600;
}
p {
  line-height: 0.8;
}
.sub-title {
  font-weight: 600;
  font-size: 1.2rem;
}
.date {
  color: gray;
}
.exp-box {
  margin: 1rem;
  max-width: 400px;
}
.skills {
  line-height: 1.5;
}
</style>
