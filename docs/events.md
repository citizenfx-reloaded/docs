---
id: events
title: Events
hide_title: true
---

# Events

## Client

- [onClientResourceStart](#onclientresourcestart)
- [onClientResourceStop](#onclientresourcestop)

## Server

- [onResourceStart](#onresourcestart)
- [onResourceStarting](#onresourcestarting)
- [onResourceStop](#onresourcestop)
- [playerConnecting](#playerconnecting)
- [playerDropped](#playerdropped)
- rconCommand

---

### onClientResourceStart
An event that is *queued* after a resource has started.

#### Syntax
```lua
onClientResourceStart(string resource)
```

#### Arguments
- **resource**: The name of the resource that has started.

#### Example
```lua
AddEventHandler('onClientResourceStart', function(resource)
    Citizen.Trace("started resource: " .. resource .. "\n")
end)
```

---

### onClientResourceStop
An event that is triggered after a resource has stopped.

#### Syntax
```lua
onClientResourceStop(string resource)
```

#### Arguments
- **resource**: The name of the resource that has stopped.

#### Example
```lua
AddEventHandler('onClientResourceStop', function(resource)
    Citizen.Trace("stopped resource: " .. resource .. "\n")
end)
```

---

### onResourceStart
An event that is triggered *immediately* when a resource has started.

#### Syntax
```lua
onResourceStart(string resource)
```

#### Arguments
- **resource**: The name of the resource that just started.

#### Example
```lua
AddEventHandler('onResourceStart', function(resource)
    print("started resource: " .. resource)
end)
```

---

### onResourceStarting
An event that is triggered when a resource is trying to start. This can be canceled to prevent the resource from starting.

#### Syntax
```lua
onResourceStarting(string resource)
```

#### Arguments
- **resource**: The name of the resource that is trying to start.

#### Example
```lua
AddEventHandler('onResourceStarting', function(resource)
    print("starting resource: " .. resource)
end)
```

---

### onResourceStop
An event that is triggered *immediately* when a resource is stopping.

#### Syntax
```lua
onResourceStop(string resource)
```

#### Arguments
- **resource**: The name of the resource that is stopping.

#### Example
```lua
AddEventHandler('onResourceStop', function(resource)
    print("stopped resource: " .. resource)
end)
```

---

### playerConnecting
A server-side event that is triggered when a player is trying to connect. This event can be canceled to reject the player instantly, assuming you haven't yielded.

#### Syntax
```lua
playerConnecting(string playerName, function setKickReason(string reason))
```

#### Arguments
- **playerName**: The display name of the player connecting.
- **setKickReason**: A function used to set a reason message for when the event is canceled.

#### Example
```lua
AddEventHandler('playerConnecting', function(playerName, setKickReason)
    if(name ~= "Lion") then
        setKickReason("Only Lion can join this server.")
        CancelEvent()
    end
end)
```

---

### playerDropped
A server-side event that is triggered when a player is removed from the server.

#### Syntax
```lua
playerDropped(string reason)
```

#### Arguments
- **reason**: The reason the player is dropped, such as a kick reason.

#### Example
```lua
AddEventHandler('playerDropped', function(reason)
    print(GetPlayerName(source) .. ' left (' .. reason .. ').')
end)
```