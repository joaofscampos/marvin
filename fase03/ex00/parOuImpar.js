function parOuImpar(numero) {
 var a = numero.toString()
 var b = a.substr(-1) =="1" || 
   a.substr(-1)=="3" || 
   a.substr(-1)=="5" ||
   a.substr(-1)=="7" ||
   a.substr(-1)=="9"
     if (b){
        return "Ímpar" 
     }
     else 
         return "Par"
     }
     