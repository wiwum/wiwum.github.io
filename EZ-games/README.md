# EZ-games:

> EZ-games makes it easier to code games in a 12 by 12 pixel (colored blocks) game board

* EZ-games is like jQuery for coding games
  - if you add a game-board element to the body of your HTML this software will add 144 div elements with styling to it
    - these will have 10 pixels padding
    - the default color is black (but that can be changed)
  - from there you can change the color of the elements with the changeColor function
    - the function will look like this: changeColor(x, y, "color")
      - the x is the x and y specify the coordinates of the square you want to change
        - these are whole numbers with quotations around them.
      - the "color" specifies what color you want to change the square to
        - this can be any css recognized color
        - or any hexadecimal

* more features will be coming soon!

> how to use:

 if you want to use this software simply add a js script element with this as a source: https://github.com/wiwum/wiwum.github.io/blob/master/EZ-games/index.js as well as a link to this css file: https://github.com/wiwum/wiwum.github.io/blob/master/EZ-games/stylesheet.css
