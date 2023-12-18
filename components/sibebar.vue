<script setup>
const toast = useToast();
const links = [
    {
        label: "Введение",
        to: "/javascript/1",
    },
    {
        label: "Запуск JavaScript",
        to: "/javascript/2",
    },
    {
        label: "Первая программа на JavaScript",
        to: "/javascript/3",
    },
    {
        label: "Разбор кода программы",
        to: "/javascript/4",
    },
    {
        label: "Дальнейшие примеры",
        to: "/javascript/5",
    },
    {
        label: "Файлы со скриптами",
        to: "/javascript/6",
    },
    {
        label: "Несколько файлов",
        to: "/javascript/7",
    },
];

const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>
<template>
    <Loading></Loading>
    <div class="w-1/5 light:bg-ibt-500 h-screen px-1 py-2 items-center border-r">
        <ClientOnly>
            <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
                " color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

            <template #fallback>
                <div class="w-8 h-8" />
            </template>
        </ClientOnly>
        <UVerticalNavigation class="w-full" :links="links"></UVerticalNavigation>
    </div>
</template>
