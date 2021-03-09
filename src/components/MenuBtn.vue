<template>
  <div @click="toggle()" :class="{ 'menu-btn': true, 'menu-btn-active': isOpen }">
    <slot />
    <div v-if="isOpen" class="menu-wrapper">
        <slot name="menu" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          isOpen: false,
      }
  },
  methods: {
      toggle() {
          this.isOpen = !this.isOpen;
      }
  }
};
</script>

<style lang="scss">
.menu-btn {
    position: relative;
}

.menu-wrapper {
    position: absolute;
    right: 0;
    top: calc(100% + 5px);
    border-radius: 5px;
    width: max-content;
    background-color: rgb(77, 77, 77);
    color: white;
}
</style>