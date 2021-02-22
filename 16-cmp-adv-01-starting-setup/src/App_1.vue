<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :fullName="activeUser.name"
      :infoText="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.goal }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: { TheHeader, BadgeList, UserInfo, CourseGoals },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>