<template>
  <li>
    <!-- {{ contact.id }} -->
    <!-- <strong>{{ index + 1 }}</strong> -->
    <div id="container" class="infoCont">
      <div id="infoKey" class="infoKey" v-if="!isEditingLocal">
        {{ infoKey }}
      </div>
      <input
        class="editInput"
        type="text"
        v-model="newKey"
        v-if="isEditingLocal"
        :placeholder="infoKey"
      />
      <div class="infoValue" v-if="!isEditingLocal">
        {{ infoValue }}
      </div>
      <input
        class="editInput"
        type="text"
        v-if="isEditingLocal"
        :placeholder="infoValue"
        v-model="newValue"
      />
      <button
        id="editButton"
        class="buttonTmplt editButton"
        value="Edit"
        v-if="!isEditingLocal"
        v-on:click="setEditing()"
      >
        &#9998;
      </button>
      <button
        id="removeButton"
        v-if="!isEditingLocal"
        class="buttonTmplt removeBtn"
        v-on:click="$emit('remove-item', index)"
      >
        &times;
      </button>
      <button
        id="saveInfo"
        class="buttonTmplt editButton"
        v-if="isEditingLocal"
        v-on:click="saveInfo()"
      >
        &#10003;
      </button>
      <button
        id="cancel"
        class="buttonTmplt removeBtn"
        v-if="isEditingLocal"
        v-on:click="cancel()"
      >
        &times;
      </button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditingLocal: this.isEditing,
      newValue: "",
      newKey: "",
      infoValue: this.$store.state.contacts.contacts[this.$route.params.id]
        .value0[this.index],
    };
  },
  props: {
    infoKey: {},
    index: {},
    isEditing: false,
  },
  methods: {
    setEditing() {
      this.isEditingLocal = true;
    },
    cancel() {
      this.isEditingLocal = false;
    },
    saveInfo() {
      //TODO
      // save previous (current) values in store

      this.infoValue = this.newValue;
      this.infoKey = this.newKey;
      // update store

      if (this.newValue.trim() && this.newKey.trim()) {
        this.$store.state.contacts.contacts[this.$route.params.id].key0[
          this.index
        ] = this.infoKey;
        this.$store.state.contacts.contacts[this.$route.params.id].value0[
          this.index
        ] = this.infoValue;
        this.isEditingLocal = false;
      }
    },
  },
};
</script>

<style >
li {
  border: none;
  /* border-radius: 10px; */
  border-bottom: 1px solid #ccc;
  /* box-shadow: 2px 3px 7px grey; */
  /* display: flex;
  justify-content: space-between; */
  padding: 10px 0px;
  margin-bottom: 1rem;
}
.buttonTmplt {
  width: 30px;
  height: 30px;
  margin: 5px;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
}
.removeBtn {
  background: rgb(253, 184, 184);
  font-size: 16px;
}

.editButton {
  background: rgb(143, 229, 203);
  color: white;
  font-size: 16px;
}
.editInput {
  margin-bottom: 0px;
  width: 40%;
  margin-left: 10px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
}

.infoCont {
  display: flex;
  flex-direction: row;
  text-align: center;
  /* width: 100%; */
}
.infoKey {
  /* width: 200px;
  min-width: 100px; */
  flex: 40%;
  background-color: rgb(143, 229, 203);
  /* font-weight: bold; */
  padding: 5px;
  align-items: center;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  border-radius: 10px;
}
.infoValue {
  flex: 60%;
  /* display: block; */
  /* height: auto; */
  padding: 5px;
  text-align: center;
  text-decoration: underline;
  font-size: 15px;
}
@media (max-width: 380px) {
  .infoCont {
    flex-direction: column;
  }
  .buttonTmpltm {
    width: auto;
    height: 25px;
    margin-top: 10px;
    background: rgb(253, 184, 184);
    color: #fff;
    border-radius: 2px;
    font-weight: bold;
    border: none;
  }
  .infoValue {
    flex: none;
    height: 100px;
    margin-top: 10px;
  }
}
/* p {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
} */
</style>