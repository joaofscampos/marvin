function pares(num1,num2){
 var a= num1.toString()
 var b= a.substr(-1)=="2" || 
   a.substr(-1)=="4" || 
   a.substr(-1)=="6" ||
   a.substr(-1)=="8" ||
   a.substr(-1)=="0"
 var c= num2.toString()
 var d= c.substr(-1)=="2" || 
   c.substr(-1)=="4" || 
   c.substr(-1)=="6" ||
   c.substr(-1)=="8" ||
   c.substr(-1)=="0"
 if (b && d){
     return "Os números são pares"
 }
 else {
      return "Os números não são pares"
 }
 }