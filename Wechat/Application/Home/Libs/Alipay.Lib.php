<?php
namespace Home\Libs;
class AlipayLib{

    /*
    支付接口
    * $out_trade_no 订单ID 必填
    * $subject 订单名称 必填
    * $total_fee 必填 付款金额
    * $body 订单描述  
    * $show_url 商品展示地址 需以http://开头的完整路径 例如 http://www.商户网址.com/myorder.html  
    */
    function alipay_do($out_trade_no,$subject,$total_fee,$body,$show_url){
        require C('APPLICATION_DIR').'/Home/Widget/AliPay/alipay_submit.class.php'; 
        $alipay_config=C('ALIPAY_CONFIG');
        //支付类型
        $payment_type = "1";

        //服务器异步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数
        $notify_url = "http://".C('SITE_URL')."/Alipay/alipay_notify";
        
        //页面跳转同步通知页面路径 需http://格式的完整路径 不能加?id=123这类自定义参数 不能写成http://localhost/      
        $return_url = "http://".C('SITE_URL')."/Alipay/alipay_return";
              
        //防钓鱼时间戳 若要使用请调用类文件submit中的query_timestamp函数     
        $anti_phishing_key = "";
        
        //客户端的IP地址 非局域网的外网IP地址，如：221.0.0.1
        $exter_invoke_ip = "";

        //构造要请求的参数数组，无需改动
        $parameter = array(
            "service" => "create_direct_pay_by_user",
            "partner" => trim($alipay_config['partner']),
            "payment_type"	=> $payment_type,
            "notify_url"	=> $notify_url,
            "return_url"	=> $return_url,
            "seller_email"	=> $alipay_config['seller_email'],
            "out_trade_no"	=> $out_trade_no,
            "subject"           => $subject,
            "total_fee"         => $total_fee,
            "body"              => $body,
            "show_url"          => $show_url,
            "anti_phishing_key"	=> $anti_phishing_key,
            "exter_invoke_ip"	=> $exter_invoke_ip,
            "_input_charset"	=> trim(strtolower($alipay_config['input_charset']))
        );

        //建立请求
        $alipaySubmit = new AlipaySubmit($alipay_config);
        $html_text = $alipaySubmit->buildRequestForm($parameter,"post", "确认");
        echo $html_text;
    }

    
}