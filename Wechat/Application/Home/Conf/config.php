<?php
return array(
	//'配置项'=>'配置值'
    'WECHAT_PLATFORM_ID'=>'gh_2de535626445',
    'URL_WECHAT'=>'http://wechat.jianfengweb.com',

    //微信小程序基本参数
    'WECHAT_XCX_DATA' => array(
        // 'token'=>'jianfeng', //填写你设定的key
        // 'encodingaeskey'=>'encodingaeskey', //填写加密用的EncodingAESKey
        'appid'=>'wx43e4e92d2a6164be', //填写高级调用功能的app id
        'appsecret'=>'e91801d2a9ef9e98ea0000e353e02b4f' //填写高级调用功能的密钥
    ),

    'WECHAT_GET_OPEN_ID'=>'https://api.weixin.qq.com/sns/jscode2session',
    'WECHAT_SET_TEMPLATE'=>'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=',
    'WECHAT_MODEL_SEND_ID'=>'CQGSBsJ_6hteCAMm4EYGaXHqqad-Ad-LhEbyLA-g02Y',
    'WECHAT_GET_TEMPLATE'=>'https://api.weixin.qq.com/cgi-bin/wxopen/template/library/list?access_token=',
    
    
);