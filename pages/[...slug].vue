<template>
  <main>
    <template v-if="formattedPage">
      <component
        :is="block._bookshop_name"
        v-for="(block, index) in formattedPage.content_blocks"
        :key="index"
        :block="block"
        :data-binding="`#content_blocks.${index}`"
      />
    </template>
    <slot />
  </main>
</template>

<script setup>
import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/visual-editor-connector';

const route = useRoute();
const { page } = useContent();

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
const pageData = page.value;

const head = generateHead(pageData, route);
useHead(head);

const formatBookshopName = (pageObject) => {
  pageObject.content_blocks.forEach(function (item) {
    item._bookshop_name = item._bookshop_name
      .replaceAll(/[^a-zA-Z0-9 ]/g, ' ')
      .replaceAll(/(^\w)|(\s+\w)/g, c => c.toUpperCase())
      .replaceAll(' ', '');
  });
  return pageObject;
};

const formattedPage = ref(pageData.content_blocks ? formatBookshopName(pageData) : {});

onMounted(() => {
  onCloudCannonChanges((latestValue) => {
    formattedPage.value = formatBookshopName(latestValue);
  });
});
onBeforeUnmount(() => {
  stopCloudCannonChanges();
});
</script>
