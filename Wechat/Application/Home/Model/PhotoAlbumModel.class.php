<?php

namespace Home\Model;

use Home\Abstracts\CommonMAbstract;

class PhotoAlbumModel extends CommonMAbstract
{      
    public function edits(){
        extract(generateRequestParamVars());
        //正整数正则
        $shuziyz='/^\d+$/';

        $conditions=array();
        $conditions['id']=$id;
        $data=array();
        $data['index_photo']=$url;
        if($this->where($conditions)->save($data)===false){
            // echo $this->_sql();
           throw new \Exception(L('OPERATION_FAILED'));
        }
        // echo $this->_sql();
    }

    //创建相册
    public function adds_do()
    {
        extract(generateRequestParamVars());
        //随机生成一个首页图片
        $conditions=array();
        $conditions['status_delete']=1;
        $count=D('AlbumShow')->where($conditions)->count();
        $rand=rand(0,$count);
        $show=D('AlbumShow')->where($conditions)->find($rand);

        $data = array();
        $data['user_id']=$user_id;
        $data['album_class']=$album_class;
        $data['index_photo']=$show['image_url'];
        $data['name']=$name;
        $data['photo_num']=0;
        $data['person_num']=1;
        $data['status_delete']=1;
        $data['is_activities']=0;
        $data['create_time']=time();
        if($user=$this->add($data)===false){
            throw new \Exception('OPERATION_FAILED');
        }
        $userId = $this->getLastInsID();
        return $userId;
    }
    //个人相册
    public function get_person_album_do($data)
    {
        extract(generateRequestParamVars());
        $conditions=array();
        //0是删除 1是显示
        $conditions['status_delete']=1;
        $conditions['id']=array('in',$data);
        if ($name) {
            $conditions['name']=array('like','%'.$name.'%');
        }
        $results=$this->where($conditions)->order('create_time desc')->select();
        return $results;
        // $count=$this->where($conditions)->count();

        // if(!$numPerPage=I('param.numPerPage')){
        //     $numPerPage=C('NUM_PER_PAGE');
        //     $numPerPage=6;
        // }

        // $page=new \Think\Page($count,$numPerPage);
        // $paging=$page->show();

        // $results=$this->where($conditions)->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();

        // return array($paging,$results);
        
    }   

    //增加用户
    public function get_all_person_photo_do()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['user_id'] = $user_id;
        $album = $this->where($conditions)->select();
        return $album;
    }
    //增加用户
    public function add_person_id()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $album_id;
        $album = $this->where($conditions)->find();
        
        if ($album['user_id']==$user_id) {
            return false;
        }
        $other_user_ids=explode('_', $album['other_user_id']);
        foreach ($other_user_ids as $key => $value) {
            if ($value==$user_id) {
                return false;
            }
        }
        
        $data = array();
        $data['person_num']=$album['person_num']+1;
        $data['other_user_id']=$album['other_user_id'].'_'.$user_id;
        if ($this->where($conditions)->save($data)===false) {
            throw new \Exception('OPERATION_FAILED');
        }

        return true;     
    }
    //活动相册
    public function get_activity_album_do()
    {
        extract(generateRequestParamVars());
        $conditions=array();
        //0是删除 1是显示
        $conditions['status_delete']=1;
        $conditions['is_activities']=array('in',array('2'));
        $count=$this->where($conditions)->count();

        if(!$numPerPage=I('param.numPerPage')){
            $numPerPage=C('NUM_PER_PAGE');
            $numPerPage=6;
        }

        $page=new \Think\Page($count,$numPerPage);
        $paging=$page->show();

        $results=$this->where($conditions)->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();

        return array($paging,$results);
    }
    //用户上传图片权限管理pages/photo_view/index
    public function authority_adds(){
        extract(generateRequestParamVars());
        $conditions=array();
        $conditions['id']=$album_id;
        $results=$this->where($conditions)->find();
        $data=array();
        $data['authority']=$authority;
        $this->where($conditions)->save($data);
    }
    //查询用户是否有上传该相册的权限
    public function check(){
        extract(generateRequestParamVars());
        $conditions=array();
        $conditions['id']=$album_id;
        $flag=0;
        $results=$this->where($conditions)->find();
        //为管理员
        if($results['user_id']==$user_id){
            $flag=1;
        }
        if($flag==0){
            
            $other_user_ids=explode('_', $results['authority']);
            foreach ($other_user_ids as $key => $value) {
                if ($value==$user_id) {
                    $flag=1;
                }
            }
        }
        if($flag==1){
            return 1;
        }else{
            return 0;
        }
        
    }
}