#pragma strict

public class ItemClass
{
	public var name : String;
	public var description : String;
	public var icon : Texture2D;
	public var id : int;
	
	public var itemType : ItemType;
	enum ItemType{None, Weapon, Other }
	
	public var itemPrefab : Transform;
}