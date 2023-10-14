
<script lang="ts" setup>
import { ref } from 'vue';
const resp = ref("")

async function getNatal() {
  try {

    const response = await fetch("http://localhost:2345/api/natal"
    );

    const jsons = await response.json()
    resp.value = jsons.natal ?
      "Sim, é natal."
      : "Ainda não"

  } catch (err: any) {
    throw new Error(err.message);
  }
};
</script>

<template >
  <div class="
    max-w-sm
    mx-auto 
    my-auto">
    <div class="
      px-[10%]
      ml-[25%] 
      my-[75%] 
      mx-auto  
      space-x-2 
      space-y-2">
      <button class="
          px-7  
          bg-[#152]  
          shadow-md 
          ms-0 
          rounded-xl 
          mx-[10%]  
          text-xl" @click="getNatal()">
        Já é Natal?
      </button>
      <div class="
          px-2 
          text-xl 
          ms-[50%] ">
        {{ resp }}
      </div>
    </div>

  </div>
</template>

