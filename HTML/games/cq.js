const x1=new Array(1,3,5,7),x2=new Array(2,3,6,7),x3=new Array(4,5,6,7);
function gzcs(){
    alert("请想一个0~7的数\n按确定继续");
    var atf="";
    for(var i=0;i<4;i++){
        atf+=x1[i];
        atf+=" ";
    }
    var x=0;
    if(confirm(atf+"\n这些数里有你想的数吗？？\n")){
        x=x+1;
    }
    atf="";
    for(var i=0;i<4;i++){
        atf+=x2[i];
        atf+=" ";
    }
    if(confirm(atf+"这些数里有你想的数吗？？\n")){
        x=x+2;
    }
    atf="";
    for(var i=0;i<4;i++){
        atf+=x3[i];
        atf+=" ";
    }
    if(confirm(atf+"这些数里有你想的数吗？？\n")){
        x=x+4;
    }
  if(x==undefined){
    alert("error");
    return 0;
  }
    alert("你想的数是"+x);
}
function jscq(){
    alert("请想一个数\n按“确定”继续");
    var x=prompt("请输入 （这个数+5）×2÷4","");
    x=x*2-5;
    alert("你心里想的数是："+x);
}