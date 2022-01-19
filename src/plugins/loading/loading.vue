<template>
 <div class="flex justify-center items-center">
  <div :status="value" z-index="9999" class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</template>

<script>
import { ref} from 'vue'
export default {
  setup() {
    const status=ref(false);
    const show=()=>{
        status.value = true;
        }
    const hide=()=>{
        status.value = false;
        }
    return {
    show,hide,status
    }
  },
  methods: {

  }
};
</script>