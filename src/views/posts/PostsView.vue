<template>
  <section class="posts flex flex-grow pt-2 pb-3">
    <div class="container mx-auto flex flex-col flex-grow">
      <div class="flex gap-5 md:flex-row flex-col-reverse flex-grow items-start mt-5">
        <!-- Posts -->
        <div class="flex flex-col flex-grow gap-3 w-full md:w-[80%]">
          <PostCard
            v-for="(post, index) in state.filterPosts"
            :key="index"
            :post="post"
            :index="index"
            :filter="state.filter"
          />
        </div>
        <!-- Tags -->
        <div class="bg-gray-100 p-3 rounded md:w-[15%] w-full">
          <h3 class="mb-3 text-xl font-medium">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <p
              @click="state.handleClickTag('')"
              class="bg-gray-300 p-2 cursor-pointer rounded-full text-sm hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              All
            </p>
            <!-- Tags  -->
            <p
              v-for="tag in state.computedTags"
              :key="tag"
              @click="state.handleClickTag(tag)"
              :class="tag === state.filter ? 'bg-green-500 text-white' : 'bg-gray-300 '"
              class="p-2 cursor-pointer rounded-full text-sm hover:bg-green-600 hover:text-white transition-all duration-200"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Components
import { onMounted } from 'vue'
import PostCard from '../../components/PostCard.vue'
import usePosts from '../../storage/posts'
const state = usePosts()
onMounted(() => state.fetchPosts())
</script>
