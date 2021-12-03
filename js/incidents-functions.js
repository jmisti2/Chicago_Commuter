//Functions for incidents.html

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.querySelector('.content');
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/*
$(".dropdown-content a").click(function(){
  $(this).parents(".filterCrimeText").placeholder($(this).text());
});
*/

var lists = document.querySelectorAll('[id^="incidentsList"]');
/*
var page;
var sorting;
var priority='NP';
*/

function sortTimeNP() {
	for (i = 0; i < lists.length; i++) {
		lists[i].style.display = "none";
	}
	//page = 'incidentsList-'+ sorting + priority;
	var show = document.querySelector('#incidentsList-timeNP');
	show.style.display = "block";
}

function sortDistanceNP() {
	for (i = 0; i < lists.length; i++) {
		lists[i].style.display = "none";
	}
	//page = 'incidentsList-'+ sorting + priority;
	var show = document.querySelector('#incidentsList-distanceNP');
	show.style.display = "block";
}
/*
function setPriority() {
	priority=this.getAttribute('data-value');
}

function setSort() {
	sorting=this.getAttribute('data-value');
}

var sorting = document.getElementsById([id$="sort-btn"]);
*/
