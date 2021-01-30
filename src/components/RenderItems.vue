<template>
  <div>
    <ul>
      <RenderItem
        v-for="(infoKey, i) of infoKeys"
        v-bind:infoKey="infoKey"
        v-bind:infoValue="infoValue[i]"
        v-bind:index="i"
        v-bind:key="i"
        v-on:remove-item="removeItem"
      />
    </ul>
  </div>
</template>

<script>
import RenderItem from "@/components/RenderItem";

export default {
  computed: {
    infoKeys() {
      return this.$store.state.contacts.contacts[this.$route.params.id].key0;
    },
    infoValue() {
      return this.$store.state.contacts.contacts[this.$route.params.id].value0;
    },
  },
  components: {
    RenderItem,
  },
  methods: {
    removeItem(id) {
      this.$emit("remove-info", id);
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