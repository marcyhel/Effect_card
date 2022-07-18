let myDiv = document.getElementById("my-div");
let myList = document.getElementById("list");
let myListFogo = document.getElementById("listfogo");
let myListcogna = document.getElementById("listcogna");
let myListvix = document.getElementById("listvix");
let myListfortunas = document.getElementById("listfortunas");

var left=false;
//Detect touch device
var maestria='maestria'
var artefato='artefato'
var conscrito='conscrito'
var armadilha='armadilha'
var realidade='realidade'
var mercenario='mercenario'
var quebrador = 'quebrador'
var evento='evento'
var impacto='impacto'

var fundidas='fundidas'
var basica='basica'
var beta='beta'
var codigo='codigo'
var dilema='dilema'
var fragmento='fragmento'
var vortice='vortice'
var el='el'
var filtros=[maestria, artefato, conscrito, armadilha, realidade, mercenario, quebrador, evento, impacto, fundidas, basica, beta, codigo, dilema, fragmento, vortice,el]




card=[
  {
  id:0,
  causa: ['all'],
  tipo: [artefato],
},{
  id:1,
  causa: ['t'],
  tipo: [armadilha],
},{
  id:2,
  causa: ['t'],
  tipo: [artefato, conscrito],
},{
  id:3,
  causa: ['v'],
  tipo: [realidade],
},{
  id:4,
  causa: ['t'],
  tipo: [conscrito],
},{
  id:5,
  causa: ['t'],
  tipo: [evento],
},{
  id:6,
  causa: ['t'],
  tipo: [evento],
},{
  id:7,
  causa: ['t'],
  tipo: [evento],
},{
  id:8,
  causa: ['t'],
  tipo: [evento],
},{
  id:9,
  causa: ['t'],
  tipo: [evento],
},{
  id:10,
  causa: ['t'],
  tipo: [evento],
},{
  id:11,
  causa: ['t'],
  tipo: [impacto],
},{
  id:12,
  causa: ['t'],
  tipo: [impacto],
},{
  id:13,
  causa: ['t'],
  tipo: [artefato],
},{
  id:14,
  causa: ['t'],
  tipo: [impacto],
},{
  id:15,
  causa: ['t'],
  tipo: [maestria],
},{
  id:16,
  causa: ['t'],
  tipo: [maestria],
},{
  id:17,
  causa: ['t'],
  tipo: [mercenario],
},{
  id:18,
  causa: ['t'],
  tipo: [quebrador],
},{
  id:19,
  causa: ['t'],
  tipo: [quebrador],
},{
  id:20,
  causa: ['t'],
  tipo: [quebrador],
},{
  id:21,
  causa: ['s'],
  tipo: [artefato],
},{
  id:22,
  causa: ['s'],
  tipo: [artefato],
},{
  id:23,
  causa: ['s'],
  tipo: [artefato],
},{
  id:24,
  causa: ['s'],
  tipo: [conscrito],
},{
  id:25,
  causa: ['t'],
  tipo: [artefato],
},{
  id:26,
  causa: ['s'],
  tipo: [conscrito],
},{
  id:27,
  causa: ['s'],
  tipo: [conscrito],
},{
  id:28,
  causa: ['s'],
  tipo: [conscrito],
},{
  id:29,
  causa: ['s'],
  tipo: [conscrito,artefato],
},{
  id:30,
  causa: ['s'],
  tipo: [conscrito],
},{
  id:31,
  causa: ['s'],
  tipo: [conscrito,artefato],
},{
  id:32,
  causa: ['s'],
  tipo: [impacto],
},{
  id:33,
  causa: ['s'],
  tipo: [evento],
},{
  id:34,
  causa: ['s'],
  tipo: [evento],
},{
  id:35,
  causa: ['s'],
  tipo: [evento],
},{
  id:36,
  causa: ['t'],
  tipo: [artefato],
},{
  id:37,
  causa: ['s'],
  tipo: [evento],
},{
  id:38,
  causa: ['s'],
  tipo: [evento],
},{
  id:39,
  causa: ['s'],
  tipo: [impacto],
},{
  id:40,
  causa: ['s'],
  tipo: [impacto],
},{
  id:41,
  causa: ['s'],
  tipo: [impacto],
},{
  id:42,
  causa: ['s'],
  tipo: [impacto],
},{
  id:43,
  causa: ['s'],
  tipo: [maestria],
},{
  id:44,
  causa: ['s'],
  tipo: [quebrador],
},{
  id:45,
  causa: ['s'],
  tipo: [quebrador],
},{
  id:46,
  causa: ['s'],
  tipo: [mercenario],
},{
  id:47,
  causa: ['s'],
  tipo: [realidade],
},{
  id:48,
  causa: ['t'],
  tipo: [conscrito],
},{
  id:49,
  causa: ['s'],
  tipo: [realidade],
},{
  id:50,
  causa: ['c'],
  tipo: [artefato],
},{
  id:51,
  causa: ['c'],
  tipo: [artefato],
},{
  id:52,
  causa: ['c'],
  tipo: [artefato],
},{
  id:53,
  causa: ['c'],
  tipo: [artefato],
},{
  id:54,
  causa: ['c'],
  tipo: [conscrito],
},{
  id:55,
  causa: ['c'],
  tipo: [conscrito],
},{
  id:56,
  causa: ['c'],
  tipo: [artefato,conscrito],
},{
  id:57,
  causa: ['c'],
  tipo: [conscrito],
},{
  id:58,
  causa: ['c'],
  tipo: [artefato,conscrito],
},{
  id:59,
  causa: ['t'],
  tipo: [conscrito],
},{
  id:60,
  causa: ['c'],
  tipo: [conscrito],
},{
  id:61,
  causa: ['c'],
  tipo: [evento],
},{
  id:62,
  causa: ['c'],
  tipo: [evento],
},{
  id:63,
  causa: ['c'],
  tipo: [evento],
},{
  id:64,
  causa: ['c'],
  tipo: [evento],
},{
  id:65,
  causa: ['c'],
  tipo: [evento],
},{
  id:66,
  causa: ['c'],
  tipo: [impacto],
},{
  id:67,
  causa: ['c'],
  tipo: [impacto],
},{
  id:68,
  causa: ['c'],
  tipo: [impacto],
},{
  id:69,
  causa: ['c'],
  tipo: [impacto],
},{
  id:70,
  causa: ['t'],
  tipo: [conscrito],
},{
  id:71,
  causa: ['c'],
  tipo: [maestria],
},{
  id:72,
  causa: ['c'],
  tipo: [maestria],
},{
  id:73,
  causa: ['c'],
  tipo: [mercenario],
},{
  id:74,
  causa: ['c'],
  tipo: [quebrador],
},{
  id:75,
  causa: ['c'],
  tipo: [quebrador],
},{
  id:76,
  causa: ['c'],
  tipo: [realidade],
},{
  id:77,
  causa: ['v'],
  tipo: [artefato],
},{
  id:78,
  causa: ['v'],
  tipo: [artefato],
},{
  id:79,
  causa: ['v'],
  tipo: [artefato],
},{
  id:80,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:81,
  causa: ['t'],
  tipo: [conscrito],
},{
  id:82,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:83,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:84,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:85,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:86,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:87,
  causa: ['v'],
  tipo: [conscrito],
},{
  id:88,
  causa: ['v'],
  tipo: [evento],
},{
  id:89,
  causa: ['v'],
  tipo: [evento],
},{
  id:90,
  causa: ['v'],
  tipo: [evento],
},{
  id:91,
  causa: ['v'],
  tipo: [evento],
},{
  id:92,
  causa: ['t'],
  tipo: [artefato,conscrito],
},{
  id:93,
  causa: ['v'],
  tipo: [evento],
},{
  id:94,
  causa: ['v'],
  tipo: [evento],
},{
  id:95,
  causa: ['v'],
  tipo: [evento],
},{
  id:96,
  causa: ['v'],
  tipo: [impacto],
},{
  id:97,
  causa: ['v'],
  tipo: [impacto],
},{
  id:98,
  causa: ['v'],
  tipo: [impacto],
},{
  id:99,
  causa: ['v'],
  tipo: [maestria],
},{
  id:100,
  causa: ['v'],
  tipo: [mercenario],
},{
  id:101,
  causa: ['v'],
  tipo: [quebrador],
},{
  id:102,
  causa: ['v'],
  tipo: [quebrador],
}
,{
  id:103,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:104,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:105,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:106,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:107,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:108,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:109,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:110,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:111,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:112,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:113,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:114,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:115,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:116,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:117,
  causa: ['f'],
  tipo: [fundidas],
},{
  id:118,
  causa: ['f'],
  tipo: [basica],
},{
  id:119,
  causa: ['f'],
  tipo: [basica],
},{
  id:120,
  causa: ['f'],
  tipo: [basica],
},{
  id:121,
  causa: ['f'],
  tipo: [beta],
},{
  id:122,
  causa: ['f'],
  tipo: [beta],
},{
  id:123,
  causa: ['f'],
  tipo: [beta],
},{
  id:124,
  causa: ['f'],
  tipo: [beta],
},{
  id:125,
  causa: ['f'],
  tipo: [beta],
},{
  id:126,
  causa: ['f'],
  tipo: [beta],
},{
  id:127,
  causa: ['f'],
  tipo: [codigo],
},{
  id:128,
  causa: ['f'],
  tipo: [codigo],
},{
  id:129,
  causa: ['f'],
  tipo: [codigo],
},{
  id:130,
  causa: ['f'],
  tipo: [codigo],
},{
  id:131,
  causa: ['f'],
  tipo: [codigo],
},{
  id:132,
  causa: ['f'],
  tipo: [codigo],
},{
  id:133,
  causa: ['f'],
  tipo: [codigo],
},{
  id:134,
  causa: ['f'],
  tipo: [codigo],
},{
  id:135,
  causa: ['f'],
  tipo: [codigo],
},{
  id:136,
  causa: ['f'],
  tipo: [codigo],
},{
  id:137,
  causa: ['f'],
  tipo: [codigo],
},{
  id:138,
  causa: ['f'],
  tipo: [dilema],
},{
  id:139,
  causa: ['f'],
  tipo: [dilema],
},{
  id:140,
  causa: ['f'],
  tipo: [dilema],
},{
  id:141,
  causa: ['f'],
  tipo: [dilema],
},{
  id:142,
  causa: ['f'],
  tipo: [dilema],
},{
  id:143,
  causa: ['f'],
  tipo: [dilema],
},{
  id:144,
  causa: ['f'],
  tipo: [el],
},{
  id:145,
  causa: ['f'],
  tipo: [el],
},{
  id:146,
  causa: ['f'],
  tipo: [el],
},{
  id:147,
  causa: ['f'],
  tipo: [el],
},{
  id:148,
  causa: ['f'],
  tipo: [el],
},{
  id:149,
  causa: ['f'],
  tipo: [el],
},{
  id:150,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:151,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:152,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:153,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:154,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:155,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:156,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:157,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:158,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:159,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:160,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:161,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:162,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:163,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:164,
  causa: ['f'],
  tipo: [fragmento],
},{
  id:165,
  causa: ['f'],
  tipo: [vortice],
},{
  id:166,
  causa: ['f'],
  tipo: [vortice],
},{
  id:167,
  causa: ['f'],
  tipo: [vortice],
},{
  id:168,
  causa: ['f'],
  tipo: [vortice],
},{
  id:169,
  causa: ['f'],
  tipo: [vortice],
},{
  id:170,
  causa: ['f'],
  tipo: [vortice],
},{
  id:171,
  causa: ['f'],
  tipo: [vortice],
},{
  id:172,
  causa: ['f'],
  tipo: [vortice],
},{
  id:173,
  causa: ['f'],
  tipo: [vortice],
},{
  id:174,
  causa: ['f'],
  tipo: [vortice],
},{
  id:175,
  causa: ['f'],
  tipo: [vortice],
},{
  id:176,
  causa: ['f'],
  tipo: [vortice],
},{
  id:177,
  causa: ['f'],
  tipo: [vortice],
},{
  id:178,
  causa: ['f'],
  tipo: [vortice],
},{
  id:179,
  causa: ['f'],
  tipo: [vortice],
},{
  id:180,
  causa: ['f'],
  tipo: [codigo],
},{
  id:181,
  causa: ['f'],
  tipo: [codigo],
},{
  id:182,
  causa: ['f'],
  tipo: [codigo],
},{
  id:183,
  causa: ['f'],
  tipo: [basica],
},{
  id:184,
  causa: ['f'],
  tipo: [basica],
},{
  id:185,
  causa: ['f'],
  tipo: [basica],
},{
  id:186,
  causa: ['f'],
  tipo: [codigo],
}


]
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  if(window.innerWidth-x<450){
    left=true;
  }else{
    left=false;
  }
  myDiv.style.left = x  + "px";
  //myDiv.style.top = y - 50 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});



function filter(array, value, key) {
  return array.filter(key
      ? a => a[key].includes(value)
      : a => Object.keys(a).some(k => a[k].includes(value))
  );
}
function unique(x) {
  return x.filter(function(elem, index) { return x.indexOf(elem) === index; });
};
function union(x, y) {
  return unique(x.concat(y));
};
function creat(){
  let myDiv = document.getElementById("my-div");
  let myList = document.getElementById("list");
  let myListFogo = document.getElementById("listfogo");
  let myListcogna = document.getElementById("listcogna");
  let myListvix = document.getElementById("listvix");
  let myListfortunas = document.getElementById("listfortunas");
  
  let car = filter(card,"t",'causa')
  let filtrado=[]

  for (let i=0;i< filtros.length;i++){
    filtrado = unique(filtrado.concat(filter(car,filtros[i],'tipo'))); 
    
  }
  myList.innerHTML=''
  filtrado.forEach(e => {
      myList.innerHTML+=  `<div onMouseOver="show(${e.id})" onMouseOut="hide(${e.id})"  class="amostra verde"><img src='img/${e.id}.png' class="card" onContextMenu="return false;"></div>`
    });

  car  = filter(card,"s",'causa')
  filtrado=[]
  for (let i=0;i< filtros.length;i++){
    filtrado = unique(filtrado.concat(filter(car,filtros[i],'tipo'))); 
    
  }
  myListFogo.innerHTML=''
  filtrado.forEach(e => {
      myListFogo.innerHTML+=  `<div onMouseOver="show(${e.id})" onMouseOut="hide(${e.id})"  class="amostra laranja"><img src='img/${e.id}.png' class="card"  onContextMenu="return false;"></div>`
  });

  car  = filter(card,"c",'causa')
  filtrado=[]
  for (let i=0;i< filtros.length;i++){
    filtrado = unique(filtrado.concat(filter(car,filtros[i],'tipo'))); 
    
  }
  myListcogna.innerHTML=''
  filtrado.forEach(e => {
      myListcogna.innerHTML+=  `<div onMouseOver="show(${e.id})" onMouseOut="hide(${e.id})"  class="amostra amarelo"><img src='img/${e.id}.png' class="card"  onContextMenu="return false;"></div>`
  });

  car  = filter(card,"v",'causa')
  filtrado=[]
  for (let i=0;i< filtros.length;i++){
    filtrado = unique(filtrado.concat(filter(car,filtros[i],'tipo'))); 
    
  }
  myListvix.innerHTML=''
  filtrado.forEach(e => {
      myListvix.innerHTML+=  `<div onMouseOver="show(${e.id})" onMouseOut="hide(${e.id})"  class="amostra vermelho"><img src='img/${e.id}.png' class="card"  onContextMenu="return false;"></div>`
  });
  
 
  car  = filter(card,"f",'causa')
  filtrado=[]
  for (let i=0;i< filtros.length;i++){
    filtrado = unique(filtrado.concat(filter(car,filtros[i],'tipo'))); 
    
  }
  myListfortunas.innerHTML=''
  filtrado.forEach(e => {
    myListfortunas.innerHTML+=  `<div onMouseOver="show(${e.id})" onMouseOut="hide(${e.id})"  class="amostra azul"><img src='img/${e.id}.png' class="card"  onContextMenu="return false;"></div>`
  });
}
creat()
function show(id) {
    //document.getElementById(id).style.visibility = "visible";
    
    let country = card.find(el => el.id == id);
    
    
    
   
    //myDiv.style.backgroundColor=country["cor"];
    if(left){
        myDiv.style.transform= 'translate(-120%, 0%)';
    }else{
        myDiv.style.transform= 'translate(20%, 0%)';
    }
    myDiv.innerHTML=`<img src='img/${country.id}.png' class="img">`
    myDiv.style.visibility = "visible";
  }
  function hide(id) {
   // document.getElementById(id).style.visibility = "hidden";
   
    myDiv.style.visibility = "hidden";
    
  }
  function checked_all(sorce){
    var checkedValue = document.getElementsByClassName('messageCheckbox');
    var selec=false;
    if(checkedValue[0].checked){
      console.log('dd')
      selec=true;
    }else{
      selec=false;
    }
    
    for(let i=1;i<checkedValue.length;i++){
      checkedValue[i].checked =selec;
    }
   
    filter_categoria()
  }
  function filter_categoria(){
    var checkedValue = document.getElementsByClassName('messageCheckbox')
    filtros=[];
    for(let i=0;i<checkedValue.length;i++){
      if(checkedValue[i].checked && checkedValue[i].value!='tudo' ){
        filtros.push(checkedValue[i].value)
      }
    }
    
  
    //filtros=[artefato]
    creat()
   
  }
