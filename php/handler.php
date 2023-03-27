<?php
session_start();
include('link.php');
$reviews=mysqli_query($link,"SELECT * from reviews  ORDER BY reviews.time DESC ");

$row=mysqli_fetch_assoc($reviews);
$return=[];
while($row){
    $user_id=$row['user_id'];
    $review_id=$row['id'];
    $full_review=mysqli_query($link,"SELECT user.id, user.user_name,user.avatar_url,reviews.content,reviews.time FROM user JOIN reviews ON user.id=$user_id");
    $review=mysqli_fetch_assoc($full_review);
    $likes=mysqli_query($link,"SELECT COUNT(*) FROM likes WHERE review_id=$review_id" );
    array_push($review,mysqli_fetch_assoc($likes));
    array_push($return,$review); 
    $row=mysqli_fetch_assoc($reviews);
}
echo(json_encode($return));