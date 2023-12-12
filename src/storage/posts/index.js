// Post storage
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
const usePosts = defineStore('posts', () => {
  const posts = ref(null)
  const loading = ref(false)
  const limit = ref(10)
  const skip = ref(0)
  const search = ref('')
  const totalPage = ref(null)
  const filter = ref('')
  // fetchPosts
  const fetchPosts = async () => {
    try {
      loading.value = true
      const api = await axios.get('https://dummyjson.com/posts', {
        params: {
          limit: limit.value,
          skip: skip.value
        }
      })
      const data = await api.data
      totalPage.value = Math.floor(data.total / limit.value)
      posts.value = data.posts
      loading.value = false
    } catch (err) {
      console.log(err)
      loading.value = false
    }
  }
  // handleDeletePost
  const handleDeletePost = async (id) => {
    try {
      const { status } = await axios.delete(`https://dummyjson.com/posts/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        posts.value = posts.value?.filter((product) => product.id !== id)
      }
    } catch (err) {
      console.log(err)
    }
  }
  // Filter Post
  const filterPosts = computed(() => posts.value)

  const computedTags = computed(() => [...new Set(posts.value?.flatMap((post) => post.tags))])

  const handleClickTag = (value) => {
    filter.value = value
  }
  // handlePaginationNumber
  const handlePaginationNumber = (value) => {
    skip.value = value * limit.value - limit.value
    // callback fetchProducts
    fetchPosts()
  }

  return {
    posts,
    loading,
    fetchPosts,
    search,
    filterPosts,
    totalPage,
    handlePaginationNumber,
    handleDeletePost,
    computedTags,
    filter,
    handleClickTag
  }
})
export default usePosts
