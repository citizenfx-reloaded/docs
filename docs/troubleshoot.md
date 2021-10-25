# Troubleshooting

## Endless loading while connecting to server

* Make sure that your singleplayer is working.
* Remove the `commandline.txt` file from your GTA IV directory.

## Modified client files detected

Remove the `caches.xml` in the CitizenIV directory, to force a redownload of broken files.

## Modified vehicles.img detected

Download the original vehicles.img and replace it with yours in `GTAIV-EFLC/pc/models/`.

GTA IV: [vehicles.img](https://citizeniv.net/files/gtaiv-vehicles.zip)
EFLC: [vehicles.img](https://citizeniv.net/files/eflc-vehicles.zip)

## Could not load function BinkRegisterFrameBuffers@8 in dependent module binkw32.dll

* Delete binkw32.dll from C:\Windows\System32
* Verify or reinstall your game files.

## CitizenFX Fatal Error - inject_call attempted on something that was not a call.

Download and install the patch [1.0.7.0 EN](http://updates.rockstargames.com/patches/gtaiv/title_update_7_EN.zip) from the Rockstar Games website.

## Could not find game executable

Locate the `CitizenFX.ini` file within your CitizenIV folder and make sure it is pointing to the correct path. Open the file with a text editor like Notepad and edit the path to your GTA IV installation if necessary.

## Moving of xyz.exe failed (err = 32)

First check your taskmanager for existing CitizenIV processes if you see them close them, if that doesn’t fix the issue try disabling your antivirus.

## I can't open CitizenIV again after minimizing it

Add this to the commandline.txt of your Grand Theft Auto IV folder:

```
- windowed
- noborder
``` 