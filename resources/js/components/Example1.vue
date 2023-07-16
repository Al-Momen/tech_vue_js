<script>
export default {
    props: {
        greetingMessage: String
    }
}
</script>
<template>
    How to Add Vue js 3 to Laravel 10 with Vite {{ greetingMessage }} 
    <slot></slot>
</template>