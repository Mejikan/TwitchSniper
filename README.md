# twitch-sniper

Twitch Sniper by Lawrence Yong.
An EmberJS web application that interacts with the Twitch API.

## Instructions

You can quickly run this application:
* Download the contents of `/dist` directory.
* Within the directory, run `$ node main.js` in your command line, `$ sudo node main.js` in Linux.
* Application should serve at [http://localhost:80](http://localhost:80).

Run this application with Ember's provided server:
* Download this repository. 
* Create a new EmberJS application with `$ ember new Twitch-Sniper`.
* Copy the assests and code used by this project. All the source code is stored in `/app` directory and all the assests are stored in `/public` directory.
* Install [Ember Font Awesome](https://www.npmjs.com/package/ember-font-awesome) addon.
* Run application with `$ ember s`.
* Application should serve at [http://localhost:4200](http://localhost:4200).

## Overview

### Features
* Search Twitch for streams/channels
* Control the results per page and navigate using pagination
* Go to stream/channel page by clicking on result
* Responsive and clean, for the most part, without relying on any CSS frameworks like Bootstrap

This application was built using:
* EmberJS 2.12.0
* SASS
* Ember Font Awesome Add-on (for the two pagination icons)

### Anecdote
Originally, I had planned to use ReactJS as my main framework and jQuery for interactions with the Twitch API.
Instead, I used any free time I had between studies to learn EmberJS. I admit that while I still need some practice
with Ember, especially with its unique data handling, I believe that I'll be proficient with it by the start of the summer.