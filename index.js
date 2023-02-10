function five(event){
    event.preventDefault();
    let b,n,tip,total;
    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
   n=parseInt(document.getElementById("txt2").value);
    if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    n=parseInt(document.getElementById("txt2").value);   
    
    tip=(b*0.05)/n;
    total=(b/n)+tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;

}
function ten(event){
    event.preventDefault();
    let b,n,tip,total;

    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
    b=parseInt(document.getElementById("txt1").value);
    n=parseInt(document.getElementById("txt2").value);
     if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    n=parseInt(document.getElementById("txt2").value);
    tip=(b*0.1)/n;
    total=(b/n)+tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;

}
function fifteen(event){
    event.preventDefault();
    let b,n,tip,total;
    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
    n=parseInt(document.getElementById("txt2").value);
    if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    tip=(b*0.15)/n;
    total=(b/n)+tip;
    txt3.value=tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;
    

}
function twentyfive(event){
    event.preventDefault();
    let b,n,tip,total;
    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
    n=parseInt(document.getElementById("txt2").value);
    if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    tip=(b*0.25)/n;
    total=(b/n)+tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;

}
function fifty(event){
    event.preventDefault();
    let b,n,tip,total;
    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
    n=parseInt(document.getElementById("txt2").value);
    if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    tip=(b*0.50)/n;
    total=(b/n)+tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;

}
function custom(event){
    event.preventDefault();
    let b,n,tip,c,total;
    b=parseInt(document.getElementById("txt1").value);
    if(b=="null"||isNaN(b)){
        alert("please enter the bill value!");
    }
    n=parseInt(document.getElementById("txt2").value);
    if(n=="null"||isNaN(n)){
        alert("please enter the number of persons!");
    }
    c=parseInt(document.getElementById("cb").value);
    if(c=="null"||isNaN(c)){
        alert("please enter the tip percentage!");
    }
    tip=(b*(c/100))/n;
    total=(b/n)+tip;
    document.getElementById("txt3").value=tip;
    document.getElementById("txt4").value=total;

}