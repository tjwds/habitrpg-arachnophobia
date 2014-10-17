chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

/*function bossbutton(){
	if ($("#undefined-sticky-wrapper").is(":visible") == true){
		$("undefined-sticky-wrapper").hide();
		$(".toolbar-wallet").hide();
		$(".rewards").hide();
	} else {
		$("undefined-sticky-wrapper").show();
		$(".toolbar-wallet").show();
		$(".rewards").show();
	}
}*/


function arachnophobia(){
	var list = ["Base","White","Desert","Red","Shade","Skeleton","Zombie","CottonCandyPink","CottonCandyBlue","Golden"];

	for (var i=0, item; item = list[i]; i++) {
		//item
  	$(".Pet-Spider-"+item).hide();
		$(".Mount_Head_Spider-"+item).hide();
		$(".Mount_Body_Spider-"+item).hide();
		$(".Pet-Rat-"+item).hide();
		$(".Mount_Head_Rat-"+item).hide();
		$(".Mount_Body_Rat-"+item).hide();
	}

	$(".quest_spider").hide();
	$(".quest_rat").hide();
}

setInterval(function(){arachnophobia();
}, 100);

	}
}, 1000);
});
