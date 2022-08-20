document.getElementById("b1").addEventListener("click",f1)
document.getElementById("b2").addEventListener("click",f2)
function f1(){
	var t=5000;
	alert("Going to vibrate for"+t+"ms")
	navigator.vibrate(t);

}
function f2(){
	alert("Going to vibrate with pattern")
	navigator.vibrate([3000,1000,3000,1000,3000]);
}