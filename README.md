# DarkSide-API
Official JavaScript API for DarkSide

<a name="-1"></a>

**Important** - Feel free to open an Issue if you have a suggestion or need clarrification.



|Contents|
|--------|
|[Menu](#0)|
|[Config](#1)|


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
  Config.SetBool(Script.TestReference", false)
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

