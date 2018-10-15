<?php

namespace Home\Model;

use Home\Abstracts\CommonMAbstract;

class CommentModel extends CommonMAbstract
{
    //添加图片信息
    public function adds_do(){
        extract(generateRequestParamVars());
        if($photoid && $userid && $content){
            $data = array();
            $data['photoid'] = $photoid;
            $data['userid']=$userid;
            $data['content']=$content;
            $data['imageurl']="";
            $data['status_delete']=1;
            $data['create_time']=time();
            if(!$this->add($data)){
                throw new \Exception(L('OPERATION_FAILED'));
                echo $this->_sql();
            }
        }else{
            throw new \Exception(L('没有数据'));
        }
    }

    public function lists(){
        extract(generateRequestParamVars());

        $conditions=[];
        //0是删除 1是显示
        $conditions['status_delete']=1;
        $conditions['photoid']=$photoid;

        $lists = $this->where($conditions)->order('id desc')->select();

        //用户名转换
        foreach($lists as $key => $value) {
            $conditions=array();
            $conditions['id']=$lists[$key]['userid'];
            // var_dump($lists[$key]['userid']);
            $result=D('WechatUser')->where($conditions)->find();
            // var_dump($result);
            $nick_name=$result['nickname'];
            $imageurl=$result['imageurl'];
            $lists[$key]['user_id']=$nick_name;
            $lists[$key]['imageurl']=$imageurl;
            //时间戳转换
            $lists[$key]['create_time']=date('Y-m-d H:i:s', $lists[$key]['create_time']);

        }
        // echo count($lists)+'1';

        $number = count($lists)+'1';
            
        
        return array($lists,$number);
    }
}