function opentab(tabName) {
  
  var tabContents = document.getElementsByClassName("tab-contents");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
 
  var tabLinks = document.getElementsByClassName("tab-links");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }
  
  document.getElementById(tabName).style.display = "block";

  event.currentTarget.classList.add("active-link");
}

const downloadBtn = document.querySelector(".download-cv-btn");


downloadBtn.addEventListener("click", function () {
  
  const link = document.createElement("a");
  
  link.href = "22BCE2118 resume.pdf";
  
  link.download = "22BCE2118 resume.pdf";
  
  document.body.appendChild(link);
  
  link.click();
  
  document.body.removeChild(link);
});
