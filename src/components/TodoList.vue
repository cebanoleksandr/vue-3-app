<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId)
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo of todos"
        :todo="todo"
        @onRemove="removeTodo"
      />
    </ul>
  </div>
</template>

<style></style>
