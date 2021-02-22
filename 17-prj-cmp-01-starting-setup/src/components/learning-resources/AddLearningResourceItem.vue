<template>
  <base-dialog
    v-if="inputsAreInvalid"
    title="Invalid Input"
    @confirm="confirmDialog"
  >
    <template #default>
      <p>Please fill the all input fields.</p>
    </template>
    <template #actions>
      <base-button @click="confirmDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      titleInput: '',
      descriptionInput: '',
      linkInput: '',
      inputsAreInvalid: false,
    };
  },
  methods: {
    submit() {
      const isInputsAreValid = this._controlInputs();

      if (!isInputsAreValid) {
        this.inputsAreInvalid = true;
        return;
      }

      const newResource = {
        title: this.titleInput,
        description: this.descriptionInput,
        link: this.linkInput,
      };

      this.addResource(newResource);

      this._clearInputs();
    },

    confirmDialog() {
      this.inputsAreInvalid = false;
    },

    _clearInputs() {
      this.titleInput = '';
      this.descriptionInput = '';
      this.linkInput = '';
    },

    _controlInputs() {
      return (
        this.titleInput.trim() !== '' &&
        this.descriptionInput.trim() !== '' &&
        this.linkInput.trim() !== ''
      );
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>