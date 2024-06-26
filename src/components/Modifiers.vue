<template>
  <h1>Modifiers</h1>
  <br />
  <div class="_container">
    <div class="placement">
      <p v-tooltip="'Top'">Top</p>
      <p v-tooltip.topStart="'Top Start'">Top Start</p>
      <p v-tooltip.topEnd="'Top End'">Top End</p>
    </div>
    <div class="placement">
      <p v-tooltip.bottom="'Bottom'">Bottom</p>
      <p v-tooltip.bottomStart="'Bottom Start'">Bottom Start</p>
      <p v-tooltip.bottomEnd="'Bottom End'">Bottom End</p>
    </div>
    <div class="placement">
      <p v-tooltip.left="'Left'">Left</p>
      <p v-tooltip.leftStart="'Left Start'" class="space">Left Start</p>
      <p v-tooltip.leftEnd="'Left End'" class="space">Left End</p>
    </div>
    <div class="placement">
      <p v-tooltip.right="'Right'">Right</p>
      <p v-tooltip.rightStart="'Right Start'" class="space">Right Start</p>
      <p v-tooltip.rightEnd="'Right End'" class="space">Right End</p>
    </div>
    <div class="placement">
      <p v-tooltip.bgLight="'Light Background'">Light Background</p>
      <p v-tooltip.noArrow="'No Arrow'">No Arrow</p>
      <p v-tooltip.autoHide="'Auto Hide'">Auto Hide</p>
      <p v-tooltip.html="'<h1>Html</h1>'">Html</p>
    </div>
    <div class="placement">
      <p v-tooltip="TooltipTest2">Component</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TooltipTest2 from '../tooltip/TooltipTest2.vue';
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  ._container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6rem;
    place-items: center;
    border: 1px solid gray;
    padding: 3rem;
  }

  .space {
    width: 60px;
  }

  .placement {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
</style>
