<template>
  <div id="experience" class="my-5">
    <h1>experience(self):</h1>
    <h4 class="mb-5">_what i have done?</h4>
    <div class="d-flex flex-wrap">
      <div v-for="(company, index) in experience" :key="index" class="exp-box">
        <a :href="company.link" target="_blank" class="text-decoration-none">
          <h4 class="title">{{ company.company }}</h4>
        </a>
        <p class="m-1 date">{{ company.duration }}</p>
        <ul>
          <li v-for="position in company.positions" :key="position.title">
            <p class="sub-title">{{ position.title }}</p>
            <div class="d-flex m-1">
              <div class="vr me-3"></div>
              <div>
                <p class="date">
                  {{ position.date }} · {{ position.duration }}
                </p>
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
function elapsedMonthsAndYears(
  startMonth,
  startYear,
  endMonth = null,
  endYear = null
) {
  // Get current date if end month/year are not provided
  if (endMonth === null || endYear === null) {
    const currentDate = new Date();
    endMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
    endYear = currentDate.getFullYear();
  }

  // Calculate elapsed years and months
  let elapsedYears = endYear - startYear;
  let elapsedMonths = endMonth - startMonth;

  // Adjust for negative months
  if (elapsedMonths < 0) {
    elapsedYears--;
    elapsedMonths += 12;
  }

  // Build the result string
  let result = "";
  if (elapsedYears > 0) {
    result += `${elapsedYears} yr${elapsedYears > 1 ? "s" : ""}`;
    if (elapsedMonths > 0) {
      result += ` ${elapsedMonths} mo${elapsedMonths > 1 ? "s" : ""}`;
    }
  } else if (elapsedMonths > 0) {
    result += `${elapsedMonths} mo${elapsedMonths > 1 ? "s" : ""}`;
  } else {
    result = "0 mos"; // When the start date is the same as the end date
  }

  return result;
}

const experience = [
  {
    company: "BPOSeats",
    link: "https://www.linkedin.com/company/bposeats/mycompany/",
    duration: elapsedMonthsAndYears(9, 2023),
    positions: [
      {
        title: "Full Stack Developer",
        date: "October 2023 - May 2024",
        duration: elapsedMonthsAndYears(10, 2023, 5, 2024),
        skills: ["Django", "Vue.js", "Python"],
      },
      {
        title: "Full Stack Developer Intern",
        date: "September 2023",
        duration: elapsedMonthsAndYears(9, 2023, 10, 2023),
        skills: ["Django", "Vue.js", "Python", "PostgreSQL", "SCSS"],
      },
    ],
  },
  {
    company: "Wrytopia",
    link: "https://www.linkedin.com/company/wrytopiaonline/",
    duration: elapsedMonthsAndYears(8, 2023, 2, 2024),
    positions: [
      {
        title: "Lead Web Developer",
        date: "August 2023 - Febuary 2024",
        duration: elapsedMonthsAndYears(8, 2023, 2, 2024),
        skills: ["Vue.js", "SCSS", "Bootstrap", "Lottie"],
      },
    ],
  },
  {
    company: "Innovustech",
    link: "https://github.com/innovustech/",
    duration: elapsedMonthsAndYears(2, 2024),
    positions: [
      {
        title: "Fullstack Web Developer (Freelance)",
        date: "Febuary 2024 - Present",
        duration: elapsedMonthsAndYears(2, 2024),
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
