<script>
export default {
  props: ['todo']
}
</script>

<template>
  <li class="px-5 py-1 todo-item">
    <label class="checkbox">
      <input
        type="checkbox"
        @change="todo.completed = !todo.completed"
        :checked="todo.completed"
      >

      <span class="ml-3" :class="{
        'done': todo.completed
      }">
        {{ todo.title }}
      </span>
    </label>

    <i
     class="fa fa-close has-text-danger close"
     @click="$emit('onRemove', todo.id)"
    ></i>
  </li>
</template>

<style>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  transition: all .3s ease-in-out;
}

.todo-item:hover {
  border: 1px solid grey;
}

.close {
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.close:hover {
  transform: scale(1.2);
}

.done {
  text-decoration: line-through;
  color: rgb(192, 192, 192);
}
</style>
