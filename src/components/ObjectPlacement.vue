<template>
  <h1>Object Placement</h1>
  <br />
  <div class="container">
    <div class="placement">
      <p v-tooltip="{ content: 'Top', placement: 'top' }">Top</p>
      <p v-tooltip="{ content: 'Top Start', placement: 'topStart' }">Top Start</p>
      <p v-tooltip="{ content: 'Top End', placement: 'topEnd' }">Top End</p>
    </div>
    <div class="placement">
      <p v-tooltip="{ content: 'Bottom', placement: 'bottom' }">Bottom</p>
      <p v-tooltip="{ content: 'Bottom Start', placement: 'bottomStart' }">Bottom Start</p>
      <p v-tooltip="{ content: 'Bottom End', placement: 'bottomEnd' }">Bottom End</p>
    </div>
    <div class="placement">
      <p v-tooltip="{ content: 'Left', placement: 'left' }">Left</p>
      <p v-tooltip="{ content: 'Left Start', placement: 'leftStart' }" class="space">Left Start</p>
      <p v-tooltip="{ content: 'Left End', placement: 'leftEnd' }" class="space">Left End</p>
    </div>
    <div class="placement">
      <p v-tooltip="{ content: 'Right', placement: 'right' }">Right</p>
      <p v-tooltip="{ content: 'Right Start<', placement: 'rightStart' }" class="space">Right Start</p>
      <p v-tooltip="{ content: 'Right End', placement: 'rightEnd' }" class="space">Right End</p>
    </div>
    <div class="placement">
      <p v-tooltip="{ content: 'Light Background', placement: 'top', bgLight: true }">Light Background</p>
      <p v-tooltip="{ content: 'No Arrow', placement: 'top', noArrow: true }">No Arrow</p>
      <p v-tooltip="{ content: 'Auto Hide', placement: 'top', autoHide: true }">Auto Hide</p>
      <p v-tooltip="{ content: '<h1>Html</h1>', placement: 'top', html: true }">Html</p>
      <p v-tooltip="{ content: 'Font Size', placement: 'top', fontSize: '2rem' }">Font Size</p>
      <p v-tooltip="{ content: 'Padding', placement: 'top', padding: '2rem' }">Padding</p>
      <p v-tooltip="{ content: 'Max Width', placement: 'top', maxWidth: '3rem' }">Max Width</p>
      <p v-tooltip="{ content: 'Z Index', placement: 'top', zIndex: 20 }">Z Index</p>
    </div>
    <div class="placement">
      <p v-tooltip="{ content: ComponentA, placement: 'top', maxWidth: '1000px' }">Component</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import ComponentA from './ComponentA.vue';
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .container {
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
