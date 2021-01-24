<template>
  <div>
    <ul>
      <ContactItem
        v-for="(prob, i) of proba"
        v-bind:contact="prob"
        v-bind:index="i"
        v-on:remove-contact="removeContact"
        v-bind:key="i"
      />
    </ul>
    <!-- {{ proba }} -->
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem";

export default {
  // data() {
  //   return {
  //     contacts: this.$store.state.contacts,
  //   };
  // },
  computed: {
    proba() {
      return this.$store.state.contacts.contacts;
    },
  },
  components: {
    ContactItem,
  },
  methods: {
    removeContact(id) {
      this.$emit("remove-contact", id);
    },
    // showInfo(title) {
    //   this.$emit("show-info", title);
    // },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>