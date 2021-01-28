<template>
  <li>
    <router-link
      class="contLink"
      :to="{ name: 'contactPage', params: { id: contact.id } }"
      >{{ contact.title }}</router-link
    >
    <button class="rm" v-on:click="$emit('remove-contact', contact.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
span {
  text-decoration: none;
}
li {
  border: none;
  border-radius: 10px;
  box-shadow: 2px 3px 7px grey;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
}
.rm {
  width: 30px;
  height: 30px;
  background: rgb(253, 184, 184);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  margin-top: 5px;
}
.contLink {
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  color: rgb(119, 118, 118);
  vertical-align: middle;
  text-align: center;
}
</style>