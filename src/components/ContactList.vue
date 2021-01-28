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
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem";

export default {
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