require.config({
    "paths": {
        "jQuery": "libs/jquery.min",
        "Bootstrap": "libs/bootstrap.min",
        "Knockout": "libs/knockout-2.1.0",
        "Json": "libs/json2",
    },
    "shim": {
        'Bootstrap': {
            deps: ['jQuery'],
            exports: 'Bootstrap'
        },
    }
});

require([
    "app",
], function (App) {
    App.init();
});

