<?php
return array(
    //短息验证码验证配置项
    //'配置项'=>'配置值'
    'SMS_CONFIG_VERIFICATION_CODE' => array(
        'url' => 'http://yunpian.com/v1/sms/tpl_send.json',
        //用户唯一标识
        'apikey' => 'ad16108e6c95863c0e75474f0af40012',
        //模板id
        'tpl_id' => '2',
        'tpl_value' => '#company#=诸暨二手车市场&#code#={code}',
    ),
    'SMS_CONFIG_Appointment' => array(
        'url' => 'http://yunpian.com/v1/sms/tpl_send.json',
        //用户唯一标识
        'apikey' => 'a3c3cbb8e95f3f7c466e8a2ba92d357b',
        //模板id
        'tpl_id' => '1133795',
        'tpl_value' => '#name#={telephone}&#shop#={shop}&#phone#={phone}',
    ),


);

   