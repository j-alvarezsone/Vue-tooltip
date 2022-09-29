<template>
  <h1 :style="{ display: 'flex', 'justify-content': 'center', 'margin-bottom': '20px' }">Modifiers</h1>
  <div :style="{ display: 'flex', gap: '100px', 'flex-wrap': 'wrap', 'justify-content': 'center' }">
    <div class="container">
      <h2>Top</h2>
      <div class="tooltip_container">
        <p v-tooltip.arrow="'Top center'">Center</p>
        <p v-tooltip.topRight.arrow="'Top right'">right</p>
        <p v-tooltip.topLeft.arrow="'Top left'">left</p>
      </div>
    </div>
    <div class="container">
      <h2>Bottom</h2>
      <div class="tooltip_container">
        <p v-tooltip.bottomCenter.arrow="'Bottom center'">center</p>
        <p v-tooltip.bottomRight.topRight.arrow="'Bottom right'">right</p>
        <p v-tooltip.bottomLeft.topLeft.arrow="'Bottom left'">left</p>
      </div>
    </div>
    <div class="container">
      <h2>Left</h2>
      <div class="tooltip_container">
        <p v-tooltip.leftCenter.arrow="'Left center'">center</p>
        <p v-tooltip.leftTop.topRight.arrow="'Left top'">top</p>
        <p v-tooltip.leftBottom.topLeft.arrow="'Left bottom'">bottom</p>
      </div>
    </div>
    <div class="container">
      <h2>Right</h2>
      <div class="tooltip_container">
        <p v-tooltip.rightCenter.arrow="'Right center'">center</p>
        <p v-tooltip.rightTop.topRight.arrow="'Right top'">top</p>
        <p v-tooltip.rightBottom.topLeft.arrow="'Right bottom'">bottom</p>
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
