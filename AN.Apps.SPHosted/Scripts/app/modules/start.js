
var startModule = function (jQuery,userInfoWeb,userInfoProfile) {

    function ShowUserName() {
        userInfoWeb.getUserName();
        userInfoProfile.getUserName();

    };

    SP.SOD.loadMultiple(['sp.js', 'userprofile'], ShowUserName);

};

define(['jquery', 'ui_web', 'ui_profile'], startModule);