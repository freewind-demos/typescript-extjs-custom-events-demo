Ext.onReady(() => {
    Ext.define('MyView', {
        extend: 'Ext.panel.Panel',
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello world',
        controller: new Ext.app.ViewController({
            onMyEvent: () => {
                alert('### controller.onMyEvent');
            }
        }),
        listeners: {
            myEvent: 'onMyEvent'
        },
        items: [
            new Ext.button.Button({
                text: 'button',
                listeners: {
                    click: 'onMyEvent'
                }
            })
        ]
    })
    new Ext.app.Application({
        name: 'hello',
        mainView: Ext.create('MyView'),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
