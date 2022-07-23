//document.getElementById("seccion4").style.background = "lightyellow";
//alert("Ya he cambiado el color de fondo de la seccion4");
// onmouseover="enfoque(this, true);" onmouseleave="enfoque(this, false)";

function enfoque(obj, activar) {
    console.log(obj);
    obj.style.background = activar ? 'lightyellow' : 'white';
  }

  function texto(i,activar) {
    document.getElementById(`text${i}`).style.fontStyle= activar ? 'italic' : 'normal';
    document.getElementById(`movie${i}`).style.textTransform = activar ? 'uppercase' : 'none';
  }

  var list_cards = document.getElementsByClassName("card");
  for(i=0;i<list_cards.length;i++){
    list_cards[i].addEventListener("mouseenter", function() {enfoque(this, true)});  
    list_cards[i].addEventListener("mouseleave", function() {enfoque(this, false)});
  }


  var list_img = document.getElementsByTagName('img');
  for(let i=0;i<list_img.length;i++){
    list_img[i].addEventListener("mouseenter", function() {texto(i,true)});  
    list_img[i].addEventListener("mouseleave", function() {texto(i,false)});
  }
  
  //console.log(document.getElementById("seccion4"));