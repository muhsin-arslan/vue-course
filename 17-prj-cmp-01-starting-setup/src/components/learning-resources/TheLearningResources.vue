<template>
  <base-card>
    <base-button
      @click="setSelectedTab('learning-stored-resources')"
      :className="storedResourceButtonClassName"
      >Stored Learning Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-learning-resource-item')"
      :className="addResourceButtonClassName"
      >Add Learning Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import LearningStoredResources from './LearningStoredResources.vue';
import AddLearningResourceItem from './AddLearningResourceItem.vue';

export default {
  components: { LearningStoredResources, AddLearningResourceItem },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  data() {
    return {
      selectedTab: 'learning-stored-resources',
      storedResources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'The official Vue documentation',
          link: 'https://v3.vuejs.org',
        },
        {
          id: 2,
          title: 'Learn Google',
          description: 'You need to learn how to googling.',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResourceButtonClassName() {
      return this.selectedTab === 'learning-stored-resources' ? null : 'flat';
    },
    addResourceButtonClassName() {
      return this.selectedTab === 'add-learning-resource-item' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      resource.id = this.storedResources.length + 1;
      this.storedResources.unshift(resource);
      this.selectedTab = 'learning-stored-resources';
    },
    removeResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(
        (resource) => resource.id === resourceId
      );

      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>

<style>
</style>