# Getting Started

A step-by-step guide on setting up a Dedicated Server.

## Windows

### Prerequisites

* The server require an static ip address.
* The server require port forwarding. A tutorial can be found [here](#port-forwarding).
* The server require [NET Framework 4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653).

### Installation

1. Create a new directory (for example `D:\Server`), this will be used for the server binaries.
2. Download latest [server files](https://citizeniv.net/files/CitizenIV-Server.zip).
3. Extract the build into the directory previously created.
4. Download default resources from [GitHub](https://github.com/citizenfx-reloaded/server-data-beta) and extract them in the server directory.
5. Change the server settings in the citmp-server.yml file.
5. Run `CitizenMP.Server.exe`.

## Linux

Not available yet.

## Port forwarding

1. Open up Command Prompt. (Windows key + R -> "cmd").
2. Type in "ipconfig", and take the default gateway of your network device that you are using (Wireless/Ethernet).
3. Open your internet browser and type in the default gateway Address.
4. Log in and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.
5. This is the part where you kinda need to help yourself. If something asks for an application name, put anything (we recommend CitizenFX). For the port, put 30120, and for the "forwarded IP address" (might be a little different), put your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can't, then do this 2 times, 1 with UDP and the 2nd TCP.
6. Enjoy.