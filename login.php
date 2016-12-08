<!DOCTYPE html>
<html>
    <head>
        <title>
            
        </title>
    </head>
    
    <body>
        <form action = "loginCheck.php" method = "post">
        Username:<input type = "text" name = "username"><br>
        Password:<input type = "password" name = "password"><br>
        <input type = "submit" value = "Login">
        </form>
        <p style = "color:red;">
            <?php
                if(isset($_SESSION["uh-oh"]))
                {
                    echo "Incorrect username/password!";
                }
            ?>
        </p>
    </body>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="js/functions.js"></script>
</html>