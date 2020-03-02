check = gender => {
	if (gender == "male") {
	  document.getElementById("male").checked = true;
	  // document.getElementById("female").checked = false;
	}
	if (gender == "female") {
	  // document.getElementById("male").checked = false;
	  document.getElementById("female").checked = true;
	}
  };
  
  changeLabelColor = (id, item) => {
	var el = document.getElementById(id);
	el.style.color = "#16a780";
	changeFont(item);
  };
  
  removeLabelColor = (id, item) => {
	var el = document.getElementById(id);
	el.style.color = "";
	changeFont(item);
  };
  
  changeFont = item => {
	if (item.value.length > 0) {
	  item.style.color = "#232323";
	} else {
	  item.style.color = "";
	}
  };
check = gender => {
  if (gender == "male") {
    document.getElementById("male").checked = true;
    // document.getElementById("female").checked = false;
  }
  if (gender == "female") {
    // document.getElementById("male").checked = false;
    document.getElementById("female").checked = true;
  }
};

changeLabelColor = (id, item) => {
  var el = document.getElementById(id);
  el.style.color = "#16a780";
  changeFont(item);
};

removeLabelColor = (id, item) => {
  var el = document.getElementById(id);
  el.style.color = "";
  changeFont(item);
};

changeFont = item => {
  if (item.value.length > 0) {
    item.style.color = "#232323";
  } else {
    item.style.color = "";
  }
};
check = gender => {
  if (gender == "male") {
    document.getElementById("male").checked = true;
    // document.getElementById("female").checked = false;
  }
  if (gender == "female") {
    // document.getElementById("male").checked = false;
    document.getElementById("female").checked = true;
  }
};

changeLabelColor = (id, item) => {
  var el = document.getElementById(id);
  el.style.color = "#16a780";
  changeFont(item);
};

removeLabelColor = (id, item) => {
  var el = document.getElementById(id);
  el.style.color = "";
  changeFont(item);
};

changeFont = item => {
  if (item.value.length > 0) {
    item.style.color = "#232323";
  } else {
    item.style.color = "";
  }
};
  