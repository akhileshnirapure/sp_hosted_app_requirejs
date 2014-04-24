
var userInfoWebModule = function (jQuery) {

    //  Define user class/module
    var userModule = function () {

        function _getUserName() {

            var context = SP.ClientContext.get_current();
            var user = context.get_web().get_currentUser();

            context.load(user);
            context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);

            function onGetUserNameSuccess() {
                var _msg = "Display name from Web : " + user.get_title();
                jQuery('#ui_web').text(_msg);
            };

            // This function is executed if the above call fails
            function onGetUserNameFail(sender, args) {
                alert('Failed to get user name. Error:' + args.get_message());
            };

        };

        return {
            getUserName : _getUserName
        };
    };

    return userModule();
    

};

define(['jquery'], userInfoWebModule);