<template>
    <div>
       <div>
           <slot name="header"></slot>
       </div>
       <div>
           <slot name="content"></slot>
       </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: [],
            
        }
    },
    components:{

    },
    filters: {
        
    },
    created() {
    },

    methods: {
        
    },
}
</script>
<style lang="css">
body {
    margin: 0;
    padding: 0;
}
</style>