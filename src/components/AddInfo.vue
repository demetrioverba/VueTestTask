<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="пункт" />
    <input type="text" v-model="value" placeholder="значение" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      value: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim && this.value.trim()) {
        let newInfo = [];
        newInfo = [this.title, this.value];
        this.$emit("add-info", newInfo);
        this.title = "";
        this.value = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5%;
  border-radius: 10px;
}
input {
  width: 80%;
  margin-left: 10px;
  height: 20px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
}
::placeholder {
  text-align: center;
  color: grey;
}
button {
  width: 20%;
  min-width: 20%;
  margin-left: 10px;
  margin-right: 10px;
  height: 22px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  background-color: rgb(155, 189, 150);
  box-shadow: 2px 3px 7px grey;
  color: white;
  font-weight: bold;
}
@media (max-width: 380px) {
  form {
    flex-direction: column;
  }
  input {
    width: 90%;
  }
  button {
    width: 91%;
    margin-right: 0px;
    padding: 0px;
    margin-bottom: 0px;
  }
}
</style>