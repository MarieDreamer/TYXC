<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class PhotoAlbumController extends Controller
{

    static $PHOTO_ALBUM_MODEL = 'PhotoAlbum';
    static $PHOTO_MODEL = 'Photo';
    static $WECHAT_USER_MODEL = 'WechatUser';

    public function edit_do(){
        try{
            D(self::$PHOTO_ALBUM_MODEL)->edits();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function get_other_user()
    {
        try{
            extract(generateRequestParamVars());

            //取有权限的用户
            $conditions=array();
            $conditions['id']=$id;
            $album=D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->find();//个人相册
            $variable=explode('_', $album['authority']);
            $users2=array();
            foreach ($variable as $key => $value) {
                if($value){
                    $conditions=array();
                    $conditions['id']=$value;
                    $user2=D('WechatUser')->where($conditions)->find();//个人相册
                    $users2[]=$user2;
                }
            }

            foreach ($users2 as $k3 => $v3) {
                   // var_dump($users2[$k3]['id']);
            }

            $conditions=array();
            $conditions['id']=$id;
            $album=D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->find();//个人相册
            $variable=explode('_', $album['other_user_id']);
            $users=array();
            foreach ($variable as $key => $value) {
                if($value){
                    $conditions=array();
                    $conditions['id']=$value;
                    $user=D('WechatUser')->where($conditions)->find();//个人相册 
                    $users[]=$user;
                }
            }
            foreach ($users as $k => $v) {
                foreach ($users2 as $k3 => $v3) {
                    if($users[$k]['id']==$users2[$k3]['id']){
                        $users[$k]['is_selects']=true;
                    }else{
                        // $users[$k]['is_select']=false;
                    }

                }

            }
            

            $conditions=array();
            $conditions['id']=$album['user_id'];
            $user=D('WechatUser')->where($conditions)->find();//个人相册
            $ajaxReturnData['status']=1;
            // $ajaxReturnData['sc']=$sc;
            // $ajaxReturnData['sc2']=$sc2;
            $ajaxReturnData['data']=$users;
            // $ajaxReturnData['data2']=$users2;
            $ajaxReturnData['user']=$user;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function change_edit()
    {
        try{
            extract(generateRequestParamVars());
            $conditions=array();
            $conditions['id']=$id;
            $album=D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->find();//个人相册
            $data = array();
            if ($name) {
                $data['name']=$name;
            }
            if (D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->save($data)===false) {
                throw new \Exception('OPERATION_FAILED');
            }

            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$users;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function get_all_person_photo_do()
    {
        try{
            $album=D(self::$WECHAT_USER_MODEL)->get_all_person_photo_do();//个人相册
            $my_album=explode('_', $album['0']['my_album']);
            $photos=array();
            foreach ($my_album as $key => $value) {
                if ($value) {
                    $conditions = array();
                    $conditions['album_id'] = $value;
                    $photo=D(self::$PHOTO_MODEL)->where($conditions)->select();//个人相册
                    foreach ($photo as $x => $y) {
                        $url_first=json_decode($y['url'],true);
                        $y['url_first']=$url_first[0];
                        array_push($photos, $y);
                    }
                }
            }
            //按时间进行排序
            $sort = array(
                    'direction' => 'SORT_DESC', //排序顺序标志 SORT_DESC 降序；SORT_ASC 升序
                    'field'     => 'create_time',       //排序字段
            );
            $arrSort = array();
            foreach($photos AS $uniqid => $row){
                foreach($row AS $key=>$value){
                    $arrSort[$key][$uniqid] = $value;
                }
            }
            array_multisort($arrSort[$sort['field']], constant($sort['direction']), $photos);
            
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$photos;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //获取相册数量
    public function get_album_num_do()
    {
        try{
            extract(generateRequestParamVars());
            $album=D(self::$WECHAT_USER_MODEL)->get_all_person_photo_do();//个人相册
            $my_album=explode('_', $album['0']['my_album']);
            $data=0;
            foreach ($my_album as $key => $value) {
                if ($value) {
                    $data++;
                }
            }
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //移交管理员
    public function move_user()
    {
        try{
            extract(generateRequestParamVars());
            $conditions = array();
            $conditions['id']=$id;
            $album = D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->find();
            $conditions=array();
            $conditions['id']=$id;
            $data = array();
            $data['user_id']=$change_id;
            $data['other_user_id']=str_replace($change_id, $user_id, $album['other_user_id']);
            if (D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->save($data)===false) {
                throw new \Exception('OPERATION_FAILED');
            }
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //解散相册
    public function album_over()
    {
        try{
            extract(generateRequestParamVars());
            $conditions=array();
            $conditions['id']=$id;
            $data = array();
            $data['status_delete']=0;
            if (D(self::$PHOTO_ALBUM_MODEL)->where($conditions)->save($data)===false) {
                throw new \Exception('OPERATION_FAILED');
            }
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //获取相册
    public function get_person_album_do()
    {
        try{
            $album=D(self::$WECHAT_USER_MODEL)->get_all_person_photo_do();//个人相册
            $my_album=explode('_', $album['0']['my_album']);
            $data=array();
            foreach ($my_album as $key => $value) {
                if ($value) {
                    array_push($data,$value);
                }
            }
            $data=D(self::$PHOTO_ALBUM_MODEL)->get_person_album_do($data);//个人相册
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function add_person_id()
    {
        try{
            $data=D(self::$WECHAT_USER_MODEL)->add_person_id();//加入相册
            $data=D(self::$PHOTO_ALBUM_MODEL)->add_person_id();//加入相册
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function adds_do()
    {
        try{
            $user=D(self::$PHOTO_ALBUM_MODEL)->adds_do();//添加相册
            $data=D(self::$WECHAT_USER_MODEL)->adds_person_id($user);//加入相册
            $ajaxReturnData['status']=1;
            $ajaxReturnData['user']=$user;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function get_activity_album_do()
    {
        try{
            $data=D(self::$PHOTO_ALBUM_MODEL)->get_activity_album_do();//活动相册
            $ajaxReturnData['status']=1;
            foreach ($data[1] as $key => $value) {
                $data[1][$key]['create_time']=date('Y-m-d H:i:s', $data[1][$key]['create_time']);
            }
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
    //用户上传图片权限管理
    public function authority()
    {
        try{
            D(self::$PHOTO_ALBUM_MODEL)->authority_adds();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
    //查询用户是否有上传该相册的权限
    public function check()
    {
        try{
            $results=D(self::$PHOTO_ALBUM_MODEL)->check();
            if($results==1){
                $ajaxReturnData['data']='正在上传';
            }
            if($results==0){
                $ajaxReturnData['data']='您没有该权限';
            }
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
}