#pragma strict

function OnTriggerEnter(other: Collider)
{
	if(other.gameObject.tag == "PartyOne")
	{
		other.gameObject.GetComponent(AIFollow).atSpot = true;
	}
}

function OnTriggerStay(other: Collider)
{
	Debug.Log(other.gameObject.name );
}

function OnTriggerExit(other: Collider)
{
	Debug.Log("hi");
	if(other.gameObject.tag == "PartyOne")
	{
		other.gameObject.GetComponent(AIFollow).atSpot = false;
	}
}