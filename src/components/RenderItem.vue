<template>
  <li>
    <!-- {{ contact.id }} -->
    <!-- <strong>{{ index + 1 }}</strong> -->
    <div id="container" class="infoCont">
      <div id="infoKey" class="infoKey" v-if="!isEditingLocal">
        {{ infoKey }}
      </div>
      <input type="text" :value="infoKey" v-if="isEditingLocal" />
      <div class="infoValue" v-if="!isEditingLocal">
        {{
          this.$store.state.contacts.contacts[this.$route.params.id].value0[
            index
          ]
        }}
      </div>
      <input type="text" value="value" v-if="isEditingLocal" />
      <button
        id="editButton"
        value="Edit"
        v-if="!isEditingLocal"
        v-on:click="setEditing()"
      />
      <button
        id="removeButton"
        v-if="!isEditingLocal"
        class="rm"
        v-on:click="$emit('remove-item', index)"
      >
        &times;
      </button>
      <button
        id="saveInfo"
        v-if="isEditingLocal"
        v-on:click="saveInfo()"
      ></button>
      <button id="cancel" v-if="isEditingLocal" v-on:click="cancel()"></button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditingLocal: this.isEditing,
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
      // update store
      // this.isEditingLocal = false
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
.rm {
  width: 30px;
  height: 30px;
  margin: 5px;
  background: rgb(253, 184, 184);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  border: none;
}
/* .dt {
  background-color: rgb(143, 229, 203);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  border: none;
} */
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
  .rm {
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