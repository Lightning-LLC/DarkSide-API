const LocalPlayer = Entity.GetLocalPlayer();

function Resolve(ent)
{
    const Desync = 60;
    const Bruteforce = Cheat.GetMissedShots(ent) % 5 / 4;
    if(Config.GetBindState("Binds.Safepoint")) {
        Desync /= 2;
        Resolver.ForceDelta(ent, Desync);
        return;
    }
    else if(Config.GetBindState( "Binds.BodyAim")) {
        Desync /= 2;

        Resolver.ForceDelta(ent, Desync * Bruteforce);
        return;
    }
    Resolver.ForceDelta(ent, Desync * Bruteforce);
}

Callback("CreateMove", function() {
    if(!Entity.IsAlive(LocalPlayer))
        return;

    const MaxClients = Globals.MaxClients();
    for(ent = 0; ent < MaxClients; ent++) {
        if(!Entity.IsAlive(ent) || !Entity.IsOpponentRelativeTo(LocalPlayer, ent))
            continue;

        Resolve(ent);
    }
});
