<template>
  <main class="flex-1 overflow-y-auto">
    <header class="bg-purple-700 border-b">
      <div class="flex justify-between items-center container mx-auto p-6">
        <h1 class="text-xl text-white">Resumo por categoria</h1>
        <button class="p-1.5 text-white">
          <ph-export :size="24" />
        </button>
      </div>
    </header>

    <section class="container mx-auto px-6 pb-20">
      <div class="max-w-xl mx-auto mt-5">
        <chart />
        <div class="flex items-center justify-center gap-x-20">
          <div>
            <h1 class="font-semibold text-sm text-gray-600">Entradas</h1>
            <p class="text-xl text-purple-600">R$ 14.400,00</p>
          </div>
          <div>
            <h1 class="font-semibold text-sm text-gray-600">Saídas</h1>
            <p class="text-xl text-rose-600">R$ 400,00</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>