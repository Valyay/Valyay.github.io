<template>
  <div class="hello">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Добавить задачу</label>
      <input v-model="newTodoText" id="new-todo" placeholder="Например, покормить кота" />
      <button>Добавить</button>
    </form>
    <ul class="list">
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      >
        {{ todo.title }}
        <button v-on:click="$emit('remove')">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["title"],
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "первое"
        },
        {
          id: 2,
          title: "второе"
        }
      ],
      nextTodoId: 3
    };
  },
  methods: {
    addNewTodo: function() {
      if (this.newTodoText) {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        });
        this.newTodoText = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
}
</style>
