<?php
function clientSignin()
{
    //自动登录
    if (!session('client_id')) {
        try {
            D('Client')->signin();
        } catch (\Exception $e) {
            print_r($e);
            exit('我们碰到了一些问题,请退出重新访问我们!');
            //validateClientUnLoginRedirect();//throw new \Exception('登录失败');
        }
    }
}

/*
 * 已登录 无需执行登录操作
 */
function validateClientIsLoginRedirect($url = '')
{
    if (session('client_id')) {
        if (!$url) {
            $url = '/Home/Hairdresser/lists';
        }
        redirect($url);
        exit();
    }
}

function validateClientIsLoginRedirectAjax($url = '')
{
    if (session('client_id')) {
        if (!$url) {
            $url = '/Home/Hairdresser/lists';
        }
        $ajaxReturn['status_login'] = 1;
        $ajaxReturn['client_id'] = session('client_id');
        $ajaxReturn['redirect_url'] = $url;
        ajaxReturnJsonp($ajaxReturn);
    }
}

/*
 * 未登录 需要登录才能操作
 */
function validateClientUnLoginRedirect($url = '')
{
    if (!session('client_id')) {
        if (!$url) {
            $url = '/Client/signin';
        }
        redirect($url);
    }
}

function validateClientUnLoginRedirectAjax($url = '')
{
    if (!session('client_id')) {
        if (!$url) {
            $url = '/Client/signin';
        }
        $ajaxReturn['status_login'] = 0;
        $ajaxReturn['client_id'] = '';
        $ajaxReturn['redirect_url'] = $url;
        ajaxReturnJsonp($ajaxReturn);
    }
}

//获取access_token并保存到token.txt文件中
function build_access_token(){
    $ch = curl_init(); //初始化一个CURL对象
    curl_setopt($ch, CURLOPT_URL, "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx43e4e92d2a6164be&secret=e91801d2a9ef9e98ea0000e353e02b4f");//设置你所需要抓取的URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//设置curl参数，要求结果是否输出到屏幕上，为true的时候是不返回到网页中,假设上面的0换成1的话，那么接下来的$data就需要echo一下。
    $data = json_decode(curl_exec($ch));
    var_dump($data);
    if($data->access_token){
        $token_file = fopen("token.txt","w") or die("Unable to open file!");//打开token.txt文件，没有会新建
        fwrite($token_file,$data->access_token);//重写tken.txt全部内容
        fclose($token_file);//关闭文件流
    }else{
        echo $data->errmsg;
    }
    curl_close($ch);
}

//设置定时器，每两小时执行一次build_access_token()函数获取一次access_token
function set_interval(){
    ignore_user_abort();//关闭浏览器仍然执行
    set_time_limit(0);//让程序一直执行下去
    $interval = 7200;//每隔一定时间运行
    do{
        build_access_token();
        sleep($interval);//等待时间，进行下一次操作。
    }while(true);
}

//读取token
function read_token(){
    $token_file = fopen("token.txt", "r") or die("Unable to open file!");
    $rs = fgets($token_file);
    fclose($token_file);
    return $rs;
}


function GetWechatOpenId($js_code)
{
    if (!$js_code) {
        throw new \Exception('code参数为null！');
    }

    $url=C('WECHAT_GET_OPEN_ID');
    $wechat_data=C('WECHAT_XCX_DATA');
    $param=array();
    $param[]='appid='.$wechat_data['appid'];
    $param[]='secret='.$wechat_data['appsecret'];
    $param[]='js_code='.$js_code;
    $param[]='grant_type=authorization_code';

    $params=join('&',$param);

    $url=$url.'?'.$params;
    $curl=new \Home\Common\Curl();
    $result=$curl->go($url,'post');

    $result=json_decode($result,true);
    // if($result[0]!='1000'){   
    //     //throw new \Exception('系统繁忙，请稍后再试！');
    //     $message=C('SMS_RETURN_MESSAGE');
    //     throw new \Exception($message[$result[0]]);
    // }
    return $result;
}

function setWechatTemplate($open_id,$name,$time,$date,$timeStamp)
{
    $url=C('WECHAT_SET_TEMPLATE');
    $read_token=read_token();
    $touser=$open_id;
    $template_id=C('WECHAT_MODEL_SEND_ID');
    $page=C('WECHAT_SET_TEMPLATE');
    $form_id=C('WECHAT_SET_TEMPLATE');
    $name=$name;
    $time=$time;
    $date=$date;
    // $param=array(
    //     "touser" => $touser,
    //     "template_id" => $template_id,
    //     "form_id" => $timeStamp,
    //     "data" => array(
    //         "keyword1"=> array(
    //             "value"=> $name
    //         ),
    //         "keyword2"=> array(
    //             "value"=> $time
    //         ),
    //         "keyword3"=> array(
    //             "value"=> $date
    //         ),
    //     ),
    // );
    // $url=$url.$read_token;

    // $curl=new \Home\Common\Curl();
    // $result=$curl->go($url,'post',$param);
    // var_dump($result);
    // $result=json_decode($result,true);
    // if($result[0]!='1000'){   
    //     //throw new \Exception('系统繁忙，请稍后再试！');
    //     $message=C('SMS_RETURN_MESSAGE');
    //     throw new \Exception($message[$result[0]]);
    // }
    $dataa=array(
        "keyword1"=> array(
            "value"=> $name
        ),
        "keyword2"=> array(
            "value"=> $time
        ),
        "keyword3"=> array(
            "value"=> $date
        ),
    );

    $data=array();
    $data['touser']=$touser;
    $data['template_id']='CQGSBsJ_6hteCAMm4EYGaXHqqad-Ad-LhEbyLA-g02Y';
    $data['form_id']=$timeStamp;
    $data['data']=$dataa;
    $url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='.$read_token; 
    $type="json";
    if($type=='json'){//json $_POST=json_decode(file_get_contents('php://input'), TRUE);
        $headers = array("Content-type: application/json;charset=UTF-8","Accept: application/json","Cache-Control: no-cache", "Pragma: no-cache");
        $data=json_encode($data);
    }
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS,$data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers );
    $output = curl_exec($curl);
    if (curl_errno($curl)) {
        echo 'Errno'.curl_error($curl);//捕抓异常
    }
    curl_close($curl);
    return $output;
}

function GETWechatTemplate()
{
    $url=C('WECHAT_GET_TEMPLATE');
    $read_token=read_token();
    $param=array(
        "offset"=>0,
        "count"=>5
    );


    $url=$url.$read_token;
    $param=json_encode($param);
    $curl=new \Home\Common\Curl();
    $result=$curl->go($url,'post',$param);
    var_dump($result);
    $result=json_decode($result,true);
    // if($result[0]!='1000'){   
    //     //throw new \Exception('系统繁忙，请稍后再试！');
    //     $message=C('SMS_RETURN_MESSAGE');
    //     throw new \Exception($message[$result[0]]);
    // }
    return $result;
}