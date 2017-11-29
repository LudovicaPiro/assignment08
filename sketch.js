var img;
var sfondo="#746cc0";
var bolle=true;

var value=0;

 var colore= [   "#ff3800", 
                 "#e3f988", 
                 "#fdfd96",
                 "#fbcce7",
                 "#addddb"];


function preload() {    img=loadImage("./assets/ampolla3-01.png");  }

function setup() {  createCanvas(windowWidth, windowHeight);
                    background("#746cc0");
                    angleMode(DEGREES);
                 }

function draw() {   background(sfondo); 
                    translate(0,40);
                    var x= random(width/2-20, width/2+20);
                    var y= random(height/2-88, height/2-378);
                   
                    if (value>1 &&bolle==true) {  
                                                    strokeWeight(3.6);
                                                    fill(random(colore));
                                                    ellipse(x, y, 30, 30);
                                                }    
                    if(value>20) {             
                                    arcobaleno();
                                    riempimento();
                                    bolle=false;
                                  }
                    
                    ampolla(height/2);
                 }

function ampolla(posY) {image(img, width/2-125, posY-78, 240, 294);}

function deviceShaken(){    value++;
                            }
function riempimento() {
                            noStroke();
                            fill(random(colore));
                            rect(width/2-10, height/2-65, 25,150)
                            triangle(width/2-40, height/2+80, width/2+40,height/2+80, width/2, height/2 );
                        }

function arcobaleno() { var colorList =  [ 
                                            "#8601af",
                                            "#483d8b",
                                            "#2e5894",
                                            "#00a478",
                                            "#fcd20b",
                                            "#e3a031",
                                            "#e66771",
                                          ];
                       var xb= random(width/2-40, width/2+40);
                       var yb= random(height/2-100, height/2-400);

				                for (var i =0; i< colorList.length; i++) 
                            {
					                      var colorHex= colorList[i];
                                fill(color(colorHex));
                                strokeWeight(3);
                                triangle(width/2+i*15-110, -40, width/2+100-i*15, -40, width/2, height/2-48);
                                fill("#fdfd96");
                                triangle(xb,yb, xb+15, yb, xb+7.5, yb+20);
                                triangle(xb,yb, xb+15, yb, xb+7.5, yb-20);
                            } 
                      }