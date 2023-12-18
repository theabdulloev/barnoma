<script setup>
const route = useRoute()
const lesson = useLesson()
let thema
const index = lesson.value.findIndex((item) => item.id == route.params.id);
if (index !== -1) {
    thema = lesson.value[index]
}
</script>
<template>
    <div class="w-full mx-auto">
        <h2 class="text-center font-bold mt-2">{{ thema?.header }}</h2>
        <p class="p-1 text-center">{{ thema?.text }}</p>
        <pre v-show="thema.code1" class="border bg-blue-50">
            <code>{{thema?.code1}}</code>
        </pre>
    </div>
</template>
