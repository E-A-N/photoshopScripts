function dBug() {
    var lays = app.activeDocument.layers;
    var debugName = "debug::x";
    var debugExists = false;
    var debuggerXX = null;

    for (var i = 0; i < lays.length; i++) {
        var name = lays[i].name;
        if (name == debugName){
            debuggerXX = lays[i].textItem;
            debugExists = true;
            break;
        }
    }

    if (!debugExists){
        var dbg = lays.add();
        dbg.name = debugName;
        dbg.kind = LayerKind.TEXT;
        var cont = dbg.textItem;
        cont.contents = "Info: ";
        cont.size = 30;
        cont.position = [100, 100];
        debuggerXX = cont;
    }
    

    return debuggerXX;
}

dBug();
