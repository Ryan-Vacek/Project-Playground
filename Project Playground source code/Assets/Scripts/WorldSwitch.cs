using UnityEngine;
using System.Collections;


// Script to swtich between imaginary and real world
public class WorldSwitch : MonoBehaviour {
	void Update(){
		// If Player presses i, check what scene we're in
		// and switch to the alternate world.
		if(Input.GetKey("i")){
			if(Application.loadedLevelName == "RealWorld")
				Application.LoadLevel("ImaginaryWorld");
			else
				Application.LoadLevel("RealWorld");
		}
	}
}
