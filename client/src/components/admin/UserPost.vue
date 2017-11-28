<template>
  <div class="BlogPost col-sm-6 col-md-8">
    <div class="card">
      <div class="card-header">
       {{article.title}}
      </div>
      <div class="card-body">
        <p>
          {{article.post}}
        </p>
        <div class="btn btn-primary">
          <!-- taruh link untuk melihat full post nya -->
          Read More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style>

</style>
