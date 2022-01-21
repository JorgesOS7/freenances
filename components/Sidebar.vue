<template>
  <aside
    class="
      hidden
      lg:block
      fixed
      w-24
      h-full
      bg-purple-700
      border-r border-purple-800
    "
  >
    <nav class="p-6">
      <ul class="flex flex-col items-center gap-y-6 mt-6">
        <li>
          <nuxt-link to="/" v-slot="{ navigate, isExactActive }" custom>
            <button
              @click="navigate"
              class="rounded-full p-2.5"
              :class="[isExactActive && 'bg-white']"
            >
              <component
                :is="'ph-house-line'"
                :size="28"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-purple-800': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/transactions"
            v-slot="{ navigate, isExactActive }"
            custom
          >
            <button
              @click="navigate"
              class="rounded-full p-2.5"
              :class="[isExactActive && 'bg-white']"
            >
              <component
                :is="'ph-arrows-left-right'"
                :size="28"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-purple-800': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/charts" v-slot="{ navigate, isExactActive }" custom>
            <button
              @click="navigate"
              class="rounded-full p-2.5"
              :class="[isExactActive && 'bg-white']"
            >
              <component
                :is="'ph-chart-pie-slice'"
                :size="28"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-purple-800': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li>
        <!-- <li class="bg-gray-50 border rounded-full">
          <nuxt-link
            class="p-3"
            to="/"
            v-slot="{ navigate, isExactActive }"
            custom
          >
            <button @click="navigate">
              <component
                :is="'ph-house-line'"
                :size="24"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-indigo-600': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li> -->
        <!-- <li class="bg-gray-50 border rounded-full grid place-items-center">
          <nuxt-link
            class="p-3"
            to="/transactions"
            v-slot="{ navigate, isExactActive }"
            custom
          >
            <button @click="navigate">
              <component
                :is="'ph-arrows-left-right'"
                :size="24"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-indigo-600': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li>
        <li class="flex bg-gray-50 border rounded-full">
          <nuxt-link
            class="p-3 flex flex-col items-center justify-center relative"
            to="/charts"
            v-slot="{ navigate, isExactActive }"
            custom
          >
            <button @click="navigate">
              <component
                :is="'ph-chart-pie-slice'"
                :size="24"
                :weight="isExactActive ? 'fill' : 'regular'"
                :class="{
                  'text-indigo-600': isExactActive,
                  'text-gray-400': !isExactActive,
                }"
              />
            </button>
          </nuxt-link>
        </li> -->
      </ul>
    </nav>
  </aside>
</template>