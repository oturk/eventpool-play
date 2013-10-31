function Sizes(){};
Sizes.SMALL = 1;
Sizes.MEDIUM = 2;
Sizes.BIG = 3;

function Position(top, left) {
	this.top = top;
	this.left = left;
}

function Size(sizes) {
	this.width = 64;
	this.height = 64;
	
	if(sizes === 2){
		this.width = 128;
		this.height = 128;
	}else if(sizes === 3){
		this.width = 256;
		this.height = 256;
	}
}

function Tile(date, size, position) {
	this.date = date;
	this.size = new Size(size);
	this.position = position;

	this.toString = function() {
		return "date = " + this.date.toDateString();
	}
	
	this.toHtmlString = function() {
		return "<div id='" + this.date.toDateString() +"' " +
			   "class='event_tile' " +
			   "style='width:" + this.size.width + "px;height:" + this.size.height +"px;top:" + this.position.top + "px;left:" + this.position.left + "px;'>"+
			   this.date.getDate() +
			   "</div>";
	}
	
}

Tile.prototype.paintComponent = function(container) {
	//console.log(this.date.toString());
	$(container).append(this.toHtmlString());
}