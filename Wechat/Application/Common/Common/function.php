<?php
/*
异常信息处理
*/
function filterExceptionMessage($e, $message)
{
    $json = json_decode($e->getMessage());
    if (!is_null($json)) {
        return $json->errors;
    }
    if (!$message) {
        $message = '操作失败';
    }
    return $message;
}

function ajaxReturnJsonp($data)
{
    //返回JSON数据格式到客户端 包含状态信息
    header('Content-Type:application/json; charset=utf-8');
    $handler = isset($_GET[C('VAR_JSONP_HANDLER')]) ? $_GET[C('VAR_JSONP_HANDLER')] : C('DEFAULT_JSONP_HANDLER');
    exit($handler . '(' . json_encode($data) . ');');
}

function sendSmsVerificationCode($mobile, $code)
{
    //接收的手机号
    if (!$mobile) {
        return;
    }
    if (!$code) {
        return;
    }
    $sms_config = C('SMS_CONFIG_VERIFICATION_CODE');
    $url = $sms_config['url'];
    $data[] = 'apikey=' . $sms_config['apikey'];//用户唯一标识
    $data[] = 'tpl_id=' . $sms_config['tpl_id'];//模板id
    $sms_config['tpl_value'] = str_replace('{code}', $code, $sms_config['tpl_value']);
    $data[] = 'tpl_value=' . urlencode($sms_config['tpl_value']);
    $data[] = 'mobile=' . $mobile;
    $data = join('&', $data);
    //  $data=str_replace('{code}', $code, $data);

    $curl = new \Home\Common\Curl();
    $result = $curl->go($url, 'post', $data);
    if (!$result = json_decode($result)) {
        throw new \Exception(L('OPERATION_FAILED'));
    }
    if ($result->msg != 'OK') {
        throw new \Exception(L('OPERATION_FAILED'));
    }

}

function passwordEncode($password)
{
    if (!$password) {
        return;
    }
    return md5(md5($password));
}

function passwordDecode()
{

}

/*
生成随机密码
*/
function generatePassword($length = 6, $strs = '')
{
    if (!$strs) {
        //$strs='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $strs = '0123456789';
    }
    $password = str_split($strs);
    shuffle($password);
    $password = join('', $password);
    return substr($password, 0, $length);
}

function ifNotAjaxGetException()
{
    if (!(IS_AJAX && IS_GET)) {
        throw new \Exception('请求方式错误');
    }
}

function ifNotAjaxPostException()
{
    if (!(IS_AJAX && IS_POST)) {
        throw new \Exception('请求方式错误');
    }
}

function generateToken()
{
    $uniqid = uniqid('taitainet', true);
    return str_replace('.', '', $uniqid);
}

function generateOrdersNo()
{
    $uniqid = uniqid('taitainet', true);
    return str_replace('.', '', $uniqid);
}

/*
length 长度
class  类型 numeric alphabet chinese mix
*/
function generateRandomString($length = 4, $class = 'numeric')
{
    switch ($class) {
        case 'numeric':
            return getRandString($length, '0123456789');
            break;
        case 'alphabet':
            return getRandString($length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            break;
        /*
         case 'chinese':
        break;
        */
        case 'mix':
        default:
            return getRandString($length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            break;
    }
}

/*
获取随机字符串
*/
function getRandString($length, $string = '')
{
    $arrs = array();
    $strs_arrs = str_split($string);
    $strs_arrs_count = count($strs_arrs);
    for ($i = 0; $i < $length; $i++) {
        $arrs[] = $strs_arrs[rand(0, $strs_arrs_count - 1)];
    }
    return join('', $arrs);
}

function generateUniqid($prefix = '')
{
    $uniqid = uniqid($prefix, true);
    return str_replace('.', '', $uniqid);
}

function cmsLog($log)
{
    exit($log);
}

function getWechatPlatformConfig()
{
    if (session('wechat_platform')) {
        return session('wechat_platform');
    }
    if (!$conditions['no'] = C('WECHAT_PLATFORM_NO')) {
        throw new \Exception(L('OPERATION_FAILED'));
    }
    if (!$wechat_platform = D('Home/WechatPlatform')->getResultByConditions($conditions)) {
        throw new \Exception(L('OPERATION_FAILED'));
    }
    session('wechat_platform', $wechat_platform);
    return $wechat_platform;
}

/*
 get access token
*/
function getWechatPlatformAccessToken($app_id, $secret, $wechat_platform_id, $clean = 0, $access_token)
{
    if (!$app_id) {
        return;
    }
    if (!$secret) {
        return;
    }
    $bool = false;
    if (!$clean) {
        if (!$wechat_platform_id) {
            $result = D('Home/WechatPlatformAccessToken')->getResult();
        } else {
            $result = D('Home/WechatPlatformAccessToken')->getResultByWechatPlatformId($wechat_platform_id);
        }
        //if(!($result && $result['content'] && (($result['update_time']+7200)>time()))){
        //缩短比较时间 希望能保证token有效
        if ($result && $result['content'] && (($result['update_time'] + 3600) > time())) {
            return '{"access_token":"' . $result['content'] . '","expires_in":7200}';
        } else {
            $bool = true;
        }
    } else {
        D('Home/WechatPlatformAccessToken')->clean($access_token);
        $bool = true;
    }
    if ($bool) {
        $url = C('SITE_INTERFACE_URL') . '/Wechat/WechatPlatformAccessToken/getResult?app_id=' . $app_id . '&secret=' . $secret;
        $curl = new \Home\Common\Curl();
        $result = $curl->go($url, 'get');
        D('Home/WechatPlatformAccessToken')->setting($result, $wechat_platform_id);
        return $result;
    }
}


/*
 删除无用的access token
*/
function deleWechatPlatformAccessToken($wechat_platform_id)
{
    $wechat_platform_access_token_model_object = D('Home/WechatPlatformAccessToken');
    $wechat_platform_access_token_model_object->dele($wechat_platform_id);
}

/*
 get js_api_ticket
*/
function getWechatPlatformJsApiTicket()
{
    //get access tokon
    $wechat_platform = getWechatPlatformConfig();
    $access_token_json_strs = getWechatPlatformAccessToken($wechat_platform['app_id'], $wechat_platform['app_secret'], $wechat_platform['id']);
    $access_token_object = json_decode($access_token_json_strs);
    //if($access_token_object->expires_in!=7200){
    //缩短比较时间 希望能保证token有效
    if ($access_token_object && ($access_token_object->expires_in != 7200)) {
        throw new \Exception(L('AccessToken过期'));
    }
    $access_token = $access_token_object->access_token;
    //get js api ticket
    $wechat_platform_js_api_ticket_model_object = D('Home/WechatPlatformJsApiTicket');
    $result = $wechat_platform_js_api_ticket_model_object->getResult();
    //缩短比较时间 希望能保证token有效
    if ($result && $result['content'] && (($result['update_time'] + 3600) > time())) {//if(!($result && $result['content'] && (($result['update_time']+7200)>time()))){
        return '{"ticket":"' . $result['content'] . '","expires_in":7200}';
    } else {
        $url = C('SITE_INTERFACE_URL') . '/Wechat/WechatPlatformJsApiTicket/getResult?access_token=' . $access_token;
        $curl = new \Home\Common\Curl();
        $result = $curl->go($url, 'get');
        $result_json = json_decode($result);
        if ($result_json->errmsg != 'ok') {
            if ($result_json->errcode == 40001) {
                //access_token invalid
                getWechatPlatformAccessToken($wechat_platform['app_id'], $wechat_platform['app_secret'], $wechat_platform['id'], 1, $access_token);
            }
            throw new \Exception('获取WechatPlatformJsApiTicket出现错误！请重试!');//.$result_json->errmsg
        }
        $wechat_platform_js_api_ticket_model_object->setting($result);
        return $result;
    }
}

/*
 删除无用的js_api_ticket
*/
function deleWechatPlatformJsApiTicket()
{
    $wechat_js_api_ticket_model_object = D('Home/WechatJsApiTicket');
    $wechat_js_api_ticket_model_object->dele();
}

/*
 * 获取微信调用需要用到的参数
 */
function getWechatPlatformJsApiParam()
{
    $wechat_platform = getWechatPlatformConfig();
    $wechat_platform_js_api_ticket_json_strs = getWechatPlatformJsApiTicket();
    $wechat_platform_js_api_ticket_json_obj = json_decode($wechat_platform_js_api_ticket_json_strs);

    $strs[] = 'jsapi_ticket=' . $wechat_platform_js_api_ticket_json_obj->ticket;
    $noncestr = getRandString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    $strs[] = 'noncestr=' . $noncestr;
    $timestamp = time();
    $strs[] = 'timestamp=' . $timestamp;
    $strs[] = 'url=' . C('SITE_URL_M') . '/' . $_SERVER['PATH_INFO'];
    $signature = sha1(join('&', $strs));
    return array($wechat_platform['app_id'], $noncestr, $timestamp, $signature);
}

function ajaxRequestCommonProcess($model_object, $method, $param = '', $successful_message = '', $failed_message = '')
{
    ifNotAjaxPostException();
    if (!$method) {
        $method = ACTION_NAME;
    }
    try {
        if ($param) {
            $param = explode(',', $param);
        }
        $model_object->$method($param);
        $ajaxReturnData['status'] = 1;
        $ajaxReturnData['message'] = L('OPERATION_SUCCESSFUL');
    } catch (\Exception $e) {
        $ajaxReturnData['status'] = 0;
        $ajaxReturnData['message'] = $e->getMessage();
    }
    return $ajaxReturnData;
}

/*
 * 根据post数组自动生成对应变量
 */
function generatePostParamVars()
{
    if (!$_POST) {
        return;
    }
    foreach ($_POST as $k => $v) {
        $params[$k] = I('post.' . $k);
    }
    return $params;
}

/*
 * 根据get数组自动生成对应变量
 */
function generateGetParamVars()
{
    if (!$_GET) {
        return;
    }
    foreach ($_GET as $k => $v) {
        $params[$k] = I('get.' . $k);
    }
    return $params;
}

function generateRequestParamVars()
{
    if (!$_REQUEST) {
        return array();
    }
    foreach ($_REQUEST as $k => $v) {
        $params[$k] = $v;
    }
    return $params;
}

/*
 自定义分页处理 以便前端ajax使用
 $page_num 当前页码
 $results_count	记录总数
 $page_size	每页显示数量
*/
function paging_custom_process($page_num, $results_count, $page_size = 3)
{
    if (!$results_count) {
        return;
    }
    $path_info = $_SERVER['PATH_INFO'];

    $page_count = ceil($results_count / $page_size);
    if ($page_num < 1) {
        $page_num = 1;
    } elseif ($page_num > $page_count) {
        $page_num = $page_count;
    }

    $prev = $page_num - 1;
    $prev_strs = '';
    if ($prev >= 1) {
        if (preg_match('/page\/\d+/', $path_info)) {
            $path_info = preg_replace('/page\/\d+/', 'page/' . $prev, $path_info);
        } else {
            $path_info .= '/page/' . $next;
        }
        $prev_strs = '
			<a href="/' . $path_info . '">
				<button type="button" class="btn btn-default btn_checked">上页</button>
			</a>
		';
    }

    $next = $page_num + 1;
    $next_strs = '';
    if ($next <= $page_count) {
        if (preg_match('/page\/\d+/', $path_info)) {
            $path_info = preg_replace('/page\/\d+/', 'page/' . $next, $path_info);
        } else {
            $path_info .= '/page/' . $next;
        }
        $next_strs = '
			<a href="/' . $path_info . '">
				<button type="button" class="btn btn-default btn_checked">下页</button>
			</a>
		';
    }

    $paging_strs = '
		<div class="col-xs-2 col-md-2 col-sm-2">[--prev_strs--]</div>
		<div class="col-xs-1 col-md-1 col-sm-1" style="text-align:center;line-height:2em">
		<small>' . $page_num . '/' . $page_count . '</small>
		</div>
		<div class="col-xs-2 col-md-2 col-sm-2">[--next_strs--]</div>
	';

    $paging_strs = str_replace('[--prev_strs--]', $prev_strs, $paging_strs);
    $paging_strs = str_replace('[--next_strs--]', $next_strs, $paging_strs);

    return $paging_strs;
}

/*
短信发送
user        登录帐号
password    登录密码（md5小写加密）
cpid        产品编号（通道产品列表接口查看）
usernumber  发送手机号用,分隔，最多5000个（如：13500000001,13500000002,13500000003)
content     发送内容（utf-8编码）

<form action="http://219.148.38.12:7080/TYFYSMS/Product" method="post">
<input type="text" name="user"/>
<input type="text" name="password"/>
<input type="submit" value="submit"/>
</form>
*/
function sms_send_do($mobile, $content)
{
    if (!$mobile) {
        throw new \Exception("手机号码不能为空！");
    }
    if (!$content) {
        throw new \Exception("短信内容不能为空！");
    }
    $sms_machine = C('SMS_MACHINE');
    $url = $sms_machine['URL'];
    $LoginName = $sms_machine['LoginName'];
    $Password = $sms_machine['Password'];
    $SerialNumber = $sms_machine['SerialNumber'];
    $SpCode = $sms_machine['SpCode'];
    $f = $sms_machine['f'];
    $data[] = 'SpCode=' . $SpCode;
    $data[] = 'LoginName=' . $LoginName;
    $data[] = 'Password=' . $Password;
    $data[] = 'UserNumber=' . $mobile;
    $data[] = 'MessageContent=' . $content;
    $data[] = 'SerialNumber=' . $SerialNumber;
    $data[] = 'ScheduleTime=';
    $data[] = 'f=' . $f;
    $data = join('&', $data);

    $chatset = 'gbk';
    $data = mb_convert_encoding($data, 'gbk', 'utf-8');

    $curl = new \Home\Common\Curl();

    $res = $curl->go($url, 'POST', $data, $chatset);
    $res = mb_convert_encoding($res, 'utf-8', 'gbk');
    parse_str($res, $result);
    if (($result['result']) != '0') {

        throw new \Exception($result['description']);
    }
}

/*
通用参数验证函数
*/
function validateCommonPara($param, $class, $errMsg = '')
{
    $et_default = array(
        'numeric' => '参数必须是数字类型！',
        'common_id' => 'ID格式错误！',
        'common_id_multiple' => 'ID格式错误！',
        'wechat_open_id' => '微信OPEN_ID为空！',
        'verify_code' => '验证码错误！',
        'verify_code_sms' => '短信验证码错误！',
        'email' => '电子邮件格式错误！',
        'phone_mobile' => '手机号码格式错误！',
        'date' => '日期格式错误,正确格式例如1970-01-01！',
        'gender' => '性别格式错误！',
        'orders_id' => '订单ID格式错误！',
        'password' => '密码格式错误,请输入6-20位长度任意字符！',
        'passport' => '护照号码不能空！',
    );
    $errMsg = $errMsg ? $errMsg : $et_default[$class];
    switch ($class) {
        //通用ID验证  数字格式
        case 'numeric':
            if (!is_numeric($param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'common_id':
            if (!is_numeric($param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'common_id_multiple':
            if (!preg_match('/^\d+(\,\d+)*$/i', $param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'wechat_open_id':
            //格式验证
            if (!$param) {
                throw new \Exception($errMsg);
            }
            //有效性验证
            break;
        case 'verify_code':
            if (strlen($param) != 4) {
                throw new \Exception($errMsg);
            }
// 			$verify = new \Think\Verify();
// 			if(!$verify->check($param)){
// 				throw new \Exception($errMsg);
// 			}
            break;
        case 'verify_code_sms':
            //格式验证
            if (strlen($param) != 4) {
                throw new \Exception($errMsg);
            }
            //有效性验证
            break;
        case 'email':
            $length = strlen($param);
            //长度范围在6-40内
            if ($length < 6 || $length > 40) {
                throw new \Exception($errMsg);
            }
            if (!preg_match('/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/i', $param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'phone_mobile':
            if (!preg_match('/^1[3-8]{1}\d{9}$/', $param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'date':
            if (!preg_match('/^(19|20)(\d){2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/', $param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'gender':
            if (!strlen($param)) {
                throw new \Exception($errMsg);
            }
            if (!in_array($param, array(0, 1))) {
                throw new \Exception($errMsg);
            }
            break;
        case 'orders_id':
            if (!is_numeric($param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'password':
            if (!preg_match('/^.{6,20}$/', $param)) {
                throw new \Exception($errMsg);
            }
            break;
        case 'passport':
            if (!$param) {
                throw new \Exception($errMsg);
            }
            break;
        default:
            throw new \Exception("校验参数类型无法匹配！" . $param);
    }

}

function string_mask_process($string, $beg, $end)
{
    if (!$string) {
        return;
    }
    $strings = str_split($string);
    $count = count($strings);
    if ($count < $end) {
        $end = $count;
    }
    for (; $beg < $end; $beg++) {
        $strings[$beg] = '*';
    }
    return join('', $strings);

}

/*
访问方式识别
common 普通浏览器
wechat 微信浏览器
*/
function validate_access_method()
{
    if (!C('DEPLOYMENT_MODEL')) {//开发者模式下忽略
        return;
    }
    return;
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    if (strpos($user_agent, 'MicroMessenger') === false) {
        session('access_method', 'common');
        exit('必须通过微信访问！');
    } else {
        session('access_method', 'wechat');
    }

}

function validate_wechat_open_id()
{
    return;
    if (!I('param.wechat_open_id')) {
        if (!C('DEPLOYMENT_MODEL')) {//开发者模式下忽略
            return;
        }
        //wechat_open_id
        if (!session('wechat_open_id')) {
            //静默方式获取openid
            wechat_oauth_redirect();
            //throw new \Exception("wechat_open_id null");
        }
    } else {
        session('wechat_open_id', I('param.wechat_open_id'));
    }
}

/*
链接处理
*/
function process_link($link)
{
    if (!$link) {
        echo 'javascript:void(0)';
    } else {
        echo $link;
    }
}

/*
微信授权跳转
*/
function wechat_oauth_redirect()
{
    //已有openid 说明用户已经关注了公众平台
    if (I('get.wechat_open_id')) {
        return;
    }

    if (session('wechat_open_id')) {
        return;
    }
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    if (strpos($user_agent, 'MicroMessenger') === false) {
        //echo "HTTP/1.1 401 Unauthorized";
        //exit('非微信浏览器禁止浏览');
    }
    if (!$conditions['no'] = C('WECHAT_PLATFORM_NO')) {
        throw new \Exception(L('OPERATION_FAILED'));
    }
    if (!$wechat_platform = D('Home/WechatPlatform')->getResultByConditions($conditions)) {
        throw new \Exception("公众平台信息不全！");
    }
    if (!$wechat_platform['app_id']) {
        throw new \Exception("公众平台信息不全！");
    }
    $appid = $wechat_platform['app_id'];
    $redirect_uri = C('WECHAT_OAUTH_REDIRECT_URL') . '/redirect_callback/' . base64_encode($_SERVER['REQUEST_URI']);
    //session('redirect_callback',$_SERVER['REQUEST_URI']);//授权成功后跳转地址
    $url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . $appid . '&redirect_uri=' . $redirect_uri . '&response_type=code&scope=snsapi_userinfo&state=a#wechat_redirect';
    //$url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$appid.'&redirect_uri='.$redirect_uri.'&response_type=code&scope=snsapi_base&state=a#wechat_redirect';

    redirect($url);
}

function saveBase64Files($files, $save_tmps = 0)
{
    if (!$files) {
        return;
    }
    if (!preg_match('/^data:\s*image\/\w+;base64/', $files)) {
        return;
    }
    $file = new \Common\Common\File();
    return $file->saveBase64Files($files, $save_tmps);
}

/*
*从临时图片文件夹移动图片到正式图片文件夹
*/
function processMoveFilesFromTmpsToStorage($file1, $file2 = '', $dirname = 'System')
{
    $file = new \Common\Common\File();
    return $file->processMoveFilesFromTmpsToStorage($file1, $file2, $dirname);
}

/*
 *从临时文件夹移动文件到正式文件夹
 */
function processMoveFilesFromTmpsToStorageForContent($content1, $content2 = '')
{
    $file = new \Common\Common\File();
    return $file->processMoveFilesFromTmpsToStorageForContent($content1, $content2);
}

/*
 *删除文件
 */
function processDeleFiles($files)
{
    if (!$files) {
        return;
    }
    $file = new \Common\Common\File();
    return $file->processDeleFiles($files);
}

/*
 *删除匹配文件
 */
function processDeleFilesForContent($content)
{
    if (!$content) {
        return;
    }
    $file = new \Common\Common\File();
    return $file->processDeleFilesForContent($content);
}

function paging_process($paging)
{
    $paging = str_replace('href', 'attr_href', $paging);
    $paging = str_replace('/index.html', '', $paging);
    /*
	$paging=preg_replace('/\/index\.php\/\w+\/index\/page\//', '', $paging);
	$paging=preg_replace('/\/index\.php\/\w+\/lists_ajax\/page\//', '', $paging);
 	$paging=preg_replace('/\/index\.php\/\w+\/lists_ajax\/channel\/\w+\/page\//', '', $paging);
 	$paging=preg_replace('/\/index\.php\/\w+\/lists_ajax\/country\/\w+\/page\//', '', $paging);
	$paging=preg_replace('/\/index\.php\/[^<>]+\/page\//', '', $paging);
    if(preg_match_all('/class="(\w+)"\spage/', $paging,$matches)){
        foreach($matches[1] as $match){
            $paging=preg_replace('/class="'.$match.'"/','class="'.$match.' J_pbc_pages_btn"', $paging);
        }
    }
    */
    return $paging;
}

function url_get_contents($strUrl, $boolUseCookie = false)
{
    $ch = curl_init($strUrl);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPGET, true);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_REFERER, $_SERVER['HTTP_REFERER']);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 3);
    if ($boolUseCookie && is_array($_COOKIE) && count($_COOKIE) > 0) {
        $cookie_str = '';
        foreach ($_COOKIE as $key => $value) {
            $cookie_str .= "$key=$value; ";
        }
        curl_setopt($ch, CURLOPT_COOKIE, $cookie_str);
    }
    $response = curl_exec($ch);
    if (curl_errno($ch) != 0) {
        return false;
    }
    curl_close($ch);
    return $response;
}

function outputCommentStar($star = 0)
{
    //$star = floor($star);
    $output = '';
    for ($i = 1; $i < 6; $i++) {
        if ($i <= $star) {
            $output .= '<img src="/Images/star_checked.png">';
        } else {
            $output .= '<img src="/Images/star_un_checked.png">';
        }
    }
    return $output;
}

/*
**计算现在时间与发布消息的时间之间的时间差
*/
function get_timestamp_to_visual_time($create_time)
{
    $current_time = time();
    $visual_time = '';
    $differ_time = $current_time - $create_time;
    if ($differ_time >= 0 && $differ_time <= 60) {
        $visual_time = '1分钟前';
    } else if ($differ_time > 60 && $differ_time <= 120) {
        $visual_time = '2分钟前';
    } else if ($differ_time > 120 && $differ_time <= 180) {
        $visual_time = '3分钟前';
    } else if ($differ_time > 180 && $differ_time <= 240) {
        $visual_time = '4分钟前';
    } else if ($differ_time > 240 && $differ_time <= 300) {
        $visual_time = '5分钟前';
    } else if ($differ_time > 300 && $differ_time <= 360) {
        $visual_time = '6分钟前';
    } else if ($differ_time > 360 && $differ_time <= 420) {
        $visual_time = '7分钟前';
    } else if ($differ_time > 420 && $differ_time <= 480) {
        $visual_time = '8分钟前';
    } else if ($differ_time > 480 && $differ_time <= 540) {
        $visual_time = '9分钟前';
    } else if ($differ_time > 540 && $differ_time <= 600) {
        $visual_time = '10分钟前';
    } else if ($differ_time > 600 && $differ_time <= 1800) {
        $visual_time = '半小时前';
    } else if ($differ_time > 1800 && $differ_time <= 3600) {
        $visual_time = '1小时前';
    } else if ($differ_time > 3600 && $differ_time <= 7200) {
        $visual_time = '2小时前';
    } else if ($differ_time > 7200 && $differ_time <= 10800) {
        $visual_time = '3小时前';
    } else if ($differ_time > 10800 && $differ_time <= 14400) {
        $visual_time = '4小时前';
    } else if ($differ_time > 14400 && $differ_time <= 18000) {
        $visual_time = '5小时前';
    } else if ($differ_time > 18000 && $differ_time <= 21600) {
        $visual_time = '6小时前';
    } else if ($differ_time > 21600 && $differ_time <= 25200) {
        $visual_time = '7小时前';
    } else if ($differ_time > 25200 && $differ_time <= 28800) {
        $visual_time = '8小时前';
    } else if ($differ_time > 28800 && $differ_time <= 32400) {
        $visual_time = '9小时前';
    } else if ($differ_time > 32400 && $differ_time <= 36000) {
        $visual_time = '10小时前';
    } else if ($differ_time > 36000 && $differ_time <= 39600) {
        $visual_time = '11小时前';
    } else if ($differ_time > 39600 && $differ_time <= 43200) {
        $visual_time = '12小时前';
    } else if ($differ_time > 43200 && $differ_time <= 46800) {
        $visual_time = '13小时前';
    } else if ($differ_time > 46800 && $differ_time <= 50400) {
        $visual_time = '14小时前';
    } else if ($differ_time > 50400 && $differ_time <= 54000) {
        $visual_time = '15小时前';
    } else if ($differ_time > 54000 && $differ_time <= 57600) {
        $visual_time = '16小时前';
    } else if ($differ_time > 57600 && $differ_time <= 61200) {
        $visual_time = '17小时前';
    } else if ($differ_time > 61200 && $differ_time <= 64800) {
        $visual_time = '18小时前';
    } else if ($differ_time > 64800 && $differ_time <= 68400) {
        $visual_time = '19小时前';
    } else if ($differ_time > 68400 && $differ_time <= 72000) {
        $visual_time = '20小时前';
    } else if ($differ_time > 72000 && $differ_time <= 75600) {
        $visual_time = '21小时前';
    } else if ($differ_time > 75600 && $differ_time <= 79200) {
        $visual_time = '22小时前';
    } else if ($differ_time > 79200 && $differ_time <= 82800) {
        $visual_time = '23小时前';
    } else if ($differ_time > 82800 && $differ_time <= 86400) {
        $visual_time = '1天前';
    } else if ($differ_time > 86400 && $differ_time <= 172800) {
        $visual_time = '2天前';
    } else if ($differ_time > 172800 && $differ_time <= 259200) {
        $visual_time = '3天前';
    } else if ($differ_time > 259200 && $differ_time <= 345600) {
        $visual_time = '4天前';
    } else if ($differ_time > 345600 && $differ_time <= 432000) {
        $visual_time = '5天前';
    } else if ($differ_time > 432000 && $differ_time <= 518400) {
        $visual_time = '6天前';
    } else if ($differ_time > 518400 && $differ_time <= 604800) {
        $visual_time = '7天前';
    } else {
        $visual_time = date('m-d H:i', $create_time);
    }
    return $visual_time;
}

//二手车价值结算
function sell_car_money($car_info_id)
{
    $return_val = array();
    //获取当前车辆信息
    $conditions = array();
    $conditions['id'] = $car_info_id;
    if (!$carinfo = D('CarInfo')->where($conditions)->find()) {
        $return_val['code'] = '1001';
        $return_val['code_name'] = '找不到该车信息,请返回正确car_info_id';
        return $return_val;
    }

    //获取当前品牌信息
    if (!$carinfo['detail_model']) {
        $return_val['code'] = '1002';
        $return_val['code_name'] = '该车信息没有详细车型信息,car_info_id=' . $car_info_id;
        return $return_val;
    }
    $sql = "select * FROM car_config WHERE 车型名称 = '" . $carinfo['detail_model'] . "'";
    if (!$car_config = D('CarConfig')->query($sql)) {
        $return_val['code'] = '1003';
        $return_val['code_name'] = '找不到该车型信息,车型名称为' . $carinfo['detail_model'];
        return $return_val;
    }
    $car_config_use = '';
    foreach ($car_config as $key => $value) {
        if ($value['厂商指导价(元)']) {
            $car_config_use['first_money'] = $value['厂商指导价(元)'];
        }
        if ($value['年款']) {
            $car_config_use['car_year'] = $value['年款'];
        }
    }
    if (!$car_config_use['first_money']) {
        $return_val['code'] = '1004';
        $return_val['code_name'] = '找不到该车型厂商指导价,车型名称为' . $carinfo['detail_model'];
        return $return_val;
    }
    //出始比率
    $ratio = 7000;
    if ($car_config_use['car_year']) {
        if (2017 - $car_config_use['car_year'] < 2) {
            $ratio = $ratio - (2017 - $car_config_use['car_year']) * 50;
        } elseif (2017 - $car_config_use['car_year'] < 4) {
            $ratio = $ratio - (2017 - $car_config_use['car_year']) * 150;
        } elseif (2017 - $car_config_use['car_year'] < 6) {
            $ratio = $ratio - (2017 - $car_config_use['car_year']) * 250;
        } elseif (2017 - $car_config_use['car_year'] > 6) {
            $ratio = $ratio - (2017 - $car_config_use['car_year']) * 250;
        }
    }
    if ($carinfo['board_date']) {
        if (time() - $carinfo['board_date'] < 7884000) {
            $ratio = $ratio - (time() - $carinfo['board_date']) / 8000;
        } elseif (time() - $carinfo['board_date'] < 31536000) {
            $ratio = $ratio - (time() - $carinfo['board_date']) / 100000;
        } elseif (time() - $carinfo['board_date'] < 157680000) {
            $ratio = $ratio - (time() - $carinfo['board_date']) / 90000;
        } elseif (time() - $carinfo['board_date'] > 157680000) {
            $ratio = $ratio - 1800;
        }
    }
    if ($carinfo['kilometers_number']) {
        $ratio = $ratio - $carinfo['kilometers_number'] * 80;
    }
    if ($car_config_use['first_money'] < 20) {
        $carmoney = $ratio * ($car_config_use['first_money'] + 1) / 10000 * 1.1;
    } elseif ($car_config_use['first_money'] < 70) {
        $carmoney = $ratio * $car_config_use['first_money'] / 10000 * 1.1;
    } elseif ($car_config_use['first_money'] > 70) {
        $carmoney = $ratio * $car_config_use['first_money'] / 10000;
    }
    $return_val['code'] = '1';
    $return_val['code_name'] = '核算成功';
    $return_val['code_first_money'] = $car_config_use['first_money'];
    $return_val['code_now_money'] = $carmoney;
    return $return_val;
}
