<template>
  <div class="py-10">
    <div class="container">
      <div class="main-heading">
        <h1 class="main-heading__title">
          {{ title }}
        </h1>
        <p class="main-heading__subtitle">
          {{ description }}
        </p>
      </div>
      <div v-if="route.name === 'tags-slug'" class="main-heading">
        <h2 class="main-heading__title">
          #{{ route.params.slug }}
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogItem
          v-for="post in items"
          :key="post._path"
          :path="post._path"
          :title="post.title"
          :date="post.date"
          :thumb-img="post.thumbImg"
          :tags="post.tags"
        />
      </div>
      <div class="flex justify-center mt-6">
        <UPagination
          :page-count="pageSize"
          :total="itemsCount"
          :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'gray' }"
          :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }"
          :model-value="currentPage"
          @update:model-value="handleChangePagination"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IPost {
  _path: string;
  title: string;
  date: string;
  thumbImg: {
    image: string;
    image_alt: string;
  }
  tags: string[];
}

interface Props {
  title: string;
  description: string;
  items: IPost[];
  pageSize: number;
  currentPage: number;
  itemsCount: number;
}

defineProps<Props>();

interface Emits {
  (e: 'paginationChange', page: number): void;
}

const emits = defineEmits<Emits>();

const route = useRoute();

const handleChangePagination = (page: number) => {
  emits('paginationChange', page);
}
</script>

<style scoped>

</style>
