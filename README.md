# DarkSide-API
Official JavaScript API for DarkSide

<a name="-1"></a>

**Important** - Feel free to open an Issue if you have a suggestion or need clarrification.



|Contents|
|--------|
|[Menu](#0)|
|[Config](#1)|
|[ConVars](#2)|
|[Exploit](#3)|
|[Rendering](#4)|
|[Rendering3D](#5)|

---

# <a name="0"></a>Menu
---

## Menu.Checkbox


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Name | string | Checkbox Menu Name |
| Reference | string | Reference to the Checkbox |



```java
Menu.Checkbox("Test","TestReference")
Callback("Rendering", function() {
  if(Config.GetBool("Script.TestReference")) {
    Cheat.Print([255,255,255], "On")
  }
});
```


## Menu.Slider


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Name | string | Checkbox Menu Name |
| Reference | string | Reference to the Checkbox |
| Min | float | Min. Value |
| Max | float | Max. Value |


```java
Menu.Slider("Test","TestReference", 1,2)
Callback("Rendering", function() {
  if(Config.GetInt("Script.TestReference") == 2 ) {
    Cheat.Print([255,255,255], "Value is 2")
  }
});
```

[back to Contents](#-1)
---
# <a name="1"></a>Config
---

## Config.GetBool


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Reference to the Checkbox |


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | bool | State of the Config Variable |



```java
Menu.Checkbox("Test","TestReference")
Callback("Rendering", function() {
  if(Config.GetBool("Script.TestReference")) {
    Cheat.Print([255,255,255], "On")
  }
});
```

## Config.SetBool


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Reference to the Checkbox |
| Value | bool | New State of the Config Variable |



```java
Menu.Checkbox("Test","TestReference")
Callback("Rendering", function() {
  Config.SetBool("Script.TestReference", false)
  if(Config.GetBool("Script.TestReference")) {
    Cheat.Print([255,255,255], "On")
  }
});
```

## Config.GetInt


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Reference to the Checkbox |


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | int | State of the Config Variable |



```java
Menu.Slider("Test","TestReference", 1,2)
Callback("Rendering", function() {
  if(Config.GetInt("Script.TestReference") == 2 ) {
    Cheat.Print([255,255,255], "Value is 2")
  }
});
```


## Config.SetInt


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Reference to the Checkbox |
| Value | int | New state of the Config Variable |



```java
Menu.Slider("Test","TestReference", 1,2)
Callback("Rendering", function() {
  Config.SetInt("Script.TestReference", 2);
  if(Config.GetInt("Script.TestReference") == 2 ) {
    Cheat.Print([255,255,255], "Value is 2")
  }
});
```

## Config.GetBindState


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Bind Reference name |


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | bool | State of the Bind |




```java
Callback("Rendering", function() {
  if(Config.GetBindState("Binds.Doubletap") == 2 ) {
    Cheat.Print([255,255,255], "Value is 2")
  }
});
```


## Config.SetBindState


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | Reference to the Checkbox |
| Value | bool | New state of the Bind |





```java
Callback("Rendering", function() {
  Config.SetBindState("Binds.Doubletap", true)
  if(Config.GetBindState("Binds.Doubletap") == 2 ) {
    Cheat.Print([255,255,255], "Value is 2")
  }
});
```

[back to Contents](#-1)
---
# <a name="2"></a>ConVars
---

## ConVars.SetInt


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |
| Value | int | New value |




```java
Callback("Rendering", function() {
  ConVars.SetInt("cl_lagcompensation", 0)
});
```


## ConVars.SetFloat


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |
| Value | float | New value |




```java
Callback("Rendering", function() {
  ConVars.SetFloat("r_modelAmbientMin", 1.0)
});
```


## ConVars.SetBool


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |
| Value | bool | New value |




```java
Callback("Rendering", function() {
  ConVars.SetBool("cl_lagcompensation", false)
});
```



## ConVars.SetString


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |
| Value | string | New value |




```java
Callback("Rendering", function() {
  ConVars.SetString("cl_downloadfilter", "none")
});
```


## ConVars.GetInt


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |

### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Value | int | value |




```java
Callback("Rendering", function() {
  var Value = ConVars.GetInt("cl_lagcompensation")
});
```


## ConVars.GetFloat



### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |

### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Value | float | value |




```java
Callback("Rendering", function() {
  var Value = ConVars.GetFloat("r_modelAmbientMin")
});
```


## ConVars.GetBool


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |

### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Value | bool | value |




```java
Callback("Rendering", function() {
  var Value = ConVars.GetBool("cl_lagcompensation")
});
```



## ConVars.GetString


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Reference | string | ConVar name |

### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Value | string | value |




```java
Callback("Rendering", function() {
  var Value = ConVars.GetString("cl_downloadfilter")
});
```

[back to Contents](#-1)
---
# <a name="3"></a>Exploit
---

## Exploit.GetCharge


### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Charge | bool | Returns true if Charged |




```java
Callback("Rendering", function() {
  var Value = Exploit.GetCharge()
});
```

## Exploit.ForceRecharge

### Forces Recharge

**[WARNING] Do not Force Charge Twice**

```java
Callback("Rendering", function() {
  if(!Exploit.GetCharge()) {
    Exploit.ForceRecharge()
  }
});
```

## Exploit.ForceTeleport

### Forces Teleport if Exploit is Recharged

**This will Release Exploit Charge**

```java
Callback("Rendering", function() {
  if(Exploit.GetCharge()) {
    Exploit.ForceTeleport()
  }
});
```

## Exploit.OverrideSpeed


### Parameters:
| Name | Type | Description |
| :--- | :--- | :--- |
| Ticks | int | New Ticks Skipped |

**Only Works for 1 Tick**

**[WARNING] There is no Clamp, therefore NOT Recommended to Override over 15**


```java
Callback("Rendering", function() {
  Exploit.OverrideSpeed(15)
});
```

[back to Contents](#-1)
---
# <a name="4"></a>Rendering
---



## Rendering.Line


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Start | Vector2D | Start of Line |
| End | Vector2D | End of Line |
| Color | int Array[4] | Color of Line |
| Thickness | float | Thickness of Line |



```java
Callback("Rendering", function() {
  Rendering.Line([50,50],[80,50],[255,255,255,255],1.0);
});
```

## Rendering.Text


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Position of Text |
| Color | int Array[4] | Color of Text |
| Flags | int | Render Flags |
| font | int | Font Index |


**Fonts**
```
0: Corbel 12
1: Corbel 11
2: Corbel 14
3: Calibri Bold 29
4: Skeet Pixel 12
5: Small Pixel 12
6: Weapon Icon 28 [Undefeated]
```

**Render Flags**
```
RenderFlags::None = 0
RenderFlags::Outlined = 1
RenderFlags::CenteredX = 2
RenderFlags::CenteredY = 4
RenderFlags::Shadow = 8
RenderFlags::CenteredX_And_Y = 2 + 4 = 6
```


```java
Callback("Rendering", function() {
  Rendering.Text([ 1920 / 2, 1080 / 2], [170,170,255,255], 5, 1, "Test")
});
```



## Rendering.Image


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Path | String | Path to the Image |
| Pos | Vector2D | Top Left Position of Image |
| Size | Vector2D | Size of the Image |
| Color | int Array[4] | Max Color |



```java
Callback("Rendering", function() {
  Rendering.Image("C:\Test.png", [30,30],[50,50],[255,255,255,255])
});
```


## Rendering.FilledRectangle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Top Left Position of Rectangle |
| Size | Vector2D | Size of the Rectangle |
| Color | int Array[4] | Color |
| Rounding | float | Edge Rounding |


```java
Callback("Rendering", function() {
  Rendering.FilledRectangle([50,50],[40,40],[255,255,255,255],5.0)
});
```



## Rendering.Rectangle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Top Left Position of Rectangle |
| Size | Vector2D | Size of the Rectangle |
| Color | int Array[4] | Color |
| Thickness | float | Thickness |


```java
Callback("Rendering", function() {
  Rendering.Rectangle([50,50],[40,40],[255,255,255,255],1.0)
});
```



## Rendering.Arc


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Center Position |
| Radius | float | Radius |
| Start | float | Start angle |
| End | float | End angle |
| Segments | int | Segments |
| Color | int Array[4] | Color |
| Closed | bool | Close |
| Thickness | float | Thickness |


```java
Callback("Rendering", function() {
  Rendering.Arc([50,50],40.0,0,3.14,40,[255,255,255,255],false,1.0)
});
```



## Rendering.FilledArc


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Center Position |
| Radius | float | Radius |
| Start | float | Start angle |
| End | float | End angle |
| Segments | int | Segments |
| Color | int Array[4] | Color |


```java
Callback("Rendering", function() {
  Rendering.FilledArc([50,50],40.0,0,3.14,40,[255,255,255,255])
});
```




## Rendering.Circle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Center Position |
| Radius | float | Radius |
| Color | int Array[4] | Color |
| Segments | int | Segments |



```java
Callback("Rendering", function() {
  Rendering.FilledArc([50,50],40.0,[255,255,255,255],40)
});
```

## Rendering.FilledCircle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector2D | Center Position |
| Radius | float | Radius |
| Color | int Array[4] | Color |
| Segments | int | Segments |



```java
Callback("Rendering", function() {
  Rendering.FilledArc([[50,50],40.0,[255,255,255,255],40)
});
```


## Rendering.WorldToScreen


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector3D | 3D Position |



### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Screen | Vector2D | 2D Screen Position |




```java
Callback("Rendering", function() {
  var Screen = Rendering.WorldToScreen([50,50,50])
});
```




## Rendering.GetScreenSize


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Screen Size | Vector2D | 2D Screen Size |




```java
Callback("Rendering", function() {
  var Screen = Rendering.GetScreenSize();
});
```



[back to Contents](#-1)
---
# <a name="5"></a>Rendering3D
---



## Rendering3D.Circle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector3D | Center Position |
| Radius | float | Radius |
| Color | int Array[4] | Color |
| Thickness | float | Thickness |
| Points | int | Segment Points |



```java
Callback("Rendering", function() {
  Rendering3D.Circle([50,50,0],25.0,[255,255,255,255],4.0,40)
});
```





## Rendering3D.GradientCircle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector3D | Center Position |
| Radius | float | Radius |
| Outer | int Array[4] | Color |
| Inner | int Array[4] | Color |



```java
Callback("Rendering", function() {
  Rendering3D.GradientCircle([50,50,0],20.0,[255,255,255,0],[255,255,255,255])
});
```






## Rendering3D.FilledCircle


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Pos | Vector3D | Center Position |
| Radius | float | Radius |
| Color | int Array[4] | Color |
| Points | int | Segment Points |



```java
Callback("Rendering", function() {
  Rendering3D.FilledCircle([50,50,0],25.0,[255,255,255,255],40)
});
```



## Rendering3D.Line


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Pos | Vector3D | Start Position |
| End Pos | Vector3D | End Position |
| Color | int Array[4] | Color |
| Thickness | float | Line Thickness |



```java
Callback("Rendering", function() {
  Rendering3D.Line([50,50,50],[50,70,50],[255,255,255,255],3.0)
});
```



## Rendering3D.GlowLine


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Start Pos | Vector3D | Start Position |
| End Pos | Vector3D | End Position |
| Color | int Array[4] | Color |
| Thickness | float | Line Thickness |



```java
Callback("Rendering", function() {
  Rendering3D.GlowLine([50,50,50],[50,70,50],[255,255,255,255],3.0)
});
```




[back to Contents](#-1)
---





