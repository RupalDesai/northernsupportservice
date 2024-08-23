 // Get the modals
 var modal1 = document.getElementById("myModal1");
 var modal2 = document.getElementById("myModal2");

 // Get the buttons that open the modals
 var btn1 = document.getElementById("openModal1");
 var btn2 = document.getElementById("openModal2");

 // Get the <span> elements that close the modals
 var span1 = document.getElementById("closeModal1");
 var span2 = document.getElementById("closeModal2");

 // When the user clicks the button, open the respective modal 
 btn1.onclick = function() {
   modal1.style.display = "block";
 }
 btn2.onclick = function() {
   modal2.style.display = "block";
 }

 // When the user clicks on <span> (x), close the respective modal
 span1.onclick = function() {
   modal1.style.display = "none";
 }
 span2.onclick = function() {
   modal2.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal1) {
     modal1.style.display = "none";
   }
   if (event.target == modal2) {
     modal2.style.display = "none";
   }
 }