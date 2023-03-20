let Headng = document.querySelector(".heading"); 
  let dropdown = document.querySelector("ul.dropdown"); 
let arrow = document.querySelector(".primary-navigation a.heading .arrow"); 
let open = false; 
if(Headng)
{
  const logger = () => 
  {
    open = !open;
    if(!open)
    {
     dropdown.classList.remove("showDropdown");
     arrow.classList.remove("arrowOpen");
    }
    else
    {
     dropdown.classList.add("showDropdown");
     arrow.classList.add("arrowOpen");
    }
    
  }
    Headng.addEventListener("click", logger);
  
  
  let btns = document.querySelectorAll(
    ".primary-navigation ul li ul li a"
  );
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function (event) {
     dropdown.classList.remove("showDropdown");
       arrow.classList.remove("arrowOpen");
}, false);
}
}