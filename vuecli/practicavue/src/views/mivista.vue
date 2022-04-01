<template>
<div class="alert alert-primary" role="alert"> {{propiedadNueva}}</div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    name:"mivista",
    data(){
    },
    methods:{
    },
    computed: {
       ...mapState({
      propiedadNueva: "propiedadNueva"
       })
    }

}

</script>

<style scoped>
</style>