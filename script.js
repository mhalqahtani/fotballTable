document.addEventListener("DOMContentLoaded", function() {
   // i wll take the whole table
    const table = document.getElementById("Table");
    //then just take for the table the tbody 
    const tbody = table.querySelector("tbody");
    // now i wll create array to have all teams
    const teams = Array.from(tbody.querySelectorAll("tr"));
    

    document.getElementById("Qualify").addEventListener("change", function() {
      const checkbox = document.getElementById("Qualify");
      
      if (checkbox.checked) {
        for (let i = 5; i < teams.length; i++) {
          teams[i].style.display = "none";
        }
      } else {
        teams.forEach(team => {
          team.style.display = "";
        });
      }
    });
  });