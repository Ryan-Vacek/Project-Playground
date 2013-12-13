using UnityEngine;
using System.Collections;

public class BattleCursor : MonoBehaviour {
	
	RaycastHit hit;
	
	private float raycastlength = 500;
	// Update is called once per frame
	void Update() 
	{
		GameObject TempCursor = GameObject.Find("TempCursor");
		
		Ray ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		
		if(Physics.Raycast(ray, out hit, raycastlength)){
			Debug.Log (hit.collider.name);
			if(hit.collider.name == "Floor")
			{
				TempCursor.transform.position = hit.point;
			}
		}
		
		
		
		Debug.DrawRay(ray.origin, ray.direction * raycastlength, Color.cyan);
		
		
		
	}
	
	
	
	
}
