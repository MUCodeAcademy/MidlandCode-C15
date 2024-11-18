## Drawing Pad

Build a drawing pad for users. It could look similar to the image drawingPad.jpg, but it can look however you want. It should have the following functionality (at minimum):

   - Create a canvas HTML element
   - Create 3 preset colors of your choice (to the left of the canvas)
   - Allow the user to select any of the three colors and use some form of CSS (in this case the white border around red) to show which color is selected
   - On mouse down on the canvas, start drawing on the canvas until the user releases the mouse or leaves the canvas. The color of the line should correspond to the selected color on the right.
   - At the bottom have three sliders representing red green and blue, they should allow for a numerical value from 0-255. When the sliders are moved, the color in the box to the left of the sliders (in this case the purplish box) should adjust color according to the new `rgb()` values;
   - When a user clicks add color, it should add the new color to the bottom of the other color buttons and be able to be selected for use on the canvas.
   - Feel free to add more functionality, such as a way to clear the canvas, change the stroke size, add a better cursor etc.