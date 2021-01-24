<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Введите имя" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newContact = {
          id: this.$store.state.contacts.contacts.length,
          title: this.title,
          completed: false,
          key0: [],
          value0: [],
        };
        this.$emit("add-contact", newContact);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}
input {
  width: 80%;
  margin-left: 10px;
  height: 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}
button {
  width: 20%;
  margin-left: 10px;
  margin-right: 10px;
  height: 22px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  background-color: rgb(143, 229, 203);
  color: white;
  font-weight: bold;
}
</style>