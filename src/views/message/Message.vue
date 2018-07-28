<template>
<div>
    <app-content class="message-cont">
        <index></index>
    </app-content>
    
</div>
</template>

<script>
import Index from "@/components/message/Index.vue";
export default {
    components : {
        Index,
    }
}
</script>

<style scoped>
.message-cont{
    background: #f5f5f5;
}
</style>
