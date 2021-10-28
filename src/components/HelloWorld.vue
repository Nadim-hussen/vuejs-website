<template>
  <div class="head-flex">
    <div class="headtxt">
      <h2>
        {{ identity }}
      </h2>
      <p>
        {{ heropara }}
      </p>
      <p>
       So if you want to contact me, Here is my email account <u>{{ ideapara }}</u>.  I hope , You can have belive in myself
      </p>
      <p>
        You can also visit my another website <a href="https://nadimhussen.netlify.app" target="_blank">visit</a>.
      </p>
    </div>
    <div class="headImg">
      <img
        src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="images"
      />
    </div>
  </div>
   <Contact />
   <About />
</template>
<script>
import Contact from './Contact.vue'
import About from './About.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      identity: "I am a junior web developer",
      ideapara:
        "  nadim52@gmail.com ",
      heropara:
        "I can make some website for your business. Not only that I can provide some idea to increase your business module.",
    };
  },
    components:{
    Contact,
    About
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /* background-color: background; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.head-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #edf0ed;
  padding-bottom: 25px;
  padding-top: 25px;
}
.headtxt {
  text-align: center;
  margin: auto 30px;
  width: 40vw;

}
.headImg {
  width: 40vw;
  text-align: center;
}
h2 {
  font-size: bold;
  font-weight: 25px;
  margin-bottom: 15px;
  color: #2c3e50;
  text-decoration: underline;
}
p {
  font-weight: 20px;
  margin-bottom: 15px;
}
img {
  margin-top: 20px;
  width: 300px;
  height: 300px;
}
@media screen and (max-width:727px) {
  .head-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #edf0ed;
  padding-bottom: 25px;
  padding-top: 25px;
  text-align: justify;
}
.headImg {
  margin: 0 auto;
  width: 80vw;
  text-align: center;
}
.headtxt {
  text-align: center;
  margin: 0 auto;
  width: 80vw;

}
}
@media screen and (max-width:500px) {
  .head-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #edf0ed;
  padding-bottom: 25px;
  padding-top: 25px;
  text-align: justify;
  width: 100vw;
}
.headImg {
  margin: 0 auto;
  width: 80vw;
  text-align: center;
}
.headtxt {
  text-align: center;
  margin: 0 auto;
  width: 80vw;

}
h2{
  margin-bottom: 20px;
}
p{
  margin-bottom: 20px;
}
img {
  margin-top: 20px;
  width: 250px;
  height: 250px;
}
}
@media screen and (max-width:365px) {
  .head-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #edf0ed;
  padding-bottom: 25px;
  padding-top: 25px;
  text-align: justify;
}
.headImg {
  margin: 0 auto;
  width: 80vw;
  text-align: center;
}
.headtxt {
  text-align: center;
  margin: 0 auto;
  width: 80vw;

}
img {
  margin-top: 20px;
  width: 200px;
  height: 200px;
}
}
</style>
