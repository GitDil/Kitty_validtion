var kname = document.getElementById('name');
var password = document.getElementById('paswd');
var kemail = document.getElementById('email');

var button = document.getElementById('btn');

var kimg1 = document.getElementById('k1');
var kimg2 =document.getElementById('k2');
var kimg3 = document.getElementById('k3');


kimg2.style.display = "none";
kimg3.style.display="none";

button.addEventListener("mouseover",()=>{

    const validat = kname.value =="" || password.value== "" || kemail.value=="";

    

    const valiEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(kemail.value);


    if(validat || !valiEmail ){

        //css changes
        button.classList.toggle("move");
        button.style.backgroundColor="#ff4742";
        button.style.color="white";
        button.style.border="none";
        button.style.transition="0.5s";

        //kitty
        kimg1.style.display="none";
        kimg2.style.display="none";
        kimg3.style.display="none";

        button.onclick = ()=>{alert('check again')}
    
    
    }else{

        //css chnages

        button.style.backgroundColor="#2c974b";
        button.style.color="white";
        button.style.border="none";
        button.style.left="75px";

        //kitty

        kimg2.style.display="none";
        kimg1.style.display="block";
        kimg3.style.display="none";

        button.onclick = ()=>(location.href = "https://www.youtube.com/watch?v=N6xVMmSzW0s");
    }


})

action = (element) =>{

    if(element == password){
        
        element.addEventListener("focus",()=>{

            kimg1.style.display="none";
            kimg2.style.display="none";
            kimg3.style.display="block";
        })

        element.addEventListener("focusout",() => {
            kimg3.style.display="none";
            kimg2.style.display="block";
            kimg1.style.display="none";
        })
    
    }else{

        element.addEventListener("focus", () => {

            
            
            kimg3.style.display="none";
            kimg2.style.display="block";
            kimg1.style.display="none";
        });
    }

        
}


action(password);
action(kname);
action(kemail);
