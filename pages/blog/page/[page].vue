<template>
  <SectionBlog
    :title="pageData.title"
    :description="pageData.description"
    :items="posts as any[]"
    :items-count="postsCount"
    :current-page="currentPage"
    :page-size="pageSize"
    @pagination-change="handleChangePagination"
  />
</template>

<script lang="ts" setup>
import { DEFAULT_PAGE_SIZE } from '@/constant';

const route = useRoute()
const currentPage = +route.params.page;
if (isNaN(currentPage)) {
  navigateTo('/blog')
}

const pageData = await queryContent('blog').where({ _path: '/blog' }).findOne();
const pageSize = pageData.pagination.size || DEFAULT_PAGE_SIZE;

const postsCount = await queryContent('blog')
  .where({ _path: { $ne: '/blog' } })
  .count();

const pageCount = Math.ceil(postsCount / pageSize);
if (currentPage && (currentPage <= 1 || pageCount === 1)) {
  navigateTo('/blog');
}
if (currentPage > pageCount) {
  navigateTo(`/blog/page/${pageCount}`);
}
const skipAmount = (currentPage - 1) * pageSize;
const posts = await queryContent('blog')
  .where({
    _path: {
      $ne: '/blog'
    }
  })
  .only(['title', 'date', 'thumbImg', 'tags', '_path'])
  .sort({ createdAt: 1 })
  .skip(skipAmount)
  .limit(pageSize)
  .find();

const handleChangePagination = (page: number) => {
  navigateTo(`/blog/page/${page}`);
}
</script>
