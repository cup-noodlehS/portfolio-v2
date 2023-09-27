<template>
  <nav class="navbar navbar-expand-lg bg-transparent py-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">@sheldonsagrado</a>
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
          <a class="nav-link" href="#">experiences</a>
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
.nav-link,
.navbar-brand {
  color: white !important;
}

.nav-link {
  font-size: 1.1rem;
  margin-right: 1rem;
}
.nav-link:hover {
  color: rgb(241, 241, 120) !important;
}
</style>
