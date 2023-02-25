<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <p :class="classes" class="w-10 h-10 rounded-full flex justify-center items-center">
        <slot />
    </p>
</template>