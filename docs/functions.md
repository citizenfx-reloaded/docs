---
id: functions
title: Functions
hide_title: true
---

# Functions

## Client

- [AddEventHandler](#addeventhandler)
- CancelEvent
- [Citizen.CreateThread](#citizen-createthread)
- [Citizen.Trace](#citizen-trace)
- [Citizen.Wait](#citizen-wait)
- [GetPlayers](#getplayers)
- [RegisterNetEvent](#registernetevent)
- [RegisterNUICallback](#registernuicallback)
- [RemoveEventHandler](#removeeventhandler)
- [SendNUIMessage](#sendnuimessage)
- [TriggerEvent](#triggerevent)
- [TriggerServerEvent](#triggerserverevent)
- [vec](#vec)
- [vector2](#vector2)
- [vector3](#vector3)
- [vector4](#vector4)
- WasEventCanceled

## Server

- [AddEventHandler](#addeventhandler)
- CancelEvent
- DropPlayer
- GetHostId
- GetInvokingResource
- GetPlayerEP
- GetPlayerLastMsg
- GetPlayerName
- GetPlayerPing
- [GetPlayers](#getplayers)
- [PerformHttpRequest](#performhttprequest)
- RconLog
- RconPrint
- [RegisterServerEvent](#registerserverevent)
- SetGameType
- SetMapName
- SetPlayerName
- SetTimeout
- [StartResource](#startresource)
- [StopResource](#stopresource)
- TempBanPlayer
- [TriggerClientEvent](#triggerclientevent)
- [TriggerEvent](#triggerevent)
- WasEventCanceled

---

### AddEventHandler
Adds an event handler to the current resource/scripting environment. Do note that, if the event is to be called from a remote source, it needs to be whitelisted with RegisterNetEvent (on the client) or RegisterServerEvent (on the server).

#### Syntax
```lua
AddEventHandler(string eventName, function callback)
```

#### Arguments
- **eventName**: The name of the event to be triggered.
- **callback**: The function to run when the event is called.

#### Example
```lua
-- SERVER
AddEventHandler('myEvent', function(text)
    print(('%s said %s'):format(GetPlayerName(source), text))
end)

-- CLIENT
TriggerServerEvent('myEvent', 'Hello!')
```

---

### Citizen.CreateThread
Create a new asynchronous thread.

#### Syntax
```lua
Citizen.CreateThread(function handler)
```

#### Arguments
- **handler**: The thread handler function.

#### Example
```lua
-- loop
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0) -- Always put a wait if you're looping to avoid crashing.

        print('This is an async block of code, meaning that other code is not blocked while this loop is active!')
    end
end)
```

---

### Citizen.Trace
Outputs the passed message to any trace listeners, including the console output and the log file. Does not add a newline by itself, therefore suffix a message with `\n`.

#### Syntax
```lua
Citizen.Trace(string message)
```

#### Arguments
- **message**: Your message to print.

#### Example
```lua
Citizen.Trace("Hello World!\n")
```

---

### Citizen.Wait
This will "pause" the execution of the current thread for miliseconds amount of time.

#### Syntax
```lua
Citizen.Wait(int milliseconds)
```

#### Arguments
- **milliseconds**: The amount of milliseconds to pause the current thread.

#### Example
```lua
-- Block the entire script for one second:
Citizen.Wait(1000)

-- Block the thread for half a second:
Citizen.CreateThread(function()
    Citizen.Wait(500)
end)
```

---

### GetPlayers
Returns a table of all connected players.

#### Syntax
```lua
GetPlayers()
```

#### Example
```lua
for _, playerId in ipairs(GetPlayers()) do
    local name = GetPlayerName(playerId)

    print(('Player %s with id %i is in the server'):format(name, playerId))
end
```

---

### PerformHttpRequest
Performs a http request using the specified parameters and returns the http response in a callback.

#### Syntax
```lua
PerformHttpRequest(string url, function callback[, string method = 'GET', string data = '', table headers = {}])
```

#### Required arguments
- **url**: A string of the URL to request.
- **callback**: The callback function to call after the request is finished.

#### Optional arguments
- **method**: The HTTP method to use.
- **data**: A string of data to send with the request.
- **headers**: A table of request headers.

#### Example
```lua
PerformHttpRequest("http://some-cool-url.here/some-important-document.txt", function (errorCode, resultData, resultHeaders)
    print("Returned error code:" .. tostring(errorCode))
    print("Returned data:" .. tostring(resultData))
    print("Returned result Headers:" .. tostring(resultHeaders))
end)
```

---

### RegisterNetEvent
Marks the event safe for network use. Aka, allows you to trigger the event on the client, from a server side script.

#### Syntax
```lua
RegisterNetEvent(string eventName)
```

#### Arguments
- **eventName**: A string representing the event name to register.

#### Example
```lua
RegisterNetEvent('myEvent')
AddEventHandler('myEvent', function()

end)
```

---

### RegisterNUICallback
Registers a NUI callback which can be sended back to game from NUI.

#### Syntax
```lua
RegisterNUICallback(string name, function callback)
```

#### Arguments
- **name**: A string representing the callback name to register.
- **callback**: The callback function to call.

#### Example
```lua
RegisterNUICallback('getItemInfo', function(data, cb)
    -- POST data gets parsed as JSON automatically
    local itemId = data.itemId

    if not itemCache[itemId] then
        cb({ error = 'No such item!' })
        return
    end

    -- and so does callback response data
    cb(itemCache[itemId])
end)
```

---

### RegisterServerEvent
Registers an event as being allowed to be called by clients. 

#### Syntax
```lua
RegisterServerEvent(string eventName)
```

#### Arguments
- **eventName**: A string representing the event name to register.

#### Example
```lua
RegisterServerEvent('myEvent')
AddEventHandler('myEvent', function()

end)
```

---

### RemoveEventHandler
Removes the provided event handler.

#### Syntax
```lua
RemoveEventHandler(table eventHandlerData)
```

#### Arguments
- **eventHandlerData**: The return value of [AddEventHandler](#addeventhandler).

#### Example
```lua
local eventA = AddEventHandler("someEvent", function()
    print("someEvent executed")
end)

TriggerEvent("someEvent")

RemoveEventHandler(eventA)
```

---

### SendNUIMessage
Use this to send data to the NUI.

#### Syntax
```lua
SendNUIMessage(table data)
```

#### Arguments
- **data**: Data that will be sent and received in NUI.

#### Example
```lua
SendNUIMessage({
	hello = "world",
	action = "showMessage"
})
```

---

### startresource
This function is used to start a certain resource, by the name (on the server).

#### Syntax
```lua
StartResource(string resourceName)
```

#### Arguments
- **resourceName**: The name of the resource to be started.

#### Returns:
- **true**: if the resource starts
- **false**: if it does not recognize any resource with that name, or if it is already active.

---

### stopresource
This function is used to stop a certain resource, by the name (on the server).

#### Syntax
```lua
StopResource(string resourceName)
```

#### Arguments
- **resourceName**: The name of the resource to be stoped.

#### Returns:
- **true**: if the resource stops
- **false**: if it does not recognize any resource with that name, or if it is already off.

---

### TriggerClientEvent
Triggers an event on the specified client(s), and passes on any additional arguments.

#### Syntax
```lua
TriggerClientEvent(string eventName, int playerId, ...)
```

#### Arguments
- **eventName**: A string representing the event name to call on the client.
- **playerId**: The ID of the player to call the event for. Specify -1 for all clients.
- **...**: Any additional data that should be passed along.

#### Example
```lua
-- CLIENT
RegisterNetEvent('myEvent')
AddEventHandler('myEvent', function(text)
    print('event fired with text: ' .. text)
end)

-- SERVER
TriggerClientEvent('myEvent', playerId, 'Hello world!')
```

---

### TriggerEvent
Triggers the specified event with optional data.

#### Syntax
```lua
TriggerEvent(string eventName, ...)
```

#### Arguments
- **eventName**: A string representing the event name to call.
- **...**: Any additional data that should be passed along.

#### Example
```lua
AddEventHandler('myEvent', function(text)
    print('event fired with text: ' .. text)
end)

TriggerEvent('myEvent', 'Hello world!')
```

---

### TriggerServerEvent
Triggers the specified event on the server with optional data.

#### Syntax
```lua
TriggerServerEvent(string eventName, ...)
```

#### Arguments
- **eventName**: A string representing the event name to call on the server.
- **...**: Any additional data that should be passed along.

#### Example
```lua
-- SERVER
RegisterServerEvent('myEvent')
AddEventHandler('myEvent', function(text)
    print('event fired with text: ' .. text)
end)

-- CLIENT
TriggerServerEvent('myEvent', 'Hello world!')
```

---

### vec
Creates a new vector depending on the count of arguments.

#### Syntax
```lua
number  vec(float x)
vector2 vec(float x, float y)
vector3 vec(float x, float y, float z)
vector4 vec(float x, float y, float z, float w)
```

#### Arguments
- **x**: A floating point number representing the `x` value of your vector.
- **y**: A floating point number representing the `y` value of your vector.
- **z**: A floating point number representing the `z` value of your vector.
- **h**: A floating point number representing the `h` value of your vector.

#### Example
```lua
vec(1)          == 1
vec(1, 2)       == vector2(1, 2)
vec(1, 2, 3)    == vector3(1, 2, 3)
vec(1, 2, 3, 4) == vector4(1, 2, 3, 4)
```

---

### vector2
Creates a new vector2 value.

#### Syntax
```lua
vector2 vector2(float x, float y)
```

#### Arguments
- **x**: A floating point number representing the `x` value of your vector.
- **y**: A floating point number representing the `y` value of your vector.

#### Example
```lua
-- Basic vector with zero length:
vector2(0, 0)

-- Vectors are a real data type:
local v = vector2(1, 2)
print(type(v)) -- prints `vector2`

-- Vectors support equality operators:
local v1 = vector2(1, 2)
local v2 = vector2(1, 2)
local v3 = vector2(3, 4)
print(v1 == v2) -- prints `true`
print(v1 == v3) -- prints `false`
print(v1 ~= v3) -- prints `true`

-- Arithmetic operations between vectors are supported:
local v = vector2(1, 2)
print(v + 2) -- prints `vector2(3, 4)`
print(v - 2) -- prints `vector2(-1, 0)`
print(v * 2) -- prints `vector2(1, 4)`
print(v / 2) -- prints `vector2(0.5, 1)`

-- Or even with another vector:
local v1 = vector2(1, 2)
local v2 = vector2(3, 4)
print(v1 + v2) -- prints `vector2(4, 6)`
print(v1 - v2) -- prints `vector2(-2, -2)`
print(v1 * v2) -- prints `vector2(3, 8)`
print(v1 / v2) -- prints `vector2(0.33, 0.5)`

-- Vectors can be inverted:
local v = vector2(1, 2)
print(-v) -- prints `vector2(-1, -2)`

-- The length of the vector can be retrieved (pythagoras):
local v = vector2(1, 2)
print(#v) -- prints `2.236`

-- Vectors can be normalized:
local v = vector2(1, 2)
print(norm(v)) -- prints `vector2(0.45, 0.89)`

-- Unpacking works:
local v = vector2(1, 2)
local x, y = table.unpack(v)

-- To get the individual values from a vector:
local v = vector2(1, 2)
print(v.x) -- prints `1`
print(v.y) -- prints `2`

-- Vectors support arbitrary swizzling:
local v = vector2(1, 2)
print(v.yx)   -- prints `vector2(2, 1)`
print(v.xyx)  -- prints `vector3(1, 2, 1)`
print(v.yxyx) -- prints `vector4(2, 1, 2, 1)`
```

---

### vector3
Creates a new vector3 value.

#### Syntax
```lua
vector3 vector3(float x, float y, float z)
```

#### Arguments
- **x**: A floating point number representing the `x` value of your vector.
- **y**: A floating point number representing the `y` value of your vector.
- **z**: A floating point number representing the `z` value of your vector.

#### Example
```lua
-- Basic vector with zero length:
vector3(0, 0, 0)

-- Vectors are a real data type:
local v = vector3(1, 2, 3)
print(type(v)) -- prints `vector3`

-- Vectors support equality operators:
local v1 = vector3(1, 2, 3)
local v2 = vector3(1, 2, 3)
local v3 = vector3(4, 5, 6)
print(v1 == v2) -- prints `true`
print(v1 == v3) -- prints `false`
print(v1 ~= v3) -- prints `true`

-- Arithmetic operations between vectors are supported:
local v = vector3(1, 2, 3)
print(v + 2) -- prints `vector3(3, 4, 5)`
print(v - 2) -- prints `vector3(-1, 0, 1)`
print(v * 2) -- prints `vector3(1, 4, 6)`
print(v / 2) -- prints `vector3(0.5, 1, 1.5)`

-- Or even with another vector:
local v1 = vector3(1, 2, 3)
local v2 = vector3(4, 5, 6)
print(v1 + v2) -- prints `vector3(5, 7, 9)`
print(v1 - v2) -- prints `vector3(-3, -3, -3)`
print(v1 * v2) -- prints `vector3(4, 10, 18)`
print(v1 / v2) -- prints `vector3(0.25, 0.4, 0.5)`

-- Vectors can be inverted:
local v = vector3(1, 2, 3)
print(-v) -- prints `vector3(-1, -2, -3)`

-- The length of the vector can be retrieved (pythagoras):
local v = vector3(1, 2, 3)
print(#v) -- prints `3.742`

-- Vectors can be normalized:
local v = vector3(1, 2, 3)
print(norm(v)) -- prints `vector3(0.27, 0.53, 0.80)`

-- Unpacking works:
local v = vector3(1, 2, 3)
local x, y, z = table.unpack(v)

-- To get the individual values from a vector:
local v = vector3(1, 2, 3)
print(v.x) -- prints `1`
print(v.y) -- prints `2`
print(v.z) -- prints `3`

-- Vectors support arbitrary swizzling:
local v = vector3(1, 2, 3)
print(v.yx)   -- prints `vector2(2, 1)`
print(v.zx)   -- prints `vector2(3, 1)`
print(v.xyx)  -- prints `vector3(1, 2, 1)`
print(v.yxyx) -- prints `vector4(2, 1, 2, 1)`
print(v.zxxy) -- prints `vector4(3, 1, 1, 2)`
```

---

### vector4
Creates a new vector4 value.

#### Syntax
```lua
vector4 vector4(float x, float y, float z, float w)
```

#### Arguments
- **x**: A floating point number representing the `x` value of your vector.
- **y**: A floating point number representing the `y` value of your vector.
- **z**: A floating point number representing the `z` value of your vector.
- **h**: A floating point number representing the `h` value of your vector.

#### Example
```lua
-- Basic vector with zero length:
vector4(0, 0, 0, 0)

-- Vectors are a real data type:
local v = vector4(1, 2, 3, 4)
print(type(v)) -- prints `vector4`

-- Vectors support equality operators:
local v1 = vector4(1, 2, 3, 4)
local v2 = vector4(1, 2, 3, 4)
local v3 = vector4(5, 6, 7, 8)
print(v1 == v2) -- prints `true`
print(v1 == v3) -- prints `false`
print(v1 ~= v3) -- prints `true`

-- Arithmetic operations between vectors are supported:
local v = vector4(1, 2, 3, 4)
print(v + 2) -- prints `vector4(3, 4, 5, 6)`
print(v - 2) -- prints `vector4(-1, 0, 1, 2)`
print(v * 2) -- prints `vector4(1, 4, 6, 8)`
print(v / 2) -- prints `vector4(0.5, 1, 1.5, 2)`

-- Or even with another vector:
local v1 = vector4(1, 2, 3, 4)
local v2 = vector4(5, 6, 7, 8)
print(v1 + v2) -- prints `vector4(6, 8, 9, 12)`
print(v1 - v2) -- prints `vector4(-4, -4, -4)`
print(v1 * v2) -- prints `vector4(5, 12, 21, 32)`
print(v1 / v2) -- prints `vector4(0.2, 0.33, 0.43, 0.5)`

-- Vectors can be inverted:
local v = vector4(1, 2, 3, 4)
print(-v) -- prints `vector4(-1, -2, -3, -4)`

-- The length of the vector can be retrieved (pythagoras):
local v = vector4(1, 2, 3, 4)
print(#v) -- prints `5.477`

-- Vectors can be normalized:
local v = vector3(1, 2, 3, 4)
print(norm(v)) -- prints `vector3(0.18, 0.37, 0.55, 0.73)`

-- Unpacking works:
local v = vector4(1, 2, 3, 4)
local x, y, z, w = table.unpack(v)

-- To get the individual values from a vector:
local v = vector4(1, 2, 3, 4)
print(v.x) -- prints `1`
print(v.y) -- prints `2`
print(v.z) -- prints `3`
print(v.w) -- prints `4`

-- Vectors support arbitrary swizzling:
local v = vector4(1, 2, 3, 4)
print(v.yx)   -- prints `vector2(2, 1)`
print(v.wz)   -- prints `vector2(3, 1)`
print(v.xyx)  -- prints `vector3(1, 2, 1)`
print(v.ywz)  -- prints `vector3(1, 2, 1)`
print(v.yxyx) -- prints `vector4(2, 1, 2, 1)`
print(v.zxwy) -- prints `vector4(3, 1, 1, 2)`
```
