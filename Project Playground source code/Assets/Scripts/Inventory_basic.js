#pragma strict
import System.Collections.Generic;



var playerInventory : List.<ItemClass> = new List.<ItemClass>();

var scrollView : Vector2;

var equippedItem : ItemClass;

var equipped : boolean = false;

var playerHand : Transform;

function Update () 
	{
		if(equippedItem.itemType == ItemClass.ItemType.Weapon)
			{
				equipped = true;
			}
		else
			{
				equipped = false;
			}
	}

function OnGUI()
{
//Inventory
	GUILayout.BeginArea(Rect(Screen.width - 500, 0,500,500));
	scrollView = GUILayout.BeginScrollView(scrollView, GUILayout.Width(500), GUILayout.Height(500));
	for(var x = 0; x < playerInventory.Count; x++)
	{
		GUILayout.BeginHorizontal();
		if(GUILayout.Button(playerInventory[x].icon) && playerInventory[x].itemType == ItemClass.ItemType.Weapon && equipped == false)
			{
				equippedItem = playerInventory[x];
				var weapon : Transform = Instantiate(playerInventory[x].itemPrefab,playerHand.position,Quaternion.identity);
				weapon.parent = playerHand;
				playerInventory.RemoveAt(x);
				return;
			}
		GUILayout.Box(playerInventory[x].name);
		GUILayout.EndHorizontal();
		GUILayout.Box(playerInventory[x].description);
	}
	GUILayout.EndScrollView();
	GUILayout.EndArea();
	
	//Weaponslot
	
	if(GUI.Button(Rect(Screen.width/2 - 25, Screen.height - 50, 50, 50), equippedItem.icon) && equipped == true)
	{
		playerInventory.Add(equippedItem);
		Destroy(GameObject.FindGameObjectWithTag("Weapon"));
		equippedItem = new ItemClass();
	
	}
}