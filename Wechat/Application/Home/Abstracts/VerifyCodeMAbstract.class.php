<?php
namespace Home\Abstracts;
use Home\Abstracts\CommonMAbstract;
abstract Class VerifyCodeMAbstract extends CommonMAbstract{
	
	public function adds(){
        extract(generateRequestParamVars());
        $data['phone_mobile'] = $phone_mobile;
        $data['verify_code']=rand(1000,9999);
        $data['create_time']=time();
        if(!$this->add($data)){
            throw new \Exception('验证码生成失败');
        }
        return $data['verify_code'];
    }
    
    /*
     * 检查验证码
    * 2分钟内有效
    */
    public function validate($phone_mobile,$verify_code){
    	validateCommonPara($phone_mobile,'phone_mobile');
    	validateCommonPara($verify_code,'verify_code');
    	$conditions['phone_mobile']=$phone_mobile;
    	$conditions['verify_code']=$verify_code;
    	//$conditions['create_time']=array('EGT',);
    	if(!$result=$this->getResultByConditions($conditions,'create_time desc')){
    		throw new \Exception('验证码错误');
    	}else{
    		if($result['create_time']<time()-120){
    			throw new \Exception('验证码失效');
    		}
    	}
    }
	
}