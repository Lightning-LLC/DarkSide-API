//vars
Menu.Checkbox("Memes","m_bMemesEnabled")
Menu.Slider("Meme Min", "m_flMemeMin", -60, 0)
Menu.Slider("Meme Max", "m_flMemeMax", 60, 0)

const Min = Config.GetInt("Script.m_flMemeMin");
const Min = Config.GetInt("Script.m_flMemeMax");

//main callback
Callback("CreateMove", function()
{  
  //check the checkbox is even enabled
  if(Config.GetBool("Script.m_bMemesEnabled"))
  {
    //override desync with meme value :sunglasses:
    Antiaim.OverrideDesync(Math.random(Min, Max))
  }
});

//profit
