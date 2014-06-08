
private var fp : Vector2;  // first finger position
private var lp : Vector2;  // last finger position

var cooldown : int;

var dpadSecondCooldown : int = 30;



var touchZone : Rect;
var BounceAmount : float = 14;
var Dive : float = 20;
var dpadLeft : GUITexture;
var dpadRight : GUITexture;
var dpadAction : GUITexture;
var dpadSecond : GUITexture;

var player : Transform;



function Start (){
	cooldown = dpadSecondCooldown;
}


function Update () {
		
	cooldown--;
	


	for (var touch : Touch in Input.touches){
		if (touch.phase == TouchPhase.Began){
			fp = touch.position;
			lp = touch.position;
		}
		
		if (touch.phase == TouchPhase.Moved ){
			lp = touch.position;
		}
		
//		if(cooldown <= 0){
		if(true){

 			if(dpadLeft.HitTest(touch.position)){
 		 
					player.GetComponent(Movement).MoveUp();
					Debug.Log ("HitTest: The Touch is down on LEFT");
		
			}else if(dpadRight.HitTest(touch.position)){
			
 		            player.GetComponent(Movement).MoveDown();
					Debug.Log ("HitTest: The Touch is down on RIGHT");
				
			}else if(dpadAction.HitTest(touch.position)){
 		 
//					player.GetComponent(FPSInputController).dpadSwiped = true;
					Debug.Log ("HitTest: The Touch is down on " + this.name);
				
			}else if(dpadSecond.HitTest(touch.position) && cooldown <=0){

						
//					   	 player.GetComponent(DoubleJump).Dive();
//					  	 player.GetComponent(FPSInputController).horizontalAxis = 0;
					  	 cooldown = dpadSecondCooldown;
 		 						
				
		    }
		}
	
		
		//player has stopped holding down on directional button.  Character stops.
			if(touch.phase == TouchPhase.Ended){
				Debug.Log ("The Touch has ended");
				player.GetComponent(Movement).MoveStop();
	
	         	}
	   
		
		

	}
}
