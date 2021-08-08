//import * as pigpio from 'pigpio';
// const Gpio = require('pigpio').Gpio;
// const pigpio = require('pigpio');
// const Gpio = pigpio.Gpio;
const pigpio = require('pigpio');
const Gpio = pigpio.Gpio;

// pigpio.initialize(); // pigpio C library initialized here

console.log(pigpio);

// const sensor = new Gpio(17, {
const sensor = new Gpio(4, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_UP,
  edge: Gpio.FALLING_EDGE
});

sensor.glitchFilter(10000);

sensor.on('interrupt', (level) => {
  console.log(+ new Date);
});

