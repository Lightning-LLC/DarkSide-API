// Clantag JS Example by Sad Kwitty

//Declare Menu Elements
const ClantagEnable = Menu.Checkbox("Enable Animated Clantag", "Clantag.Enable")
const ClantagSpeed = Menu.Slider("Enable Animated Clantag", "Clantag.Speed", 1, 4);

//Declare Global Variables
const LastCurTime = 0;
const SetLastClantag = false;

//Callback
Callback("CreateMove", function(){

    if(!Config.GetBool(ClantagEnable)) {
        if(SetLastClantag) {
            SetLastClantag = false;
            Cheat.SetClanTag("", "")
        }
        return;
    }

    const Speed = Config.GetInt(ClantagSpeed);
    const CurTime = Math.floor(Globals.Curtime() * Speed);

    if(CurTime != LastCurTime) {
        switch(CurTime % 20) {
            case 0: { Cheat.SetClanTag("", "DarkSide"); break; };
            case 1: { Cheat.SetClanTag("D", "DarkSide"); break; };
            case 2: { Cheat.SetClanTag("Da", "DarkSide"); break; };
            case 3: { Cheat.SetClanTag("Dar", "DarkSide"); break; };
            case 4: { Cheat.SetClanTag("Dark", "DarkSide"); break; };
            case 5: { Cheat.SetClanTag("DarkS", "DarkSide"); break; };
            case 6: { Cheat.SetClanTag("DarkSi", "DarkSide"); break; };
            case 7: { Cheat.SetClanTag("DarkSid", "DarkSide"); break; };
            case 8: { Cheat.SetClanTag("DarkSide", "DarkSide"); break; };
            case 9: { Cheat.SetClanTag("DarkSide", "DarkSide"); break; };
            case 10: { Cheat.SetClanTag("DarkSide", "DarkSide"); break; };
            case 11: { Cheat.SetClanTag("DarkSide", "DarkSide"); break; };
            case 12: { Cheat.SetClanTag("DarkSid", "DarkSide"); break; };
            case 13: { Cheat.SetClanTag("DarkSi", "DarkSide"); break; };
            case 14: { Cheat.SetClanTag("DarkS", "DarkSide"); break; };
            case 15: { Cheat.SetClanTag("Dark", "DarkSide"); break; };
            case 16: { Cheat.SetClanTag("Dar", "DarkSide"); break; };
            case 17: { Cheat.SetClanTag("Da", "DarkSide"); break; };
            case 18: { Cheat.SetClanTag("D", "DarkSide"); break; };
            case 19: { Cheat.SetClanTag("", "DarkSide"); break; };
            case 20: { Cheat.SetClanTag("", "DarkSide"); break; };
        }
    }

    LastCurTime = CurTime;

})
