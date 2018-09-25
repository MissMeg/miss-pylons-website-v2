```
#     #                         ######                                    
##   ## #  ####   ####          #     # #   # #       ####  #    #  ####  
# # # # # #      #              #     #  # #  #      #    # ##   # #      
#  #  # #  ####   ####          ######    #   #      #    # # #  #  ####  
#     # #      #      #         #         #   #      #    # #  # #      #
#     # # #    # #    #         #         #   #      #    # #   ## #    #
#     # #  ####   ####          #         #   ######  ####  #    #  ####  
                        #######                                           
#     #                                     
#  #  # ###### #####   ####  # ##### ######
#  #  # #      #    # #      #   #   #      
#  #  # #####  #####   ####  #   #   #####  
#  #  # #      #    #      # #   #   #      
#  #  # #      #    # #    # #   #   #      
 ## ##  ###### #####   ####  #   #   ######
```

Working on updating my Twitch website using newly learned frameworks and libraries.

Homepage is a simple one-page website using express.js and pug templating.

The login page will use passport.js to have users login with their Twitch account. This will then be checked against my database - user either added and/or retrieved.

The profile and admin page will be created using React with calls to the backend and MongoDB.

The database will have to be updated as well to included new features: levels, minerals, and exp, as well as admin features: CRUD for quotes, commands, levels, and game codes.

The channel bot will also be running in the background of this website to update the database from Twitch chat interactions.
