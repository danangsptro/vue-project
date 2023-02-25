<script setup>
const props = defineProps({
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button :class="classes">
        <span class="text-gray-500"> <i style='font-size:23px' class='fas'>&#xf104;</i>&nbsp;
            <slot />
        </span>

    </button>
</template>