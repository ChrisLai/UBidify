function activateListType(event){
	lis[x] = document.getElementsByName("navli");
	for each (x in lis){
		if(lis[x].className == "active list-type"){
			alert(lis[x]);
			lis[x].className = "list-type";
		}
	}
	event.className = "active list-type";
}