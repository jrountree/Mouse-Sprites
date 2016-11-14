var html = '';
var cssStlye = ";border-radius: 50%; position: absolute; z-index: -1;";
var topVal = '';
var leftVal = '';
var x = Math.floor((Math.random() * 30) + 5);
var mouseX = 0, mouseY = 0;
var xMovement = 0, $yMovement =0;
var bubbleName;

//Reset button *non essential*
$(".btn p").click(function(event){
	event.preventDefault();
	location.reload();
});

//SIZE WINDOW TO PARENT DIV
var hightAdj = $('.bgFXcontainer').height();
var widthAdj = $('.bgFXcontainer').width();
$('.bgkFXcenter').height(hightAdj).width(widthAdj);

//THE BUBBLES
for (i = 0; i < x; i += 1) {
	//RENDER BUBBLES
	bubbleName = 'test bubble-' + i;
	var rgbColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
	var size = Math.floor((Math.random() * 50) + 1) + 'px';
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var alpha = ((Math.random() * .5) + 0);
	//BUBBLE DANCE
	topVal = Math.floor((Math.random() * 50) + 1) + 'px;';
	leftVal = Math.floor((Math.random() * 50) + 1) + 'px;';
	var speedCalc = ((Math.random() * 4) + .5);
	var moveMe = 'x-transition: all 4.5s ease-in-out; animation: circle linear '+ speedCalc + 's infinite; transform-origin:50% 50px;';
	html += '<div class=' + bubbleName + ' style="background-color:' + rgbColor + ';width:' + size + ';height:' + size + cssStlye + 'top: ' + topVal + "left:" + leftVal + moveMe +'"></div>';	
	$('.backgroundEffects').html(html);
}

//BUBBLES FOLLOW MOUSE
$('.bgFXcontainer').mousemove(function(e) {
	var XmouseOffset = 100;
	var YmouseOffset = 200;
    mouseX = (e.pageX) - XmouseOffset;
    mouseY = (e.pageY) - YmouseOffset;    
});

var $loop = setInterval(function(){
var damper = 100;
xMovement += ((mouseX - xMovement)/damper);
$yMovement += ((mouseY - $yMovement)/damper);
var leftAnim = xMovement + 'px';
var topAnim = $yMovement + 'px';
//BRING BUBBLES TO MOUSE
	$('.backgroundEffects').css({
		left: leftAnim,
		top: topAnim
	});
}, 10);


