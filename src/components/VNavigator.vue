<script setup>
import {computed, defineProps} from 'vue';

const props = defineProps({
  previous :String,
  next:String,
  current:String
})
let linkprev = computed(()=>{
    if(props.previous === 'Hakkında'){
      return '/reading'
    }else if(props.previous === 'Ahlaki'){
      return '/listening'
    }else{
      return '/'
    }
})
let linknext = computed(()=>{
  if(props.next === 'Hakkında'){
    return '/reading'
  }else if(props.next === 'Ahlaki'){
    return '/listening'
  }else{
    return '/'
  }
})
</script>

<template>
    <div class="nav-header">
      <div class="nav-logo">MDE-212</div>
      <router-link :to="{path:linkprev}"><div class="nav-panels" v-if="previous!=null"><span><img src="../assets/left.png" alt="" style="width: 8px;margin-right: 2px"></span>{{previous}} </div></router-link>
      <router-link :to="{path:linknext}"><div class="nav-panels" v-if="next != null">{{next}}<span><img src="../assets/right.png" alt="" style="width: 8px;margin-left: 2px"></span></div></router-link>
    </div>
  <div class="discover">

    <div class="discover-panel" :class="{und: current=='Incelemesi'}">
    <router-link to="/">Incelemesi</router-link></div>
    <div class="discover-panel" :class="{und: current=='Hakkında'}">
      <router-link to="/reading">Hakkında</router-link>
    </div>
    <div class="discover-panel" :class="{und: current=='Ahlaki'}">
      <router-link to="/listening">Ahlaki</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-header{
  min-width:326px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ;
  padding:20px 10px;
}
.nav-logo{
  font-size: 30px;
  font-family: "American Typewriter";
}
.nav-panels{
  border:1px solid;
  border-radius: 4px;
  padding: 10px 20px;

}
.discover{
  overflow: scroll;
  min-width:326px;
  display: flex;
  padding:20px 0;

}
.discover-panel{
  font-weight: bold;
  cursor: pointer;
  padding:10px 20px;
}
a{
  color: black;
}
a:hover{
  background-color: white;
}
.und{

  border-radius: 35px;
  background-color: #ebefed;
}
</style>