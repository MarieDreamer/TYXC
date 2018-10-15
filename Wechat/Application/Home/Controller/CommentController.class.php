<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class CommentController extends Controller{

    static $COMMENT_MODEL = 'Comment';
    static $Photo_MODEL = 'Photo';
    static $PHOTO_ALBUM_MODEL = 'PhotoAlbum';

    public function adds_do(){
        try{
            D(self::$COMMENT_MODEL)->adds_do();//保存用户信息
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function lists(){
        try{
            $lists = D(self::$COMMENT_MODEL)->lists();

            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
            $ajaxReturnData['lists']=$lists;
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    

  

   
}