//variables
var outClasse = document.getElementById("outputClasse");
var outStats = document.getElementById("outputStats");
var outDesc = document.getElementById("outputDesc");
var i=0;
var ajaxhttp = new XMLHttpRequest();

//ca c'est pour vérifier, on pourra virer
console.log(ajaxhttp);

//lien vers le JSON en AJAX, pour éliminer 99.9% des bacteries
var url="js/classes.json";
ajaxhttp.open("GET",url,true);

ajaxhttp.onreadystatechange=function(){
  if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){

    //vérifs + JSON dans variable
    console.log(ajaxhttp);
    var content = JSON.parse(ajaxhttp.responseText);
    console.log(content);
    //L'affichage de base de la page puisque i=0
    outClasse.innerHTML = content.perso[i].classe.toUpperCase();
    $("#outputPic").attr("src", content.perso[i].src);
    $("#outputPic").attr("alt", content.perso[i].alt);
    outDesc.innerHTML = content.perso[i].desc;
    outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;


    //GESTION CLAVIER
    window.onkeydown = function(event) {
      // On récupère le code de la touche
      var e = event || window.event;
      var key = e.which || e.keyCode;

      switch(key) {

        case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
        if(i==0){ //Condition pour boucler, retourner vers la derniere classe quand on est sur la premiere
          i=3;
        }
        else{ //sinon décendre d'une classe
        i--;
      }
      //affichage des infos
      outClasse.innerHTML = content.perso[i].classe.toUpperCase();
      $("#outputPic").attr("src", content.perso[i].src);
      $("#outputPic").attr("alt", content.perso[i].alt);
      outDesc.innerHTML = content.perso[i].desc;
      outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
      break;
      case 40 : case 115 : case 83 : // Flèche bas, s, S
      if(i==3){ //Condition pour boucler, retourner vers la premiere classe quand on est sur la derniere
        i=0;
      }
      else{ //sinon monter d'une classe
      i++;
    }

    //affichage des infos
    outClasse.innerHTML = content.perso[i].classe.toUpperCase();
    $("#outputPic").attr("src", content.perso[i].src);
    $("#outputPic").attr("alt", content.perso[i].alt);
    outDesc.innerHTML = content.perso[i].desc;
    outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
    break;


    case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
    if(i==0){ //Condition pour boucler, retourner vers la derniere classe quand on est sur la premiere
      i=3;
    }
    else{ //sinon décendre d'une classe
    i--;
  }
  //affichage des infos
  outClasse.innerHTML = content.perso[i].classe.toUpperCase();
  $("#outputPic").attr("src", content.perso[i].src);
  $("#outputPic").attr("alt", content.perso[i].alt);
  outDesc.innerHTML = content.perso[i].desc;
  outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
  break;


  case 39 : case 100 : case 68 : // Flèche droite, d, D
  if(i==3){ //Condition pour boucler, retourner vers la premiere classe quand on est sur la derniere
    i=0;
  }
  else{ //sinon monter d'une classe
  i++;
}

//affichage des infos
outClasse.innerHTML = content.perso[i].classe.toUpperCase();
$("#outputPic").attr("src", content.perso[i].src);
$("#outputPic").attr("alt", content.perso[i].alt);
outDesc.innerHTML = content.perso[i].desc;
outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
break;


default :
//alert(key);
// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
return true;
}

return false;
}

//GESTION BOUTONS
//LE BOUTON PRÉCÉDENT
$("#classePrec").click(function(){
  if(i==0){ //Condition pour boucler, retourner vers la derniere classe quand on est sur la premiere
    i=3;
  }
  else{ //sinon décendre d'une classe
  i--;
}
//affichage des infos
outClasse.innerHTML = content.perso[i].classe.toUpperCase();
$("#outputPic").attr("src", content.perso[i].src);
$("#outputPic").attr("alt", content.perso[i].alt);
outDesc.innerHTML = content.perso[i].desc;
outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
});

//LE BOUTON SUIVANT
$("#classeSuiv").click(function(){

  if(i==3){ //Condition pour boucler, retourner vers la premiere classe quand on est sur la derniere
    i=0;
  }
  else{ //sinon monter d'une classe
  i++;
}

//affichage des infos
outClasse.innerHTML = content.perso[i].classe.toUpperCase();
$("#outputPic").attr("src", content.perso[i].src);
$("#outputPic").attr("alt", content.perso[i].alt);
outDesc.innerHTML = content.perso[i].desc;
outStats.innerHTML = "PV : "+content.perso[i].pvMax+"<br>PM : "+content.perso[i].pmMax;
});

$("#letsGo").click(function(){
  localStorage.setItem("nom", document.getElementById("nomPerso").value);
  localStorage.setItem("classe", content.perso[i].classe);
  localStorage.setItem("pvMax", content.perso[i].pvMax);
  localStorage.setItem("PV", content.perso[i].pvMax);
  localStorage.setItem("pmMax", content.perso[i].pmMax);
  localStorage.setItem("PM", content.perso[i].pmMax);
  localStorage.setItem("force", content.perso[i].force);
  localStorage.setItem("dext", content.perso[i].dext);
  localStorage.setItem("intel", content.perso[i].intel);
});

}

}


ajaxhttp.send(null);
