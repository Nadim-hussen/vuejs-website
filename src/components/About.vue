<template>
  <div>
    <h1 class="headingAbout">
      {{ filename }}
    </h1>
    <div class="container mx-auto row px-4 py-3">
      <div
       data-aos="fade-up" class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ content1 }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div
       data-aos="fade-up" class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ content2 }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div
      data-aos="fade-up"  class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ content3 }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div
       data-aos="fade-up" class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ content4 }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div
       data-aos="fade-up" class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ content5 }}
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div
      data-aos="fade-up" class="card  col-md-6 col-12 p-3 mx-auto"
      >
        <div class="card-body">
          <h5 class="card-title">{{ content6 }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://nadimhussen.netlify.app" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      filename: "About us",
      content1: "web design",
      content2: "web development",
      content3: "graphic design",
      content4: "digital marketing",
      content5: "android development",
      content6: "ios development",
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.headingAbout {
  color: #2c3e50;
  margin-top: 20px;
  font-family: "Courier New", Courier, monospace;
}
.card {
  margin: 20px;
  width: 18rem;
}
h5 {
  font-size: 22px;
  margin-bottom: 12px;
}
.btn {
  margin-top: 15px;
  padding: 10px;
}

@media screen and (min-width: 1280px) {
.card{
  width: 20rem;
}
}
</style>
