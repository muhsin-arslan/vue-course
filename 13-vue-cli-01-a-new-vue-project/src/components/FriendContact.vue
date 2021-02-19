<template>
  <li>
    <h2>{{ fullName }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ isFavorite ? "Unfavorite" : "Favorite" }}
    </button>
    <button @click="toggleDetail">Show Details</button>
    <button @click="deleteFriend">Delete Friend</button>
    <ul v-if="isDetailVisible">
      <li><strong>Email Address: </strong>{{ emailAddress }}</li>
      <li><strong>Phone Number: </strong>{{ telephoneNumber }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    telephoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      /*       validator: function (value) {
        return value === "1" || value === "0";
      }, */
    },
  },
  emits: {
    "toggle-favorite": function (id) {
      if (id) return true;

      console.warn("Id is missing");
      return false;
    },
    "delete-friend": function (id) {
      if (id) return true;

      console.warn("Id is missing");
      return false;
    },
  },
  data() {
    return {
      isDetailVisible: false,
    };
  },
  methods: {
    toggleDetail() {
      this.isDetailVisible = !this.isDetailVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
