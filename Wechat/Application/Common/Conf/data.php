<?php
return array(
    'SITE_URL' => 'http://wechat.zjescsc.com/',
    'SITE_INTERFACE_URL' => 'http://interface.zjescsc.com/',
    'SITE_NAME' => '湖州金店',
    'PAGING_LISTS_PAGE_SIZE' => 1,
    'NUM_PER_PAGE' => 20,
    'WECHAT_PLATFORM_NO' => 'gh_f3c1b1fed3b3',
    'SMS_VERIFY_CODE_REGISTER' => '验证码{verify_code}每一次{m}美丽一次{end}',
    'SMS_VERIFY_CODE_FORGOT_PASSWORD' => '忘记密码,验证码:{verify_code} 三十分钟内有效,轻松在线预约优秀美发师，每一次，美一次。客服微信号：美一次。网站：m.meiyici.cn ',
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
    'WECHAT_DATA' => array(
        // 'token'=>'jianfeng', //填写你设定的key
        // 'encodingaeskey'=>'encodingaeskey', //填写加密用的EncodingAESKey
        'appid'=>'wxa7ec44c182bba215', //填写高级调用功能的app id
        'appsecret'=>'80674133d1769a958e718f13dbf645c4' //填写高级调用功能的密钥
    ),

);