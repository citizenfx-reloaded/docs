---
id: cdimages
title: CD Image
hide_title: true
---

# CD Image
CitizenIV has the ability to override/insert files that would normally be placed in 'CD images' (.img files) at runtime. This, however, is bound to a few specific limitations:

**No API.**
- These files are simply loaded from a folder, without any exclusions specifiable.

**Only at initialization.**
- Streaming overrides only get initialized during game initialization, which basically means 'during connecting to the server'. Dynamic resource starting/stopping won't allow overriding these in the current version, and may not do so for a while to come.

## Usage
To use this feature, simply create a folder titled stream in a resource folder and place streaming files (.wft, .wtd, .nod, .sco, ...) in there. These will only be downloaded on demand (i.e. when said streaming object is requested, for instance by a call to RequestModel) and will be cached on the client locally for future usage.

The folder's content can be categorized in subfolders for organization, these have no meaning to the game whatsoever.