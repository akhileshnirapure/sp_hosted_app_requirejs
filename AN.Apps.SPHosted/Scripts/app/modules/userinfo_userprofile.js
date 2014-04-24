
var userProfileModule = function (jQuery) {

    //  Define user class/module
    var userProfileInfoModule = function () {

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
                var _msg = "Display name from User Profile Properties : " + userProfileProperties.get_displayName();
                jQuery("#ui_profile").text(_msg)

            };

            function onFail(sender, args) {
                alert("Error: " + args.get_message());
            };



        }

        return {
            getUserName: _getUserName
        };

    };
    
    return userProfileInfoModule();
};

define(['jquery'], userProfileModule);