<template>
  <!-- Product Update -->
  <section class="">
    <div class="container mx-auto font-roboto">
      <h2 class="text-center text-xl uppercase pt-10 pb-5">Update Post</h2>
      <form @submit.prevent="handleSubmit" class="w-1/2 mx-auto flex flex-col gap-3">
        <input
          v-model="post.title"
          type="text"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Title"
        />
        <!-- Tags -->
        <div class="flex gap-2" v-if="post.tags?.length">
          <p
            v-for="(tag, index) in post.tags"
            :key="index"
            class="bg-gray-300 p-2 cursor-pointer rounded-full text-sm"
          >
            {{ tag }}
          </p>
        </div>
        <input
          v-model="post.tag"
          type="text"
          class="border w-full rounded p-2 px-5 outline-none"
          placeholder="Add new Tag"
        />
        <textarea
          v-model="post.body"
          type="text"
          class="border w-full resize-none h-40 rounded p-2 px-5 outline-none"
          placeholder="Body"
        >
        </textarea>
        <button
          type="submit"
          class="bg-green-500 self-end px-5 py-2 text-white rounded hover:bg-green-600 transition-all duration-300"
        >
          Update
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const post = reactive({
  body: '',
  title: '',
  tags: [],
  tag: ''
})
const handleSubmit = async () => {
  try {
    //
  } catch (err) {
    console.log(err)
  }
}
</script>
