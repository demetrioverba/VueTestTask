<template>
  <li>
    <router-link
      class="contLink"
      :to="{ name: 'contactPage', params: { id: contact.id } }"
      >{{ contact.title }}</router-link
    >
    <!-- {{ contact.id }} -->
    <!-- <strong>{{ index + 1 }}</strong> -->

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
  /* border-bottom: 1px solid #ccc; */
  box-shadow: 2px 3px 7px grey;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;

  /* margin-bottom: 1rem; */
}
.rm {
  background: rgb(253, 184, 184);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
}
.dt {
  width: 30px;
  height: 30px;
  background-color: rgb(143, 229, 203);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  border: none;
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