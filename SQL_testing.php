<?php
	include "./db-connection.php";

	$title_Max_Length = 128;
	$lecturer_Max_Length = 128;
	$description_Max_Length = 1024;
	$errors = array();
	
	function validateField ($text, $size, &$errors)
    {
        $tmp_Text=$_POST["$text"];
		
        if (!$tmp_Text)
        {
            $errors['$text']="$text полето е задължително поле!";
        }
        else if(strlen($tmp_Text) > $size)
        {
            $errors['$text']="$text полето трябва да бъде по-малко от $size символа";
        }
    }
	
	if($_POST)
	{		
		validateField('title', $title_Max_Length, $errors);
        validateField('description', $lecturer_Max_Length, $errors);
        validateField('lecturer', $description_Max_Length, $errors);
		
		if(count($errors) == 0)
		{
			$title = $_POST['title'];
			$description = $_POST['description'];
			$lecturer = $_POST['lecturer'];
			
			addElective($title, $description, $lecturer);
		}
		else
		{
			 echo "Invalid input!";
		}
	}
?>
