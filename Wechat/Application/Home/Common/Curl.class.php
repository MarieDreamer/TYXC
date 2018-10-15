<?php
/*
 * Curl操作类
 */
namespace Home\Common;
class Curl {
   
    public function go($url,$method='POST',$data='',$chatset='utf-8'){
        if(!$url){
            return ;
        }
        if(!$method){
            return ;
        }
        $method=strtoupper($method);
        $ssl = substr($url, 0, 8) == "https://" ? TRUE : FALSE;
        $header = array("Accept-Charset: ".$chatset); 
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        if($ssl){
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);
        }else{
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header); 
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
        //if($method=='POST'){
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        //}
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            return curl_error($ch);
        }
        curl_close($ch);
        return $result;
    }
    
}