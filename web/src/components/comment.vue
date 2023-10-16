<script lang="ts" setup>
import { reactive, ref,onMounted } from 'vue'

type Comment={
    name:string
    post:string
}

const res = ref<Comment[]>([])
onMounted(async ()=>{
    const response = await fetch("http://localhost:2345/api/comments/")
    const jsons = await response.json()
    console.log(jsons)
    res.value = jsons
})
const comment = reactive( {
    name: "",
    post: ""
})
async function send() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(comment),
    }    
    const response = await fetch("http://localhost:2345/api/comments/new", options)
}
</script>
<template>
    <div class="mx-auto my-auto">
        <div>
            <input v-model="comment.name" placeholder="Name">
            <textarea v-model="comment.post" placeholder="Comment"></textarea>
            <button @click="send()">Send</button>
        </div>
        <div class="bg-[#122121] text-xl" v-for="c in res">
            <div class=" text-xl">
                {{ c.name }}
                <div>
                    {{ c.post }}
                </div>
            </div>
        </div>
    </div>
</template>