

var button = document.getElementById('counter');

button.onclick = function(){
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            // take some action
            if(request.status===200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML =counter.toString();
            }
        }
        //not done yet
    };
    
    request.open('GET','http://thiyaguaj03.imad.hasura-app.io/counter',true);

    request.send(null);

  
};

//submit Button
var nameInput=document.getElementById('name');
var str =nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick =function() {
  //make the request to the server and send the name
  var names=['name1','name2','name3'];
  var list='';
  for (var i=0;i<names.length;i++){
      list+= '<li>'+names[i] +'</li>';
  }
  var ul=documet.getElementById('namelist');
  ul.innerHTML=list;
  
};
