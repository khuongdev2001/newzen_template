<template>
  <div class="text-center max-w-md mx-auto">
    <NuxtImg
      :src="image"
      :alt="imageAlt"
      width="200"
      class="mx-auto mb-4 rounded-full"
    />
    <p class="text-2xl font-bold mb-1">
      {{ author }}
    </p>
    <p class="font-medium mb-1">
      {{ designation }}
    </p>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  imageAlt: string;
  author: string;
  designation: string;
  message: string;
}

defineProps<Props>();
</script>

<style scoped>

</style>
