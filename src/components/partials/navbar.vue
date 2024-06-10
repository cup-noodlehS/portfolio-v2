<template>
  <nav class="navbar navbar-expand-lg py-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">@sheldonArthurSagrado</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-link" href="#featured">projects</a>
          <a class="nav-link" href="#experience">experiences</a>
          <a class="nav-link" href="#about">about</a>
          <a class="nav-link" href="images/resume.pdf" target="_blank"
            >resume</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgb(12, 10, 27);
}
.nav-link,
.navbar-brand {
  color: white !important;
}

.navbar-toggler {
  background-color: rgb(241, 241, 120);
}

.nav-link {
  font-size: 1.1rem;
  margin-right: 1rem;
}
.nav-link:hover {
  color: rgb(241, 241, 120) !important;
}
</style>
