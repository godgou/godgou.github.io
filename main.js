$(document).ready(function(){
	
  $.get("http://42.51.158.129/php/get_loca.php?country=yes",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
	
	
});
