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

Content: String(html)

v-tooltip="'Hello World'"

```

### By object

<br>
<b>placement</b>

```
Placement : top, topStart, topEnd, bottom, bottomStart, bottomEnd, left, leftStart, leftEnd, right, rightStart, rightEnd

Content: String(html)

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
