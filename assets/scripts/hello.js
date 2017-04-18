cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        myLabel:{
            default:null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
        cc.log ("hello.js");
    },
    onBtn : function () {
       cc.log ("on btn down"); 
      // var label = cc.find ("Canvas/root/New Label").getComponent(cc.Label);
       var xx = cc.find ("Canvas/root/New Layout/New Label");
       var label = xx.getComponent(cc.Label);
       label.string = "hello world.";
    },
    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         this.myLabel.node.x -= dt * 100;
         if (this.myLabel.node.x < -640) {
             this.myLabel.node.x = 640;
         }
     },
});
