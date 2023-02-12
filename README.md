<h1>v-tooltip</h1>

Created tooltip using directives with typescript support.

**Content**

- [Installation](#installation)
- [Usage](#usage)
  - [By string](#by-string)
  - [By object](#by-object)
  - [By arg](#by-arg)
  - [Available interface and type](#available-interface-and-type)

## Installation

**main.ts**

<p>Register the tooltip to the directive.</p>

<pre>
import { createApp } from 'vue';
import App from './App.vue';
import { tooltip } from './directives/tooltip';
import './assets/main.css';
import './assets/tooltip.css';

const app = createApp(App);

app.directive('tooltip', tooltip);
app.mount('#app');
</pre>

## Usage

### By string

<br>
<b>modifiers</b>

```
<template>
  <p v-tooltip.arrow="'Top center'">Center</p>
  <p v-tooltip.topRight.arrow="'Top right'">right</p>
  <p v-tooltip.topLeft.arrow="'Top left'">left</p>
</template>

```

![Top center](./src/../public/img/tooltip/top_center.png?raw=true)
![Top right](./src/../public/img/tooltip/top_right.png?raw=true)
![Top left](./src/../public/img/tooltip/top_left.png?raw=true)

```
<template>
  <p v-tooltip.bottomCenter.arrow="'Bottom center'">center</p>
  <p v-tooltip.bottomRight.topRight.arrow="'Bottom right'">right</p>
  <p v-tooltip.bottomLeft.topLeft.arrow="'Bottom left'">left</p>
</template>

```

![Bottom center](./src/../public/img/tooltip/bottom_center.png?raw=true)
![Bottom right](./src/../public/img/tooltip/bottom_right.png?raw=true)
![Bottom left](./src/../public/img/tooltip/bottom_left.png?raw=true)

### By object

<br>
<b>placement</b>

```
<script lang="ts" setup>
  import { tooltipContent } from '../directives/tooltip';
  import type { ThemeOptions } from '../directives/tooltip';

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
</script>


<template>
  <p v-tooltip="tooltipContent({ text: 'Left center', themeOptions: leftCenterTheme, displayArrow: true })">
    Center
  </p>
  <p v-tooltip="tooltipContent({ text: 'Left top', themeOptions: leftTopTheme, displayArrow: true })">
    top
  </p>
  <p v-tooltip="tooltipContent({ text: 'Left bottom', themeOptions: leftBottomTheme, displayArrow: true })">
    bottom
  </p>
</template>

```

![Left center](./src/../public/img/tooltip/left_center.png?raw=true)
![Left top](./src/../public/img/tooltip/left_top.png?raw=true)
![Left bottom](./src/../public/img/tooltip/left_bottom.png?raw=true)

```
<script lang="ts" setup>
  import { tooltipContent } from '../directives/tooltip';
  import type { ThemeOptions } from '../directives/tooltip';

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
  <p v-tooltip="tooltipContent({ text: 'Right center', themeOptions: rightCenterTheme, displayArrow: true })">
    Center
  </p>
  <p v-tooltip="tooltipContent({ text: 'Right top', themeOptions: rightTopTheme, displayArrow: true })">
    top
  </p>
  <p v-tooltip="tooltipContent({ text: 'Right bottom', themeOptions: rightBottomTheme, displayArrow: true })">
    bottom
  </p>
</template>

```

![Right center](./src/../public/img/tooltip/right_center.png?raw=true)
![Right top](./src/../public/img/tooltip/right_top.png?raw=true)
![Right bottom](./src/../public/img/tooltip/right_bottom.png?raw=true)

### By arg

<br>
<b>arg</b>

```
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

```

![Arg](./src/../public/img/tooltip/arg.png?raw=true)

### Available interface and type

```
export interface ThemeOptions {
  maxWidth?: string;
  width?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  textAlign?: string;
  display?: string;
  translate?: string;
  backgroundColor?: string;
  padding?: string;
  hide?: boolean;
  /****  arrow ****/
  arrowTop?: string;
  arrowBottom?: string;
  arrowLeft?: string;
  arrowRight?: string;
  arrowTranslate?: string;
  arrowBorderColor?: string;

  placement?: Placement;
}

type Placement =
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftCenter'
  | 'leftTop'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightTop'
  | 'rightBottom'
  | 'serviceDelete'
  | 'grid';
```

<P>You can modify the top, bottom, left, right values in case if you don't use placement</P>
<b>Example</b>

```
  const tooltipTheme: ThemeOptions = {
    top: some px;
    bottom: some px;
    left: some px;
    right: some px;
    <!-- arrow -->
    arrowTop: some px;
    arrowBottom: some px;
    arrowLeft: some px;
    arrowRight: some px;
    backgroundColor: '#f4aeba',
    color: '#000',
  };
```
