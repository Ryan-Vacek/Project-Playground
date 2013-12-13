using UnityEngine;
using System.Collections;

public class PauseMenu : MonoBehaviour 
	{
		public GUISkin skin;
		public bool paused = false;
	
	void Update(){
		if(paused){
		Time.timeScale = 0;	
		}
		else{
		Time.timeScale = 1;
		}
		
		if(Input.GetKeyDown(KeyCode.Escape)){
			paused = !paused;
		}
	}
		
		void OnGUI()
		{
		if(paused)
		Pause();
		
		}
	
	void Pause()
	{
		GUILayout.BeginArea(new Rect((Screen.width * 0.5f) -50, (Screen.height * 0.5f) -100, 100, 200));
		if (GUILayout.Button ("Resume"))
			{
			//resume play
			paused = !paused;
			}
		if (GUILayout.Button ("Main Menu"))
			{
			//main menu
			//Application.LoadLevel("Main Menu");
			}
		GUILayout.EndArea();
	}
}