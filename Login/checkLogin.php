<?php
    $server = 'localhost';
    $db = 'test';
    $user = 'root';
    $pwd = '';

    $conn = mysqli_connect($server,$user,$pwd,$db);

    if (!$conn){
        die("Connection Failed");
    }

    $username = $_POST('user');
    $password = $_POST('pwd');

    $query = "select * from test where username is $username and password is $password";

    $result = mysqli_query($conn,$query);

    if (count($result)>0){
        session_start();
        $r = mysqli_fetch_assoc($result);

        $_SESSION['Username'] = $r['username'];
        $_SESSION['Password'] = $r['password'];

        echo "Success";

        $sql = "insert into login_log(uname,starttime,status)values("$0_SESSION['Username']",);";
    }