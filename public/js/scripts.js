console.log("test")

// $("#samples").click(
	// $("#samples").show()
	// $("header").hide()
// );

// $("header").click(
// 	$("#samples").hide()
// 	$("header").show()
// );
function load_samples(){
	console.log("loading samples")
    $('#samples').show();
    $('header').hide()
}

function load_home(){
	console.log("loading home")
    $('#samples').hide();
    $('header').show();
}

function load_tutoring(){
	console.log("loading tutoring")
    $('#samples').hide();
    $('header').hide()
}

function smooth_about(){
    $.smoothScroll({
        scrollTarget: $("#about-anchor"),
        easing: 'swing'
    });
}

function smooth_tutoring(){
    $.smoothScroll({
        scrollTarget: $("#tutoring-anchor"),
        easing: 'swing'
    });
}


function smooth_samples(){
    $.smoothScroll({
        scrollTarget: $("#samples"),
        easing: 'swing'
    });
}

function smooth_top(){
    $.smoothScroll({
        scrollTarget: $("#page-top"),
        easing: 'swing'
    });
}
