<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button :class="classes" class="bg-orange">
        <slot/>
    </button>
</template>