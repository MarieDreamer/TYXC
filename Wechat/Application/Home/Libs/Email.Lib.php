<?php
namespace Home\Libs;
class EmailLib{

    /*
    通用邮件发送程序
    */
    public function send($client_mail_address,$client_name,$subject,$body){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }
            /*
            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }
            */
            if(!$subject){
                throw new \Exception("邮件标题不能为空！");
            }
            if(!$body){
                throw new \Exception("邮件内容不能为空！");
            }
            smtp_send_do($client_mail_address,$client_name,$subject,$body);
        }catch (\Exception $e){
            throw new \Exception("通用邮件发送程序异常");
        }
    }

    /*
    会员注册邮件通知
    */
    public function user_register_email_notice($client_mail_address,$client_name,$username,$password){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }
            /*
            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }
            */
            if(!$username){
                throw new \Exception("会员帐号不能为空！");
            }
            if(!$password){
                throw new \Exception("会员密码不能为空！");
            }
         
            $notice_email_send_status=C('NOTICE_EMAIL_SEND_STATUS');
            //邮件通知
            if(isset($notice_email_send_status['USER_REGISTER']) && $notice_email_send_status['USER_REGISTER']){
                $email_template=C('EMAIL_TEMPLATE');
                $subject=$email_template['USER_REGISTER']['subject'];
                $body=$email_template['USER_REGISTER']['body'];
                $search=array(
                    '[--username--]',
                    '[--password--]'
                );
                $replace=array(
                    $username,
                    $password
                );
                $body=str_replace($search,$replace,$body);
                ob_start();
                $content=file_get_contents(C('APPLICATION_DIR').'/Home/Data/email_register_notice_tpl.html');
                ob_end_clean();
                $body=str_replace('[--content--]',$body,$content);
                smtp_send_do($client_mail_address,$client_name,$subject,$body);
            }
        }catch (\Exception $e){
            throw new \Exception("会员注册邮件通知程序异常");
        }
    }

    /*
    会员自动注册邮件通知
    */
    public function user_register_auto_email_notice($client_mail_address,$client_name,$username,$password){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }
            /*
            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }
            */
            if(!$username){
                throw new \Exception("会员帐号不能为空！");
            }
            if(!$password){
                throw new \Exception("会员密码不能为空！");
            }
         
            $notice_email_send_status=C('NOTICE_EMAIL_SEND_STATUS');
            //邮件通知
            if(isset($notice_email_send_status['USER_REGISTER_AUTO']) && $notice_email_send_status['USER_REGISTER_AUTO']){
                $email_template=C('EMAIL_TEMPLATE');
                $subject=$email_template['USER_REGISTER_AUTO']['subject'];
                $body=$email_template['USER_REGISTER_AUTO']['body'];
                $search=array(
                    '[--username--]',
                    '[--password--]'
                );
                $replace=array(
                    $username,
                    $password
                );
                $body=str_replace($search,$replace,$body);
                ob_start();
                $content=file_get_contents(C('APPLICATION_DIR').'/Home/Data/email_register_auto_notice_tpl.html');
                ob_end_clean();
                $body=str_replace('[--content--]',$body,$content);
                smtp_send_do($client_mail_address,$client_name,$subject,$body);
            }
        }catch (\Exception $e){
            throw new \Exception("会员自动注册邮件通知程序异常");
        }
    }

    /*
    忘记密码邮件通知
    */
    public function password_forgot_email_notice($client_mail_address,$client_name,$token){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }
            /*
            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }
            */
            if(!$token){
            	throw new \Exception("TOKEN不能为空！");
            }
            $email_template=C('EMAIL_TEMPLATE');
            $subject=$email_template['PASSWORD_FORGOT']['subject'];
            $body=$email_template['PASSWORD_FORGOT']['body'];
            $search=array(
                '[--token--]',
            );
            $replace=array(
                $token,
            );
            $body=str_replace($search,$replace,$body);
            ob_start();
            $content=file_get_contents(C('APPLICATION_DIR').'/Home/Data/email_notice_tpl.html');
            ob_end_clean();
            $body=str_replace('[--content--]',$body,$content);
            $notice_email_send_status=C('NOTICE_EMAIL_SEND_STATUS');
            //邮件通知
            if(isset($notice_email_send_status['PASSWORD_FORGOT']) && $notice_email_send_status['PASSWORD_FORGOT']){
                smtp_send_do($client_mail_address,$client_name,$subject,$body);
            }
        }catch (\Exception $e){
            throw new \Exception("忘记密码邮件通知程序异常");
        }
    }

    /*
    订单支付成功
    */
    public function orders_paid_email_notice($client_mail_address,$client_name){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }
            /*
            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }
            */
         
            $notice_email_send_status=C('NOTICE_EMAIL_SEND_STATUS');
            //邮件通知
            if(isset($notice_email_send_status['ORDERS_PAID']) && $notice_email_send_status['ORDERS_PAID']){
                $email_template=C('EMAIL_TEMPLATE');
                $subject=$email_template['ORDERS_PAID']['subject'];
                $body=$email_template['ORDERS_PAID']['body'];
                /*
                ob_start();
                $content=file_get_contents(C('APPLICATION_DIR').'/Home/Data/email_register_auto_notice_tpl.html');
                ob_end_clean();
                $body=str_replace('[--content--]',$body,$content);
                */
                smtp_send_do($client_mail_address,$client_name,$subject,$body);
            }
        }catch (\Exception $e){
            throw new \Exception("订单支付成功邮件通知程序异常!");
        }
    }
    

}