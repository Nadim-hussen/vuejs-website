<template>
  <!-- <div id="nav">
      <router-link id="nav-link" to='/'>Home</router-link> 
      <router-link id="nav-link" to='/about'>About</router-link>
  </div> -->
  <div class="center">
  <nav>
    <button @click="uptodown" class="nav-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <ul v-bind:class="link">
      <li><router-link id="nav-link" to="/">Home</router-link></li>
      <li><router-link id="nav-link" to="/contact">Contact</router-link></li>
      <li><router-link id="nav-link" to="/about">About</router-link></li>
      <li><router-link id="nav-link" to="/service">message-me</router-link></li>
    </ul>
  </nav>
  <router-view />
  <!-- <h3>{{ firstName }}</h3> -->
 
  </div>
</template>

<script>

export default {
  
  name: "App",
  
  data() {
    return {
     
      // firstName: "Nadim",
      link : 'links'
    };
  },
  methods: {
    //     const navtoggle = document.querySelector('.nav-toggle');
    // const links = document.querySelector('.links');
    // navtoggle.addEventListener('click', function () {
    //     if (links.classList.contains('navlinks')) {
    //         links.classList.remove('navlinks')
    //     } else {
    //         links.classList.add('navlinks')
    //     }
    // })
    uptodown() {
      setTimeout(()=>{
        if(this.link =='links'){
        this.link = 'nav-toggle'
      }else{
        this.link ='links'
      }
      },1000)
      
    },
  },

};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-color: background; */
}
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;

        }

        .header-section {

            background-color: #edf0ed;


        }

        a {
            text-decoration: none;
            color: #34eb49;
            font-size: 1.4rem;

            font-family: 'Bebas Neue', cursive;
            transition: 0.3s;
        }

        a:hover {
            color: #34eba4;
            font-size: 1.35rem;
            text-decoration: underline;
        }

        .links {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row;
            /* margin: auto 40px; */
        }

        li {
            list-style: none;
            padding: 20px;
        }

        nav {
            background-color: #edf0ed;
            /* position: sticky; */
            top: 0;
            left: 0;
        }

        .nav-toggle {
            display: none;
        }
        .center{
          text-align: center;
        }
        img{
          height: 200px;
          width: 200px;
          margin: 10px auto;
        }



@media screen and (max-width: 850px) {
  .links {
    display: none;
  }

  .nav-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    transition: all 0.8s;
    margin-left: auto;
    margin-right: 20px;
  }

  nav {
    padding: 15px;
  }

  .navlinks {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

