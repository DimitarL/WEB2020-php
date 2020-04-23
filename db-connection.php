<?php

function addElective($title, $description, $lecturer)
{
    $host = "localhost";
    $dbname = "www";
    $username = "root";
    $pass = "";

    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $pass);

    if($conn === false)
    {
        echo"ERROR: Could not connect.";
    }
    else
    {
        $sql = "INSERT INTO electives(title, description, lecturer) VALUES (:placeholderTitle, :placeholderDescription, :placeholderLecturer)";
        $insertion = $conn->prepare($sql) or die("Failed!");
        $insertion->execute(['placeholderTitle' => $title, 'placeholderDescription' => $description, 'placeholderLecturer' => $lecturer]);

        echo "Records added successfully!";
    }
}

?>