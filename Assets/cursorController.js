#pragma strict

function Start () {

}

function Update () {
	
	var mousePos = Input.mousePosition;
	mousePos.z = 10;
	var point = Camera.main.ScreenToWorldPoint(mousePos);
	transform.position = point;
	
	if (Input.GetMouseButtonDown(0))
	{
		Debug.Log("click");
		//casts a ray out from the mouse position out into the 3d world
		var ray = Camera.main.ScreenPointToRay(mousePos);
	
		
	
		var hit:RaycastHit;
		if (Physics.Raycast (ray, hit)) {
			//hit the cube.
			Destroy(hit.collider.gameObject);
		}
	}
	
}