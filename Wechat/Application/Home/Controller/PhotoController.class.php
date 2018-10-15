<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class PhotoController extends Controller{

    static $Photo_MODEL = 'Photo';
    static $PHOTO_ALBUM_MODEL = 'PhotoAlbum';

    public function adds_do()
    {
        extract(generateRequestParamVars());
        try{
            D(self::$Photo_MODEL)->adds_do();
            $conditions = array();
            $conditions['id'] = $user_id;
            $user = D('WechatUser')->where($conditions)->find();
            // $user['time']=date('Y-m-d', time());
            // $user['date']=date('Y-m-d H:i:s', time());
            // $user['read_token']=read_token();
            // $user['form_id']=$timeStamp;
            $open_id=$user['openid'];
            $name=$user['nickname'];
            $time=date('Y-m-d', time());
            $date=date('Y-m-d H:i:s', time());
            // $result=GETWechatTemplate();
            setWechatTemplate($open_id,$name,$time,$date,$timeStamp);
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
            $ajaxReturnData['user']=$user;
            $ajaxReturnData['result']=$result;
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    public function set_interval()
    {
        build_access_token();
    }
    public function GETWechatTemplate()
    {
        $result=GETWechatTemplate();
        var_dump($result);
    }
    public function person_in()
    {
        try{
            extract(generateRequestParamVars());
            $conditions = array();
            $conditions['id'] = $id;
            $Photo = D('Photo')->where($conditions)->find();

            $conditions = array();
            $conditions['id'] = $Photo['album_id'];
            $PhotoAlbum = D('PhotoAlbum')->where($conditions)->find();
            $Photo['album_name']=$PhotoAlbum['name'];
            $Photo['create_time']=date('Y-m-d H:i:s', $Photo['create_time']);
            $Photo['url']=json_decode($Photo['url'],true);

            $praise_user_ids=explode('_', $Photo['praise_id']);
            foreach ($praise_user_ids as $x => $y) {
                if ($y==$user_id) {
                    $Photo['praise_yes']=1;
                }
            }

            $ajaxReturnData['status']=1;
            $ajaxReturnData['Photo']=$Photo;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }


    //获取个人相册
    public function get_person_photo_do()
    {
        try{
            extract(generateRequestParamVars());
            $data=D(self::$Photo_MODEL)->get_person_photo_do();
            foreach ($data[1] as $key => $value) {
                $data[1][$key]['url']=json_decode($value['url'],true);
                $conditions = array();
                $conditions['id'] = $value['user_id'];
                $user = D('WechatUser')->where($conditions)->find();
                $data[1][$key]['user_name']=$user['nickname'];
                $data[1][$key]['user_url']=$user['imageurl'];
                $data[1][$key]['create_time']=date('Y-m-d H:i:s', $value['create_time']);

                $praise_user_ids=explode('_', $value['praise_id']);
                foreach ($praise_user_ids as $x => $y) {
                    if ($y==$user_id) {
                        $data[1][$key]['praise_yes']=1;
                    }
                }
            }
            $conditions = array();
            $conditions['id'] = $album_id;
            $photo = D('PhotoAlbum')->where($conditions)->find();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['photo']=$photo;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //获取照片数量
    public function get_photo_num_do()
    {
        try{
            extract(generateRequestParamVars());
            $conditions = [];
            $conditions['user_id'] = $userid;

            if(D(self::$Photo_MODEL)->where($conditions)->select()){
                $data = D(self::$Photo_MODEL)->where($conditions)->count();
            }else{
                $data = 0;
            }
            
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //获取点赞数量
    public function get_like_num_do()
    {
        try{
            extract(generateRequestParamVars());
            $conditions = [];
            $conditions['user_id'] = $userid;
            $photo = D(self::$Photo_MODEL)->where($conditions)->select();
            if($photo){
                $like_num = 0;
                foreach ($photo as $key => $value) {
                    $like_num += $value->praise;
                }
            }else{
                $like_num = 0;
            }
            
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$like_num;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //点赞
    public function add_praise_do()
    {
        try{
            $data=D(self::$Photo_MODEL)->add_praise_do();//保存用户信息
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //取消点赞
    public function move_praise_do()
    {
        try{
            $data=D(self::$Photo_MODEL)->move_praise_do();//保存用户信息
            $ajaxReturnData['status']=1;
            $ajaxReturnData['data']=$data;
            $ajaxReturnData['message']='操作成功';
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }

    //上传图片
    public function upload_do(){
        extract(generateRequestParamVars());

        /**
         * upload.php
         *
         * Copyright 2013, Moxiecode Systems AB
         * Released under GPL License.
         *
         * License: http://www.plupload.com/license
         * Contributing: http://www.plupload.com/contributing
         */

        #!! IMPORTANT:
        #!! this file is just an example, it doesn't incorporate any security checks and
        #!! is not recommended to be used in production environment as it is. Be sure to
        #!! revise it and customize to your needs.


        // Make sure file is not cached (as it happens for example on iOS devices)
        header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        echo $fileName;

        // Support CORS
        // header("Access-Control-Allow-Origin: *");
        // other CORS headers if any...
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit; // finish preflight CORS requests here
        }


        if ( !empty($_REQUEST[ 'debug' ]) ) {
            $random = rand(0, intval($_REQUEST[ 'debug' ]) );
            if ( $random === 0 ) {
                header("HTTP/1.0 500 Internal Server Error");
                exit;
            }
        }

        // header("HTTP/1.0 500 Internal Server Error");
        // exit;


        // 5 minutes execution time
        @set_time_limit(5 * 60);

        // Uncomment this one to fake upload time
        usleep(5000);

        // Settings
        // $targetDir = ini_get("upload_tmp_dir") . DIRECTORY_SEPARATOR . "plupload";
        $targetDir = C('CACHE_DIR').DIRECTORY_SEPARATOR.'Uploads'.DIRECTORY_SEPARATOR.'Tmps';
        $uploadDir = C('CACHE_DIR').DIRECTORY_SEPARATOR.'Uploads'.DIRECTORY_SEPARATOR.'Tmps'.DIRECTORY_SEPARATOR.date('Y').DIRECTORY_SEPARATOR.date('m').DIRECTORY_SEPARATOR.date('d');
        $uploadUrl = '/Uploads/Tmps/'.date('Y').'/'.date('m').'/'.date('d');

        //创建文件夹
        if(!is_dir($uploadDir)){
            @mkdir($uploadDir,0777,true);
        }

        $cleanupTargetDir = true; // Remove old files
        $maxFileAge = 5 * 3600; // Temp file age in seconds

        // Create target dir
        if (!file_exists($targetDir)) {
            @mkdir($targetDir);
        }

        // Create target dir
        if (!file_exists($uploadDir)) {
            @mkdir($uploadDir);
        }

        // Get a file name
        if (isset($_REQUEST["name"])) {
            $fileName = $_REQUEST["name"];
        } elseif (!empty($_FILES)) {
            $fileName = $_FILES["file"]["name"];
        } else {
            $fileName = uniqid();
        }

        //$fileName = uniqid("file_").'.'.pathinfo($fileName, PATHINFO_EXTENSION);
        $extension=pathinfo($fileName, PATHINFO_EXTENSION);
        if($extension){
            $fileName = uniqid().'.'.$extension;
        }else{
            $fileName = uniqid();
        }

        $md5File = @file('md5list.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $md5File = $md5File ? $md5File : array();

        if (isset($_REQUEST["md5"]) && array_search($_REQUEST["md5"], $md5File ) !== FALSE ) {
            die('{"jsonrpc" : "2.0", "result" : null, "id" : "id", "exist": 1}');
        }

        $filePath = $targetDir . DIRECTORY_SEPARATOR . $fileName;
        $uploadPath = $uploadDir . DIRECTORY_SEPARATOR . $fileName;

        // Chunking might be enabled
        $chunk = isset($_REQUEST["chunk"]) ? intval($_REQUEST["chunk"]) : 0;
        $chunks = isset($_REQUEST["chunks"]) ? intval($_REQUEST["chunks"]) : 1;
        // echo $_REQUEST["chunks"];
        // echo $_REQUEST["chunk"];

        // Remove old temp files
        if ($cleanupTargetDir) {
            if (!is_dir($targetDir) || !$dir = opendir($targetDir)) {
                die('{"jsonrpc" : "2.0", "error" : {"code": 100, "message": "Failed to open temp directory."}, "id" : "id"}');
            }

            while (($file = readdir($dir)) !== false) {
                $tmpfilePath = $targetDir . DIRECTORY_SEPARATOR . $file;

                // If temp file is current file proceed to the next
                if ($tmpfilePath == "{$filePath}_{$chunk}.part" || $tmpfilePath == "{$filePath}_{$chunk}.parttmp") {
                    continue;
                }

                // Remove temp file if it is older than the max age and is not the current file
                if (preg_match('/\.(part|parttmp)$/', $file) && (@filemtime($tmpfilePath) < time() - $maxFileAge)) {
                    @unlink($tmpfilePath);
                }
            }
            closedir($dir);
        }


        // Open temp file
        if (!$out = @fopen("{$filePath}_{$chunk}.parttmp", "wb")) {
            die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}');
        }

        if (!empty($_FILES)) {
            if ($_FILES["file"]["error"] || !is_uploaded_file($_FILES["file"]["tmp_name"])) {
                die('{"jsonrpc" : "2.0", "error" : {"code": 103, "message": "Failed to move uploaded file."}, "id" : "id"}');
            }

            // Read binary input stream and append it to temp file
            if (!$in = @fopen($_FILES["file"]["tmp_name"], "rb")) {
                die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');
            }
        } else {
            if (!$in = @fopen("php://input", "rb")) {
                die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');
            }
        }

        while ($buff = fread($in, 4096)) {
            fwrite($out, $buff);
        }

        @fclose($out);
        @fclose($in);

        rename("{$filePath}_{$chunk}.parttmp", "{$filePath}_{$chunk}.part");

        $index = 0;
        $done = true;
        for( $index = 0; $index < $chunks; $index++ ) {
            if ( !file_exists("{$filePath}_{$index}.part") ) {
                $done = false;
                break;
            }
        }
        if ( $done ) {
            if (!$out = @fopen($uploadPath, "wb")) {
                die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}');
            }

            if ( flock($out, LOCK_EX) ) {
                for( $index = 0; $index < $chunks; $index++ ) {
                    if (!$in = @fopen("{$filePath}_{$index}.part", "rb")) {
                        break;
                    }

                    while ($buff = fread($in, 4096)) {
                        fwrite($out, $buff);
                    }

                    @fclose($in);
                    @unlink("{$filePath}_{$index}.part");
                }

                flock($out, LOCK_UN);
            }
            @fclose($out);
        }

        // Return Success JSON-RPC response
        //die('{"jsonrpc" : "2.0", "result" : null, "id" : "id"}');
        die($uploadUrl .'/'. $fileName);
    }
    //删除照片
    public function delete_do(){
        try{
            D(self::$Photo_MODEL)->delete_do();
            $ajaxReturnData['status']=1;
            $ajaxReturnData['message']='操作成功';
            // $ajaxReturnData['album']=$album;
        }catch(\Exception $e){
            $ajaxReturnData['status']=0;
            $ajaxReturnData['message']='操作失败'.$e->getMessage();
        }
        $this->ajaxReturn($ajaxReturnData);
    }
}