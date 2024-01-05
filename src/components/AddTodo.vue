<script>

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (!this.title.trim()) {
        return
      }

      const newTodo = {
        title: this.title,
        id: +new Date(),
        completed: false,
      }

      this.$emit('addTodo', newTodo)
      this.title = ''
    }
  }
}
</script>

<template>
  <div class="field is-grouped search-container mb-3">
    <p class="control is-expanded">
      <input
        class="input"
        type="text"
        v-model="title"
        placeholder="New Todo..."
        @keypress.enter="onSubmit"
      >
    </p>

    <button
      class="button is-info"
      @click="onSubmit"
    >
      Add Todo
    </button>
  </div>
</template>

<style>
.search-container {
  width: 80%;
  margin: 0 auto;
}
</style>
