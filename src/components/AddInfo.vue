<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="пункт" />
    <input type="text" v-model="val0" placeholder="значение" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      val0: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim && this.val0.trim()) {
        let newInfo = [];
        newInfo = [this.title, this.val0];
        //let newVal0 = this.val0;
        // this.$store.state.contacts.contacts[
        //   this.$route.params.id
        // ].keeey = newInfo;

        // newInfo.push(this.title);
        this.$emit("add-info", newInfo);
        //this.$emit("add-infoVal0", newVal0);
        this.title = "";
        this.val0 = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
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