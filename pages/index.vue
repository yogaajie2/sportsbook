<template>
  <main>
    <img
      src="https://via.placeholder.com/375x112.png"
      alt=""
    />

    <section class="bg-zircon px-2">
      <div class="flex items-center justify-between">
        <p class="font-bold text-2xl">Populer</p>

        <a
          href="javascript:void(0)"
          class="flex items-center justify-between space-x-2"
        >
          <p class="inline">Lihat Semua</p>

          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </a>
      </div>

      <MatchCard
        v-for="(match, index) in matches"
        :key="index"
        :match="match"
      />
    </section>
  </main>
</template>

<script>
import data from "~/matches.json"

export default {
  data() {
    return {
      matches: data.matches
    }
  }
}
</script>
