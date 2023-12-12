<template>
  <figure
    :class="post.tags.includes(filter) && 'bg-green-500 text-white'"
    :style="post.tags.includes(filter) && `order:-${index}`"
    class="border relative p-5 rounded font-roboto w-full flex-grow transition-all duration-700"
  >
    <h4 class="text-lg font-medium">{{ post.title }}</h4>
    <figcaption class="py-2">
      <p class="md:text-sm text-xs font-medium">
        {{ post.body }}
      </p>
      <!-- Tags -->
      <div class="flex gap-2 mt-5">
        <p
          class="bg-gray-300 p-2 rounded-full cursor-pointer md:text-sm text-xs hover:bg-green-600 transition-all duration-200"
          v-for="(tag, index) in post.tags"
          :key="index"
        >
          {{ tag }}
        </p>
      </div>
      <!-- Buttons -->
      <div class="flex flex-col md:flex-row gap-2 items-start absolute md:top-1 bottom-1 right-2">
        <router-link
          :to="'/post/' + post.id"
          class="md:text-sm text-[10px] text-white bg-green-600 md:p-2 md:px-3 p-2 rounded hover:bg-green-700 transition-all duration-300"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </router-link>
        <button
          type="button"
          class="md:text-sm text-[10px] text-white bg-red-500 md:p-2 md:px-3 p-2 rounded hover:bg-red-600 transition-all duration-300"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </figcaption>
  </figure>
</template>
<script setup>
defineProps(['post', 'index', 'filter'])
</script>
