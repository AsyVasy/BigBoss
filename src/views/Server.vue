<template>
    <div class="stats">
    
        <div class="profil">
    
            <h2>profil</h2>
    
            <p>Stats de: {{ pseudo }} </p>
    
            <p>plateforme: {{platform}} </p>
    
            <br><br>
            
            <input type="text" placeholder="pseudo" v-model="pseudoReSearch">
    
            <br>
    
            <select name="plateforme" id="plateforme" v-model="platformResearch">
    
                    <option value="pc">PC</option>
    
                    <option value="psn">PS4</option>
    
                    <option value="xb1">XBOX ONE</option>
    
                </select>
                <button @click="voila">Rechercher</button>    
           
    
        </div>
    
        <p> ------------------ </p>
    
        <div class="lifstat">
    
            <h2>lifstat</h2>
    
            <p v-for="(stat, n) in lifeTimeStat " :key="n"> {{n}}-> {{stat.key}} : {{stat.value}} </p>
    
        </div>
    
        <p> ------------------ </p>
    
        <div class="allTime">
    
            <h2>allTime</h2>
    
            <br>
    
            <h3>soloAllTime</h3>
    
            <br>
    
            <p v-for="(stat, m) in soloAllTime " :key="m"> {{m}} = <br><br>label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
            <br><br>
    
            <h3>duoAllTime</h3>
    
            <br>
    
            <p v-for="(stat, o) in duoAllTime " :key="o"> {{o}} = <br><br>label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
            <br><br>
    
            <h3>squadAllTime</h3>
    
            <br>
    
            <p v-for="(stat, p) in squadAllTime " :key="p"> {{p}} = <br><br>label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
        </div>
    
        <p> ------------------ </p>
    
        <div class="current">
    
            <h2>current</h2>
    
            <br>
    
            <h3>soloCurrentSeason</h3>
    
            <br>
    
            <p v-for="(stat, q) in soloCurrentSeason " :key="q"> {{q}} -> <br><br> label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
            <br><br>
    
            <h3>duoCurrentSeason</h3>
    
            <br>
    
            <p v-for="(stat, r) in duoCurrentSeason " :key="r"> {{r}} -> <br><br> label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
            <br><br>
    
            <h3>squadCurrentSeason</h3>
    
            <br>
    
            <p v-for="(stat, s) in squadCurrentSeason " :key="s"> {{s}} -> <br><br> label: {{stat.label}} <br> field: {{stat.field}} <br> category: {{stat.category}} <br> valueInt: {{stat.valueInt}} <br> value: {{stat.value}} <br> rank: {{stat.rank}} <br> percentile: {{stat.percentile}} <br> displayValue: {{stat.displayValue}}
    
                <br><br><br><br></p>
    
        </div>
    
        <!-- <p> {{ stat }}</p> -->
        
    
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
    
        data() {
    
            return {
    
                stat: {},
    
                pseudo: null,
    
                platform: null,
    
                soloAllTime: null,
    
                duoAllTime: null,
    
                squadAllTime: null,
    
                lifeTimeStat: null,
    
                soloCurrentSeason: null,
    
                duoCurrentSeason: null,
    
                squadCurrentSeason: null,
    
                platformResearch: null,
    
                pseudoReSearch: null,

                self: this
    
            }
    
        },
        methods: {
            voila() {
                console.log(this.pseudoReSearch)
                console.log(this.platformResearch)
                 var self = this;
                axios.post('http://localhost:8888/user', {
                    pseudo: this.pseudoReSearch ,
                    platform: this.platformResearch
                })
                .then(function(response) {
                    console.log(response)
                    console.log(self)
                    
                    self.stat = response
    
                    self.pseudo = response.data.epicUserHandle;
    
                    self.soloAllTime = response.data.stats.p2;
    
                    self.duoAllTime = response.data.stats.p10;
    
                    self.squadAllTime = response.data.stats.p9;
    
                    self.platform = response.data.platformName;
    
                    self.lifeTimeStat = response.data.lifeTimeStats;
    
                    self.soloCurrentSeason = response.data.stats.curr_p2;
    
                    self.duoCurrentSeason = response.data.stats.curr_p10;
    
                    self.squadCurrentSeason = response.data.stats.curr_p9;
    
                })

            }
        },
    
        updated() {
    
            console.log("store pseudoReSearch" + this.$store.state.pseudoReSearch)
    
            console.log(this.$store.state.platformResearch)
            this.$store.state.pseudoReSearch = this.pseudoReSearch
            this.$store.state.platformResearch = this.platformResearch
        },
    
        // created() {
    
        //     // this.pseudoReSearch = this.$store.state.pseudoReSearch
    
        //     // this.platformResearch = this.$store.state.platformResearch
    
        //     var self = this;
    
        //     axios.get("http://localhost:8888")
    
        //         .then(function(response ) {
    
        //             console.log(response.data.stats.p9);
    
        //             self.stat = response
    
        //             self.pseudo = response.data.epicUserHandle;
    
        //             self.soloAllTime = response.data.stats.p2;
    
        //             self.duoAllTime = response.data.stats.p10;
    
        //             self.squadAllTime = response.data.stats.p9;
    
        //             self.platform = response.data.platformName;
    
        //             self.lifeTimeStat = response.data.lifeTimeStats;
    
        //             self.soloCurrentSeason = response.data.stats.curr_p2;
    
        //             self.duoCurrentSeason = response.data.stats.curr_p10;
    
        //             self.squadCurrentSeason = response.data.stats.curr_p9;
    
        //         })
    
        //         .catch(function(error) {
    
        //             console.log("err", error);
    
        //         });
    
        // }
    
    }
</script>
<style scoped lang="scss">
    .stats {
    
        display: flex;
    
        flex-wrap: wrap
    
    }
</style>


