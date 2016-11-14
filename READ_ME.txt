Thank you for downloading Mouse Sprite Effects 1.0 by Jesse Rountree!  This is a simple yet entertainling effect that will add life to any site.  Follow the following steps to ensure proper installation.  Thank you!

***
STEP 1

Upload backgroundeffects.js to your js project folder. If the folder is not named "js", simply edit your index.html to match correct folder path.


***
STEP 2

Copy and paste the following and add it to the bottom of your CSS document:

/* ::::::::: *** BACKGROUND EFFECTS *** ::::::::: */
/* :::: *** COPY AND PASTE INTO YOUR CSS *** :::: */
.bgkFXcenter {
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
}

.backgroundEffects {
    width: 20px;
    height: 20px;
    position: relative;
}

.bgFXcontainer {
    position: relative;
}

@keyframes circle {
    from { transform:rotate(0deg); }
    to { transform:rotate(360deg); }
}


***
STEP 3

Now add it to your HTML!  Any container that you would like to add these sprites simply add the class "bgFXcontainer" to it.

***
STEP 4

The final step is easy!  At the bottom of your content within the container with the now added class "bgFXcontainer", copy and paste this:

<div class="bgkFXcenter"><div class="backgroundEffects"></div></div>


******
That's it!  You should now have colorful sprites floating around the background of your container!


**********************
**********************
(c)Jesse Rountree 2016
**********************
**********************