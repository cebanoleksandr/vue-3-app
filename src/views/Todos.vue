<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        this.todos = json
        this.loading = false
      })
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(t => t.completed)
        case 'active':
          return this.todos.filter(t => !t.completed)
        default:
          return this.todos
      }
    }
  },
  methods: {
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
}
</script>

<template>
  <div class="container">
    <AddTodo @addTodo="addTodo" />

    <div class="select-container has-text-right mb-4">
      <div class="select is-normal">
        <select v-model="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
    </div>

    <Loader v-if="loading"/>

    <TodoList
      v-else-if="filteredTodos.length"
      :todos="filteredTodos"
      @removeTodo="removeTodo"
    />

    <h2 v-else class="is-size-2 has-text-centered">
      There are no todos yet. Please, add the first one
    </h2>
  </div>
</template>

<style>
.select-container {
  width: 80%;
  margin: 0 auto;
}
</style>
