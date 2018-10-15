<?php

namespace Home\Model;

use Home\Abstracts\CommonMAbstract;

class PhotoModel extends CommonMAbstract
{
    public function get_person_photo_do()
    {
        extract(generateRequestParamVars());
        $conditions=array();
        //0是删除 1是显示
        $conditions['status_delete']=1;
        $conditions['album_id']=$album_id;

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
    //移除点赞
    public function move_praise_do()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $photo_id;
        $photo = $this->where($conditions)->find();
        
        $praise_user_ids=explode('_', $photo['praise_id']);
        foreach ($praise_user_ids as $key => $value) {
            if ($value==$user_id) {
                unset($praise_user_ids[$key]);
                $praise_id=implode("_",$praise_user_ids);
                $data = array();
                if($photo['praise']>0){
                    $data['praise']=$photo['praise']-1;
                }
                $data['praise_id']=$praise_id;
                // $data['praise_id']=$photo['praise_id'].'_'.$user_id;
                if ($this->where($conditions)->save($data)===false) {
                    throw new \Exception('OPERATION_FAILED');
                }
                return '取消成功';
            }
        }
        return '取消失败';
    }
    //点赞
    public function add_praise_do()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $photo_id;
        $photo = $this->where($conditions)->find();
        
        $praise_user_ids=explode('_', $photo['praise_id']);
        foreach ($praise_user_ids as $key => $value) {
            if ($value==$user_id) {
                return '点赞失败';
            }
        }

        $data = array();
        if($photo['praise']==0){
            $data['praise']=1;
        }else{
            $data['praise']=$photo['praise']++;
        }
        $data['praise_id']=$photo['praise_id'].'_'.$user_id;
        if ($this->where($conditions)->save($data)===false) {
            throw new \Exception('OPERATION_FAILED');
        }
        return '点赞成功';
    }
    //添加图片信息
    public function adds_do()
    {
        extract(generateRequestParamVars());
        $data = array();
        $data['user_id'] = $user_id;
        $data['album_id']=$album_id;
        $data['url']=$url;
        $data['title']=$title;
        $data['content']=$content;
        $data['address']=$address;
        $data['praise']=0;
        $data['praise_id']='';
        $data['status_delete']=1;
        $data['create_time']=time();
        if (!$user = $this->add($data)) {
            echo $this->_sql();
            throw new \Exception('OPERATION_FAILED');
        }
        $conditions = array();
        $conditions['id'] = $album_id;
        $PhotoAlbum = D('PhotoAlbum')->where($conditions)->find();
        $urls=json_decode($url,true);
        $data = array();
        $data['photo_num'] = $PhotoAlbum['photo_num']+count($urls);
        if (D('PhotoAlbum')->where($conditions)->save($data)===false) {
            throw new \Exception('OPERATION_FAILED');
        }
    }
    //删除照片
    public function delete_do(){
        extract(generateRequestParamVars());
        $conditionss=array();
        $conditionss['id']=$albumid;
        $albumarray=D('PhotoAlbum')->where($conditionss)->find();
        $album=$albumarray['user_id'];
        $conditions=array();
        if($album!=$user_id){
            $conditions['user_id']=$user_id;
        }
        $conditions['id']=$id;
        $data=array();
        $data['status_delete']=0;
        // echo $this->_sql();
        if ($results=$this->where($conditions)->save($data)===false) {
            throw new \Exception('OPERATION_FAILED');
        }
        // echo $this->_sql();

        // return $album;
    }
}