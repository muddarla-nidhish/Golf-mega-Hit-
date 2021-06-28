var canvas = new fabric.Canvas('mycanvas');
ball_x = 00;
ball_y = 00;
flag_y = 400;
flag_x = 800;
function loadimg(){
    fabric.Image.fromURL("flag.png", function (Img) {
        flag_object = Img;
        flag_object.scaleToWidth(50);
        flag_object.scaleToHeight(60);
        flag_object.set({
            top: flag_y,
            left: flag_x
        });
        canvas.add(flag_object);
    });
    new_image();
}
function new_image() 
{
    fabric.Image.fromURL("get_image", function (Img) {
        ball_object = Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_object);
    });
}
    if((ball_x==flag_x)&&(ball_y==flag_y)){
        canvas.remove(ball_object)
document.getElementById("hd3").innerHTML="You  Have  Hit  The  gooooal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
document.getElementById("mycanvas").style.borderColor="red";
    }
    if (keypressed == '38') {
        up();
        console.log("up");
    }

    if (keypressed == '40') {
        down();
        console.log("down");
    }

    if (keypressed == '37') {
        left();
        console.log("left");
    }

    if (keypressed == '39') {
        right();
        console.log("right");
    }
function up()
{
    if(ball_y >=0)
    {
ball_y = ball_y;
console.log("when Up arrow is pressed, x = "+ ball_x + ",Y = "+ball_y);
canvas.remove(ball_object);
ball_update();
    }
}
function down()
{
    if(ball_y <=500)
    {
        ball_y = ball_y;
        console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}
function left()
{
    if(ball_x >0)
    {
        ball_x = ball_x;
        console.log("When left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}
function right()
{
    if(ball_x <=850)
    {
        player_x = player_x;
        console.log("When left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
}