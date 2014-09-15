(function($) {
//    var siteUrl = 'http://shteglasuvam.obshtestvo.bg';

    $.fn.combineCurrentUrl = function() {
        var container = $(this);
        var buildCurrentUrl = $(container).attr('href');

        function currentUrl() {
            return $(location).attr('href');
        }

        container.attr('href', buildCurrentUrl.replace('{{currentUrl}}', currentUrl()));
    }
})(jQuery);