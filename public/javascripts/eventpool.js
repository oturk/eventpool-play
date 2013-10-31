var EventPool = (function() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var today = date.getDate();
	var daysOfMonth = 32 - new Date(year, month, 32).getDate();
	
	var tiles = [];
	
	//TODO load tiles data from server
	//function fetchTiles(){};
	
	function initTiles() {
		//console.log(daysOfMonth);
		var topPosition = 0;
		var leftPosition = 0;
		var nextDate = new Date(year,month,1);
		for(var days = 1; days < daysOfMonth + 1; days++){
			var tileSize = Math.floor((Math.random()*3)+1)
			tile = new Tile(nextDate, tileSize, new Position(topPosition, leftPosition));
			tile.paintComponent("#eventpool_wrap");
			nextDate.setDate(nextDate.getDate() + 1);
			topPosition += tile.size.height;
			
//			$("#eventpool_wrap").append("<div id='tile_" + days + "' class='event_tile'>" + days + "</div>");
		}
	}
	
	return {
		init : function() {
			$("#event_pool").append("<div id='eventpool_wrap'></div>");
			
			initTiles();
//
//			for ( var i = 1; i < 9; i++) {
//				$("#eventpool_wrap").append("<div class='event' id=event_" + i + "><img src='/assets/images/00" + i + ".jpg'></img></div>");
//			}
		}
	};
}());