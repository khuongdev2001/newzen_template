<template>
  <div>
    <section class="py-10">
      <div class="container">
        <BlogHero
          :path="pageData._path"
          :title="pageData.title"
          :date="pageData.date"
          :thumb-img="pageData.thumbImg"
          :tags="pageData.tags"
        />
        <div class="content max-w-screen-md mx-auto">
          <ContentRenderer
            :key="pageData._path"
            :value="pageData"
          >
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
    </section>
    <section class="pb-10">
      <div class="container">
        <div class="main-heading">
          <h2 class="main-heading__title">
            Recent Blog
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogItem
            v-for="post in recentPosts"
            :key="post._path"
            :path="post._path!"
            :title="post.title!"
            :date="post.date"
            :thumb-img="post.thumbImg"
            :tags="post.tags"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { page } = useContent();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
const pageData = page.value;
const recentPosts = await queryContent('blog')
  .where({
    $and: [
      { _path: { $ne: '/blog' } },
      { _path: { $ne: pageData._path } }
    ]
  })
  .only(['title', 'date', 'thumbImg', 'tags', '_path'])
  .sort({ createdAt: 1 })
  .limit(3)
  .find();
const head = generateHead(pageData, route);
useHead(head);
</script>
