# Mass Effect 2 - Final Mission Calculator (ME2FMC)

**WARNING: Contains major spoilers for the end of Mass Effect 2!**

A calculator app that uses player-chosen decisions to determine the survival of squadmates during the final mission of the game Mass Effect 2. 

Access the app here: https://62firelight.github.io/ME2FMC

**NOTE:** If you get a 404 error, the app is currently down. The app can still be used if you clone the Git repo and run it through the Angular CLI.

The logic of the app is based on the flowchart below:

![](https://i.imgur.com/nJPAc.jpeg)

## Known Issues
* Morinth is not an option for creating the biotic shield.
* When going into the mission with 8 squadmates, it is possible to only have 4 squadmates by the time "The Long Walk" section is initiated. This can lead to a forced situation where there is no crew escort, and if 2 more squadmates die, no defenders to hold the line. According to wikis and guides, this should not be possible as the player needs to always be able to make the decision of having a crew escort and there must be at least one person holding the line as they will always communicate with Shepard during the final battle.
* For the "Hold the Line" section, the app currently uses the logic from the flowchart. However, that is inaccurate as the game actually uses a much simpler formula for determining the fate of squadmates who are holding the line. This formula was derived from looking at the game files. **Source:** https://www.reddit.com/r/masseffect/comments/103np0o/the_actual_hold_the_line_calculation
