# Mass Effect 2 Final Mission Calculator (ME2FMC)

**WARNING: Contains major spoilers for the end of Mass Effect 2!**

A calculator app that uses player-chosen decisions to determine the survival of squadmates during the final mission of the game Mass Effect 2.

Heavily inspired by [Suicide Mission Survival Calculator](https://www.nexusmods.com/masseffect2/mods/146).

## Usage

Access the app here: https://62firelight.github.io/ME2FMC

**NOTE:** If you get a 404 error, the app is currently down. The app can still be used if you clone the Git repo and run it through the Angular CLI.

## Details

The logic of the app is (mostly) based on the flowchart below. The only difference is in the "Hold the Line" section, where each squadmate's score has +1 added to it and the sum of the scores is divided by 3 to give the number of survivors rather than taking the average score and comparing it to a given threshold to give the number of deaths. [Source](https://www.reddit.com/r/masseffect/comments/103np0o/the_actual_hold_the_line_calculation/)

![](https://i.imgur.com/nJPAc.jpeg)

## Known Issues

See the list of [issues](https://github.com/62firelight/ME2FMC/issues) here.
