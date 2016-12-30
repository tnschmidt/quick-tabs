(function ($) {
    var $tabs;

   $.fn.quickTabs = function( options ) {
        $tabs = $(".quick-tabs-nav");
        init();
        checkHash();

        function init(){
          inactivateTabs();

          $tabs.children().each(function(index){
            var thisTab = this;
            var thisTabIndex = index;

            //default set first tab as active (add setting to specify this later)
            if (thisTabIndex === 0){
              activateTab(thisTab, thisTabIndex);
            }

            $(thisTab).on("click", function(){
              activateTab(thisTab, thisTabIndex);
            })
          });

        }

        function activateTab(tab, tabIndex){
          inactivateTabs();

          $('#' + tab.id).addClass('quick-tab-active');

          $(".quick-tabs-content").children().each(function(index){
            if (index === tabIndex){
              $(this).show();
            }
          });
        }

        function inactivateTabs(){
          $tabs.children().each(function(){
            $(this).removeClass('quick-tab-active');
          });

          $(".quick-tabs-content").children().each(function(){
            $(this).hide();
          });
        }

        function checkHash(){
          if (window.location.hash !== '') {
            var thisUrlHash = window.location.hash;
            $tabs.find(thisUrlHash).click();
          }
        }
   };

   $(".quick-tabs").quickTabs();
}( jQuery ));
