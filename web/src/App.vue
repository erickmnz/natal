<template >
  <div class="center">
    <button id="butt" @click="getNatal()">Já é Natal?</button>
    <div id='resp' >
      {{ resp }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';




    
  
    const resp = ref("")

    async function getNatal(){
      try{
        
      const response= await fetch("http://localhost:2345/api/natal"
      );

      const jsons = await response.json()
      resp.value = jsons.natal ? "Sim, é natal.":"Ainda não"
       
      }catch(err){
        console.log("Error: ", err)
      }
        
        
      
      
    }
  
;
</script>

