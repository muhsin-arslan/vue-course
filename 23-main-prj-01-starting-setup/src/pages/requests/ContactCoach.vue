<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !emailAddress.isValid }">
      <label for="email">Your E-mail Address</label>
      <input
        type="text"
        id="email"
        v-model.trim="emailAddress.val"
        @blur="clearValidity('emailAddress')"
      />
      <p v-if="!emailAddress.isValid">Enter valid email address.</p>
    </div>
    <div class="form-control" :class="{ invalid: !message.isValid }">
      <label for="message">Your Message</label>
      <textarea
        id="message"
        rows="5"
        v-model.trim="message.val"
        @blur="clearValidity('message')"
      ></textarea>
      <p v-if="!message.isValid">Message is required.</p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      emailAddress: {
        type: 'email',
        val: '',
        isValid: true,
      },
      message: {
        type: String,
        val: '',
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (
        this.emailAddress.val === '' ||
        !this.emailAddress.val.includes('@')
      ) {
        this.emailAddress.isValid = false;
        this.formIsValid = false;
      }

      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidity(input) {
      if (
        (this[input].type === String && this[input].val !== '') ||
        (this[input].type === 'email' &&
          this[input].val !== '' &&
          this[input].val.includes('@'))
      )
        this[input].isValid = true;
      else this[input].isValid = false;
    },
    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        coachId: this.$route.params.id,
        emailAddress: this.emailAddress.val,
        message: this.message.val,
      };

      try {
        await this.$store.dispatch('requests/contactCoach', formData);
      } catch (error) {
        console.log(error);
      }

      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>