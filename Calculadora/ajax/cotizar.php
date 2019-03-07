<?php 
	session_start();

	if ($_SESSION) {

		if ($_SESSION['tipo']=='10') {
			echo "done";
		}
		
	}else{
		echo "sesion";
	}

 ?>