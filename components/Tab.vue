<template>
  <footer
    class="
      block
      lg:hidden
      fixed
      bottom-0
      inset-x-0
      bg-white
      border-t
      rounded-t-3xl
    "
  >
    <nav class="max-w-lg mx-auto">
      <ul class="flex items-center justify-between">
        <tab-item to="/" icon="ph-house" />
        <tab-item to="/transactions" icon="ph-arrows-left-right" />
        <tab-item to="/charts" icon="ph-chart-pie-slice" />
      </ul>
    </nav>
  </footer>
</template>