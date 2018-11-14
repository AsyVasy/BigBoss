<template>
    <div id="box" class="container">
    
        <div class="voile">
    
            <h2>pseudo: {{ this.$store.state.pseudoReSearch }}</h2>
    
            <h2>platform: {{this.$store.state.platformResearch}} </h2>
    
        </div>
    
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
    
        name: 'cadre',
    
        data() {
    
            return {
    
                stat: {},
    
                pseudo: "",
    
                platform: "",
    
                soloAllTime: null,
    
                squadAllTime: null,
    
                lifeTimeStat: []
    
            }
    
        },
    
        methods: {
    
            display() {
    
                var box = document.getElementById("box");
    
                box.classList.toggle("container")
    
            }
    
        },
    
    
    
        created() {
    
            var self = this;
    
            axios.get("http://localhost:8888")
    
                .then(function(response) {
    
                    self.stat = response
    
                    self.pseudo = response.data.epicUserHandle;
    
                    self.soloAllTime = response.data.p2;
    
                    self.squadAllTime = response.data.p9;
    
                    self.platform = response.data.platformName;
    
                    self.lifeTimeStat = response.data.lifeTimeStats
    
                })
    
                .catch(function(error) {
    
                    console.log("err", error);
    
                });
    
        }
    
    }
</script>


<style lang="scss" scoped>
    #box {
    
        background: url(../assets/images/fortnite_dabber.jpg) no-repeat;
    
        background-size: contain;
    
        background-repeat: no-repeat;
    
        height: 445px;
    
        margin: auto;
    
        border: 2px solid;
    
        width: 250px;
    
        border: 2px solid;
    
        color: #e7e7e7;
    
        text-align: left;
    
        border-radius: 30px;
    
        display: flex;
    
        justify-content: center;
    
        align-items: center;
    
        position: fixed;
    
        top: 300px
    
    }
    
    
    
    .voile {
    
        background: rgba($color: #000000, $alpha: 0.7);
    
        border-radius: 30px
    
    }
    
    
    
    .containerHide {
    
        position: absolute;
    
        left: 0px;
    
        transition: .5s
    
    }
    
    
    
    .container {
    
        position: absolute;
    
        left: -550px;
    
        transition: .5s;
    
        height: 10px;
    
    }
</style>
