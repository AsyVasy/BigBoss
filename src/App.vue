<template>
  <div id="app">
    <div id="nav">
      <figure>
        <a href="/"><img src="./assets/images/Couronne.png" alt="logo de BigBoss"> </a>
      </figure>
      <!-- <router-link to="/">Home</router-link> -->
      <h2 @click="gerer">Gérer</h2>
      <h2>Ma Communauté</h2>
      <router-link to="/about">About</router-link>
      <router-link to="/server">Server</router-link>
    </div>
    <router-view/>
    <Cadre id="box" class="cadreHide"></Cadre>
  </div>
</template>

<script>
  import Cadre from '@/components/Cadre.vue'
  export default {
    components: {
      Cadre,
      // Accueil
    },
    methods: {
      gerer() {
        var box = document.getElementById("box");
        box.classList.toggle("cadreNotHide")
      },
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #app {
    font-family: monospace;
    position: static;
    #nav {
      background: #2a2a2a;
      height: 10vh;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        cursor: pointer;
        width: auto;
        height: 50px;
        animation: logo 20s infinite;
        animation-direction: alternate;
      }
      a {
        font-size: 15px;
        margin: auto;
        font-weight: bold;
        color: #e7e7e7;
        &.router-link-exact-active {
          color: orangered;
        }
      }
      h2 {
        font-size: 15px;
        margin: auto;
        font-weight: bold;
        color: #e7e7e7;
        &.router-link-exact-active {
          color: orangered;
        }
        cursor: pointer;
      }
    }
    .cadreHide {
      position: absolute;
      left: 0px;
      transition: .5s
    }
    .cadreNotHide {
      position: absolute;
      left: -550px;
      transition: .5s;
      height: 10px;
    }
  }
  
  @keyframes logo {
    100% {
      filter: invert(1);
    }
  }
</style>
