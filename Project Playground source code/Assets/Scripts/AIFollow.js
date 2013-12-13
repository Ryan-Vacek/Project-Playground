var target : Transform; 
var moveSpeed = 5; 
var rotationSpeed = 5; 
var myTransform : Transform; 
var atSpot = false;

function Awake()
{
	myTransform = transform; 
}

function Start()
{
	target = GameObject.FindWithTag("SpotOne").transform; 
}

function Update () 
{
	if(!atSpot)
	{
	    myTransform.rotation =  Quaternion.Slerp(myTransform.rotation,
	    						Quaternion.LookRotation(target.position - myTransform.position), 
	    						rotationSpeed*Time.deltaTime); 

	    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
	}
	else atSpot = false;
}

