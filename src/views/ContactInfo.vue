<template>
  <div>
    <h4>Контактная информация</h4>
    <hr />
    <h2>
      {{ this.$store.state.contacts.contacts[this.$route.params.id].title }}
    </h2>

    <div class="addContainer">
      <h4>Добавить информацию</h4>
      <AddInfo @add-info="addInfo" @add-infoVal0="addInfo" />
    </div>
    <hr />
    <RenderItems @remove-info="removeInfo" />
    <br />
    <router-link to="/">Все контакты</router-link>
  </div>
</template>

<script>
import AddInfo from "@/components/AddInfo";
import RenderItems from "@/components/RenderItems";

var contacts = require("@/AllContacts");

export default {
  methods: {
    addInfo(info) {
      this.$store.state.contacts.contacts[this.$route.params.id].key0.push(
        info[0]
      );
      this.$store.state.contacts.contacts[this.$route.params.id].value0.push(
        info[1]
      );
    },
    removeInfo(id) {
      if (window.confirm("Удалить информацию?")) {
        this.$store.state.contacts.contacts[this.$route.params.id].key0.splice(
          id,
          1
        );
        this.$store.state.contacts.contacts[
          this.$route.params.id
        ].value0.splice(id, 1);
      }
    },
  },
  components: {
    AddInfo,
    RenderItems,
  },
  updated() {
    console.log("reper");
  },
};
</script>
<style scoped>
.addContainer {
  border-radius: 10px;
  background-color: rgb(190, 184, 181);
  margin-bottom: 10px;
  color: white;
}
h4 {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
}
</style>