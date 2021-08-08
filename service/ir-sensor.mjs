import * as pigpio from 'pigpio';
const Gpio = pigpio.Gpio;

const sensor = new Gpio(17, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_UP,
  edge: Gpio.RISING_EDGE
});

sensor.on('interrupt', (level) => {
  console.log('HEY!');
});

