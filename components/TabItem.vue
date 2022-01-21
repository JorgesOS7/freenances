<template>
  <li class="flex-1 grid place-items-center">
    <nuxt-link
      class="p-3 flex flex-col items-center justify-center relative"
      :to="to"
      v-slot="{ navigate, isExactActive }"
      custom
    >
      <button @click="navigate" :class="[isExactActive && 'dot']">
        <component
          :is="icon"
          :size="32"
          :class="{
            'text-purple-600': isExactActive,
            'text-gray-400': !isExactActive,
          }"
        />
      </button>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: String,
    icon: String,
  },
};
</script>

<style lang="postcss">
.dot {
  @apply after:bottom-1
        after:absolute
        after:w-2
        after:h-1.5
        after:bg-purple-800
        after:rounded-full;
}
</style>