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
        id="backButton"
        v-if="isEditedLocal && !isEditingLocal"
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
      isEditedLocal: this.isEdited,
      newValue: "",
      newKey: "",
      oldValue: "",
      oldKey: "",
      infoKeyLocal: "",
      infoValueLocal: "",
    };
  },
  props: {
    infoKey: {},
    infoValue: {},
    index: {},
    isEditing: false,
    isEdited: false,
  },
  methods: {
    setEditing() {
      this.isEditingLocal = true;
    },
    cancel() {
      if (window.confirm("Выйти из меню редактирования?")) {
        this.isEditingLocal = false;
        this.newKey = "";
        this.newValue = "";
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

      if (this.oldKey || this.oldValue) {
        this.isEditedLocal = true;
      } else {
        this.isEditedLocal = false;
      }
      this.isEditingLocal = false;
      this.newKey = "";
      this.newValue = "";
    },

    saveInfo() {
      // save previous and current values
      if (this.newValue.trim()) {
        this.infoValueLocal = this.newValue;
        this.oldValue = this.infoValue;
      } else {
        this.infoValueLocal = this.infoValue;
      }
      if (this.newKey.trim()) {
        this.infoKeyLocal = this.newKey;
        this.oldKey = this.infoKey;
      } else {
        this.infoKeyLocal = this.infoKey;
      }
      // update store
      this.updateStore();
    },
    backValue() {
      if (this.oldKey) {
        this.infoKeyLocal = this.oldKey;
        this.oldKey = "";
      }
      if (this.oldValue) {
        this.infoValueLocal = this.oldValue;
        this.oldValue = "";
      }
      this.updateStore();
    },
  },
};
</script>

<style >
li {
  border: none;

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
  margin-top: 5px;
}
.removeBtn {
  background: rgb(121, 119, 119);
  font-weight: bold;
  margin-left: 40px;
}
.editButton {
  border: 2px solid rgb(121, 119, 119);
  color: rgb(121, 119, 119);
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
.buttonTmplt:focus {
  outline: none;
}
.editInput {
  margin-bottom: 0px;
  width: 40%;
  margin-left: 10px;
  height: auto;
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 0px;
}

.infoCont {
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(187, 185, 185);
}
.infoKey {
  flex: 40%;
  background-color: rgb(155, 189, 150);
  padding: 5px;
  align-items: center;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  border-radius: 10px;
  color: white;
}
.infoValue {
  flex: 60%;
  padding: 5px;
  /* text-align: justify; */
  text-decoration: underline;
  font-size: 15px;
}
@media (max-width: 380px) {
  .infoCont {
    background: rgb(224, 222, 222);
    flex-direction: column;
    /* border: 1px solid grey; */
    border-radius: 10px 10px 5px 5px;
    padding: 5px;
    padding-bottom: 5px;
    border-bottom: none;
    box-shadow: 2px 3px 7px grey;
  }
  .buttonTmplt {
    flex: none;
    min-width: 80%;
    max-width: 100%;
    border-radius: 5px;
    margin: 0px;
    /* margin-top: 25px; */
  }
  .editButton {
    margin: 10px 0px;
    background: white;
  }
  .infoKey {
    background: rgb(155, 189, 150);
    color: white;
    border: 2px solid white;
  }
  .infoValue {
    flex: none;
    min-height: 80px;
    height: auto;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    border-radius: 10px;
    /* border: 1px solid grey; */
    background: rgb(255, 255, 255);
    text-decoration: none;
  }
  .editInput {
    width: 90%;
    height: 100px;
    margin-top: 20px;
  }
  .editInput::placeholder {
    color: blue;
    padding: 10px;
    text-align: center;
  }
}
</style>