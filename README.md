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
