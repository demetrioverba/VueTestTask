<template>
  <div>
    <h4>Список контактов</h4>
    <hr />
    <div class="newCont">
      <h4>Add new Contact</h4>
      <AddContact @add-contact="addContact" />
    </div>
    <ContactList @remove-contact="removeContact" />
  </div>
</template>

<script>
import ContactInfo from "@/views/ContactInfo";
import ContactList from "@/components/ContactList";
import AddContact from "@/components/AddContact";

export default {
  name: "App",
  methods: {
    removeContact(id) {
      if (window.confirm("Удалить контакт?")) {
        this.$store.state.contacts.contacts = this.$store.state.contacts.contacts.filter(
          (c) => c.id !== id
        );
        this.$store.state.contacts.contacts.map(function (c, i) {
          return (c.id = i);
        });
      }
    },
    addContact(contact) {
      this.$store.state.contacts.contacts.push(contact);
    },
  },
  components: {
    ContactList,
    AddContact,
    ContactInfo,
  },
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