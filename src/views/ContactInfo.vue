<template>
  <div>
    <h5>Контактная информация</h5>
    <hr />
    <h2>
      {{ contactInformation.title }}
    </h2>

    <RenderItems @remove-info="removeInfo" />

    <div class="addContainer">
      <h4>Добавить информацию</h4>
      <AddInfo @add-info="addInfo" @add-infoVal0="addInfo" />
    </div>
    <router-link class="listPage" to="/">контакты</router-link>
  </div>
</template>

<script>
import AddInfo from "@/components/AddInfo";
import RenderItems from "@/components/RenderItems";

export default {
  data() {
    return {
      contactInformation: this.$store.state.contacts.contacts[
        this.$route.params.id
      ],
    };
  },
  methods: {
    addInfo(info) {
      this.contactInformation.key0.push(info[0]);
      this.contactInformation.value0.push(info[1]);
    },
    removeInfo(id) {
      if (window.confirm("Удалить информацию?")) {
        this.contactInformation.key0.splice(id, 1);
        this.contactInformation.value0.splice(id, 1);
      }
    },
  },
  components: {
    AddInfo,
    RenderItems,
  },
};
</script>
<style scoped>
.addContainer {
  border-radius: 10px;
  background-color: rgb(190, 184, 181);
  margin-bottom: 20px;
  color: white;
  height: auto;
}
h4 {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0px;
}
.listPage {
  text-decoration: none;
  background-color: rgb(121, 119, 119);
  padding: 4px;
  color: white;
  margin: 0px auto;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>