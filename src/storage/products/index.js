// Products storage
import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
const useProducts = defineStore('products', () => {
  const products = ref(null)
  const loading = ref(false)
  const limit = ref(10)
  const search = ref('')
  const totalPage = ref(null)
  // fetchProducts
  const fetchProducts = async () => {
    try {
      loading.value = true
      const api = await axios.get('https://fakestoreapi.com/products', {
        params: {
          limit: limit.value
        }
      })
      const data = await api.data
      console.log(data);
      products.value = data
      loading.value = false
    } catch (err) {
      console.log(err)
      loading.value = false
    }
  }
  // handleDeleteProduct
  const handleDeleteProduct = async (id) => {
    try {
      const { status } = await axios.delete(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      })
      if (status === 200) {
        products.value = products.value?.filter((product) => product.id !== id)
      }
    } catch (err) {
      console.log(err)
    }
  }
  // Filter Products
  const filterProducts = computed(() =>
    products?.value?.filter((product) =>
      product.title.toLowerCase().includes(search.value.trim().toLowerCase())
    )
  )

  return {
    products,
    loading,
    fetchProducts,
    search,
    filterProducts,
    totalPage,
    handleDeleteProduct
  }
})

export default useProducts
