<template>
  <div id="experience" class="my-5">
    <h1>experience(self):</h1>
    <h4 class="mb-5">_what i have done?</h4>
    <div class="d-flex flex-wrap">
      <div class="exp-box">
        <h4 class="title">BPOSeats</h4>
        <ul>
          <li>
            <p class="sub-title">Full Stack Developer</p>
            <div class="d-flex m-1">
              <div class="vr me-3"></div>
              <div>
                <p class="date">October 2023 - Present</p>
                <ul>
                  <li>Skills: Django · Vue.js · Python</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <p class="sub-title">Full Stack Developer Intern</p>
            <div class="d-flex m-1">
              <div class="vr me-3"></div>
              <div>
                <p class="date">September 2023</p>
                <ul>
                  <li>Skills: Django · Vue.js · Python</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="exp-box">
        <h4 class="title">Wrytopia</h4>
        <ul>
          <li>
            <p class="sub-title">Font-end Web Developer</p>
            <p class="date">August 2023 - Febuary 2024</p>
            <ul>
              <li>Vue.js · SASS · Bootstrap</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="exp-box">
        <h4 class="title">Beacon</h4>
        <ul>
          <li>
            <p class="sub-title">Fullstack Web Developer and Founder</p>
            <p class="date">Febuary 2024 - Present</p>
            <ul>
              <li>Next.js · Tailwind · Django</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
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
  /* display: inline; */
}
</style>
