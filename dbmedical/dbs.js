var mannames = ['Ivan','Alexandr','Andrew','Tom','Anton','Artem','Bob','Jonny']
var womannames = ['Ketrin', 'Anna', 'Tatiana','Viktoria','Natalia'];
var sernames = ['Kim','Golgman','Fomenko','Chan','Gonzalez','Gorlotenko','Boyko','Sonko','Deep','Casto','Naboka'];
var rareIllness = `
hepatitis, smallpox, dysentery, diphtheria, kashlyuk,
measles, scarlet fever`.split(',');
var d =new Date();
var illness = ['flue','orvi','ranny nose', 'angina','pneumonia',rareIllness[randomInteger(rareIllness.length)]];




	 

function randomInteger(x){
	return Math.floor(Math.random()*x)+1
}
function getArrDec(len){
      var rund = randomInteger(100);
       var arrPers = [];
       var i=0;
       var x = 100;
       while (i<illness.length){
       	     x=(x/2);//111111111111111111111111111
             arrPers.push(x);
             i++;
            

         }
         return arrPers;
     }
         function GetIllness(){
         	var comps = getArrDec(illness.length);
         	var rund = randomInteger(100);

         	var i = 0;
         	while(i<comps.length){
         		if(rund>comps[i]){
                   return illness[i];
         		}else{
         			i++;
         		}
         		
         	}
         	return 'temperature';
         }
         function getHistory(){
         	var arrIlls = [];
         	var pers = getArrDec(illness.length);
         	var len;
         	var healthyAtAll = fiftyFifty();
         	if(healthyAtAll){
         		len = 0;
         		return 'There were nothing to worry about. '
         	}
         	else{
         	 len = randomInteger(3);
             for(var i = 0;i< len;i++){
              arrIlls[i]=GetIllness();
               console.log (arrIlls[i]);
             }
             return arrIlls.join(",");
         }
     }
  function fiftyFifty(){
  	var f = randomInteger(2);
  	return (f==2) ? true : false
  }

function Generate(){
	//var name,sername,age,id,history,sex,cityReg;
	this.cityReg = 'Odessa';
	this.sex = randomInteger(2);
	if(this.sex==1){
		this.name = mannames[randomInteger(mannames.length)];

	}
	else{
         this.name = womannames[randomInteger(womannames.length)];
	}
	this.sername = sernames[randomInteger(sernames.length)];
	this.age = (d.getFullYear()-100) + randomInteger(d.getFullYear()-(d.getFullYear()-100));
	var idDrop = 1000+ Math.random(1000);
    this.id = '048'+ String(idDrop);
     var history=getHistory();
 
 console.log(history);
       
    
	}
Generate();