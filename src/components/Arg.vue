<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { tooltipContent } from '../directives/tooltip';
  import type { ThemeOptions } from '../directives/tooltip';

  const hideTooltip = ref<boolean>(true);

  const topCenterTheme = computed((): ThemeOptions => {
    return {
      placement: 'topCenter',
      backgroundColor: '#fff',
      color: '#000',
      hide: !!hideTooltip.value,
    };
  });
</script>

<template>
  <h1 :style="{ display: 'flex', 'justify-content': 'center', 'margin-bottom': '20px' }">Arg</h1>
  <div :style="{ display: 'flex', gap: '100px', 'flex-wrap': 'wrap', 'justify-content': 'center' }">
    <div class="container" @mouseover="hideTooltip = false" @mouseleave="hideTooltip = true">
      <h2>Show/Hide arg top on mouseover and mouseleave</h2>
      <div class="tooltip_container">
        <p
          v-tooltip:arg="
            tooltipContent({
              text: 'Top center',
              themeOptions: topCenterTheme,
              displayArrow: true,
              argText: 'This is arg text',
            })
          "
        >
          Center
        </p>
      </div>
    </div>
    <div class="container">
      <h2>Arg Top</h2>
      <div class="tooltip_container">
        <p class="arg">Center</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
    border: 1px solid;
    width: 100%;
    max-width: 400px;
  }
  .tooltip_container {
    padding: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
</style>
