---
id: migrating
title: Beta Compatibility
hide_title: true
---

# Beta Compatibility

In the beta version of CitizenIV there was a lot of scripting related clientside changes. To run your server with the beta version of CitizenIV, you have to change some things in your scripts.

## Player Classes

Player classes which got created with natives like GetPlayers(), GetPlayerId() or GetPlayerByServerId() doesn't exist anymore.

Example:
```lua
local users = GetPlayers()
for _, i in ipairs(users) do
    i.ped -> GetPlayerChar(i)
    i.serverId -> GetPlayerServerId(i)
    i.name -> GetPlayerName(i)
end
```

## Return Value Types

Return value types no longer need to be specified manually and should get removed.

Example:
```lua
local x, y, z = GetCharCoordinates(ped, _f, _f, _f)
-> local x, y, z = GetCharCoordinates(ped)
```

## NUI Changes

```SetUIFocus(bool focus, bool cursor) -> SetNuiFocus(bool focus, bool cursor)```

## Others

```lua
CreateThread(function() -> Citizen.CreateThread(function()
Wait(0) -> Citizen.Wait(0)

GetPlayerPed() -> GetPlayerChar(-1)

GetPlayerByServerId -> GetPlayerFromServerId

-- clientside events now needs to be registered if you want to trigger them from serverside
RegisterNetEvent('myEvent')
```
