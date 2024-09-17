const para = document.getElementById("para")
    const button=document.querySelector("button")
    button.addEventListener("mouseover", (e)=>para.style="color:green;")
    button.addEventListener("click", (e)=>para.style="color:red;")
    button.addEventListener("dblclick", (e)=>para.style="color:black;")
    button.addEventListener("mouseout", (e)=>para.style="color:blue;")
    document.getElementById("para").addEventListener("click", function() {
    alert("Button was clicked!");
  });

