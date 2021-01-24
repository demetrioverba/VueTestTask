<template>
  <div>
    <h4>Список контактов</h4>

    <hr />
    <div class="newCont">
      <h4>Add new Contact</h4>
      <AddContact @add-contact="addContact" />
    </div>
    <hr />

    <ContactList @remove-contact="removeContact" />
    <!-- <ContactInfo v-bind:proba="showInfo()" /> -->
    <!-- <router-link
      v-bind:contacts="contacts"
      to="/contactInfo"
      params:contacts="contacts"
      >ContactInfo Page</router-link
    > -->
    <!-- {{ contacts }} -->
    <br /><br />
    <!-- {{ this.$store.state.contacts }} -->
  </div>
</template>

<script>
import ContactInfo from "@/views/ContactInfo";
import ContactList from "@/components/ContactList";
import AddContact from "@/components/AddContact";

export default {
  name: "App",
  // data() {
  //   return {
  //     contacts: this.$store.state.contacts,
  //   };
  // },
  methods: {
    removeContact(id) {
      if (window.confirm("dasdAD?")) {
        this.$store.state.contacts.contacts = this.$store.state.contacts.contacts.filter(
          (c) => c.id !== id
        );
        this.$store.state.contacts.contacts.map(function (c, i) {
          return (c.id = i);
        });
      }
    },
    //this.$store.commit.removeContact(id);
    addContact(contact) {
      this.$store.state.contacts.contacts.push(contact);
    },
    // showInfo(title) {
    //   return title;
    //   console.log(title);
    // },
  },
  components: {
    ContactList,
    AddContact,
    ContactInfo,
  },
  // created() {
  //   //this.$store.dispatch("proba");
  // },
};
</script>
<style scoped>
.newCont {
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