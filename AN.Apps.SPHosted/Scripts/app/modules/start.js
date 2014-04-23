//var simpleModule = function (jqan) {
//    jqan(document).ready(function () {
//        alert("Hello jquery");
//    });
//};

//define(['jquery'], simpleModule);



var simpleModule = function (jQuery) {

    //  Define user class/module
    var userModule = function () {

        function _getUserName() {

            var context = SP.ClientContext.get_current();
            var user = context.get_web().get_currentUser();

            context.load(user);
            context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);

            function onGetUserNameSuccess() {
                jQuery('#message').text('Hello ' + user.get_title());
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

    var userProfileModule = function () {

        function _getUserName() {

            var userProfileProperties;

            //Get Current Context	
            var clientContext = new SP.ClientContext.get_current();

            //Get Instance of People Manager Class
            var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);

            //Get properties of the current user
            userProfileProperties = peopleManager.getMyProperties()

            clientContext.load(userProfileProperties);

            //Execute the Query.
            clientContext.executeQueryAsync(onSuccess, onFail);

            function onSuccess() {
                alert(userProfileProperties.get_displayName());

            };

            function onFail(sender, args) {
                alert("Error: " + args.get_message());
            };



        }

        return {
            getUserName: _getUserName
        };

    };
    

    function ShowUserName() {
        userModule().getUserName();
        userProfileModule().getUserName();

    };

    SP.SOD.loadMultiple(['sp.js', 'userprofile'], ShowUserName);

};

define(['jquery'],simpleModule);