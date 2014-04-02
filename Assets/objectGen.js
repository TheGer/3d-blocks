#pragma strict
var cubeObject:Rigidbody;
var squareObject:Rigidbody;


function generateObject()
{
	//infinite loop (on purpose)
	while(true)
	{
		//add the code to instantiate spheres
		Instantiate(cubeObject,Vector3(Random.Range(-6,6),Random.Range(-5,5),transform.position.z),transform.rotation);
		yield WaitForSeconds(1.0);
	}
}


function Start () {
	//generate one object per second
	yield StartCoroutine("generateObject");
}

function Update () {
	
}