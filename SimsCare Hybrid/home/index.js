'use strict';


app.home = kendo.observable({
    InputCampusPin: "",
    InputCampusPinRequired:"Campus Pin required",
   
    onShow: function() {},
    OnLoginClick: function()
    {
      
                alert(app.home.InputCampusPin)
            
             
    }
});
