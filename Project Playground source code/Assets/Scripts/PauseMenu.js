var paused : boolean = false;
          
function Update () 
{    
if(Input.GetKeyDown(KeyCode.Escape) && paused == false)
	{
	paused = true;
	Time.timeScale = 0;
	}
else if(Input.GetKeyDown(KeyCode.Escape) && paused == true) 
	{
	paused = false;
	Time.timeScale = 1;
	}     
}
