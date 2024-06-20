function toggleFeaturesDropDown() {
    var content = document.getElementById("features-dropdown");
    var arrup = document.getElementById("arrow-up");
    var arrdown = document.getElementById("arrow-down");

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      arrup.style.display = "inline-block"
      arrdown.style.display = "none";

    } else {
      content.style.display = "none";
      arrup.style.display = "none";
      arrdown.style.display = "inline-block";
    }
  }

  document.addEventListener('click', function(event) {
    var content = document.getElementById("features-dropdown");
    var arrup = document.getElementById("arrow-up");
    var arrdown = document.getElementById("arrow-down");

    if (!event.target.closest('.features-dropdown') && !event.target.closest('.features')) {
        if (content.style.display === "block") {
            content.style.display = "none";
            arrup.style.display = "none";
            arrdown.style.display = "inline-block";
        }
    }
});


//for company dropdown

function toggleCompanyDropdown() {
  var content = document.getElementById("company-dropdown");
  var arrup = document.getElementById("company-arrow-up");
  var arrdown = document.getElementById("company-arrow-down");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    arrup.style.display = "inline-block"
    arrdown.style.display = "none";

  } else {
    content.style.display = "none";
    arrup.style.display = "none";
    arrdown.style.display = "inline-block";
  }
}

document.addEventListener('click', function(event) {
  var content = document.getElementById("company-dropdown");
  var arrup = document.getElementById("company-arrow-up");
  var arrdown = document.getElementById("company-arrow-down");

  if (!event.target.closest('.company-dropdown') && !event.target.closest('.company')) {
      if (content.style.display === "block") {
          content.style.display = "none";
          arrup.style.display = "none";
          arrdown.style.display = "inline-block";
      }
  }
});



//for open and close menu for mobile view

function openMenu() {
  document.getElementById("mobile-navigation").style.right = "0";
}

function closeMenu() {
  document.getElementById("mobile-navigation").style.right = "-400px";
}




function toggleMobileDropdown() {
  var dropdown = document.getElementById("mobile-features-dropdown");
  var arrowUp = document.getElementById("mobile-features-up");
  var arrowDown = document.getElementById("mobile-features-arrow-down");

  if (dropdown.style.height === "0px" || dropdown.style.height === ""){
    dropdown.style.height = "260px";
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  }

  else{
    dropdown.style.height = "0px";
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
  }
}

function toggleMobileCompanyDropdown() {
  var dropdown = document.getElementById("mobile-company-dropdown");
  var arrowUp = document.getElementById("mobile-company-up");
  var arrowDown = document.getElementById("mobile-company-arrow-down");

  if (dropdown.style.height === "0px" || dropdown.style.height === ""){
    dropdown.style.height = "195px";
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  }

  else{
    dropdown.style.height = "0px";
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
  }
}


document.addEventListener('click', function(event) {
  var features = document.getElementById("mobile-features-dropdown");
  var company = document.getElementById("mobile-company-dropdown");

  if (!event.target.closest('.mobile-features-dropdown') && !event.target.closest('.mobile-features')) {
      if (features.style.height === "260px") {
          features.style.height = "0px";

      }
  }

  if (!event.target.closest('.mobile-company-dropdown') && !event.target.closest('.mobile-company')){
    if (company.style.height === "195px"){
      company.style.height = "0px";
    }
  }
});



// function openMobileDropdown() {
//   document.getElementById("mobile-features-dropdown").style.height = "0px";
// }

