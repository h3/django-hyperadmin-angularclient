/* django-hyperadmin helpers
 *
 * */

var getItemDataDict = function(item) {
    var out = {};
    for (x=0;x<item.data.length;x++) {
        out[item.data[x].name] = item.data[x];
    }
    return out;
};

angular.module('hyperadmin', []).
    filter('getAbsoluteUrl', function () {
        return function (item) {
            var data = getItemDataDict(item);
            return '#/' + [
                    data.resource_class.value, 
                    data.app_name.value, 
                    data.resource_name.value].join('/') + '/';
        };
    });

