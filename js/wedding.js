document.addEventListener("DOMContentLoaded" , ()=> {

    const slide_a = document.querySelectorAll( '#slide a' );//nodeList

    let i = 2;
    const slide = () => {

       if(i > 0) {
            slide_a[i].style.opacity = 0; 
            slide_a[i].style.transition = "opacity 0.5s";
            i--;
        }
        else {
            i = 2;
            slide_a[1].style.opacity = 1;
            slide_a[1].style.transition = "opacity 0.5s";
            slide_a[2].style.opacity = 1;
            slide_a[2].style.transition = "opacity 0.5s";
        }
    }    
    
    setInterval(  slide , 2800); 
   

    const mainMenu = [...document.getElementsByClassName('mainMenu') ];
    const subMenu =  [...document.getElementsByClassName('subMenu')];

    mainMenu.forEach( i => {
        i.addEventListener("focus" , () => {
            subMenu.forEach( j =>   j.style.height = 0  );
            i.nextElementSibling.style.height = '130px';               
        });
    });
    const subMenu_last = document.getElementById('last');
    subMenu_last.addEventListener("blur" , ()=> {
        subMenu.forEach( j =>   j.style.height = 0  );
    });


    
    const notili = document.querySelectorAll("#notice li a");
    const popup = document.getElementById("popup");
    const btn = document.querySelector("#popup button");

    notili.forEach( i => {
        i.addEventListener("click" , ()=> {
            popup.style.display = "block";
        });
    });


    btn.addEventListener("click", () =>{
            popup.style.display = "none";
        });
    

    

   

}); // end...................