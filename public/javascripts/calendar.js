var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();

function logto(){
	for (var i = 0; i<5; i++){
		console.log("haha try " + i);
	}
}

function initControlBar(){
	var month = new Array();
	month[0] = "Január";
	month[1] = "Február";
	month[2] = "Március";
	month[3] = "Április";
	month[4] = "Május";
	month[5] = "Június";
	month[6] = "Július";
	month[7] = "Augusztus";
	month[8] = "Szeptember";
	month[9] = "Október";
	month[10] = "November";
	month[11] = "December";
	
	$("#control_bar").append($("<div><input id='prev_btn' type='button' value='prev'/></div>"));
	$("#control_bar").append($("<div class='calendar_header'>" + currentYear + " " + month[new Date(currentYear, currentMonth + 1,0).getMonth()] + "</div>"));
	$("#control_bar").append($("<div><input id='next_btn' type='button' value='next'/></div>"));
	
	var daysNames = new Array();
	daysNames[0] = "Hétfő";
	daysNames[1] = "Kedd";
	daysNames[2] = "Szerda";
	daysNames[3] = "Csütörtök";
	daysNames[4] = "Péntek";
	daysNames[5] = "Szombat";
	daysNames[6] = "Vasárnap";
	
	for(var i =0; i<7; i++){
		$("#dayHeaders").append($("<div class='days_heads'>" + daysNames[i] + "</div>"));
	}
	
	$("#prev_btn").click(function(){
		setCurrentYearAndMonth(false);
		console.log("cal = " + currentYear + "." + currentMonth);
		initCalendar();
	});
	
	$("#next_btn").click(function(){
		setCurrentYearAndMonth(true);
		console.log("cal = " + currentYear + "." + currentMonth);
		initCalendar();
	});
	
}

function setCurrentYearAndMonth(next){
	if(next) currentMonth++;
	else currentMonth--;
	
	if(currentMonth > 11) {
		currentYear++;
		currentMonth = 0;
	}
	if(currentMonth < 0) {
		currentYear--;
		currentMonth = 11;
	}
}

function initCalendar(){
	$("#pictures_of_events").empty();
	$("#dayHeaders").empty();
	$("#calendar_days").empty();
	$("#control_bar").empty();
	
	initControlBar();
	
	var year = currentYear;
	var month = currentMonth;
	var today = date.getDate();
	today--;
	var daysOfMonth = 32 - new Date(year, month, 32).getDate();
	var daysOfPrevMonth = 32 - new Date(year, month - 1, 32).getDate();
	var firstDayOfTheMonth = new Date(year, month, 0).getDay();
	
	for(var i = 0; i< firstDayOfTheMonth; i++){
		$("#calendar_days").append($("<div class='inactive_day' id='prev_day_" + i + "' >" + (daysOfPrevMonth - i) +"</div>"));
	}
	
	for(var i = 0; i < daysOfMonth; i++){
		var dateString = currentYear +"_"+ currentMonth +"_" + (i+1);
		if(i == today && currentMonth == new Date().getMonth())
			$("#calendar_days").append($("<div class='calendar_day today' id='" + dateString + "'>" + (i+1) + "</div>"));
		else
			$("#calendar_days").append($("<div class='calendar_day' id='" + dateString + "' >" + (i + 1) + "</div>"));
	}
	
	var msg = new Date(year, month, daysOfMonth).getDay();
	var i = 1;
	for(var j = msg; j<7; j++){
		$("#calendar_days").append($("<div class='inactive_day' id='next_day_" + i + "' >" + i +"</div>"));
		i++;
	}
	
	var valami = $("#dialog"); 
	$(".calendar_day").click(function(event){
		// alert(event.target.id);
		//valami.dialog();
		overtopSelectedDay(event);
	});
}
var selectedDay;
function overtopSelectedDay(event){
	if(selectedDay != event.target.id){
	selectedDay = event.target.id; 
	//alert("#" + event.target.id);
	$("#" + selectedDay).addClass("overtopSelectedDay");
	} else {
		$("#" + selectedDay).removeClass("overtopSelectedDay");
		selectedDay = "";
	} 
}

function nextBtnClicked(){
	console.log("next_btn clicked");
}
