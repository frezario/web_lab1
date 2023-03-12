function openTab(event, tabName, sectionId) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll('#' + sectionId + ' .tab');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = event.currentTarget.parentNode.querySelectorAll('button');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active");
}
