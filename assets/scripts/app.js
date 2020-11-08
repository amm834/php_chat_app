/* Catch By Id */

let username = getId('username')
let content = getId('content');
let send = getId('send');
let showData = getId('showData');

/* Ajax Call */

var request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
}

/* Wait The Click Event */

send.addEventListener('click', insertData);
function insertData() {
  let user = username.value;
  let data = content.value;
  let str;
  request.onload = function() {
    if (this.status == 200) {
      let jsonString = JSON.parse(request.responseText);
    jsonString.forEach((data)=>{
      let username = data.username;
      let datas = data.data;
      str += username + " : " + datas + '<br>';
      showData.innerHTML = str;
    })
    }
  }
  request.open('GET', 'insert.php?user='+user+'&data='+data, true);
  request.send();
}

setInterval(retrieveData, 1000);
function retrieveData(){
  let str;
  request.onload = function() {
    if (this.status == 200) {
      let jsonString = JSON.parse(request.responseText);
    jsonString.forEach((data)=>{
      let username = data.username;
      let datas = data.data;
      str += username + " : " + datas + '<br>';
      showData.innerHTML = str;
    })
    }
  }
  request.open('GET', 'retrieve.php', true);
  request.send();
}


/* Query Slector */

function getId(id) {
  return document.querySelector('#'+id);
}