<?php
namespace Home\Model;
use Home\Abstracts\CommonMAbstract;

class PhotoModel extends CommonMAbstract {
    //获取role表
    public function get(){
        // extract(generateRequestParamVars());
        $conditions=array();
        $conditions['status_delete']=1;//屏蔽逻辑删除
        $results=$this->where($conditions)->select();
        return $results;
    }

    public function inquirename(){
        // extract(generateRequestParamVars());
        $conditions=array();
        $conditions['status_delete']=1;//屏蔽逻辑删除
        $results=$this->where($conditions)->select();
        return $results;
    }

    public function dele(){
            extract(generateGetParamVars());
            if(!$id){
                throw new \Exception(L('MISSING_PARAMETER')); ;
            }
            $conditions['id']=intval($id);
            if(!$result=$this->where($conditions)->find()){
                throw new \Exception(L('NO_DATA'));
            }
            $conditions=array();
            $conditions['id']=$id;
            $data=array();
            $data['status_delete']=0;
            if($this->where($conditions)->save($data)===false){
               throw new \Exception(L('OPERATION_FAILED'));
            }
    }      


        //图片管理页面显示
        public function lists(){
            extract(generateRequestParamVars());
            
            $conditions=array();
            //0是删除 1是显示
            if($class){
                $conditions['class']=$class;
            }
            $conditions['status_delete']=1;

            if(!$conditions){
                // echo "122212";
                $count=$this->count();
            }else{
                $count=$this->where($conditions)->count();
            }

            if(!$numPerPage=I('param.numPerPage')){
                $numPerPage=C('NUM_PER_PAGE');
            }

            $page=new \Think\Page($count,$numPerPage);
            $paging=$page->show();

            
            if(!$conditions){
                $results=$this->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }else{
                $results=$this->where($conditions)->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }
            
            //用户名赋给用户id
            foreach ($results as $key => $value) {
                $conditions=array();
                $conditions['id']=$results[$key]['user_id'];
                $result=D('WechatUser')->where($conditions)->find();
                $nick_name=$result['nickname'];
                $results[$key]['user_id']=$nick_name;
            }

            //相册名字赋给相册id
            foreach ($results as $k => $v) {
                $conditions=array();
                $conditions['id']=$results[$k]['album_id'];
                $result=D('PhotoAlbum')->where($conditions)->find();
                $albumname=$result['name'];
                $results[$k]['album_id']=$albumname;
            }
            
            return array($paging,$results);
        }

    
        //修改相册
        public function raedit(){
        extract(generateRequestParamVars());

        //正整数正则
        $shuziyz='/^\d+$/';
        // if($class1 && $content && preg_match($shuziyz, $id)){
        //     $yzsz=1;
        // }
        // if($yzsz==1){
        $data=array();
        $data['user_id']=$user_id;
        $data['album_id']=$album_id;
        $data['url']=$url;
        $data['title']=$title;
        $data['content']=$content;
        $data['address']=$address;
        $data['praise']=$praise;
        $data['praise_id']=$praise_id;
        $data['status_delete']=1;
        $conditions=array();
        $conditions['id']=$id;
        if(!$this->where($conditions)->save($data)){
            // echo "************";
            // echo $this->_sql();
            throw new \Exception(L('OPERATION_FAILED'));
        }
        // }else{
        //         throw new \Exception(L('， 输入了非法数据！'));
        //     }

    }

    //添加相册
    public function adds(){
        extract(generateRequestParamVars());
        $data['user_id']=$user_id;
        $data['album_id']=$album_id;
        $data['url']=$url;
        $data['title']=$title;
        $data['content']=$content;
        $data['address']=$address;
        $data['praise']=$praise;
        $data['praise_id']=$praise_id;
        $data['create_time']=time();
        $data['status_delete']=1;
        if(!$this->add($data)){
            throw new \Exception(L('OPERATION_FAILED'));
        }
    }

    public function photoview(){
            extract(generateRequestParamVars());
            $conditions=array();
            //0是删除 1是显示
            
            $conditions['status_delete']=1;
            $conditions['album_id']=$id;

            if(!$conditions){
                // echo "122212";
                $count=$this->count();
            }else{
                $count=$this->where($conditions)->count();
            }

            if(!$numPerPage=I('param.numPerPage')){
                $numPerPage=C('NUM_PER_PAGE');
            }

            $page=new \Think\Page($count,$numPerPage);
            $paging=$page->show();

            
            if(!$conditions){
                $results=$this->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }else{
                $results=$this->where($conditions)->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }
            
            foreach ($results as $key => $value) {
                $conditions=array();
                $conditions['id']=$results[$key]['user_id'];
                $result=D('WechatUser')->where($conditions)->find();
                $nick_name=$result['nickname'];
                $results[$key]['user_id']=$nick_name;
            }

            //相册名字赋给相册id
            foreach ($results as $k => $v) {
                $conditions=array();
                $conditions['id']=$results[$k]['album_id'];
                $result=D('PhotoAlbum')->where($conditions)->find();
                $albumname=$result['name'];
                $results[$k]['album_id']=$albumname;
            }

            return array($paging,$results);
        }

        public function userphotoview(){
            extract(generateRequestParamVars());
            $conditions=array();
            //0是删除 1是显示
            
            $conditions['status_delete']=1;
            $conditions['user_id']=$id;

            if(!$conditions){
                // echo "122212";
                $count=$this->count();
            }else{
                $count=$this->where($conditions)->count();
            }

            if(!$numPerPage=I('param.numPerPage')){
                $numPerPage=C('NUM_PER_PAGE');
            }

            $page=new \Think\Page($count,$numPerPage);
            $paging=$page->show();

            
            if(!$conditions){
                $results=$this->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }else{
                $results=$this->where($conditions)->order('create_time desc')->limit($page->firstRow.','.$page->listRows)->select();
            }
            
            foreach ($results as $key => $value) {
                $conditions=array();
                $conditions['id']=$results[$key]['user_id'];
                $result=D('WechatUser')->where($conditions)->find();
                $nick_name=$result['nickname'];
                $results[$key]['user_id']=$nick_name;
            }

            //相册名字赋给相册id
            foreach ($results as $k => $v) {
                $conditions=array();
                $conditions['id']=$results[$k]['album_id'];
                $result=D('PhotoAlbum')->where($conditions)->find();
                $albumname=$result['name'];
                $results[$k]['album_id']=$albumname;
            }

            return array($paging,$results);
        }

}