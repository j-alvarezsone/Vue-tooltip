<script lang="ts" setup>
  import { tooltipContent } from '../directives/tooltip';
  import type { ThemeOptions } from '../directives/tooltip';

  const topCenterTheme: ThemeOptions = {
    placement: 'topCenter',
    backgroundColor: '#fff',
    color: '#000',
  };

  const topRightTheme: ThemeOptions = {
    placement: 'topRight',
    backgroundColor: '#fff',
    color: '#000',
  };

  const topLeftTheme: ThemeOptions = {
    placement: 'topLeft',
    backgroundColor: '#fff',
    color: '#000',
  };

  const bottomCenterTheme: ThemeOptions = {
    placement: 'bottomCenter',
    backgroundColor: '#acdcee',
    color: '#000',
    fontSize: '20px',
  };

  const bottomRightTheme: ThemeOptions = {
    placement: 'bottomRight',
    backgroundColor: '#acdcee',
    color: '#000',
    fontSize: '20px',
  };

  const bottomLeftTheme: ThemeOptions = {
    placement: 'bottomLeft',
    backgroundColor: '#acdcee',
    color: '#000',
    fontSize: '20px',
  };

  const leftCenterTheme: ThemeOptions = {
    placement: 'leftCenter',
    backgroundColor: '#43B883',
    color: '#fff',
  };

  const leftTopTheme: ThemeOptions = {
    placement: 'leftTop',
    backgroundColor: '#43B883',
    color: '#fff',
  };

  const leftBottomTheme: ThemeOptions = {
    placement: 'rightBottom',
    backgroundColor: '#43B883',
    color: '#fff',
  };

  const rightCenterTheme: ThemeOptions = {
    placement: 'rightCenter',
    backgroundColor: '#f4aeba',
    color: '#000',
  };

  const rightTopTheme: ThemeOptions = {
    placement: 'rightTop',
    backgroundColor: '#f4aeba',
    color: '#000',
  };

  const rightBottomTheme: ThemeOptions = {
    placement: 'rightBottom',
    backgroundColor: '#f4aeba',
    color: '#000',
  };
</script>

<template>
  <h1 :style="{ display: 'flex', 'justify-content': 'center', 'margin-bottom': '20px' }">Object</h1>
  <div :style="{ display: 'flex', gap: '100px', 'flex-wrap': 'wrap', 'justify-content': 'center' }">
    <div class="container">
      <h2>Top</h2>
      <div class="tooltip_container">
        <p v-tooltip="tooltipContent({ text: 'Top center', themeOptions: topCenterTheme, displayArrow: true })">
          Center
        </p>
        <p v-tooltip="tooltipContent({ text: 'Top right', themeOptions: topRightTheme, displayArrow: true })">right</p>
        <p v-tooltip="tooltipContent({ text: 'Top left', themeOptions: topLeftTheme, displayArrow: true })">left</p>
      </div>
    </div>
    <div class="container">
      <h2>Bottom</h2>
      <div class="tooltip_container">
        <p v-tooltip="tooltipContent({ text: 'Bottom center', themeOptions: bottomCenterTheme, displayArrow: true })">
          Center
        </p>
        <p v-tooltip="tooltipContent({ text: 'Bottom right', themeOptions: bottomRightTheme, displayArrow: true })">
          right
        </p>
        <p v-tooltip="tooltipContent({ text: 'Bottom left', themeOptions: bottomLeftTheme, displayArrow: true })">
          left
        </p>
      </div>
    </div>
    <div class="container">
      <h2>Left</h2>
      <div class="tooltip_container">
        <p v-tooltip="tooltipContent({ text: 'Left center', themeOptions: leftCenterTheme, displayArrow: true })">
          Center
        </p>
        <p v-tooltip="tooltipContent({ text: 'Left top', themeOptions: leftTopTheme, displayArrow: true })">top</p>
        <p v-tooltip="tooltipContent({ text: 'Left bottom', themeOptions: leftBottomTheme, displayArrow: true })">
          bottom
        </p>
      </div>
    </div>
    <div class="container">
      <h2>Right</h2>
      <div class="tooltip_container">
        <p v-tooltip="tooltipContent({ text: 'Right center', themeOptions: rightCenterTheme, displayArrow: true })">
          Center
        </p>
        <p v-tooltip="tooltipContent({ text: 'Right top', themeOptions: rightTopTheme, displayArrow: true })">top</p>
        <p v-tooltip="tooltipContent({ text: 'Right bottom', themeOptions: rightBottomTheme, displayArrow: true })">
          bottom
        </p>
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
