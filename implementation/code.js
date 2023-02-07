var songrun=false;
var count=1;
var mod=1;
var path=["songs\\ban ja rani.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\barish.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\main tera.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\phir bhi.mp3"
,"songs\\malhari.mp3"
,"songs\\dolida.mp3"
,"songs\\Dil Na Jaaneya.mp3"
,"songs\\Qaafirana.mp3"
,"songs\\London-Thumakda.mp3"
,"songs\\Cheap-Thrills.mp3"
,"songs\\Arey Re Arey Ye Kya Hua.mp3"
,"songs\\Something Just Like This.mp3"
,"songs\\A Thousand Years.mp3"
,"songs\\Love Story.mp3"
,"songs\\Perfect.mp3"
,"songs\\Shape of You.mp3"
,"songs\\Judaai.mp3"
,"songs\\Mann Bharryaa.mp3"
,"songs\\Kaise Mujhe.mp3"
,"songs\\Kabira.mp3"
,"songs\\Give Me Some Sunshine.mp3"
,"songs\\Tu Jaane Na.mp3"
,"songs\\Khalibali.mp3"
,"songs\\Shaitan ka Saala.mp3"
,"songs\\Tattad Tattad.mp3"
,"songs\\Lets Nacho.mp3"
,"songs\\Kalle Kalle.mp3"
,"songs\\Closer.mp3"
,"songs\\A B C D E F G H I.mp3"
,"songs\\Excuses.mp3"
,"songs\\Sorry.mp3"
,"songs\\Woman.mp3"];

var sname=["Ban Ja tu meri Rani",
"Banduk Meri Laila",
"Barish",
"Haareya",
"Ik vari aa",
"main tera boyfriend",
"mercy",
"musafir",
"o sathi",
"Phir Bhi",
"malhari",
"dolida",
"Dil Na Jaaneya",
"Qaafirana",
"London-Thumakda",
"Cheap Thrills",
"Aree re Aree re kya hua", 
"Something Just Like This",
"A  Thousand Years",
"Love Story",
"Perfect",
"Shape of You",
"Judaai",
"Mann Bharryaa",
"Kaise Mujhe",
"Kabira",
"Give Me Some Sushine",
"Tu Jaane Na",
"Khalibali",
"Shaitan Ka Saala",
"Tattad Tattad",
"Lets Nacho",
"Kalle Kalle",
"Closer",
"A B C D E F G H I",
"Excuses", 
"Sorry", 
"Woman",
];

var sd=[
"Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: KK<br>Movie: Shab<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon",
"Artists: Vishal Dadlani , Sanjay Leela Bhansali <br>Movie: Bajirao Mastani<br>Released: 2015<br>", 
"Artists: Janhvi Shrimankar, Shail Hada, Sanjay Leela Bhansali <br>Movie: Gangubai Kathiawadi <br>Released: 2022<br>",
"Artists: Lauv, Akasa <br>Movie: Good Newzz  <br>Released: 2019<br>",
"Artists: Arijit Singh, Nikhita Gandhi , Amit Trivedi <br>Movie: Kedarnath  <br>Released: 2018<br>",
"Artists: Labh Janjua Sonu Kakkar Neha Kakkar, Amit Trivedi <br>Movie: Queen  <br>Released: 2014<br>",
"Artists: Sia <br>Album: This is Acting  <br>Released: 2015<br>",
"Artists: Lata Mangeshkar, Udit Narayan <br>Movie: Dil toh Pagal hai  <br>Released: 1997<br>",
"Artists: The Chainsmokers <br>Album : Not known <br>Released: 2017<br>",
"Artists: Christina Perri <br>Album : Not known <br>Released: 2011<br>",
"Artists: Taylor Swift <br>Album : Fearless <br>Released: 2008<br>",
"Artists: Ed Sheeren <br>Album : Divide <br>Released: 2017<br>",
"Artists: Ed Sheeren <br>Album : Not known <br>Released: 2017<br>",
"Artists:  Rekah Bhardwaj, Arijit Singh <br>Movie : Badlapur <br>Released: 2015<br>",
"Artists:  B Praak <br>Movie : Shershaah <br>Released: 2021<br>",
"Artists:  Benny Dayal, Shreya Ghoshal <br>Movie : Ghajini <br>Released: 2008<br>",
"Artists: Tochi Raina, Rekha Bhardwaj<br>Movie : Yeh Jawaani hai Deewani <br>Released: 2013<br>",
"Artists: Suraj Jagan , Sharman Joshi <br>Movie : Three Idiots <br>Released: 2009<br>",
"Artists: Atif Aslam <br>Movie : Ajab Prem ki Ghazab Kahani <br>Released: 2009<br>",
"Artists: Shivam Pathak, Sahil Hada , Sanjay Leela Bhansali  <br>Movie : Padmavat <br>Released: 2017<br>",
"Artists: Sohail Sen, Vishal Dadlani <br>Movie : Housefull <br>Released: 2019<br>",
"Artists: Aditya Narayan <br>Movie : Ram Leela <br>Released: 2013<br>",
"Artists: Badshah, Nucleya, Benny Dayal, Nucleya Benny Dayal <br>Movie : Kapoor and Sons <br>Released: 2016<br>",
"Artists: Priya Saraiya, Sachin Jigar <br>Movie : Chandigarh kare Aashiqui <br>Released: 2021<br>",
"Artists: The Chainsmokers <br>Album : Unknown <br>Released: 2016<br>",
"Artists: Udit Narayan, Shankar Mahadevan, Hariharan <br>Movie : Hum Saath Saath hai<br>Released: 1999<br>",
"Artists: Ap Dhillon, Gurinder Gill, Intense <br>Movie : Unknown <br>Released: 2022<br>",
"Artists: Justin Bieber <br>Album : Unknown <br>Released: 2015<br>",
"Artists: Doja Cat <br>Album : Women (Cover) <br>Released: 2021<br>",
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jfif",
"images\\\\18.jfif",
"images\\\\19.jfif",
"images\\\\20.jfif",
"images\\\\21.jfif",
"images\\\\22.jfif",
"images\\\\23.jfif",
"images\\\\24.jfif",
"images\\\\25.jfif",
"images\\\\26.jfif",
"images\\\\27.jfif",
"images\\\\28.jfif",
"images\\\\29.jfif",
"images\\\\30.jfif",
"images\\\\31.jfif",
"images\\\\32.jfif",
"images\\\\33.jfif",
"images\\\\34.jfif",
"images\\\\35.jfif",
"images\\\\36.jfif",
"images\\\\37.jfif",
"images\\\\38.jfif",];


var mood=[["2", "11", "12", "15", "20", "29", "31", "32"],["4", "5", "6", "16", "17", "18", "19", "20", "21", "22"],["3", "8", "9", "10", "23", "24", "25", "26", "27", "28"], ["1", "7", "13", "14", "37", "33", "34", "35", "36", "38"]];
var mmm=["1.png","1.png","1.png","1.png","1.png","1.png","1.png","1.png","2.png","2.png","2.png","2.png", "2.png","2.png","2.png","2.png","2.png","2.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","3.png","4.png","4.png", "4.png","4.png","4.png","4.png","4.png","4.png","4.png","4.png"];

let songsElement = document.getElementById('songsDiv');
var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	console.log(songs[i][3]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};
	songsElement.appendChild(ins);	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	console.log(x);
	var z=songs[x][0];
	console.log(songs[x]);
	console.log(sname[x]);
	console.log(songs[x][0]);
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }