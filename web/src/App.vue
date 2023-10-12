<template >
  <div class="center">
    <button id="butt" @click="getNatal()">Já é Natal?</button>
    <div id='resp' >
      {{ resp }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    
  }, data() {
    return {resp:""}
      
  },methods:{
    getNatal(){
  
      const response:Promise<Response> = fetch("http://localhost:2345/api/natal"
);
        response
        .then((r:Response)=>{return r.json()})
        .then((c:any)=>{
          this.resp=c?.natal ? "Sim, é natal.":"Ainda não"
        })
        
        
      
      
    }
  }
});
</script>

