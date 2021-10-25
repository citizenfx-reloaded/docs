# Resource definition

The **resource definition file** is a file named `__resource.lua`, placed in a resource folder on the server. This document lists valid built-in directives.

### client_script
Defines a script to be loaded on the client, and implicitly adds the file to the resource packfile.

```lua
client_script 'client.lua'

client_scripts {
    'client1.lua',
    'client2.lua'
}
```

### server_script
Defines a script to be loaded on the server.

```lua
server_script 'server.lua'

server_scripts {
    'server1.lua'
    'server2.lua'
}
```

### export
Defines a global function to be exported by a client script.

```lua
export 'getStuff'

exports {
    'getStuff',
    'getOtherStuff'
}
```

### ui_page
Sets the resource's NUI page to the defined file. This file (along with its dependencies) has to be referenced using [file](#file).

```lua
ui_page 'html/index.html'
file 'html/index.html'
```

### file
Adds the specified file to the resource packfile, to be downloaded by clients upon loading the resource.

```lua
file 'index.html'
```

### dependency
Requires the specified resource to load before the current resource.

```lua
dependency 'myresource-base'
```

### dependencies
Alias for dependency. This is not a typo, but rather an intentional alias specifically for pluralization.

```lua
dependencies {
    'myresource-base',
    'utility-resource'
}
```