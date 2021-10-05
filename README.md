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
