<?php
namespace Home\Model;
use Home\Abstracts\CommonMAbstract;

class AlbumShowModel extends CommonMAbstract {

    public function dele(){
        extract(generateGetParamVars());
        // echo "123456";
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
    
    public function lists(){
        extract(generateRequestParamVars());
        
        foreach ($photocars as $k => $v) {
            foreach ($v as $k2 => $v2) {
                // echo $v2;

            }
        }
        $conditions=array();
        //0是删除 1是显示
        
        $conditions['status_delete']=1;

        if(!$conditions){
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
            $photocars=C('PHOTOCARS');
            $results[$key]['album_class']=$photocars[$results[$key]['album_class']];
        }

        

        return array($paging,$results);
    }

        
    
        //修改相册
    public function raedit(){
        extract(generateRequestParamVars());

        $data=array();
        $data['image_name']=$image_name;
        $data['image_url']=$image_url;
        $data['status_delete']=1;
        $conditions=array();
        $conditions['id']=$id;
        if(!$this->where($conditions)->save($data)){
            throw new \Exception(L('OPERATION_FAILED'));
        }

    }

    //添加相册
    public function adds(){
        extract(generateRequestParamVars());
        $data['image_name']=$image_name;
        $data['image_url']=$image_url;
        $data['create_time']=time();
        $data['status_delete']=1;
        if(!$this->add($data)){
            echo $this->_sql();
            throw new \Exception(L('OPERATION_FAILED'));
        }
    }
}