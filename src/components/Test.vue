<template>
    <div>
        <h3>odhoaefhopifjpe</h3>
        <button @click="kiss">TEST</button>
        <h2>{{ cool }}</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Test',
  props: {
    msg: String,
    kiss: ""
  },
  methods: {
    test() {
      axios.get("http://localhost:8888")
      .then(function(response) {


console.log(response.data.lifeTimeStats[0]);
  })



.catch(function(error) {
  console.log("err", error);
});
    },
    cool() {
      console.log("cooool")
    }
  }
}
</script>