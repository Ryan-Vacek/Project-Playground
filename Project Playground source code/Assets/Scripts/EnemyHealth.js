var currentHealth = 100;
var maxHealth = 100.00;

var healthBarLength = 0.0;

function Start () 
{
	healthBarLength = Screen.width / 2;
}
function Update () 
{
	AdjustCurrentHealth(0);
}
function onGUI()
{	
	GUI.Box(new Rect(10, 10, healthBarLength, 20), currentHealth + "/" + maxHealth);
}
function AdjustCurrentHealth(adj)
{
	currentHealth += adj;
	
	if(currentHealth < 0)
		currentHealth = 0;
	if(currentHealth > maxHealth)
		currentHealth = maxHealth;
	if(maxHealth < 1)
		maxHealth = 1;
		
	healthBarLength = (Screen.width / 2) + (currentHealth / maxHealth);
}