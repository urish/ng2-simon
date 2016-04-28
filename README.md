# ng2-simon

A Universal Simon game written in Angular 2.

It runs on the web browser, on Arduino and also on the Raspberry PI using [angular2-iot](https://github.com/urish/angular2-iot).


## Running in a Web Browser

    npm install
    npm start

Then go to [http://localhost:3000](http://localhost:3000) in your browser.

## Running on Arduino

### Hardware Assembly

1. Connect 4 push-buttons, one button between each of Arduino pins 2, 3, 4, 5 and the ground
2. Connect 4 colored LEDs, one LED between each of Arduino pins 9, 10, 11, 12 and a current limiting resistor connected to the ground. 220ohm is a good value for the resistor.
3. Optionally, connect a small speaker between pin 8 and the ground

![Simon on Arduino Hardware Diagram](diagrams/arduino.png)

### Running the game

1. Connect the Arduino board to your computer
2. Upload the [StandardFirmata firmware](https://github.com/firmata/arduino) firmware to your Arduino board
3. Build the project using `npm run build:iot`
4. Run it using `npm run iot`

## Running on Raspiberry Pi

### Hardware Assembly

TBD

### Running the game

Run the following command on the Raspberry pi terminal / console:

1. Install the `raspi-io` package by running `npm install raspi-io`
2. Make sure you have the `sox` package installed: `sudo apt-get install sox`
3. Build the project using `npm run build:iot`
4. Run it using `sudo npm run iot`
