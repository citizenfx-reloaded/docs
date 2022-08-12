---
id: keys
title: Key Codes
hide_title: true
---

# Key Codes

| Code | Key         |
|:----:|:-----------:|
| 1    | ESCAPE |
| 2    | 1 |
| 3    | 2 |
| 4    | 3 |
| 5    | 4 |
| 6    | 5 |
| 7    | 6 |
| 8    | 7 |
| 9    | 8 |
| 10   | 9 |
| 11   | 0 |
| 12   | MINUS |
| 13   | EQUAL |
| 14   | BACKSPACE |
| 15   | TAB |
| 16   | Q |
| 17   | W |
| 18   | E |
| 19   | R |
| 20   | T |
| 21   | Y |
| 22   | U |
| 23   | I |
| 24   | O |
| 25   | P |
| 26   | LEFT SQUARE BRACKET |
| 27   | RIGHT SQUARE BRACKET |
| 28   | ENTER |
| 29   | LEFT CTRL |
| 30   | A |
| 31   | S |
| 32   | D |
| 33   | F |
| 34   | G |
| 35   | H |
| 36   | J |
| 37   | K |
| 38   | L |
| 39   | SEMICOLON |
| 40   | APOSTROPHE |
| 41   | GRAVE |
| 42   | LEFT SHIFT |
| 43   | BACKSLASH |
| 44   | Z |
| 45   | X |
| 46   | C |
| 47   | V |
| 48   | B |
| 49   | N |
| 50   | M |
| 51   | COMMA |
| 52   | PERIOD |
| 53   | FORWARD SLASH |
| 54   | RIGHT SHIFT |
| 55   | ASTERISK |
| 56   | LEFT ALT |
| 57   | SPACE |
| 58   | CAPS LOCK |
| 59   | F1 |
| 60   | F2 |
| 61   | F3 |
| 62   | F4 |
| 63   | F5 |
| 64   | F6 |
| 65   | F7 |
| 66   | F8 |
| 67   | F9 |
| 68   | F10 |
| 69   | NUMLOCK |
| 70   | SCROLL LOCK |
| 71   | NUMPAD 7 |
| 72   | NUMPAD 8 |
| 73   | NUMPAD 9 |
| 74   | NUMPAD MINUS |
| 75   | NUMPAD 4 |
| 76   | NUMPAD 5 |
| 77   | NUMPAD 6 |
| 78   | NUMPAD PLUS |
| 79   | NUMPAD 1 |
| 80   | NUMPAD 2 |
| 81   | NUMPAD 3 |
| 82   | NUMPAD 0 |
| 83   | NUMPAD PERIOD |
| 87   | F11 |
| 88   | F12 |
| 91   | LEFT WINDOWS |
| 92   | RIGHT WINDOWS |
| 93   | MENU |
| 156  | NUMPAD ENTER |
| 157  | RIGHT CTRL |
| 181  | NUMPAD FORWARD SLASH |
| 184  | RIGHT ALT |
| 199  | HOME |
| 200  | UP ARROW |
| 201  | PAGE UP |
| 203  | LEFT ARROW |
| 205  | RIGHT ARROW |
| 207  | END |
| 208  | DOWN ARROW |
| 209  | PAGE DOWN |
| 210  | INSERT |
| 211  | DELETE |

## Useful Snippet

```lua

local keys = {
    
    ['ESCAPE'] = 1,
    ['1'] = 2,
    ['2'] = 3,
    ['3'] = 4,
    ['4'] = 5,
    ['5'] = 6,
    ['6'] = 7,
    ['7'] = 8,
    ['8'] = 9,
    ['9'] = 10,
    ['0'] = 11,
    ['MINUS'] = 12,
    ['EQUAL'] = 13,
    ['BACKSPACE'] = 14,
    ['TAB'] = 15,
    ['Q'] = 16,
    ['W'] = 17,
    ['E'] = 18,
    ['R'] = 19,
    ['T'] = 20,
    ['Y'] = 21,
    ['U'] = 22,
    ['I'] = 23,
    ['O'] = 24,
    ['P'] = 25,
    ['LEFT_SQUARE_BRACKET'] = 26,
    ['RIGHT_SQUARE_BRACKET'] = 27,
    ['ENTER'] = 28,
    ['LEFT_CTRL'] = 29,
    ['A'] = 30,
    ['S'] = 31,
    ['D'] = 32,
    ['F'] = 33,
    ['G'] = 34,
    ['H'] = 35,
    ['J'] = 36,
    ['K'] = 37,
    ['L'] = 38,
    ['SEMICOLON'] = 39,
    ['APOSTROPHE'] = 40,
    ['GRAVE'] = 41,
    ['LEFT_SHIFT'] = 42,
    ['BACKSLASH'] = 43,
    ['Z'] = 44,
    ['X'] = 45,
    ['C'] = 46,
    ['V'] = 47,
    ['B'] = 48,
    ['N'] = 49,
    ['M'] = 50,
    ['COMMA'] = 51,
    ['PERIOD'] = 52,
    ['FORWARD_SLASH'] = 53,
    ['RIGHT_SHIFT'] = 54,
    ['ASTERISK'] = 55,
    ['LEFT_ALT'] = 56,
    ['SPACE'] = 57,
    ['CAPS_LOCK'] = 58,
    ['F1'] = 59,
    ['F2'] = 60,
    ['F3'] = 61,
    ['F4'] = 62,
    ['F5'] = 63,
    ['F6'] = 64,
    ['F7'] = 65,
    ['F8'] = 66,
    ['F9'] = 67,
    ['F10'] = 68,
    ['NUMLOCK'] = 69,
    ['SCROLL_LOCK'] = 70,
    ['NUMPAD_7'] = 71,
    ['NUMPAD_8'] = 72,
    ['NUMPAD_9'] = 73,
    ['NUMPAD_MINUS'] = 74,
    ['NUMPAD_4'] = 75,
    ['NUMPAD_5'] = 76,
    ['NUMPAD_6'] = 77,
    ['NUMPAD_PLUS'] = 78,
    ['NUMPAD_1'] = 79,
    ['NUMPAD_2'] = 80,
    ['NUMPAD_3'] = 81,
    ['NUMPAD_0'] = 82,
    ['NUMPAD_PERIOD'] = 83,
    ['F11'] = 87,
    ['F12'] = 88,
    ['LEFT_WINDOWS'] = 91,
    ['RIGHT_WINDOWS'] = 92,
    ['MENU'] = 93,
    ['NUMPAD_ENTER'] = 156,
    ['RIGHT_CTRL'] = 157,
    ['NUMPAD_FORWARD_SLASH'] = 181,
    ['RIGHT_ALT'] = 184,
    ['HOME'] = 199,
    ['UP_ARROW'] = 200,
    ['PAGE_UP'] = 201,
    ['LEFT_ARROW'] = 203,
    ['RIGHT_ARROW'] = 205,
    ['END'] = 207,
    ['DOWN_ARROW'] = 208,
    ['PAGE_DOWN'] = 209,
    ['INSERT'] = 210,
    ['DELETE'] = 211

}

function getKeyIdFromName(key_name)
    if (key_name) then
        return keys[key_name] -- return key id
    end
end

```
