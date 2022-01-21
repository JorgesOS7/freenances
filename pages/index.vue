<template>
  <main class="flex-1 overflow-y-auto">
    <header class="bg-purple-700 border-b">
      <div class="container mx-auto h-64 p-6">
        <h1 class="text-xl inline-flex items-center text-white">
          <span class="mr-2">
            <ph-currency-eth :size="32" weight="fill" />
          </span>
          Freenances
        </h1>

        <div class="flex overflow-x-scroll pb-4 mt-20 custom-scroll">
          <ul class="flex flex-nowrap lg:mx-auto">
            <li class="inline-block px-3">
              <article class="bg-white w-80 h-48 rounded-xl drop-shadow-md p-6">
                <header class="flex items-center justify-between">
                  <h2 class="text-sm text-gray-400">Entradas</h2>
                  <ph-trend-up class="text-emerald-500" :size="24" />
                </header>

                <div class="mt-10 block">
                  <h1 class="text-[32px] font-medium">R$ 17.400,00</h1>
                  <p class="text-xs text-gray-400">
                    Última entrada 13 de abril
                  </p>
                </div>
              </article>
            </li>
            <li class="inline-block px-3">
              <article class="bg-white w-80 h-48 rounded-xl drop-shadow-md p-6">
                <header class="flex items-center justify-between">
                  <h2 class="text-sm text-gray-400">Saídas</h2>
                  <ph-trend-down class="text-rose-600" :size="24" />
                </header>

                <div class="mt-10 block">
                  <h1 class="text-[32px] font-medium">R$ 400,00</h1>
                  <p class="text-xs text-gray-400">Última saída 13 de abril</p>
                </div>
              </article>
            </li>
            <li class="inline-block px-3">
              <article
                class="bg-purple-900 w-80 h-48 rounded-xl drop-shadow-md p-6"
              >
                <header class="flex items-center justify-between">
                  <h2 class="text-sm text-gray-400">Saldo</h2>
                  <ph-wallet class="text-white" :size="24" weight="fill" />
                </header>

                <div class="mt-10 block">
                  <h1 class="text-[32px] font-medium text-white">
                    R$ 17.000,00
                  </h1>
                  <p class="text-xs text-gray-400">De 01 á 13 de abril</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="container mx-auto px-6 py-20">
      <div class="mt-10">
        <h2 class="text-xl mb-5">Movimentações</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          <li class="bg-white p-5 rounded-md">
            <p class="text-base text-gray-700">Vendas de site</p>
            <h3 class="text-xl my-3 text-emerald-500">R$ 17.000,00</h3>
            <div
              class="flex flex-row justify-between items-center text-gray-500"
            >
              <div class="inline-flex items-center">
                <component :is="'ph-currency-dollar'" :size="18" />
                <span class="ml-2 text-sm">Vendas</span>
              </div>
              <p class="text-sm">21/01/2022</p>
            </div>
          </li>
          <li class="bg-white p-5 rounded-md">
            <p class="text-base text-gray-700">Aspirador de Pó</p>
            <h3 class="text-xl my-3 text-rose-600">R$ - 400,00</h3>
            <div
              class="flex flex-row justify-between items-center text-gray-500"
            >
              <div class="inline-flex items-center">
                <component :is="'ph-house-line'" :size="18" />
                <span class="ml-2 text-sm">Casa</span>
              </div>
              <p class="text-sm">21/01/2022</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style >
.custom-scroll::-webkit-scrollbar {
  background-color: none;
  width: 16px;
}
.custom-scroll::-webkit-scrollbar-track {
  background-color: #f3f4f6;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #f3f4f6;
}

.custom-scroll::-webkit-scrollbar-button {
  display: none;
}
</style>
