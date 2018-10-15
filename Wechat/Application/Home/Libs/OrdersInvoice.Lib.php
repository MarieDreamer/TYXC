<?php
namespace Home\Libs;
class OrdersInvoiceLib{

    public function getDeliveryClassPrice($delivery_class){
        $delivery_class_config=C('DELIVERY_CLASS');
        if(!array_key_exists($delivery_class, $delivery_class_config)){
            throw new \Exception("快递类型无法匹配！");
        }
        return $delivery_class_config[$delivery_class][1];
    }
    
}