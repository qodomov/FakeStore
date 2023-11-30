<template>
  <section class="products flex flex-col flex-grow py-5">
    <div class="container flex flex-col flex-grow mx-auto">
      <form class="mb-5 flex justify-center">
        <input
          type="text"
          v-model="products.search"
          class="border rounded outline-none focus:border-blue-300 py-2 px-5 w-full md:w-[50%]"
          placeholder="Search Products Using Title"
        />
      </form>
      <!-- Products FlexBox -->
      <div class="relative flex flex-col flex-grow">
        <!-- Loading -->
        <div class="flex flex-col justify-between flex-grow gap-2">
          <div class="flex flex-wrap flex-grow gap-6">
            <ProductCard
              v-for="(product, index) in products.filterProducts"
              :key="index"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Components
import { ProductCard } from '../../components'
import { onMounted } from 'vue'
import useProducts from '../../storage/products'
const products = useProducts()
onMounted(() => products.fetchProducts())
</script>
