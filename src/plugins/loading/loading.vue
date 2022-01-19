<template>
 <div class="flex justify-center items-center">
  <div :value="value" z-index="9999" class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const value=ref(false);
    const show=()=>{
        value.value = true;
        }
    const hide=()=>{
        value.value = false;
        }
    return {
    show,hide,value
    }
  },
};
</script>