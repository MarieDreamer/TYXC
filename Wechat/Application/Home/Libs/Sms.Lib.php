<?php
namespace Home\Libs;
class SmsLib{

    /*
    会员注册短息激活码发送
    */
    public function user_register_active_code_send($mobile,$active_code){
        if(!$mobile){
            throw new \Exception("手机号码不能为空！");
        }
        if(!$active_code){
            throw new \Exception("会员注册短信激活码不能为空！");
        }
        try{
            $sms_template=C('SMS_TEMPALTE');
            $content=$sms_template['ACTIVE_CODE'];
            $search=array(
                '[--active_code--]',
            );
            $replace=array(
                $active_code,
            );
            $content=str_replace($search,$replace,$content);
            header("Content-type: text/html; charset=utf-8"); 
            sms_send_do($mobile,$content);
        }catch (\Exception $e){
            throw new \Exception("会员注册短信激活码通知程序异常");
        }
    }

    /*
    会员注册短信通知
    */
    public function user_register_sms_notice($mobile,$username,$password){
        if(!$mobile){
            throw new \Exception("手机号码不能为空！");
        }
        if(!$username){
            throw new \Exception("会员帐号不能为空！");
        }
        if(!$password){
            throw new \Exception("会员密码不能为空！");
        }
        try{
            $notice_sms_send_status=C('NOTICE_SMS_SEND_STATUS');
            //短信通知
            if(isset($notice_sms_send_status['USER_REGISTER']) && $notice_sms_send_status['USER_REGISTER']){
                $sms_template=C('SMS_TEMPALTE');
                $content=$sms_template['USER_REGISTER'];
                $search=array(
                    '[--username--]',
                    '[--password--]'
                );
                $replace=array(
                    $username,
                    $password
                );
                $content=str_replace($search,$replace,$content);
                header("Content-type: text/html; charset=utf-8"); 
                sms_send_do($mobile,$content);
            } 
        }catch (\Exception $e){
            throw new \Exception("会员注册短信通知程序异常");
        }
    }

    /*
    会员自动注册短信通知
    */
    public function user_register_auto_sms_notice($mobile,$username,$password){
        if(!$mobile){
            throw new \Exception("手机号码不能为空！");
        }
        if(!$username){
            throw new \Exception("会员帐号不能为空！");
        }
        if(!$password){
            throw new \Exception("会员密码不能为空！");
        }
        try{
            $notice_sms_send_status=C('NOTICE_SMS_SEND_STATUS');
            //短信通知
            if(isset($notice_sms_send_status['USER_REGISTER_AUTO']) && $notice_sms_send_status['USER_REGISTER_AUTO']){
                $sms_template=C('SMS_TEMPALTE');
                $content=$sms_template['USER_REGISTER_AUTO'];
                $search=array(
                    '[--username--]',
                    '[--password--]'
                );
                $replace=array(
                    $username,
                    $password
                );
                $content=str_replace($search,$replace,$content);
                header("Content-type: text/html; charset=utf-8"); 
                sms_send_do($mobile,$content);
            } 
        }catch (\Exception $e){
            throw new \Exception("会员自动注册短信通知程序异常");
        }
    }

    /*
    忘记密码短信通知
    */
    public function password_forgot_sms_notice($mobile,$password){
        try{
            if(!$mobile){
                throw new \Exception("手机号码不能为空！");
            }
            if(!$password){
                throw new \Exception("密码不能为空！");
            }
            $sms_template=C('SMS_TEMPALTE');
            $content=$sms_template['PASSWORD_FORGOT'];
            $search=array(
                '[--password--]',
            );
            $replace=array(
                $password
            );
            $content=str_replace($search,$replace,$content);
            $notice_sms_send_status=C('NOTICE_SMS_SEND_STATUS');
            //短信通知
            if(isset($notice_sms_send_status['PASSWORD_FORGOT']) && $notice_sms_send_status['PASSWORD_FORGOT']){
                header("Content-type: text/html; charset=utf-8"); 
                sms_send_do($mobile,$content);
            } 
        }catch (\Exception $e){
            throw new \Exception("忘记密码短信通知程序异常");
        }
    }

    /*
    订单支付成功
    */
    public function orders_paid_sms_notice($mobile){
        try{
            if(!$mobile){
                throw new \Exception("手机号码不能为空！");
            }
            $sms_template=C('SMS_TEMPALTE');
            $content=$sms_template['ORDERS_PAID'];
            $notice_sms_send_status=C('NOTICE_SMS_SEND_STATUS');
            //短信通知
            if(isset($notice_sms_send_status['ORDERS_PAID']) && $notice_sms_send_status['ORDERS_PAID']){
                header("Content-type: text/html; charset=utf-8"); 
                sms_send_do($mobile,$content);
            } 
        }catch (\Exception $e){
            throw new \Exception("订单支付成功短信通知程序异常!");
        }
    }

}