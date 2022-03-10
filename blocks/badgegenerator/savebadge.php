<?php
$image = $_POST['imgBase64'];

$image = str_replace('data:image/png;base64,', '', $image);
$image = str_replace(' ', '+', $image);
$fileData = base64_decode($image);
$upload_dir = 'pix/badges/';
$file_uniq = 'badge_image' . uniqid() . '.png';
file_put_contents($upload_dir . $file_uniq, $fileData);

//$badge = imagecreatefrompng($upload_dir . $file_uniq);
//$badge_small = imagescale($badge, 220);
//$badge_big = imagescale($badge, 512);
//
//imagejpeg($badge_small, $upload_dir . 'badge_220px.png', 100);
//imagejpeg($badge_big, $upload_dir . 'badge_512px.png', 100);
//
echo 'Badge gespeichert';
phpinfo();