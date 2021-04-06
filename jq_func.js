
$(document).ready(function(){
    $("#hideBtn").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("#showBtn").click(function(){
        $("p").show();
    });
});


$(document).ready(function(){
    $("#first").click(function(){
        $("#second").slideToggle("1000");
    })
})

$(document).ready(function(){
    $("#square").click(function(){
    $("#square").animate({    
    left: '250px',
    height: '+=150px',
    width: '+=150px'}, 1000);
    });
});

$(document).ready(function(){
    $(function(){
        $("#drag").draggable();
    });
});

$(document).ready(function(){
    $(function(){
        $("#accordion").accordion();
    });
});