<?php
return array(
    //'配置项'=>'配置值'

    // 加载扩展配置文件
    'LOAD_EXT_CONFIG' => 'data,db,urls,config_me',

    // 关闭多模块访问
//    'MULTI_MODULE' => false,
//    'DEFAULT_MODULE' =>  'Home',
    'MULTI_MODULE' => true,
    'MODULE_ALLOW_LIST' => array('Home','Interfaces','Hairdresser'),
    'DEFAULT_MODULE' =>  'Home',


    //TOKEN
    'TOKEN_ON'      =>    true,  // 是否开启令牌验证 默认关闭
    'TOKEN_NAME'    =>    '__hash__', // 令牌验证的表单隐藏字段名称，默认为__hash__
    'TOKEN_TYPE'    =>    'md5',  //令牌哈希验证规则 默认为MD5
    'TOKEN_RESET'   =>    true,  //令牌验证出错后是否重置令牌 默认为true

    'TMPL_ACTION_ERROR'     =>  dirname(dirname(dirname(__FILE__))).'/Home/View/error.html', 
    'TMPL_ACTION_SUCCESS'   =>  dirname(dirname(dirname(__FILE__))).'/Home/View/success.html',

    //
    'URL_HTML_SUFFIX' => '',

    'LANG_SWITCH_ON' => true,
    'LANG_AUTO_DETECT' => true, // 自动侦测语言 开启多语言功能后有效
    'LANG_LIST' => 'zh-cn', // 允许切换的语言列表 用逗号分隔
    'VAR_LANGUAGE' => 'l', // 默认语言切换变量

	//'TMPL_EXCEPTION_FILE'=>dirname(dirname(dirname(__FILE__))).'/Home/View/exception_custom.html', // 定义公共错误模板
    //'TMPL_EXCEPTION_FILE'=>dirname(dirname(dirname(__FILE__))).'/Home/View/error.html', // 定义公共错误模板
    'DEPLOYMENT_MODEL'=>1//0 development 1product
);

