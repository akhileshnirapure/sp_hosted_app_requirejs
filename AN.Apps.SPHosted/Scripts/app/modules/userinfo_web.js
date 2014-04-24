
var userInfoWebModule = function (jQuery) {

    //  Define user class/module
    var userModule = function () {

        function _getUserName() {

            var context = SP.ClientContext.get_current();
            var user = context.get_web().get_currentUser();

            context.load(user);
            context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);

            function onGetUserNameSuccess() {
                jQuery('#ui_web').text('Hello ' + user.get_title());
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