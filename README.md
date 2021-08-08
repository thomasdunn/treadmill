# Treadmill

I have an old treadmill that works well, except the display electronics no longer work at all.  This project fulfills two goals:

* Digital display via phone
* Running programs such as Couch to 5K

The speed of the treadmill is controlled via a potentiometer.  I have installed a Raspberry Pi in the control panel which controls the Adafruit DS3502 digital potentiometer over I2C.  I've installed a switch to toggle control via phone or via the physical potentiometer knob.

The phone display is implemented via Node.js controlling the DS3502 and talking to the Ionic/Angular app over WebSockets via Socket.io.

## Raspberry Pi Setup

```
Setup Headless Raspberry Pi
   Write Raspberry Pi OS Lite image to SD
   Configure wpa_supplicant.conf
   Create ssh file at root

Enable I2C
   sudo raspi-config
   Interfacing Options >> I2C

Set hostname
   sudo vi /etc/hostname 
   sudo vi /etc/hosts

Install Node.js
   curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
   sudo apt install nodejs

Allow node on port 80
   sudo apt-get install libcap2-bin
   sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``

Clone repo
   git clone git@github.com:thomasdunn/treadmill.git

Build code
   sudo npm install --global @angular/cli
   pushd service && npm install && popd
   pushd ionic && npm install && ng build && popd

Auto-start the service on boot
   sudo npm install -g pm2
   pm2 start index.mjs --watch
   pm2 save
   pm2 startup
   sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
```

## TODO

* Integrate code from alert-sensor.js to service for reading treadmill speed
* Setup safe shutdown button for RPi
  Option 1 from:
  https://raspberrypi.stackexchange.com/a/117019
  https://github.com/raspberrypi/firmware/blob/master/boot/overlays/README#L1605
