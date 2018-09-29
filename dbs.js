var mannames = ['Ivan','Alexandr','Andrew','Tom','Anton','Artem','Bob','Jonny']
var womannames = ['Ketrin', 'Anna', 'Tatiana','Viktoria','Natalia'];
var sernames = ['Kim','Golgman','Fomenko','Chan','Gonzalez','Gorlotenko','Boyko','Sonko','Deep','Casto','Naboka'];

var d = Date();
var ids = []
functon Illness( illname,switcher){
	this.name = illname;
    this.swither = swither;

}
function Generate(){
	var name,sername,age,id,history,sex,cityReg;
	cityReg = 'Odessa';
	sex = randomInteger(2);
	if(sex==1){
		name = mannames[randomInteger(mannames.length)];

	}
	else{
         name = womannames[randomInteger(womannames.length)];
	}
	sername = sernames[randomInteger(sernames.length)];
	age = (d.getYear()-100) + randomInteger(d.getYear()-(d.getYear()-100));
	idDrop = 1000+ Math.random(1000);
    id = '048'+ String(idDrop);
    history={
              
    }
	}
	 

function randomInteger(x){
	return Math.floor(Math.random()*x)+1
}
