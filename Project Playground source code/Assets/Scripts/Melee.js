   	var range: float = 1.8;
    var attackInterval: float = 0.7;
    var meleeDamage: float = 30;
    private var nextAttack: float = 0;
     
    function MeleeAttack()
    {
    	if (Time.time > nextAttack)
    	{ 
    		// only repeat attack after attackInterval
    		nextAttack = Time.time + attackInterval;
    		// get all colliders whose bounds touch the sphere
    		var colls: Collider[] = Physics.OverlapSphere(transform.position, range);
   			for (var hit : Collider in colls) 
    		{
   				 if (hit && hit.tag == "Enemy")
    			{ 
    				// if the object is an enemy...
   					// check the actual distance to the melee center
    				var dist = Vector3.Distance(hit.transform.position, transform.position);
    				if (dist <= range)
    				{ 
    					// if inside the range...
    					// apply damage to the hit object
   						 hit.SendMessage("ApplyDamage", meleeDamage);
    				}
    			}
    		}
    	}
    }
     
    function Update()
    {
    	if (Input.GetButtonDown("Fire1"))
    	{
    		MeleeAttack();
    	}
    }