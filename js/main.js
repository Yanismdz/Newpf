$(".mobile-menu").click(function(){
    var $S = 1;
    var $navlink = ".navlink-m-" + $S;
    function addshow(){
	alert("ntm");

	alert($navlink);
    }
    for ($S = 1; $S <= 4; $S++){

	$navlink = "navlink-m-" + $S;
	var w = setInterval($($navlink).addClass("show"), 1000);
	alert($navlink);
    }

});

$(window).scroll(function(){
    var qui = $(".qui").position();// distance a parcourir pour que la bar change de coule\
    var projet = $(".projet").position();
    var quiimg = $(".img-d").position();
    var scrolledFromtop = $(window).scrollTop();
    var imgsrc = $(".background-img").attr("src");
    if(scrolledFromtop > (quiimg.top - 400))
    {
	$(".description img").addClass("fadein");
	$(".description p").addClass("fadein");
    }
    if(scrolledFromtop > projet.top -150 )
    {
	$(".background-img").attr("src", "img/bg3.jpg");
	$(".background-img").removeClass("filter");	
    }
    else{
	$(".background-img").attr("src", "img/1846.jpg");
	$(".background-img").addClass("filter");
    }
    if(scrolledFromtop > (qui.top -45) && scrolledFromtop < (projet.top - 45))
    {
	$(".logo").addClass("whitened");
	$(".navlink").addClass("whitened");
    }
    else{	
	$(".navlink").removeClass("whitened");
	$(".logo").removeClass("whitened");
    }

});
