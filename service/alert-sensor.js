const pigpio = require('pigpio');
const Gpio = pigpio.Gpio;

console.log(pigpio);

// one pin of switch is wired to GND (pin 9) 
// other pin of switch is wired to GPIO 4 (pin 7)

// with resistor, weakly pull up GPIO 4 (pin 7) to 3v3 (pin 17)
const sensor = new Gpio(4, {
  mode: Gpio.INPUT,
  alert: true
});


// this debouncing supports at least 30 RPS
sensor.glitchFilter(1000);

const watchSensor = () => {
  let startTick;

  // Use alerts to determine how long the LED was turned on
  sensor.on('alert', (level, tick) => {
    if (level == 1) {
      startTick = tick;
    } else {
      const endTick = tick;
      const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
      const rps = 1000000 / diff;
      console.log(`RPS ${rps}`);
    }
  });
};

watchSensor();
