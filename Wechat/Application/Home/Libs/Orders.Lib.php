<?php
namespace Home\Libs;
class OrdersLib{

    /*
    通用订单价格计算方法
    */
    public function price_calculate_local($product_id,$airport_transfer_go_id,$airport_transfer_back_id,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($product_id,'common_id',"必须指定产品ID！");
		if($num<1){
			throw new \Exception("成人必须一个以上！");
		}
        if($num || $children_num){
            //基础产品价格
            $price+=$this->get_product_price_local($product_id,$num,$children_num);
            //接机送机价格
            if($airport_transfer_id=intval($airport_transfer_go_id)){
                $price+=$this->get_airport_transfer_price($airport_transfer_id,$num,$children_num);//接机服务
            }
            if($airport_transfer_id=intval($airport_transfer_back_id)){
                $price+=$this->get_airport_transfer_price($airport_transfer_id,$num,$children_num);//接机服务
            }
            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    public function price_calculate_special($product_id,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($product_id,'common_id',"必须指定产品ID！");
		if($num<1){
			throw new \Exception("成人必须一个以上！");
		}
        if($num || $children_num){
            //基础产品价格
            $price+=$this->get_product_price_special($product_id,$num,$children_num);
            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    public function price_calculate_traffic($product_id,$airport_transfer_go_id,$airport_transfer_back_id,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        /*
        if(!array_key_exists($class,C('PRODUCT_CLASS'))){
            throw new \Exception("类型无法匹配！");
        }
        validateCommonPara($product_id,'common_id',"必须指定产品ID！");
        if($num || $children_num){
            $class=ucfirst($class);
            //基础产品价格
            $price+=$this->get_product_price($class,$product_id,$num,$children_num);

            //仅当地参团才有接机送机服务
            if($class=='Local'){
                //接机送机价格
                if($airport_transfer_id=intval($airport_transfer_go_id)){
                    $price+=$this->get_airport_transfer_price($class,$airport_transfer_id,$num,$children_num);//接机服务
                }
                if($airport_transfer_id=intval($airport_transfer_back_id)){
                    $price+=$this->get_airport_transfer_price($class,$airport_transfer_id,$num,$children_num);//接机服务
                }
            }

            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        */
        return $price;
    }

    public function price_calculate_traffic_airport_transfer_line($traffic_airport_transfer_line,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($traffic_airport_transfer_line,'common_id',"线路不能为空！");

		if($num<1){
			throw new \Exception("成人必须一个以上！");
		}
        //判断数量是否超出可售数量
        if(!$result=D('TrafficAirportTransferLine')->getResultById($traffic_airport_transfer_line)){
            throw new \Exception('请先选择产品！');
        }
        $result=D('Traffic')->getResultById($result['traffic_id']);
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }

        if($num || $children_num){
            //接机送机价格
            $price+=$this->get_product_price_traffic_airport_transfer_line($traffic_airport_transfer_line,$num,$children_num);

            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    public function price_calculate_traffic_car_class($traffic_car_class,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($traffic_car_class,'common_id',"车型不能为空！");
        if($num<1){
			throw new \Exception("成人必须一个以上！");
		}

        //判断数量是否超出可售数量
        if(!$result=D('TrafficCarClass')->getResultById($traffic_car_class)){
            throw new \Exception('请先选择产品！');
        }
        $result=D('Traffic')->getResultById($result['traffic_id']);
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }

        if($num || $children_num){
            //接机送机价格
            $price+=$this->get_product_price_traffic_car_class($traffic_car_class,$num,$children_num);

            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    public function price_calculate_tickets($product_id,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($product_id,'common_id',"必须指定产品ID！");
		if($num<1){
			throw new \Exception("成人必须一个以上！");
		}
        if($num || $children_num){
            //基础产品价格
            $price+=$this->get_product_price_tickets($product_id,$num,$children_num);

            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    public function price_calculate_visa($product_id,$num,$children_num,$invoice_need,$invoice_delivery_class){
        $price=0;
        validateCommonPara($product_id,'common_id',"必须指定产品ID！");
		if($num<1){
			throw new \Exception("成人必须一个以上！");
		}
        if($num || $children_num){
            //基础产品价格
            $price+=$this->get_product_price_visa($product_id,$num,$children_num);

            //发票快递费用
            if($invoice_need){
                $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
            }
        }
        return $price;
    }

    /*
    酒店订单价格计算方法
    */
    public function price_calculate_hotel($hotel_id,$room_class_id,$room_num,$service_beg_date,$service_days,$invoice_need,$invoice_delivery_class){

        validateCommonPara($hotel_id,'common_id',"必须指定酒店ID！");
        validateCommonPara($room_class_id,'common_id',"必须指定房型ID！");
        validateCommonPara($room_num,'numeric',"必须指定房间数量ID！");
        validateCommonPara($service_beg_date,'date',"必须指定房间入住日期！");
        validateCommonPara($service_days,'numeric',"必须指定房间入住天数！");
		if(!$result=D('Hotel')->getResultById($hotel_id)){
            throw new \Exception('请先选择产品！');
        }
		$hotel_room_class=D('HotelRoomClass')->getResult($hotel_id,$room_class_id);
		if($room_num<1){
			throw new \Exception("请先选择房间数量！");
		}
        //应该是去判断房型对应的房间数量 暂时按酒店房间数量处理 后期再说
        //判断数量是否超出可售数量
        if($room_num>$hotel_room_class['num']){
            throw new \Exception("订单预定房间数量超出可售数量!");
        }
        $price=0;
        //房型价格数据
        $hotel_room_class=D('HotelRoomClass')->getResult($hotel_id,$room_class_id);
        //价格与入住时间可能有关系 $service_beg_date
        $price+=$hotel_room_class['price']*$room_num*$service_days;
        //发票快递费用
        if($invoice_need){
            $price+=$this->get_invoice_delivery($invoice_need,$invoice_delivery_class);
        }
        return  $price;
    }


    private function get_product_price_local($product_id,$num,$children_num){
        if(!$result=D('Local')->getResultById($product_id)){
            throw new \Exception('请先选择产品！');
        }
        //判断数量是否超出可售数量
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    private function get_product_price_special($product_id,$num,$children_num){
        if(!$result=D('Special')->getResultById($product_id)){
            throw new \Exception('请先选择产品！');
        }
        //判断数量是否超出可售数量
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    /*
    private function get_product_price_traffic($product_id,$num,$children_num){
        if(!$result=D('Traffic')->getResultById($product_id)){
            throw new \Exception('请先选择产品！');
        }
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }
    */

    private function get_product_price_traffic_airport_transfer_line($id,$num,$children_num){
        if(!$result=D('TrafficAirportTransferLine')->getResultById($id)){
            throw new \Exception('请先选择产品！');
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    private function get_product_price_traffic_car_class($traffic_car_class,$num,$children_num){
        if(!$result=D('TrafficCarClass')->getResultById($traffic_car_class)){
            throw new \Exception('请先选择产品！');
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    private function get_product_price_tickets($product_id,$num,$children_num){
        if(!$result=D('Tickets')->getResultById($product_id)){
            throw new \Exception('请先选择产品！');
        }
        //判断数量是否超出可售数量
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    private function get_product_price_visa($product_id,$num,$children_num){
        if(!$result=D('Visa')->getResultById($product_id)){
            throw new \Exception('请先选择产品！');
        }
        //判断数量是否超出可售数量
        $provide_num=$num+$children_num;
        if($provide_num>$result['num']){
            throw new \Exception("订单预定人数超出可售数量!");
        }
        $price=0;
        if($num=intval($num)){
            $price+=doubleval($result['price'])*$num;
        }
        if($children_num=intval($children_num)){
            $price+=doubleval($result['children_price'])*$children_num;
        }
        return $price;
    }

    /*
    订单接机送机价格计算方法
    */
    private function get_airport_transfer_price($airport_transfer_id,$num,$children_num){
        if(!is_numeric($airport_transfer_id)){
            throw new \Exception('参数ID类型错误!');
        }
        if(!$result=D('LocalAirportTransfer')->getResultById($airport_transfer_id)){
            throw new \Exception('产品打包中的接机送机请先选择产品！');
        }
        $price=0;
        if(!$result['free']){
            if(!$result=D('Traffic')->getResultById($result['traffic_id'])){
                throw new \Exception('基础接机送机请先选择产品！');
            }
            if($num=intval($num)){
                $price+=$num*doubleval($result['price']);
            }
            if($children_num=intval($children_num)){
                $price+=$children_num*doubleval($result['children_price']);
            }
        }
        return $price;
    }

    /*
    获取发票快递费用
    $invoice_need 1 0
    */
    private function get_invoice_delivery($invoice_need,$invoice_delivery_class){
        if($invoice_need==1){
            if(!array_key_exists($invoice_delivery_class,C('DELIVERY_CLASS'))){
                throw new \Exception("快递类型无法匹配！");
            }
            require_once C('APPLICATION_DIR').'/Home/Libs/OrdersInvoice.Lib.php';
            $orders_invoice=new \Home\Libs\OrdersInvoiceLib();
            return $orders_invoice->getDeliveryClassPrice($invoice_delivery_class);
        }
    }

    /*
    下单短信通知
    */
    public function orders_register_sms_notice($mobile){
        if(!$mobile){
            throw new \Exception("手机号码不能为空！");
        }
        try{
            $notice_sms_send_status=C('NOTICE_SMS_SEND_STATUS');
            //短信通知
            if(isset($notice_sms_send_status['ORDERS_REGISTER']) && $notice_sms_send_status['ORDERS_REGISTER']){
                $sms_template=C('SMS_TEMPALTE');
                $content=$sms_template['ORDERS_REGISTER'];
                /*
                $search=array(
                    '[--username--]',
                    '[--password--]'
                );
                $replace=array(
                    $username,
                    $password
                );
                $content=str_replace($search,$replace,$content);
                */
                header("Content-type: text/html; charset=utf-8");
                sms_send_do($mobile,$content);
            }
        }catch (\Exception $e){
            throw new \Exception("下单短信通知程序异常");
        }
    }

    /*
    下单邮件通知
    */
    public function orders_register_email_notice($client_mail_address,$client_name,$result,$service_date){
        try{
            if(!$client_mail_address){
                throw new \Exception("客户邮箱不能为空！");
            }

            if(!$client_name){
                throw new \Exception("客户名称不能为空！");
            }

            $notice_email_send_status=C('NOTICE_EMAIL_SEND_STATUS');
            //邮件通知
            if(isset($notice_email_send_status['ORDERS_REGISTER']) && $notice_email_send_status['ORDERS_REGISTER']){
                $email_template=C('EMAIL_TEMPLATE');
                $subject=$email_template['ORDERS_REGISTER']['subject'];
                ob_start();
                $content=file_get_contents(C('APPLICATION_DIR').'/Home/Data/email_orders_notice_tpl.html');
                ob_end_clean();
                $search=array(
                    '[--client_name--]',
					'[--number--]',
					'[--product_name--]',
					'[--service_date--]',
					'[--price--]',
                    '[--create_time--]'
                );
                $replace=array(
                    $client_name,
					$result['number'],
                    $result['product_name'],
					$service_date,
					$result['price'],
					$result['create_time'],
                );
				$body=str_replace($search,$replace,$content);

                smtp_send_do($client_mail_address,$client_name,$subject,$body);
            }
        }catch (\Exception $e){
            throw new \Exception("下单邮件通知程序异常");
        }
    }

}