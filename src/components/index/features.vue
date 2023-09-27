<template>
  <div id="featured" class="my-5 container">
    <h1 class="">_featuredProjects</h1>
    <hr />
    <div class="mt-5 container">
      <div class="featured-section mb-5">
        <div class="row mb-5">
          <img
            src="images/campgo.png"
            class="featured-img col-12 col-lg-6"
            alt=""
          />
          <div class="featured-description col-12 col-lg-6">
            <h1>CampGO</h1>
            <h4>Campground Website</h4>
            <h5>
              Its core functionality revolves around offering users an immersive
              experience, granting them access to a curated collection of
              campgrounds situated in diverse locations, each accompanied by
              comprehensive details
            </h5>
            <div class="mb-3">
              <div class="badge1">
                <div>EJS</div>
              </div>
              <div class="badge1">
                <div>Node.js</div>
              </div>
              <div class="badge1">
                <div>Express.js</div>
              </div>
              <div class="badge1">
                <div>MongoDB</div>
              </div>
              <div class="badge1">
                <div>Mapbox</div>
              </div>
              <div class="badge1">
                <div>Cloudinary</div>
              </div>
              <div class="badge1">
                <div>Bootstrap</div>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <a href="https://vast-rose-drill-boot.cyclic.app" target="_blank"
                ><button class="view me-2">take a look</button></a
              >
              <a
                href="https://github.com/cup-noodlehS/CampGo.git"
                target="_blank"
                class="home-links btn btn-dark mx-2"
                ><img src="images/github.svg" alt="" class="pt-1"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="featured-section mb-5">
        <div class="row mb-5 flex-wrap-reverse">
          <div class="featured-description col-12 col-lg-6">
            <h1>Wrytopia</h1>
            <h4>Business Website</h4>
            <h5>
              Wrytopia is a reliable third-party agent committed to assisting
              global English writers by providing high-quality writing services
              that pave the way for your writing carer.
            </h5>
            <div class="mb-3">
              <div class="badge1">
                <div>Vue.js</div>
              </div>
              <div class="badge1">
                <div>Bootstrap</div>
              </div>
              <div class="badge1">
                <div>CSS</div>
              </div>
              <div class="badge1">
                <div>Lottie</div>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <a href="https://wrytopia.vercel.app" target="_blank"
                ><button class="view me-2">take a look</button></a
              >
              <a
                href="https://github.com/cup-noodlehS/CampGo.git"
                target="_blank"
                class="home-links btn btn-dark mx-2"
                ><img src="images/github.svg" alt="" class="pt-1"
              /></a>
            </div>
          </div>
          <img
            src="images/wrytopia.png"
            class="featured-img col-12 col-lg-6"
            alt=""
          />
        </div>
      </div>
      <div class="featured-section mb-5">
        <div class="row mb-5">
          <img
            src="images/cmscblog.png"
            class="featured-img col-12 col-md-6"
            alt=""
          />
          <div class="featured-description col-12 col-md-6">
            <h1>CMSC-21 Blog</h1>
            <h4>Blog about our CMSC-21 course in UP Cebu</h4>
            <h5>
              We are Computer Science students from the University of the
              Philippines Cebu, and we've whipped up this cool blog as part of
              our coursework
            </h5>
            <div class="mb-3">
              <div class="badge1">
                <div>EJS</div>
              </div>
              <div class="badge1">
                <div>Node.js</div>
              </div>
              <div class="badge1">
                <div>Express.js</div>
              </div>
              <div class="badge1">
                <div>Bootstrap</div>
              </div>
            </div>

            <div class="d-flex justify-content-start">
              <a href="https://cmsc21-blogs.vercel.app" target="_blank"
                ><button class="view me-2">take a look</button></a
              >
              <a
                href="https://github.com/cup-noodlehS/CMSC21Blogs.git"
                target="_blank"
                class="home-links btn btn-dark mx-2"
                ><img src="images/github.svg" alt="" class="pt-1"
              /></a>
            </div>
          </div>
        </div>
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
  margin-bottom: 1rem;
}

.featured-img {
  border-radius: 3%;
  box-shadow: rgba(253, 227, 0, 0.4) -5px 5px, rgba(194, 185, 7, 0.3) -10px 10px,
    rgba(255, 243, 6, 0.2) -15px 15px, rgba(194, 191, 4, 0.1) -20px 20px,
    rgba(251, 255, 0, 0.05) -25px 25px;
  margin-bottom: 2rem;
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
  margin-bottom: 80px !important;
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
</style>
