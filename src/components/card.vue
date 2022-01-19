<template>
  <div>
     <div class="col-md-2"></div>
  </div>
</template>
<script>
import ref from "vue"
export default{
 name:"Card",

 setup(){
  let title=ref("pointer") ;
  return{
   title
  }
 }
}
</script>