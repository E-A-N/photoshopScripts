function makeDebug(){
    var lays = app.activeDocument.layers;
    var debugName = "debug::x";
    var debugExists = false;
    for (var i = 0; i < layers.length; i++){
        if (layers[i].name == debugName){
            debugExists = true;
            break;
        }
    }

    if (debugExists){
        alert("debugger already exists!");
    }
    else {
        var bug = layers.add();
        bug.kind = LayerKind.TEXT;
        var textItem = bug.textItem;
        textItem.kind = TextType.PARAGRAPHTEXT;
        textItem.size = 30;
        textItem.position = [100, 100];
        textItem.contents = "Hi! I'm the Debugger!;
        textItem.width = new UnitValue("300 pixels");
        textItem.height = new UnitValue("30 pixels");
    }
}
