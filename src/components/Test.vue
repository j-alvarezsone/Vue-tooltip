<script lang="ts" setup>
  import Modifiers from './Modifiers.vue';
  import ObjectPlacement from './ObjectPlacement.vue';
  import TooltipInformation from './TooltipInformation.vue';
  import Tooltip from './tooltip/Tooltip.vue';
</script>

<template>
  <Modifiers />
  <br />
  <ObjectPlacement />
  <br />
  <div class="flex items-center justify-center flex-col space-y-10">
    <h1 class="text-blue-500">Component</h1>
    <Tooltip content="This is tooltip component">
      <template #default="{ event }">
        <span v-on="event.on"> hover over me </span>
      </template>
    </Tooltip>
    <Tooltip placement="bottom">
      <template #default="{ event }">
        <span v-on="event.on"> hover over me </span>
      </template>
      <template #content>
        <TooltipInformation />
      </template>
    </Tooltip>
  </div>
</template>

<style scoped></style>
