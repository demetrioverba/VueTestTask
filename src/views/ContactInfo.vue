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
    <!-- <h1>{{ items.title }} {{ items.keeey }} {{ items.value0 }}</h1> -->

    <RenderItems @remove-info="removeInfo" />

    <!-- {{ items }} -->
    <!-- {{ this.$store.state.contacts.contacts[this.$route.params.id] }} -->
    <br />
    <router-link to="/">Все контакты</router-link>
  </div>
</template>

<script>
import AddInfo from "@/components/AddInfo";
import RenderItems from "@/components/RenderItems";

var contacts = require("@/AllContacts");

export default {
  // data: function () {
  //   return {
  //     id: this.$route.params.id,
  //     // items: this.$store.state.contacts.contacts[this.$route.params.id],
  //   };
  // },
  methods: {
    addInfo(info) {
      //console.log(info);
      //console.log(val);
      this.$store.state.contacts.contacts[this.$route.params.id].key0.push(
        info[0]
      );
      this.$store.state.contacts.contacts[this.$route.params.id].value0.push(
        info[1]
      );
      // this.items.keeey = info;
      // console.log(this.items.keeey);
      //this.$store.state.contacts.contacts[this.$route.params.id] = this.items;

      // return this.$store.state.contacts.contacts[this.$route.params.id].push(
      //   info
      // );
    },
    removeInfo(id) {
      console.log(id);

      if (window.confirm("dasdAD?")) {
        this.$store.state.contacts.contacts[this.$route.params.id].key0.splice(
          id,
          1
        );
      }

      // this.$store.state.contacts.contacts.map(function (c, i) {
      //   return (c.id = i);
      // });
    },
  },
  // computed: {
  //   // items() {
  //   //   return this.$store.state.contacts.contacts[this.$route.params.id];
  //   // },
  //   id() {
  //     this.$route.params.id;
  //   },
  // },

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
div {
}
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