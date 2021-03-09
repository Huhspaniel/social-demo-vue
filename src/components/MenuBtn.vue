<template>
  <div @click="toggle()" :class="{ 'menu-btn': true, 'menu-btn-active': isOpen }">
    <slot />
    <transition name="fade">
        <div v-if="isOpen" class="menu-wrapper">
            <slot name="menu" />
        </div>
    </transition>
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

.fade-enter-active, .fade-leave-active {
    transition: opacity .1s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>