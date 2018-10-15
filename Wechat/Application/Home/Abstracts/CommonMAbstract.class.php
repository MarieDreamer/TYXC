<?php
namespace Home\Abstracts;
use Think\Model;
abstract Class CommonMAbstract extends Model{
	
	public function getResultByConditions(array $conditions){
		if(!$conditions){
			return $this->find();
		}else{
			return $this->where($conditions)->find();
		}
	}
	
	public function getResultsByConditions(array $conditions,$sort=''){
		if(!$conditions){
			if(!$sort){
				return $this->select();
			}
			return $this->order($orders)->select();
		}else{
			if(!$sort){
				return $this->where($conditions)->select();
			}
			return $this->where($conditions)->order($sort)->select();
		}
	}
	
}