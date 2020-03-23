<?php
	$errors = array();
	$valid = array();
	$errorCount = 0;
	
	if($_POST)
	{
		$title = $_POST['title'];
		$titleLen = strlen($title);
		if(!$title)
		{
			$errors['title'] = 'Името на курса е задължително!<br/>';
			echo $errors['title'];
			$errorCount++;
		}
		else if ($titleLen > 150)
		{
			$errors['title'] = 'Името на заглавието трябва до 150 символа!<br/>';
			echo $errors['title'];
			$errorCount++;
		}
		else
		{
			$valid ['title'] = $title;
		}
		
		$teacher = $_POST ['teacher'];
		if(!$teacher)
		{
			$errors['teacher'] = 'Името на преподавателят е задължително!<br/>';
			echo $errors['teacher'];
			$errorCount++;
		}
		else if (strlen($teacher) > 200)
		{
			$errors['teacher'] = 'Името на преподавателят трябва до 200 символа!<br/>';
			echo $errors['teacher'];
			$errorCount++;
		}
		else
		{
			$valid ['teacher'] = $teacher;
		}
		
		$description = $_POST ['description'];
		if(!$description)
		{
			$errors['description'] = 'Описанието е задължително!<br/>';
			echo $errors['description'];
			$errorCount++;
		}
		else if (strlen($description) > 200)
		{
			$errors['description'] = 'Описанието трябва да е поне 10 символа!<br/>';
			echo $errors['description'];
			$errorCount++;
		}
		else
		{
			$valid ['description'] = $description;
		}
		
		$group = $_POST ['group'];
		{
			$valid ['group'] = $group;
		}
		
		$credits = $_POST ['credits'];
		{
			$valid ['credits'] = $credits;
		}
		
		if ($errorCount === 0)
		{
			echo "The operation was successful!";
			$fileName='data.txt';
			file_put_contents($fileName, 'Име на курса:', FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, $title, FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, 'Име на преподавателят:', FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, $teacher, FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, 'Описание:', FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, $description, FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, 'Група:', FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, $group, FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, 'Кредити:', FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, $credits, FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
			file_put_contents($fileName, "\n", FILE_APPEND | LOCK_EX);
		}
	}
?>