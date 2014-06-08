#pragma strict

var ySpeedMultiplier : float = 0;
var xSpeedMultiplier : float = 0;
var hp : int;
private var yVelocity : float;
private var xVelocity : float;

function Start(){
//if for some reason HP starts out as zero
	yVelocity = 0;
	xVelocity = 0;
	if( hp <= 0){
		hp = 1;
	}
	 if (xSpeedMultiplier ==0){
	 	xSpeedMultiplier = 10;
	 }
	  if (ySpeedMultiplier ==0){
	 	ySpeedMultiplier = 10;
	 }
}

function MoveUp(){
	yVelocity = ySpeedMultiplier;
    Debug.Log ("Moving up");

}

function MoveDown(){
	yVelocity = -ySpeedMultiplier;
	    Debug.Log ("Moving down");
}

function MoveStop(){
	yVelocity = 0;

}

function Update(){
	
	    transform.position.y += yVelocity * Time.deltaTime;

}

function FixedUpdate(){
	if(hp > 0){
		transform.parent.position.x += xSpeedMultiplier * Time.deltaTime;	}	
}

function OnCollisionStay(collision : Collision) {
		// Check if the collider we hit has a rigidbody
		// Then apply the force
		if (collision.transform.tag == "Untagged" && hp > 0) {
			Camera.mainCamera.transform.parent = null;
			hp = 0;
				transform.rigidbody.useGravity = true;
				transform.rigidbody.AddRelativeTorque (100, 200, -100);
			    transform.rigidbody.AddForce (-1000, 1000, -1000);

			
			
		}
	}
//
//function OnTriggerEnter(other: Collider){
//	
//	if(other.tag == "Untagged" && hp > 0){
//	Debug.Log ("Collision");
//	 hp = 0;
//	 transform.rigidbody.AddForce (-100, 10, 0);
//	}
//}