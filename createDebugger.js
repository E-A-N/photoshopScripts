var dBug = function() {
    var lays = app.activeDocument.layers;
    var debugName = "debug::x";
    var debugExists = false;
    var debuggerXX = null;

    for (var i = 0; i < lays.length; i++) {
        var name = lays[i].name;
        if (name == debugName){
            return;
        }
    }

    var dbg = lays.add();
    dbg.kind = LayerKind.TEXT;
    var cont = dbg.textItem;
    cont.contents = "hi, im the debugger";
    cont.size = 30;
    cont.position = [100, 100];
}

dBug();
