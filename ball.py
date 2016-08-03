"""
 Pygame base template for opening a window

 Sample Python/Pygame Programs
 Simpson College Computer Science
 http://programarcadegames.com/
 http://simpson.edu/computer-science/

 Explanation video: http://youtu.be/vRB_983kUMc
"""

import pygame
import random

# Define some colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
GREY = (127, 127, 127)



pygame.init()

# Set the width and height of the screen [width, height]
SCREEN_WIDTH = 700
SCREEN_HEIGHT = 500

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

pygame.display.set_caption("Bouncing Ball Game")

# Loop until the user clicks the close button.
done = False

# Used to manage how fast the screen updates
clock = pygame.time.Clock()


# WRITE YOUR CODE HERE







# -------- Main Program Loop -----------
while not done:
    # --- Main event loop
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			done = True



    # --- Game logic should go here

    # --- Screen-clearing code goes here

    # Here, we clear the screen to white. Don't put other drawing commands
    # above this, or they will be erased with this command.

    # If you want a background image, replace this clear with blit'ing the
    # background image.
	screen.fill(GREEN)

	pygame.draw.circle(screen, BLUE, (340, 250), 30)

    # --- Drawing code should go here
	

	rand_red = random.randint(0,255)
	rand_blue = random.randint(0,255)
	rand_green = random.randint(0,255)
	rand_color = (rand_red, rand_blue, rand_green)

	for i in range(1):
		radius_random = random.randint(20,80)
		random_x = random.randint(10,500)
		random_y = random.randint(10,500)
		pygame.draw.circle(screen, rand_color, (random_x, random_y), radius_random,0)

 


    # --- Go ahead and update the screen with what we've drawn.
	pygame.display.flip()

    # --- Limit to 60 frames per second
	clock_var = random.randint(-10,10)
	clock.tick(clock_var)

# Close the window and quit.
pygame.done()
exit() # Needed when using IDLE
