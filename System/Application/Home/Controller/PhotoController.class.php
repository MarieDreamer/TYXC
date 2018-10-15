<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class PhotoController extends Controller{


    // static $Photo_Album='PhotoAlbum';
    static $PHOTO_MODEL='Photo';
    static $WECHAT_USER_MODEL='WechatUser';
    
    public function __construct(){
        // validateUnLoginRedirect();
        parent::__construct();
    }

    

    //图片管理页面显示
    public function lists(){
        extract(generateRequestParamVars());
        // validateUnLoginRedirect();
        checkAccess('Photo','view');
        list($paging, $results) = D(self::$PHOTO_MODEL)->lists();
        $this->assign('paging', $paging);
        $this->assign('results', $results);
        $this->display();
    }
    

    //图片删除
    public function dele_do(){
        try{
            // echo "123";
            // validateUnLoginRedirect();
            checkAjaxAccess('Photo','delete');
            D(self::$PHOTO_MODEL)->dele();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //修改图片页显示
    public function raedit(){
        // validateUnLoginRedirect();
        checkAccess('Photo','edit');
        $result=D(self::$PHOTO_MODEL)->getResultByConditions(array('id'=>I('get.id')));
        $result['content']=json_decode($result['content'],true);
        $this->assign('result',$result);
        $this->display();
    }


    //修改相册
    public function raedit_do(){
        try{
            // echo "123123132";
            // validateUnLoginRedirect();
            checkAjaxAccess('Photo','raedit');
            D(self::$PHOTO_MODEL)->raedit();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //添加相册页显示
    public function adds(){
        // validateUnLoginRedirect();
        checkAccess('Photo_album','adds');
        $this->display();
    }
    //添加相册
    public function adds_do(){
        try{
            // validateUnLoginRedirect();
            checkAjaxAccess('Photo','add');
            D(self::$PHOTO_MODEL)->adds();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    

}

    