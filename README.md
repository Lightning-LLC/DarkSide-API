# DarkSide API


**One of the Biggest JS API I've seen on a Free Cheat**


Official JavaScript API for DarkSide

<a name="-1"></a>

**Important** - Not Full API Documentation, Go to DarkSides Forum for Full Documentation



|Contents|
|--------|
|[Menu](#0)|
|[Config](#1)|
|[ConVars](#2)|
|[Exploit](#3)|
|[Rendering](#4)|
|[Rendering3D](#5)|
|[Event](#6)|
|[Sound](#7)|
|[Cheat](#8)|
|[Ragebot](#9)|
|[AntiAim](#10)|
|[Fakelag](#11)|
|[Engine](#12)|
|[Resolver](#13)|
|[Animation](#14)|
|[Prediction](#15)|
|[Data Structures](#16)|
|[Globals](#17)|
|[CurrentCMD](#18)|
|[Entity](#19)|
|[Trace](#20)|
|[Input](#21)|
|[Callback](#22)|

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

**Config Variable Names**
```java

//Rage

Ragebot.Enable    - bool
Ragebot.SilentAim - bool
Ragebot.AutoFire  - bool
Ragebot.ZeusBot   - bool
Ragebot.MaxFov    - int
Ragebot.AutoScope - int

//Weapon Default

Ragebot.Weapons<0>.Enable                     - bool
Ragebot.Weapons<0>.Hitboxes.Multipoint        - int
Ragebot.Weapons<0>.PointScale                 - bool
Ragebot.Weapons<0>.PointScale.Head            - int
Ragebot.Weapons<0>.PointScale.Body            - int
Ragebot.Weapons<0>.Damage.Minumum             - int
Ragebot.Weapons<0>.Damage.Override            - int
Ragebot.Weapons<0>.Hitchance                  - int 
Ragebot.Weapons<0>.Hitchance.Doubletap        - int
Ragebot.Weapons<0>.AutoStop                   - bool
Ragebot.Weapons<0>.AutoStop.Options           - int
Ragebot.Weapons<0>.MaxMissesBeforeSafepoint   - int
Ragebot.Weapons<0>.Hitboxes                   - int
Ragebot.Weapons<0>.Hitboxes.Safepoint.Prefer  - int
Ragebot.Weapons<0>.Hitboxes.Safepoint.Force   - int

//Weapon Overrides

Ragebot.Weapons<1>.OverrideDefault            - bool
Ragebot.Weapons<1>.Hitboxes.Multipoint        - int
Ragebot.Weapons<1>.PointScale                 - bool
Ragebot.Weapons<1>.PointScale.Head            - int
Ragebot.Weapons<1>.PointScale.Body            - int
Ragebot.Weapons<1>.Damage.Minumum             - int
Ragebot.Weapons<1>.Damage.Override            - int
Ragebot.Weapons<1>.Hitchance                  - int 
Ragebot.Weapons<1>.Hitchance.Doubletap        - int
Ragebot.Weapons<1>.AutoStop                   - bool
Ragebot.Weapons<1>.AutoStop.Options           - int
Ragebot.Weapons<1>.MaxMissesBeforeSafepoint   - int
Ragebot.Weapons<1>.Hitboxes                   - int
Ragebot.Weapons<1>.Hitboxes.Safepoint.Prefer  - int
Ragebot.Weapons<1>.Hitboxes.Safepoint.Force   - int

//Exploits

Exploits.Defensive          - bool
Exploits.AntiDefensive      - bool
Exploits.CustomSpeed        - bool
Exploits.CustomSpeed.Speed  - int
Exploits.ShootTwice         - bool
Exploits.IdealTick          - bool
Exploits.IdealTick.Slow     - bool
Exploits.Teleport.Boost     - bool
Exploits.DefensiveFlags     - int

//Visuals

Visuals.Keybinds  - bool
Visuals.Watermark - bool

//AntiAim

AntiAim.Enable              - bool
AntiAim.Pitch               - int
AntiAim.Yaw                 - int
AntiAim.Offset              - int
AntiAim.Yaw.Modifier        - int
AntiAim.Yaw.Modifier.Offset - int
AntiAim.Desync              - int
AntiAim.Desync.Delta        - int
AntiAim.Desync.LowerBodyYaw - int 
AntiAim.LegMovement         - int

//FakeLag

Fakelag.Mode          - int
Fakelag.Limit         - int
Fakelag.Randomization - int

//Misc

Misc.BunnyHop       - bool
Misc.AutoStrafe     - bool
Misc.Knifebot       - bool
Misc.AntiUntrusted  - bool
Misc.AutoPeek.Glow  - bool

//SkinChanger

SkinChanger.Agents.T  - int
SkinChanger.Agents.CT - int

//Binds

Binds.OverrideDamage
Binds.Safepoint
Binds.BodyAim
Binds.Doubletap
Binds.HideShot
Binds.Inverter
Binds.Manual.Left
Binds.Manual.Right
Binds.Manual.Back
Binds.Manual.Forward
Binds.FakeDuck
Binds.SlowMotion
Binds.Thirdperson
Binds.PeekAssist



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

## Exploit.OverrideDefensive


### Parameters:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Enable Defensive |



```java
Callback("Rendering", function() {
  Exploit.OverrideDefensive(true)
});
```

## Exploit.OverrideTeleport


### Parameters:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Enable CLMove Shifting |


```java
Callback("Rendering", function() {
  Exploit.OverrideTeleport(true)
});
```

## Exploit.IsDefensive


### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Defensive Enabled |


```java
Callback("Rendering", function() {
  var DefensiveDoubletap = Exploit.IsDefensive();
});
```

## Exploit.IsSpeedOverride


### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Speed Override Enabled |


```java
Callback("Rendering", function() {
  var SpeedOverrideEnabled = Exploit.IsSpeedOverride();
});
```

## Exploit.IsTeleportBoost


### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Teleport Boost Enabled [not CLMove] |


```java
Callback("Rendering", function() {
  var TeleportBoostEnabled = Exploit.IsTeleportBoost();
});
```

## Exploit.IsTeleport


### Returns:
| Name | Type | Description |
| :--- | :--- | :--- |
| Enabled | bool | Teleport Enabled [CLMove] |


```java
Callback("Rendering", function() {
  var TeleportEnabled = Exploit.IsTeleport();
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
# <a name="6"></a>Event
---

## Event.GetInt


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Name | string | Event Name |



### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | int | Event Value |




```java
Callback("player_death", function() {
  var value = Event.GetInt("attacker")
});
```


## Event.GetFloat


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Name | string | Event Name |



### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | float | Event Value |




```java
Callback("bullet_impact", function() {
  var HitX = Event.GetInt("x")
});
```


## Event.GetString


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Name | string | Event Name |



### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Value | string | Event Value |




```java
Callback("player_hurt", function() {
  var dmgleftstr = Event.GetString("dmg_health")
});
```


[back to Contents](#-1)
---
# <a name="7"></a>Sound
---


## Sound.Play


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Directory | string | File Directory |




```java
Callback("Rendering", function() {
  Sound.Play("C:\AnimeMoan.wav");
});
```


[back to Contents](#-1)
---
# <a name="8"></a>Cheat
---


## Cheat.SetClanTag


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Clantag | string | Clantag |
| Clan name | string | Clan name |



```java
Callback("Rendering", function() {
  Cheat.SetClanTag("darkside    |", "Darkside")
});
```


## Cheat.Print


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Text | string | Text |
| Color | int Array[4] | Color |



```java
Callback("Rendering", function() {
  Cheat.Print("Hello from Kwitty!",[255,255,255,255])
});
```

## Cheat.Log


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Text | string | Text |
| Color | int Array[4] | Color |


```java
Callback("Rendering", function() {
  Cheat.Log("Hello from Kwitty!",[255,255,255,255])
});
```


## Cheat.GetMissedShots


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer | Missed shots on Player |

### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Missed Shots | int | Missed shots on Player |



```java
Callback("Rendering", function() {
  var MissedShotsOnLocalPlayer = Cheat.GetMissedShots(Entity.GetLocalPlayer())
});
```



## Cheat.ExecuteClientCommand


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Command | string | Console Command |



```java
Callback("Rendering", function() {
  Cheat.ExecuteClientCommand("sv_cheats 1")
});
```


## Cheat.GetChokedCommands


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Choked Ticks | int | Choked Command |




```java
Callback("Rendering", function() {
  var Choked = Cheat.GetChokedCommands();
});
```

## Cheat.GetUsername


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Username | string | Current Username |




```java
Callback("Rendering", function() {
  var Username = Cheat.GetUsername();
});
```

## Cheat.InAir


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| IsInAir | bool | Current Cheat Movement State |




```java
Callback("Rendering", function() {
  var InAir = Cheat.InAir()
});
```


[back to Contents](#-1)
---
# <a name="9"></a>Ragebot
---

## Ragebot.GetCurrentDamage


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Min Damage | int | Current Ragebot Aiming Damage |




```java
Callback("Rendering", function() {
  var RagebotShotDmg = Ragebot.GetCurrentDamage()
});
```

[back to Contents](#-1)
---
# <a name="10"></a>AntiAim
---

## AntiAim.GetDesyncDelta


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Max Desync | float | Local Player Max Desync |




```java
Callback("Rendering", function() {
  var MaxDesync = Ragebot.GetMaxDesync();
});
```


## AntiAim.GetFakeRotation


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Fake Rotation | float | Local Player Fake Rotation |




```java
Callback("Rendering", function() {
  var FakeRotation = AntiAim.GetFakeRotation();
});
```

## AntiAim.GetRealRotation


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Real Rotation | float | Local Player Real Rotation |




```java
Callback("Rendering", function() {
  var RealRotation = AntiAim.GetRealRotation();
});
```

## AntiAim.FiredShot


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Shot Bullet | bool | Did Cheat shoot a Bullet |




```java
Callback("Rendering", function() {
  var RagebotShot = AntiAim.FiredShot()
});
```

## AntiAim.IsPeeking


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Peek State | bool | True if Peeking Opponent |




```java
Callback("Rendering", function() {
  var Peeking = AntiAim.IsPeeking()
});
```

## AntiAim.GetInverterState


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Inverter State | bool | State of AntiAim Inverter |




```java
Callback("Rendering", function() {
  var Inverter = AntiAim.GetInverterState();
});
```

## AntiAim.SetInverterState


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Inverter State | bool | New Inverter State |




```java
Callback("Rendering", function() {
  AntiAim.SetInverterState(true);
});
```

## AntiAim.OverrideDesync


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Desync Delta | float | Overriden Desync Delta |




```java
Callback("Rendering", function() {
  AntiAim.OverrideDesync(60 * 2) //exactly the same as 60 desync delta extend lby
});
```

[back to Contents](#-1)
---
# <a name="11"></a>Fakelag
---

## Fakelag.OverrideFakelag


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| New max Choke | int | New Fakelag max Choke |




```java
Callback("Rendering", function() {
  Fakelag.OverrideFakelag(15);
});
```

## Fakelag.PacketSent


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| Packet State | bool | Is Packet Sent |




```java
Callback("Rendering", function() {
  var SentPacket = Fakelag.PacketSent();
});
```


[back to Contents](#-1)
---
# <a name="12"></a>Engine
---

## Engine.InGame


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| State | bool | True if InGame |




```java
Callback("Rendering", function() {
  var InGame = Engine.InGame();
});
``` 

## Engine.MaxClients 

**Use Globals.MaxClients Instead!! DO NOT USE UNLESS Globals.MaxClients FAIL!!**

**FPS mitigation Warning [LOWERS FPS DRASTICLY]**


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| MaxClients | int | Totals Clients in Game |




```java
Callback("Rendering", function() {
  var Clients = Engine.MaxClients()
});
``` 

## Engine.GetViewAngles 


### Returns:

| Name | Type | Description |
| :--- | :--- | :--- |
| ViewAngles | Vector2D | Pitch and Yaw |




```java
Callback("Rendering", function() {
  var VA = Engine.GetViewAngles();
});
``` 

[back to Contents](#-1)
---
# <a name="13"></a>Resolver
---

## Resolver.ForceSide


### Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |
| Side | int | New Side |

```
0  - Disabled
+1 - Right
-1 - Left
```


```java
Callback("Rendering", function() {
  Resolver.ForceSide(Entity.GetLocalPlayer(),0)
});
```

## Resolver.ForceDelta


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |
| Delta | float | New Desync Delta |

**0 Minimum, 60 Maximum**

```java
Callback("Rendering", function() {
  Resolver.ForceSide(Entity.GetLocalPlayer(),30)
});
```

## Resolver.ForceGoalFeetYaw


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |
| Delta | float | New Goal Feet Yaw |


```java
Callback("Rendering", function() {
  var ViewAngles = Engine.GetViewAngles()
  Resolver.ForceGoalFeetYaw(Entity.GetLocalPlayer(), [ViewAngles[0], ViewAngles[1],0.0])
});
```





[back to Contents](#-1)
---
# <a name="14"></a>Animation
---


## Animation.OverrideGoalFeetYaw


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |
| Delta | float | New Goal Feet Yaw |



```java
Callback("Rendering", function() {
  var ViewAngles = Engine.GetViewAngles()
  Animation.OverrideGoalFeetYaw(Entity.GetLocalPlayer(), [ViewAngles[0], ViewAngles[1],0.0])
});
```


## Animation.GetSequenceActivity


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Sequence | int | Animation Layer Sequence |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Activity | int | Sequence Activity |


```java
Callback("Rendering", function() {
  var ViewAngles = Engine.GetViewAngles()
  Animation.GetSequenceActivity(Animation.GetAnimationOverlay(Entity.GetLocalPlayer(),3)[6])
});
```

## Animation.GetAnimationOverlay


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |
| Index | int | Animation Overlay Index |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Animation Overlay | CPlayerAnimationOverlay | Animation Overlay |


```
CPlayerAnimationOverlay : int ->
BlendIn         = 0
Cycle           = 1
PlaybackRate    = 2
PreviousCycle   = 3
Weight          = 4
WeightDeltaRate = 5
Sequence        = 6
```


```java
Callback("Rendering", function() {
  var ViewAngles = Engine.GetViewAngles()
  var AnimationOverlay3 = Animation.GetAnimationOverlay(Entity.GetLocalPlayer(),3)
  Animation.GetSequenceActivity(AnimationOverlay3[6])
});
```


## Animation.GetAnimationState


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Player | Entity | Player to Override |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Animation State | CPlayerAnimationState | Player Animation State |


```
CPlayerAnimationState : int ->
GoalFeetYaw = 0
AccelerationX = 1
AccelerationY = 2
AcceleratoinZ = 3
AccelerationWeight = 4
ActionWeightBiasLeft = 5
InBalanceStarted = 6
AimMatrixTransition = 7
AimMatrixDelay = 8
MaxPitch = 9
MinPitch = 10
MaxYaw = 11
MinYaw = 12
DuckAmmount = 13
ModelIndex = 14
SmoothedCameraZ = 15
CrouchGroundFraction = 16
AdditionalDuck = 17
Pitch = 18
Yaw = 19
FootLerp = 20
InAirSmoothModifier = 21
JumpToFall = 22
LadderSpeed = 23
LadderWeight = 24
LandAnimModifier = 25
LastClientSideAnimationUpdateTimeDelta = 26
MoveWeight = 27
MoveYaw = 28
MoveYawRelativeToMoveYawIdeal = 29
MoveYawIdeal = 30
```


```java
Callback("Rendering", function() {
  var AnimState = Animation.GetAnimationState(Entity.GetLocalPlayer())
});
```


[back to Contents](#-1)
---
# <a name="15"></a>Prediction
---


## Prediction.PredictNade


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Source | Vector3D | Source of the Grenade |
| Velocity | Vector3D | Velocity of Thrower |
| ViewAngles | Vector3D | Thrower View Angles |
| Type | CWeaponItemDefinitionIndex : int | Grenade Type |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Predicted Nade | CGrenadePredictionReturn | Predicted Nade Return |


```java
CGrenadePredictionReturn -> First 3 In Array is EndPos the Rest per 3 is Path

Helpers ->

function GetGrenadePredictionEndPos(ret) {
    return [ret[0],ret[1],ret[2]]
}

function GetGrenadePredictionPath(ret) {
    pret = []
    for(i = 3; i < ret.length; i += 3) {
        if(i + 2 <= ret.length) {
            pret.push([ret[i],ret[i + 1], ret[i + 2]]);
        }
    }
    return pret;
}


CWeaponItemDefinitionIndex  : int ->
WEAPON_FLASHBANG            : 43
WEAPON_HEGRENADE            : 44
WEAPON_SMOKEGRENADE         : 45
WEAPON_MOLOTOV              : 46
WEAPON_DECOY                : 47
WEAPON_INC                  : 48

```


```java
Callback("Rendering", function() {
   var weapdefind = Entity.GetWeaponItemDefinitionIndex(LocalPlayer);
   var VAng = Engine.GetViewAngles();
   var Predicted = Prediction.PredictNade(Entity.GetEyePosition(LocalPlayer), Entity.GetVelocity(LocalPlayer),[VAng[0],VAng[1],0],weapdefind);
});
```

[back to Contents](#-1)
---
# <a name="16"></a>Data Structures
---

### CMenuVariables -> String

```java

//Rage

Ragebot.Enable    - bool
Ragebot.SilentAim - bool
Ragebot.AutoFire  - bool
Ragebot.ZeusBot   - bool
Ragebot.MaxFov    - int
Ragebot.AutoScope - int

//Weapon Default

Ragebot.Weapons<0>.Enable                     - bool
Ragebot.Weapons<0>.Hitboxes.Multipoint        - int
Ragebot.Weapons<0>.PointScale                 - bool
Ragebot.Weapons<0>.PointScale.Head            - int
Ragebot.Weapons<0>.PointScale.Body            - int
Ragebot.Weapons<0>.Damage.Minumum             - int
Ragebot.Weapons<0>.Damage.Override            - int
Ragebot.Weapons<0>.Hitchance                  - int 
Ragebot.Weapons<0>.Hitchance.Doubletap        - int
Ragebot.Weapons<0>.AutoStop                   - bool
Ragebot.Weapons<0>.AutoStop.Options           - int
Ragebot.Weapons<0>.MaxMissesBeforeSafepoint   - int
Ragebot.Weapons<0>.Hitboxes                   - int
Ragebot.Weapons<0>.Hitboxes.Safepoint.Prefer  - int
Ragebot.Weapons<0>.Hitboxes.Safepoint.Force   - int

//Weapon Overrides

Ragebot.Weapons<1>.OverrideDefault            - bool
Ragebot.Weapons<1>.Hitboxes.Multipoint        - int
Ragebot.Weapons<1>.PointScale                 - bool
Ragebot.Weapons<1>.PointScale.Head            - int
Ragebot.Weapons<1>.PointScale.Body            - int
Ragebot.Weapons<1>.Damage.Minumum             - int
Ragebot.Weapons<1>.Damage.Override            - int
Ragebot.Weapons<1>.Hitchance                  - int 
Ragebot.Weapons<1>.Hitchance.Doubletap        - int
Ragebot.Weapons<1>.AutoStop                   - bool
Ragebot.Weapons<1>.AutoStop.Options           - int
Ragebot.Weapons<1>.MaxMissesBeforeSafepoint   - int
Ragebot.Weapons<1>.Hitboxes                   - int
Ragebot.Weapons<1>.Hitboxes.Safepoint.Prefer  - int
Ragebot.Weapons<1>.Hitboxes.Safepoint.Force   - int

//Exploits

Exploits.Defensive          - bool
Exploits.AntiDefensive      - bool
Exploits.CustomSpeed        - bool
Exploits.CustomSpeed.Speed  - int
Exploits.ShootTwice         - bool
Exploits.IdealTick          - bool
Exploits.IdealTick.Slow     - bool
Exploits.Teleport.Boost     - bool
Exploits.DefensiveFlags     - int

//Visuals

Visuals.Keybinds  - bool
Visuals.Watermark - bool

//AntiAim

AntiAim.Enable              - bool
AntiAim.Pitch               - int
AntiAim.Yaw                 - int
AntiAim.Offset              - int
AntiAim.Yaw.Modifier        - int
AntiAim.Yaw.Modifier.Offset - int
AntiAim.Desync              - int
AntiAim.Desync.Delta        - int
AntiAim.Desync.LowerBodyYaw - int 
AntiAim.LegMovement         - int

//FakeLag

Fakelag.Mode          - int
Fakelag.Limit         - int
Fakelag.Randomization - int

//Misc

Misc.BunnyHop       - bool
Misc.AutoStrafe     - bool
Misc.Knifebot       - bool
Misc.AntiUntrusted  - bool
Misc.AutoPeek.Glow  - bool

//SkinChanger

SkinChanger.Agents.T  - int
SkinChanger.Agents.CT - int

```

### CBinds -> String


```
Binds.OverrideDamage
Binds.Safepoint
Binds.BodyAim
Binds.Doubletap
Binds.HideShot
Binds.Inverter
Binds.Manual.Left
Binds.Manual.Right
Binds.Manual.Back
Binds.Manual.Forward
Binds.FakeDuck
Binds.SlowMotion
Binds.Thirdperson
Binds.PeekAssist
```

### ClientClass -> auto

```
NetworkName : strin = 0
```

### CGrenadeItemDefinitionIndex  -> int 

```
WEAPON_FLASHBANG            : 43
WEAPON_HEGRENADE            : 44
WEAPON_SMOKEGRENADE         : 45
WEAPON_MOLOTOV              : 46
WEAPON_DECOY                : 47
WEAPON_INC                  : 48
```

### CWeaponItemDefinitionIndex -> int
```
WEAPON_DEAGLE = 1,
	WEAPON_DUALBERETTA = 2,
	WEAPON_FIVESEVEN = 3,
	WEAPON_GLOCK = 4,
	WEAPON_AK47 = 7,
	WEAPON_AUG = 8,
	WEAPON_AWP = 9,
	WEAPON_FAMAS = 10,
	WEAPON_G3SG1 = 11,
	WEAPON_GALIL = 13,
	WEAPON_M249 = 14,
	WEAPON_M4A1 = 16,
	WEAPON_MAC10 = 17,
	WEAPON_P90 = 19,
	WEAPON_MP5SD = 23,
	WEAPON_UMP45 = 24,
	WEAPON_XM1014 = 25,
	WEAPON_BIZON = 26,
	WEAPON_MAG7 = 27,
	WEAPON_NEGEV = 28,
	WEAPON_SAWEDOFF = 29,
	WEAPON_TEC9 = 30,
	WEAPON_ZEUSX27 = 31,
	WEAPON_USP = 32,
	WEAPON_MP7 = 33,
	WEAPON_MP9 = 34,
	WEAPON_NOVA = 35,
	WEAPON_P250 = 36,
	WEAPON_SCAR20 = 38,
	WEAPON_SG553 = 39,
	WEAPON_SSG08 = 40,
	WEAPON_KNIFE_GG = 41,
	WEAPON_KNIFE = 42,
	WEAPON_FLASHBANG = 43,
	WEAPON_HEGRENADE = 44,
	WEAPON_SMOKEGRENADE = 45,
	WEAPON_MOLOTOV = 46,
	WEAPON_DECOY = 47,
	WEAPON_INC = 48,
	WEAPON_C4 = 49,
	WEAPON_HEALTHSHOT = 57,
	WEAPON_KNIFE_T = 59,
	WEAPON_M4A1S = 60,
	WEAPON_USPS = 61,
	WEAPON_CZ75 = 63,
	WEAPON_REVOLVER = 64,
	WEAPON_KNIFE_BAYONET = 500,
	WEAPON_KNIFE_FLIP = 505,
	WEAPON_KNIFE_GUT = 506,
	WEAPON_KNIFE_KARAMBIT = 507,
	WEAPON_KNIFE_M9_BAYONET = 508,
	WEAPON_KNIFE_TACTICAL = 509,
	WEAPON_KNIFE_FALCHION = 512,
	WEAPON_KNIFE_SURVIVAL_BOWIE = 514,
	WEAPON_KNIFE_BUTTERFLY = 515,
	WEAPON_KNIFE_PUSH = 516
```

### Vector3D -> int[3]
```
Vector3D = [X, Y, Z]
```

### Vector2D -> int[2]
```
Vector2D = [X, Y]
```

### ColorRGBA -> int[4]
```
ColorRGBA = [R,G,B,A]
```

### ColorRGB -> int[3]
```
ColorRGB = [R,G,B]
```


### Buttons -> int
```
IN_ATTACK		  (1 << 0) 
IN_JUMP			  (1 << 1)
IN_DUCK			  (1 << 2)
IN_FORWARD		(1 << 3)
IN_BACK			  (1 << 4)
IN_USE			  (1 << 5)
IN_CANCEL		  (1 << 6)
IN_LEFT			  (1 << 7)
IN_RIGHT		  (1 << 8)
IN_MOVELEFT		(1 << 9)
IN_MOVERIGHT	(1 << 10)
IN_ATTACK2		(1 << 11)
IN_RUN			  (1 << 12)
IN_RELOAD		  (1 << 13)
IN_ALT1			  (1 << 14)
IN_ALT2			  (1 << 15)
IN_SCORE		  (1 << 16)  
IN_SPEED		  (1 << 17)	
IN_WALK			  (1 << 18)	
IN_ZOOM			  (1 << 19)	
IN_WEAPON1		(1 << 20)	
IN_WEAPON2		(1 << 21)	
IN_BULLRUSH		(1 << 22)
IN_GRENADE1		(1 << 23)
IN_GRENADE2		(1 << 24)	
```

### Fonts -> int
```
0: Corbel 12
1: Corbel 11
2: Corbel 14
3: Calibri Bold 29
4: Skeet Pixel 12
5: Small Pixel 12
6: Weapon Icon 28 [Undefeated]
```

### Render Flags -> int
```
RenderFlags::None       (1 << 0)
RenderFlags::Outlined   (1 << 1)
RenderFlags::CenteredX  (1 << 2)
RenderFlags::CenteredY  (1 << 3)
RenderFlags::Shadow     (1 << 4)
```

### CPlayerAnimationState -> int 

```
CPlayerAnimationState : int ->
GoalFeetYaw = 0
AccelerationX = 1
AccelerationY = 2
AcceleratoinZ = 3
AccelerationWeight = 4
ActionWeightBiasLeft = 5
InBalanceStarted = 6
AimMatrixTransition = 7
AimMatrixDelay = 8
MaxPitch = 9
MinPitch = 10
MaxYaw = 11
MinYaw = 12
DuckAmmount = 13
ModelIndex = 14
SmoothedCameraZ = 15
CrouchGroundFraction = 16
AdditionalDuck = 17
Pitch = 18
Yaw = 19
FootLerp = 20
InAirSmoothModifier = 21
JumpToFall = 22
LadderSpeed = 23
LadderWeight = 24
LandAnimModifier = 25
LastClientSideAnimationUpdateTimeDelta = 26
MoveWeight = 27
MoveYaw = 28
MoveYawRelativeToMoveYawIdeal = 29
MoveYawIdeal = 30
```

### CPlayerAnimationOverlay -> int 


```
BlendIn         = 0
Cycle           = 1
PlaybackRate    = 2
PreviousCycle   = 3
Weight          = 4
WeightDeltaRate = 5
Sequence        = 6
```

### Global Variables -> auto

```
Globals.Realtime()            - float
Globals.Framecount()          - int
Globals.AbsoluteFrametime()   - float
Globals.Curtime()             - float
Globals.Frametime()           - float
Globals.MaxClients()          - int
Globals.Tickcount()           - int
Globals.TickInterval()        - float
Globals.Latency()             - float
```

### CCMDMovement -> int

```
0 - Forward
1 - Side
2 - Upmove
```

### CBulletReturn -> auto
```
damage            : int
penetration count : int
endpos X          : float
endpos Y : float
endpos Z : float
```

### CTraceReturn -> auto
```
fraction   : float
hit entity : int // -1 if did not hit entity
contents   : int
endpos X   : float
endpos Y   : float
endpos Z   : float
```

### CWorldTraceReturn -> auto
```
fraction : float
contents : int
endpos X : float
endpos Y : float
endpos Z : float
```


### Trace Mask -> unsigned int
```
CONTENTS_EMPTY                0
CONTENTS_SOLID                0x1       
CONTENTS_WINDOW               0x2
CONTENTS_AUX                  0x4
CONTENTS_GRATE                0x8
CONTENTS_SLIME                0x10
CONTENTS_WATER                0x20
CONTENTS_BLOCKLOS             0x40 
CONTENTS_OPAQUE               0x80 
CONTENTS_TESTFOGVOLUME        0x100
CONTENTS_UNUSED               0x200     
CONTENTS_BLOCKLIGHT           0x400
CONTENTS_TEAM1                0x800 
CONTENTS_TEAM2                0x1000 
CONTENTS_IGNORE_NODRAW_OPAQUE 0x2000
CONTENTS_MOVEABLE             0x4000
CONTENTS_AREAPORTAL           0x8000
CONTENTS_PLAYERCLIP           0x10000
CONTENTS_MONSTERCLIP          0x20000
CONTENTS_CURRENT_0            0x40000
CONTENTS_CURRENT_90           0x80000
CONTENTS_CURRENT_180          0x100000
CONTENTS_CURRENT_270          0x200000
CONTENTS_CURRENT_UP           0x400000
CONTENTS_CURRENT_DOWN         0x800000
CONTENTS_ORIGIN               0x1000000 
CONTENTS_MONSTER              0x2000000 
CONTENTS_DEBRIS               0x4000000
CONTENTS_DETAIL               0x8000000 
CONTENTS_TRANSLUCENT          0x10000000
CONTENTS_LADDER               0x20000000
CONTENTS_HITBOX               0x40000000
```

### Callbacks -> string

```
Rendering  - On Rendering
CreateMove - On CreateMove
EventName  - On EventName [Example: bullet_impact - On BulletImpact]
```


[back to Contents](#-1)
---
# <a name="17"></a>Globals
---

**No Parameters or Arguments**


**Returns the Selected Variable**

```
Globals.Realtime()            - float
Globals.Framecount()          - int
Globals.AbsoluteFrametime()   - float
Globals.Curtime()             - float
Globals.Frametime()           - float
Globals.MaxClients()          - int
Globals.Tickcount()           - int
Globals.TickInterval()        - float
Globals.Latency()             - float
```

[back to Contents](#-1)
---
# <a name="18"></a>CurrentCMD
---

## CurrentCMD.GetTickcount


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Tickcount | int | Current User Command Tickcount |


```java
Callback("Rendering", function() {
  var TickCount = CurrentCMD.GetTickcount();
});
```

## CurrentCMD.SetTickcount


### Parameter:


| Name | Type | Description |
| :--- | :--- | :--- |
| Tickcount | int | New Tickcount |


```java
Callback("Rendering", function() {
  CurrentCMD.SetTickcount(9999999);
});
```


## CurrentCMD.GetButtons


**Buttons Can be found in Data Structure**


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Buttons | int | Current CMD Buttons |


```java
Callback("Rendering", function() {
  var Buttons = CurrentCMD.GetButtons();
});
```


## CurrentCMD.SetButtons


**Buttons can be found at Data Structure**


### Parameter:


| Name | Type | Description |
| :--- | :--- | :--- |
| Buttons | int | New Buttons |


```java
Callback("Rendering", function() {
  CurrentCMD.SetButtons(CurrentCMD.GetButtons() | (1 << 0));
});
```

## CurrentCMD.GetViewAngles


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| ViewAngles | Vector3D | Current CMD ViewAngles [Silent] |


```java
Callback("Rendering", function() {
  var ViewAngles = CurrentCMD.GetViewAngles();
});
```


## CurrentCMD.SetViewAngles


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| ViewAngles | Vector3D | New ViewAngles [Always Silent] |


```java
Callback("Rendering", function() {
  CurrentCMD.SetViewAngles([50,50,0]);
});
```


## CurrentCMD.GetMovement


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Movement | CCMDMovement | Current User Movement |

```
CCMDMovement -> int
0 - Forward
1 - Side
2 - Upmove

```


```java
Callback("Rendering", function() {
  var Movement = CurrentCMD.GetMovement();
});
```


## CurrentCMD.SetMovement


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Movement | CCMDMovement | New User Movement |

```
CCMDMovement -> int
0 - Forward
1 - Side
2 - Upmove

```


```java
Callback("Rendering", function() {
  CurrentCMD.SetMovement([0,0,0]);
});
```


[back to Contents](#-1)
---
# <a name="19"></a>Entity
---


## Entity.GetLocalPlayer


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Local Player | CCSPlayer [int] | Local Player |



```java
Callback("Rendering", function() {
  var LocalPlayer = Entity.GetLocalPlayer()
});
```


## Entity.GetPlayers


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Players | CCSPlayer [int] [Array] | Returns all Players |



```java
Callback("Rendering", function() {
  var Players = Entity.GetPlayers()
});
```


## Entity.GetEntities


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entities | CCSEntity [int] [Array] | Returns all Players |



```java
Callback("Rendering", function() {
  var AllEntities = Entity.GetEntities()
});
```


## Entity.GetVelocity

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Velocity | Vector3D | Velocity |



```java
Callback("Rendering", function() {
  var Velocity = Entity.GetVelocity(Entity.GetLocalPlayer());
});
```

## Entity.GetOrigin

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Origin | Vector3D | Origin |



```java
Callback("Rendering", function() {
  var Origin = Entity.GetOrigin(Entity.GetLocalPlayer());
});
```



## Entity.GetPlayerFromUserID

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| UserID | int | UserID |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


```java
Callback("player_hurt", function() {
  var Player = Entity.GetPlayerFromUserID(Event.GetInt("Attacker"));
});
```


## Entity.GetProp

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |
| Table | string | Table |
| Element | string | Element |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Prop | auto | Property |


**DO NOT USE, FUNCTION MAY CAUSE CRASHES**



```java
Callback("Rendering", function() {
  var Health = Entity.GetProp(Entity.GetLocalPlayer(),"CBasePlayer", "m_iHealth");
});
```

## Entity.SetProp

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |
| Table | string | Table |
| Element | string | Element |
| New Value | auto | New Property Value |


**DO NOT USE, FUNCTION MAY CAUSE CRASHES**


```java
Callback("Rendering", function() {
  Entity.SetProp(Entity.GetLocalPlayer(),"CBasePlayer", "m_iHealth", 100);
});
```


## Entity.GetEntitiesFromClassID

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| ClassID | int | ClassID |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


```java
Callback("Rendering", function() {
  var ent = Entity.GetEntitiesFromClassID(157); //gets all CBaseGrenadeProjectile Entities
});
```


## Entity.GetClientClass

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| ClientClass | CEntityClientClass | Client Class |

```
ClientClass -> auto
NetworkName : strin = 0
```


```java
Callback("Rendering", function() {
  var Clientname = Entity.GetClientClass(Entity.GetLocalPlayer())[0]; //string
});
```

## Entity.IsScoped

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Scope State | bool | True if Scoped |



```java
Callback("Rendering", function() {
  var Scoped = Entity.IsScoped(Entity.GetLocalPlayer()); 
});
```

## Entity.IsAlive

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Life State | bool | True if Alive |



```java
Callback("Rendering", function() {
  var Alive = Entity.IsAlive(Entity.GetLocalPlayer()); 
});
```


## Entity.InAir


**Prefer Cheat.InAir for Local Player**


### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Air State | bool | True if in Air |



```java
Callback("Rendering", function() {
  var InAir = Entity.InAir(Entity.GetLocalPlayer()); 
});
```


## Entity.GetWeaponItemDefinitionIndex

### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Weapon Item Definition Index | CWeaponItemDefinitionIndex | Weapon Index |


**CWeaponItemDefinitionIndex Can be found in Data Structures**


```java
Callback("Rendering", function() {
  var Index = Entity.GetWeaponItemDefinitionIndex(Entity.GetLocalPlayer()); 
});
```


## Entity.GetEyePosition




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Eye Position | Vector3D | Eye Position |



```java
Callback("Rendering", function() {
  var EyePosition = Entity.GetEyePosition(Entity.GetLocalPlayer()); 
});
```


## Entity.IsValid




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| State | bool | True if Entity is Valid |



```java
Callback("Rendering", function() {
  var Valid = Entity.IsValid(Entity.GetLocalPlayer()); 
});
```


## Entity.IsOpponentRelativeTo




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Entity | CCSPlayer [int] | Player |
| Relative | CCSPlayer [int] | Player |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| State | bool | True if Entity is Opponent |



```java
Callback("Rendering", function() {
  var OpponentToLocalPlayer = Entity.IsOpponentRelativeTo(Entity.GetLocalPlayer(),Entity.GetLocalPlayer()); 
});
```



[back to Contents](#-1)
---
# <a name="20"></a>Trace
---


## Trace.GetPointContents




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Point | Vector3D | Point |


### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Contents | int | Point Contents |



```java
Callback("Rendering", function() {
  var Contents = Trace.GetPointContents([50,50,50])
});
```


## Trace.Line




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Start | Vector3D | Point |
| End | Vector3D | Point |
| Mask | int | Mask |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Trace Return | CTraceReturn | Trace Return |


**CTraceReturn can be found in Data Structures**

**Entity is -1 if did not hit entity**


```java
Callback("Rendering", function() {
  var Trace = Trace.Line([50,50,50],[50,50,500],0x1)
});
```


## Trace.Hitbox




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Start | Vector3D | Point |
| End | Vector3D | Point |
| Hitbox Min | Vector3D | Size Min |
| Hitbox Max | Vector3D | Size Max |
| Mask | int | Mask |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Trace Return | CTraceReturn | Trace Return |


**CTraceReturn can be found in Data Structures**

**Entity is -1 if did not hit entity**


```java
Callback("Rendering", function() {
  var Trace = Trace.Hitbox([50,50,50],[50,50,500],[-2,-2,-2],[2,2,2],0x1)
});
```


## Trace.LineWorldOnly




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Start | Vector3D | Point |
| End | Vector3D | Point |
| Mask | int | Mask |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Trace Return | CWorldTraceReturn | Trace Return |

**Use only for World**


**CWorldTraceReturn can be found in Data Structures**


```java
Callback("Rendering", function() {
  var Trace = Trace.LineWorldOnly([50,50,50],[50,50,500],0x1)
});
```

## Trace.HitboxWorldOnly




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Start | Vector3D | Point |
| End | Vector3D | Point |
| Hitbox Min | Vector3D | Size Min |
| Hitbox Max | Vector3D | Size Max |
| Mask | int | Mask |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Trace Return | CWorldTraceReturn | Trace Return |

**Use only for World**


**CWorldTraceReturn can be found in Data Structures**


```java
Callback("Rendering", function() {
  var Trace = Trace.HitboxWorldOnly([50,50,50],[50,50,500],[-2,-2,-2],[2,2,2],0x1)
});
```


## Trace.Bullet




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Target | CCSPlayer [int / entity] | Player |
| Target Point | Vector3D | Point |
| Specific HitGroup | int | Can be -1 if no Specific HitGroup |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Return | CBulletReturn | Prediction Return |


**CBulletReturn can be found in Data Structures**


```java
Callback("Rendering", function() {
  var Bullet = Trace.Bullet(Entity.GetLocalPlayer(),Entity.GetEyePosition(Entity.GetLocalPlayer()),-1);
});
```

[back to Contents](#-1)
---
# <a name="21"></a>Input
---



## Input.IsKeyPressed




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Virtual Key | int | Key to Check |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| State | bool | True if Pressed |


**Virtual Key Codes https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes**


```java
Callback("Rendering", function() {
  var PressedMouse1 = Input.IsKeyPressed(0x01);
});
```


## Input.IsKeyToggled




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Virtual Key | int | Key to Check |

### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| State | bool | Returns true Once if Key is Pressed |


**Virtual Key Codes https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes**


```java
Callback("Rendering", function() {
  var PressedMouse1Once = Input.IsKeyToggled(0x01);
});
```

## Input.GetCursorPosition



### Returns:


| Name | Type | Description |
| :--- | :--- | :--- |
| Cursor Position | Vector2D | Position of Cursor |





```java
Callback("Rendering", function() {
  var MousePosition = Input.GetCursorPosition()
});
```


[back to Contents](#-1)
---
# <a name="22"></a>Callback
---

## Callback




### Parameters:


| Name | Type | Description |
| :--- | :--- | :--- |
| Callback Name | string | Callback Name |
| Callback Function | function | function to Callback |


**Callbacks can be found in Data Structures**

```
Callbacks
Rendering  - On Rendering
CreateMove - On CreateMove
EventName  - On EventName [Example: bullet_impact - On BulletImpact]
```


```java
Callback("Rendering", function() {
  )
});

function OnRender() {

}
Callback("Rendering", OnRender)
```


[back to Contents](#-1)
---
