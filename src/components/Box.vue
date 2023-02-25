<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button :class="classes" class="ring-offset-2 ring-gray ring-2">
        <slot />
    </button>
</template>