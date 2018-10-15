<?php
list($appId,$nonceStr,$timestamp,$signature)=getWechatJsApiParam();
$this->assign('appId',$appId);
$this->assign('nonceStr',$nonceStr);
$this->assign('timestamp',$timestamp);
$this->assign('signature',$signature);