﻿define(function () {
    //debugger; 
    var rconfig = {
        baseUrl: '../Scripts/app',
        deps:
            [
                'spruntime_js','sp_js'
            ],
        paths: {

            //  follow app directory structure convention

            //  SharePoint Runtime and Core
            //  Register any SharePoint Library if it is required to be processed first
            spruntime_js: window.location.origin + "/_layouts/15/sp.runtime",
            sp_js: window.location.origin + "/_layouts/15/sp",

            //  Require JS Plugins, 
            domReady: 'lib/domReady', //    For ensuring the dom is loaded
            text: 'lib/text',         //    For Downloading the html templates

            //  Frameworks
            jqueryan: 'lib/jquery-an',
            jquery: 'lib/jquery-1.9.1',
            ko: "lib/knockout-3.1.0",

            boot: "modules/start",
            ui_web: "modules/userinfo_web",
            ui_profile: "modules/userinfo_userprofile"
        },
        map: {
            // '*' means all modules will get 'jquery-ps'
            // for their 'jquery' dependency.
            '*': { 'jquery': 'jqueryan' },

            // 'jquery-ps' wants the real jQuery module
            // though. If this line was not here, there would
            // be an unresolvable cyclic dependency.
            'jqueryan': { 'jquery': 'jquery' }
        },
        urlArgs: "bust=" + (new Date()).getTime()

    };

    require.config(rconfig);

    require(['boot']);

});
