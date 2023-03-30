<?php
session_start();
include('link.php');

if (isset($_POST['log'])){
    $login=$_POST['log'];
    $password=$_POST['pas'];
    $user_data=mysqli_query($link,"SELECT avatar_url,user_name,id FROM user where login='$login' and password=$password");
    $dec_user_data=mysqli_fetch_assoc($user_data);
    $_SESSION['user_id']=$dec_user_data['id'];
    $_SESSION['user_name']=$dec_user_data['user_name'];
    $_SESSION['user_avatar_url']=$dec_user_data['avatar_url'];
    echo (json_encode($dec_user_data));

}
else if (isset($_POST['log_reg'])){
    $login=$_POST['log_reg'];
    $password=$_POST['pas_reg'];
    $nickname=$_POST['nickname'];
    $mail=$_POST['mail'];
    $icon=$_POST['icon'];
    mysqli_query($link,"INSERT INTO `user` (`login`, `user_name`, `password`, `email`, `avatar_url`) VALUES ( '$login', '$nickname', '$password', '$mail', '$icon') ");

    $user_data=mysqli_query($link,"SELECT avatar_url,user_name,id FROM user where login='$login' and password=$password");

    $dec_user_data=mysqli_fetch_assoc($user_data);

    $_SESSION['user_id']=$dec_user_data['id'];
    $_SESSION['user_name']=$dec_user_data['user_name'];
    $_SESSION['user_avatar_url']=$dec_user_data['avatar_url'];

    echo (json_encode($dec_user_data));
}
else{
    session_destroy();
}
