<template>
<div id="home" class="home row justify-content-center align-items-center">
    <div class="col-6">
        <img src="images/sheldongwapo.png" alt="" id="meImg" class=""/>
    </div>  
    <div class="home-content col-12 col-md-6 mt-5">
        <div class="text">
            <h4 class="mb-3">Hello, they call me "Don";</h4>
            <h1>
            I <span class="yellow">design</span> and
            <span class="yellow">develop</span> things for the web;&#41
            </h1>
        </div>
        <div class="links mt-5 d-flex flex-wrap justify-content-start">
            <a href="#featured"><button class="button-1 mb-3">projects</button></a>
            <div>
                <a
                href="https://github.com/cup-noodlehS"
                target="_blank"
                class="home-links btn btn-dark mx-2"
                ><img src="images/github.svg" alt="" class="pt-1"
            /></a>
            <a
                href="https://www.linkedin.com/in/sheldonarthur/"
                target="_blank"
                class="home-links btn btn-dark mx-1"
                ><img src="images/linkedin.svg" alt="" class="pt-1"
            /></a>
            <a
                href="mailto:sheldonarthursagrado@gmail.com"
                target="_blank"
                class="home-links btn btn-dark mx-1"
                ><img src="images/mail.svg" alt="" class="pt-1"
            /></a>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>

.home {
    min-height: 100lvh;
}

#meImg {
 width:100%;
}

h1 {
  font-size: 3rem;
  font-weight: 1000;
}
.yellow {
  color: rgb(241, 241, 120);
}

#meImg:hover {
  animation: shake 1s;
}

.button-1 {
  color: rgb(12, 10, 27);
  font-weight: 1000 !important;
  padding: 0.8rem 1.2rem;
  background-color: rgb(241, 241, 120);
  border-radius: 5px;
  border: none;
  box-shadow: 3px 3px 0 rgb(255, 255, 255);
  transition: all 0.2s ease;
}

.button-1:hover {
  transform: translate(-5px, -5px);
  box-shadow: 8px 8px 0 rgb(255, 255, 255);
  filter: brightness(120%);
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

@media (max-width: 768px){
    #meImg{display: none;}

    h4{
        font-size: 1rem;
    }
}

</style>