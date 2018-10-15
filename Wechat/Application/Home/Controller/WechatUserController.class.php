<?php

namespace Home\Controller;

use Think\Controller;

class WechatUserController extends Controller
{
    static $WECHAT_USER_MODEL = 'WechatUser';

    public function login_do()
    {
        try{
            extract(generateRequestParamVars());
            $result=GetWechatOpenId($code);
            $conditions = array();
            $conditions['openid'] = $result['openid'];
            if (!$user=D(self::$WECHAT_USER_MODEL)->where($conditions)->find()) {//判断用户是否存在
                $userid=D(self::$WECHAT_USER_MODEL)->adds_do($result);//创建用户
                $conditions = array();
                $conditions['id'] = $userid;
                $user=D(self::$WECHAT_USER_MODEL)->where($conditions)->find();
            }else{
                D(self::$WECHAT_USER_MODEL)->login_do($user['id']);//用户登录
            }
            if (!$user['imageurl']) {
                $ajaxReturnData['getUserInfo']=1;
            }
            $data=array();
            $data['userid']=$user['id'];
            $data['username']=$user['nickname'];
            $data['userimage']=$user['imageurl'];
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function save_do()
    {
        try{
            D(self::$WECHAT_USER_MODEL)->save_do();//保存用户信息
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
}