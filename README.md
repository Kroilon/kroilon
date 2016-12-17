# KroilonApp
Repository of the official Kroilon App :)

https://kroilonapp.herokuapp.com/ (temporarily)

## How To Use

Clone or download this repository. 

Open a Terminal (in Linux) or Command Prompt (in Windows) and navigate to the repository where you downloaded the code.

After navigating to the repository run the command "meteor".

```
cd KroilotGIT
meteor
```

Note: In the case this is the first time you are running the application (or if the database has been altered), after starting meteor, open a new terminal window (or command prompt) in the same directory and run the following commands:

```
meteor mongo
use meteor
load(".database/initAcademy.js");
load(".database/initRooms.js");
load(".database/initBadges.js");
load(".database/initSecrets.js");
load(".database/initHistory.js");
load(".database/init.Activitiesjs");
```




