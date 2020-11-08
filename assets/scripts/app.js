/* Catch By Id */

let username = getId('username')
let content = getId('content');
let send = getId('send');
let showData = getId('showData');

/* Ajax Call */

var request;
if(window.XMLHttpRequest){
  request = new XMLHttpRequest();
}

/* Wait The Click Event */

send.addEventListener('click',insertData);
function insertData(){
  let user = username.value;
  let data = content.value;
  request.onload = function (){
    if(this.status == 200){
      let getData = request.responseText;
      showData.innerHTML += getData+'<br>';
    }
  }
  request.open('GET','insert.php?user='+user+'&data='+data,true);
  request.send();
}

/* Query Slector */

function getId(id){
  return document.querySelector('#'+id);
}