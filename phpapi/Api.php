<?php
$data = json_decode(file_get_contents('php://input'), true);
if( count($data)>0){
    include("cryptojs-aes.php");
    $myObj = new \stdClass();
    $words= cryptoJsAesDecrypt("a1s2d3",json_encode($data));
    $myObj->YourData =$words;
    $myJSON = json_encode($myObj);
    echo $myJSON;
}else{
    $myObj = new \stdClass();
    $myObj->Msg="Error";
    $myJSON = json_encode($myObj);
    echo $myJSON;
}

?>