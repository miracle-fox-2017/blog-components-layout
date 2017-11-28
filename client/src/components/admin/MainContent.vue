<template>
  <main class="col-8 col-offset-2">
    <BlogPost></BlogPost>
  </main>
</template>

<script>
import Post from '@/components/UserPost'
export default {
  component: {
    BlogPost : Post
  }
}
</script>