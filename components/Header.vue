<template>
  <header class="bg-chathams-blue text-white flex items-center justify-between p-2">
    <div class="flex items-center space-x-2">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        size="lg"
      />

      <span class="font-bold text-2xl uppercase">Sportsbook</span>
    </div>

    <div>
      <select class="bg-rhino px-2 py-1 rounded-full focus-visible:outline-none">
        <option value="1" selected>Indonesia</option>
        <option value="2">English</option>
      </select>
    </div>

    <div class="items-center hidden space-x-1">
      <span class="bg-rhino px-2 py-1 rounded-full text-xs">Rp 500,000.00</span>

      <font-awesome-icon
        :icon="['fas', 'user-circle']"
        size="2x"
      />
    </div>
  </header>
</template>