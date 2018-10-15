<?php

namespace Home\Model;

use Home\Abstracts\CommonMAbstract;

class WechatUserModel extends CommonMAbstract
{
    //用户相册
    public function get_all_person_photo_do()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $user_id;
        $user = $this->where($conditions)->select();
        return $user;
    }

    //个人创建的相册
    public function adds_person_id($album_id)
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $user_id;
        $user = $this->where($conditions)->find();
        
        $my_album=explode('_', $user['my_album']);
        $flag=true;
        foreach ($my_album as $key => $value) {
            if ($value==$album_id) {
                $flag=false;
            }
        }
        if ($flag) {
            $data = array();
            $data['my_album']=$user['my_album'].'_'.$album_id;
            if ($this->where($conditions)->save($data)===false) {
                throw new \Exception('OPERATION_FAILED');
            }
        }
    }

    //增加相册
    public function add_person_id()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $user_id;
        $user = $this->where($conditions)->find();
        
        $my_album=explode('_', $user['my_album']);
        $flag=true;
        foreach ($my_album as $key => $value) {
            if ($value==$album_id) {
                $flag=false;
            }
        }
        if ($flag) {
            $data = array();
            $data['my_album']=$user['my_album'].'_'.$album_id;
            if ($this->where($conditions)->save($data)===false) {
                throw new \Exception('OPERATION_FAILED');
            }
        }    
    }

    public function adds_do($open_id)
    {
        $data = array();
        $data['openid'] = $open_id['openid'];
        $data['create_time'] = time();
        $data['login_time'] = time();
        if (!$user = $this->add($data)) {
            throw new \Exception('OPERATION_FAILED');
        }
        return $user;
    }

    public function login_do($userid)
    {
        $conditions = array();
        $conditions['id'] = $userid;
        $data = array();
        $data['login_time'] = time();
        if($user=$this->where($conditions)->save($data)===false){
            throw new \Exception('OPERATION_FAILED');
        }
    }

    public function save_do()
    {
        extract(generateRequestParamVars());
        $conditions = array();
        $conditions['id'] = $id;
        $data = array();
        $data['nickname']=$nickname;
        $data['imageurl']=$imageurl;
        $data['gender']=$gender;
        $data['province']=$province;
        $data['city']=$city;
        $data['country']=$country;
        if($user=$this->where($conditions)->save($data)===false){
            throw new \Exception('OPERATION_FAILED');
        }
    }
    
}