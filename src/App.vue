<template>
  <v-app>

    <v-main>
      <game/>
    </v-main>
  </v-app>
</template>

<script>
import game from './components/game';

export default {
  name: 'App',

  components: {
    game,
  },

  data: () => ({
    //
  }),
};
</script>
