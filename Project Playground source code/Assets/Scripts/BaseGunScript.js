var projectile : Rigidbody;
var speed = 10;

function Update () {

if ( Input.GetButton ("Fire2")) {

clone = Instantiate(projectile, transform.position, transform.rotation);
clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));

Destroy (clone.gameObject, 1);

}}
// same script but for a pistol
/*var projectile : Rigidbody; 
var speed = 10; 

function Update () { 

if ( Input.GetButtonDown ("Fire2")) { 

clone = Instantiate(projectile, transform.position, transform.rotation); 
clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed)); 

Destroy (clone.gameObject, 5); 

}} */