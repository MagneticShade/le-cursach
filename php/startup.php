<?php
session_start();

$tmp=array('user_name'=>$_SESSION['user_name'],'avatar_url'=>$_SESSION['user_avatar_url']);
echo json_encode($tmp);

