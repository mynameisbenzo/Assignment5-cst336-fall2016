<?php
function checkPassUser($user, $pass){
    $found = false;
    $sql = "SELECT * FROM `users` WHERE username = '".$user."'";
    $stmt = $GLOBALS['dbConn'] -> prepare ($sql);
    
    $stmt -> execute ();
    
    while ($row = $stmt -> fetch())  {
        if($row["password"] == $pass)
            $found = true;
    }
    $GLOBALS['on'] = true;
    return $found;
}




if(!isset($_SESSION))
{
    session_start();
}

include 'database.php';
$conn = getDatabaseConnection();

if(checkPassUser($_POST["username"], $_POST["password"]))
{
    session_destroy();
    header("Location: quizSelect.html");
}
else{
    $_SESSION["uh-oh"] = 1;
    header("Location: login.php");
}




?>