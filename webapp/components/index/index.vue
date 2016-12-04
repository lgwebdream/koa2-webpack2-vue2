<style src="./index.css"></style>
<template>
  <div class="components-index">
    <h2 @click="test"> Index for app</h2>
    <em>{{data}}</em>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'index',
  computed: mapState({
    data: state => state.database.data.length
  }),
  methods:{
    test(){
      this.$store.dispatch('addInfo', { txt: Math.random() });
    }
  }
}
</script>
