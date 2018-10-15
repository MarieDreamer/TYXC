<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class PhotoAlbumController extends Controller{


    // static $Photo_Album='PhotoAlbum';
    static $PHOTO_ALBUM_MODEL='PhotoAlbum';
    static $PHOTO_MODEL='Photo';
    
    public function __construct(){
        // validateUnLoginRedirect();
        parent::__construct();
    }

//商户审核页
    public function lists(){
        extract(generateRequestParamVars());
        // echo "121212";
        // validateUnLoginRedirect();
        checkAccess('Photo_album','view');
        list($paging, $results) = D(self::$PHOTO_ALBUM_MODEL)->lists();
        $this->assign('paging', $paging);
        $this->assign('results', $results);
        $this->display();
    }
    



//修改页
    public function edit(){
        validateUnLoginRedirect();
        checkAccess('merchants_add','edit');
        $result=D(self::$MERCHANTS_MODEL)->getResultByConditions(array('id'=>I('get.id')));
        $this->assign('result',$result);
        $this->display();
    }

    public function edits(){
        validateUnLoginRedirect();
        checkAccess('merchants_add','edit');
        $result=D(self::$MERCHANTS_MODEL)->getResultByConditions(array('id'=>I('get.id')));
        $this->assign('result',$result);
        $this->display();
    }
    //审核状态修改
    public function edit_do(){
        try{
            validateUnLoginRedirect();
            checkAjaxAccess('merchants_add','edit');
            D(self::$MERCHANTS_MODEL)->edit();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
    //详细内容修改
    public function edits_do(){
        try{
            validateUnLoginRedirect();
            checkAjaxAccess('merchants_add','edit');
            D(self::$MERCHANTS_MODEL)->edits();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    

    //相册删除
    public function dele_do(){
        try{
            // echo "123";
            // validateUnLoginRedirect();
            checkAjaxAccess('Photo_Album','delete');
            D(self::$PHOTO_ALBUM_MODEL)->dele();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //修改相册页显示
    public function raedit(){
        // validateUnLoginRedirect();
        checkAccess('Photo_album','edit');
        $result=D(self::$PHOTO_ALBUM_MODEL)->getResultByConditions(array('id'=>I('get.id')));
        $result['content']=json_decode($result['content'],true);
        $this->assign('result',$result);
        $this->display();
    }


    //修改相册
    public function raedit_do(){
        try{
            // echo "123123132";
            // validateUnLoginRedirect();
            checkAjaxAccess('Photo_album','raedit');
            D(self::$PHOTO_ALBUM_MODEL)->raedit();
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
            checkAjaxAccess('Photo_album','add');
            D(self::$PHOTO_ALBUM_MODEL)->adds();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function photoview(){
        extract(generateRequestParamVars());
        // validateUnLoginRedirect();
        // echo "111";
        checkAccess('Photo','view');
        list($paging, $results) = D(self::$PHOTO_MODEL)->photoview();
        $this->assign('paging', $paging);
        $this->assign('results', $results);
        $this->display();
    }
}

    