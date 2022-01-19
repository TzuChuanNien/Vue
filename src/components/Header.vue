
<template>
  <nav class="top-0 inset-x-0 z-50 h-16 text-white bg-gray-100 font-medium justify-between items-center shadow-lg" >
    <div class="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        </div> -->
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex items-center">
            <img class="logo_wrap" src="https://www.frontier.cool/uploadfiles/960/logo.png" alt="title">
          </div>
   
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        </div>
      </div>
    </div>


  </nav>
</template>

<script>


const navigation = [
  { name: '3D材料創造者', href: '#', current: true },
  { name: '產品', href: '#', current: false },
  { name: '價錢', href: '#', current: false },
  { name: '資源', href: '#', current: false },
]

export default {
  components: {
  },
  setup() {
    return {
     navigation
    }
  },
}
</script>