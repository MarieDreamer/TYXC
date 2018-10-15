<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class WechatUserController extends Controller{


    // static $Photo_Album='PhotoAlbum';
    static $WECHAT_USER_MODEL='WechatUser';
    static $PHOTO_MODEL='Photo';
    
    public function __construct(){
        // validateUnLoginRedirect();
        parent::__construct();
    }




    //微信用户管理页面显示
    public function lists(){
        extract(generateRequestParamVars());
        // validateUnLoginRedirect();
        checkAccess('Wechat_User','view');
        list($paging, $results) = D(self::$WECHAT_USER_MODEL)->lists();
        $this->assign('paging', $paging);
        $this->assign('results', $results);
        $this->display();
    }
    

    //微信用户删除
    public function dele_do(){
        try{
            // echo "123";
            // validateUnLoginRedirect();
            checkAjaxAccess('Wechat_User','delete');
            D(self::$WECHAT_USER_MODEL)->dele();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function userphotoview(){
        extract(generateRequestParamVars());
        echo "111";
        // validateUnLoginRedirect();
        // echo "111";
        checkAccess('Photo','view');
        list($paging, $results) = D(self::$PHOTO_MODEL)->userphotoview();
        $this->assign('paging', $paging);
        $this->assign('results', $results);
        $this->display();
    }

    
}

    