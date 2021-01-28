<template>
  <li>
    <div id="container" class="infoCont">
      <div id="infoKey" class="infoKey" v-if="!isEditingLocal">
        {{ infoKey }}
      </div>
      <input
        class="editInput"
        type="text"
        v-model="newKey"
        v-if="isEditingLocal"
        :placeholder="infoKeyLocal"
      />
      <div class="infoValue" v-if="!isEditingLocal">
        {{ infoValue }}
      </div>
      <input
        class="editInput"
        type="text"
        v-if="isEditingLocal"
        :placeholder="infoValueLocal"
        v-model="newValue"
      />
      <button
        id="backButton"
        v-if="!isEditingLocal"
        class="buttonTmplt backButton"
        v-on:click="backValue()"
      >
        &#8617;
      </button>
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
        class="buttonTmplt saveButton"
        v-if="isEditingLocal"
        v-on:click="saveInfo()"
      >
        &#10003;
      </button>
      <button
        id="cancel"
        class="buttonTmplt cancelButton"
        v-if="isEditingLocal"
        v-on:click="cancel()"
      >
        &gt;
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
      oldValue: "",
      oldKey: "",
      infoKeyLocal: this.infoKey,
      infoValueLocal: this.infoValue,
    };
  },
  props: {
    infoKey: {},
    infoValue: {},
    index: {},
    isEditing: false,
  },
  methods: {
    setEditing() {
      this.isEditingLocal = true;
    },
    cancel() {
      if (window.confirm("Выйти из меню редактирования?")) {
        this.isEditingLocal = false;
      }
    },
    // update store
    updateStore() {
      this.$set(
        this.$store.state.contacts.contacts[this.$route.params.id].key0,
        this.index,
        this.infoKeyLocal
      );
      this.$set(
        this.$store.state.contacts.contacts[this.$route.params.id].value0,
        this.index,
        this.infoValueLocal
      );

      this.isEditingLocal = false;
      console.log(this.infoKeyLocal, this.infoValueLocal, "EDITED");
      this.newKey = "";
      this.newValue = "";
    },

    saveInfo() {
      // save previous and current values
      if (this.newValue.trim()) {
        this.oldValue = this.infoValueLocal;
        this.infoValueLocal = this.newValue;
      }
      if (this.newKey.trim()) {
        this.oldKey = this.infoKeyLocal;
        this.infoKeyLocal = this.newKey;
        console.log("da");
      }
      // update store
      this.updateStore();
    },
    backValue() {
      if (this.oldKey) {
        this.infoKeyLocal = this.oldKey;
      }
      if (this.oldValue) {
        this.infoValueLocal = this.oldValue;
      }
      this.updateStore();
    },
  },
};
</script>

<style >
li {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
  margin-bottom: 1rem;
}

.buttonTmplt {
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  font-size: 15px;
  padding: 0px;
  color: #fff;
  border-radius: 50%;
  margin-left: 7px;
  border: none;
}
.removeBtn {
  background: rgb(253, 184, 184);
  font-weight: bold;
  margin-left: 40px;
}
.editButton {
  background: rgb(172, 204, 142);
  color: black;
}
.backButton {
  background: rgb(143, 229, 203);
  font-weight: bold;
  color: black;
}
.cancelButton {
  background: rgb(253, 184, 184);
  color: black;
  font-weight: bold;
}
.saveButton {
  background: rgb(172, 204, 142);
  color: black;
  font-weight: bold;
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
}
.infoKey {
  flex: 40%;
  background-color: rgb(143, 229, 203);
  padding: 5px;
  align-items: center;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  border-radius: 10px;
}
.infoValue {
  flex: 60%;
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
</style>