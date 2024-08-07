<h1>v-tooltip</h1>

Created tooltip using directives with typescript support.

**Content**

- [Installation](#installation)
- [Usage](#usage)
  - [By object](#by-object)

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


<br>
<b>modifiers</b>

```
v-tooltip
v-tooltip.topStart
v-tooltip.topEnd
v-tooltip.bottom
v-tooltip.bottomStart
v-tooltip.bottomEnd
v-tooltip.left
v-tooltip.leftStart
v-tooltip.leftEnd
v-tooltip.right
v-tooltip.rightStart
v-tooltip.rightEnd
v-tooltip.noArrow
v-tooltip.bgLight
v-tooltip.autoHide
v-tooltip.html

Content: string/html

v-tooltip="'Hello World'"

```

### By object

<br>
<b>placement</b>

```
Placement : top, topStart, topEnd, bottom, bottomStart, bottomEnd, left, leftStart, leftEnd, right, rightStart, rightEnd

Content: string/html

noArrow: boolean
bgLight: boolean
autoHide: boolean
html: boolean
fontSize: string
padding: string
maxWidth: string
zIndex: number
hideDelay: number
disabled: boolean

v-tooltip="{ content: 'Hello World', placement: 'top' }"
```

<br>
<b>component</b>

<p>Props</p>

```
Placement : top, topStart, topEnd, bottom, bottomStart, bottomEnd, left, leftStart, leftEnd, right, rightStart, rightEnd
content: string
delay: number
noArrow: boolean
bgLight: boolean
autoHide: boolean
html: boolean
fontSize: string, example("1rem, 10px, 1em")
padding: string
maxWidth: string | number
maxHeight: string | number
zIndex: number
disabled: boolean
```

<p>Slots</p>

```
default slot - slotProps: event
content slot
```


<pre>
import Tooltip from 'path/to/Tooltip.vue';
</pre>

```
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
```
