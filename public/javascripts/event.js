function Event(title, description, icon){
	this.title = title;
	this.description = description;
	this.icon = icon;
	
	this.toString = function () {
		return "title = " + this.title + "description = " + this.description; 
	}
}
