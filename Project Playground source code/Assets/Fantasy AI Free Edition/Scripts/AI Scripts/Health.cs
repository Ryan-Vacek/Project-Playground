using UnityEngine;
using System.Collections;

public class Health : MonoBehaviour {
	public float MaxHealth=100;
	public float CurrentHealth;
	public bool Invincible;
	public bool Dead;
	/*void OnCollisionEnter(Collision MeleeObject){
		if (Input.GetMouseButtonDown(1)){
			CurrentHealth-=1;
		}
	}
	*/ 
	
	// Use this for initialization
	void Start () {
		//MAKE THE CURRENT HEALTH THE MAX HEALTH AT START
	CurrentHealth=MaxHealth;
	}
	
	// Update is called once per frame
	void Update () {
		//Matts version of melee damage (missing parts)
		/*onCollisionEnter(Collider "MeleeCollide"){
			if("MeleeCollide" == type && mousePressed(1) || mousePressed(2){
				CurrentHealth = CurrentHealth - Random.Range(0,5);
			}*/
		//IF INVINCIBLE, HE CANNOT DIE..
		if(Invincible){
			CurrentHealth=MaxHealth;
		}
		else if(CurrentHealth<=0){
			CurrentHealth=0;
			Dead=true;
		}	
		
		//MAX HEALTH
		if (CurrentHealth >= MaxHealth) {
			CurrentHealth = MaxHealth;
		}

		//WHEN DEATH IS UPON HIM
		if(Dead){
			//TELL THE AI SCRIPT HE IS DEAD
			FreeAI AI=(FreeAI)GetComponent("FreeAI");
				if(AI){
					if(AI.IsDead){}
					else AI.IsDead=true;
				}
			}
		}

	//TAKES DAMAGE WHEN COLLIDING WITH THE MELEE OBJECT, BUT ONLY IF A MOUSE BUTTON IS BEING HIT
	void OnTriggerEnter(Collider other) {
		if(other.gameObject.CompareTag ("Weapon")) {
			if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {
				CurrentHealth = CurrentHealth - Random.Range(0,5);
			}
		}
	}
}
