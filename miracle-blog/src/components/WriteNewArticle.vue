<template>
  <div class="container">
	<div class="row">
		<div class="span6">
            <form>
                <div class="controls">
                    <textarea id="message"  v-model="article"  name="message" class="span6" placeholder="Your Message" rows="5"></textarea>
                </div>

                <div class="controls">
                    <button id="contact-submit" type="submit" class="btn btn-primary input-medium pull-right">Send</button>
                </div>
            </form>
        </div>
	</div>
  {{ article }}
</div>
</template>

<script>
  export default {
    name: 'Posting',
    data () {
      return {
        article: ''
      }
    }
  }
</script>
<style scoped>
textarea {
  width: 100%;
}
</style>
