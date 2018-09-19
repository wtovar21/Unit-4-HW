// variables
var champions = [
	{
		name: 'Minato Kamikaze',
		hp: 250,
		attk: 80,
		img:'',
		exp: 1
	},
	{
		name: 'Itachi Uchiha',
		hp: 200,
		attk: 95,
		img: '',
		exp: 1
	},
	{
		name: 'Neji Hyuga',
		hp: 200,
		attk: 75,
		img: '',
		exp: 1
	},
	{
		name: 'Killer Bee',
		hp: 250,
		attk: 65,
		img: '',
		exp: 1
	}
];

var kosLeft = (champions.length - 1);



// functions
var displayChampions = function(){

};

var selectChampion = function(){

};

var displaySelectedChampion = function(){

};

var selectDefender = function(){
	console.log('select new defender');
};

var displayDefender = function(){

};

var championAttacks = function(champion,defender){
	var damage = champion.attk * champion.exp;
	defender.hp = defender.hp - damage;
	champion.exp++;

	defenderAttacks(defender,champion);
	displayBalance(champion,defender);
	
};

var displayBalance = function(champion,defender){
	console.log("championHP: " + champion.hp);
	console.log("defenderHP: " + defender.hp);
};

var defenderAttacks = function(defender,champion){
	if (defender.hp <= 0){
		displayKO();
		if(kosLeft > 1){
			kosLeft--;
			console.log('kos left: ' + kosLeft);
			selectDefender();
		} 
		else{
			console.log('victory');
			//	run victory function 
		}
	}
	else {
		champion.hp = champion.hp - defender.attk;
	}
	
};

var displayKO = function(){
	// input img
	console.log("KO");

};