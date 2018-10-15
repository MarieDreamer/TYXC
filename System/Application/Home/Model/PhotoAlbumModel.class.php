<?php
namespace Home\Model;
use Home\Abstracts\CommonMAbstract;

class PhotoAlbumModel extends CommonMAbstract {
    //获取role表
    public function get(){
        // extract(generateRequestParamVars());
        $conditions=array();
        $conditions['status_delete']=1;//屏蔽逻辑删除
        $results=$this->where($conditions)->select();
        var_dump($results);
        return $results;
    }
    

    
    //详细内容修改
    public function edits(){
        extract(generatePostParamVars());
        //正整数正则
        $shuziyz='/^\d+$/';
        if(preg_match($shuziyz, $id) && $content){
            $yzsz=1;
        }
        if($yzsz==1){
        $conditions=array();
        $conditions['id']=$id;
        $data=array();
        $data['content']=$content;
        if($this->where($conditions)->save($data)===false){
           throw new \Exception(L('OPERATION_FAILED'));
        }
        }else{
                throw new \Exception(L('非法数据！'));
            }
    }

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

        // public function lists(){

        //     extract(generateRequestParamVars());

        //     $conditions=array();
        //     // var_dump(array());
        //     $conditions['status_delete']=1;
        //     $results=$this->where($conditions)->select();
        //     echo $this->_sql();
        //     var_dump($results);
        //     // echo($results);
        //     return $results;
        // }
    
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
            if($is_activities==0){
                $conditions['is_activities']=0;
            }
            if($is_activities==1){
                $conditions['is_activities']=array('EGT',1);
            }

            if(!$conditions){
                // echo "122212";
                $count=$this->count();
            }else{
                // echo "11111";
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

        //正整数正则
        $shuziyz='/^\d+$/';
        // if($class1 && $content && preg_match($shuziyz, $id)){
        //     $yzsz=1;
        // }
        // if($yzsz==1){
        $data=array();
        $data['album_class']=$album_class;
        $data['name']=$name;
        $data['index_photo']=$index_photo;
        $data['person_num']=$person_num;
        $data['photo_num']=$photo_num;
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
        $data['other_user_id']=$other_user_id;
        $data['album_class']=$album_class;
        $data['name']=$name;
        $data['index_photo']=$index_photo;
        $data['person_num']=$person_num;
        $data['photo_num']=$photo_num;
        $data['create_time']=time();
        $data['status_delete']=1;
        $data['is_activities']=0;
        if(!$this->add($data)){
            throw new \Exception(L('OPERATION_FAILED'));
        }
    }

    //添加activities
    public function adds_activities(){
        extract(generateRequestParamVars());
        $data['user_id']=$user_id;
        $data['other_user_id']=$other_user_id;
        $data['album_class']=$album_class;
        $data['name']=$name;
        $data['index_photo']=$index_photo;
        $data['person_num']=$person_num;
        $data['photo_num']=$photo_num;
        $data['create_time']=time();
        $data['status_delete']=1;
        $data['is_activities']=1;
        if(!$this->add($data)){
            throw new \Exception(L('OPERATION_FAILED'));
        }
    }

    
}