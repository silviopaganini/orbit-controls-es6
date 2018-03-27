# Orbit Controls ES6

Little update to Orbit Controls from three.js to support ES6 modules

## Install
`npm i https://github.com/thanhnhan2tn/orbit-controls-es6.git --save`


## Example
```js
import OrbitControls from 'orbit-controls-es6';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
controls.maxDistance = 1500;
controls.minDistance = 0;
```
