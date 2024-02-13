<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
if(isset($_POST['phone'])){


    $url = 'franchise.remax.com.kz';
    $from_url = $_POST['fullurl'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $date = date('d.m.Y');

    $utm_source = isset($_POST['utm_source']) ? $_POST['utm_source'] : '/';
    $utm_medium = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : '/';
    $utm_campaign = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : '/';
    $utm_term = isset($_POST['utm_term']) ? $_POST['utm_term'] : '/';
    $utm_content = isset($_POST['utm_content']) ? $_POST['utm_content'] : '/';

    $utm_platform = str_replace(array('/','//'), '', $_POST['utm_platform']);
	
	$gclid = isset($_POST['gclid']) ? $_POST['gclid'] : '/';
	$yclid = isset($_POST['yclid']) ? $_POST['yclid'] : '/';
	$fbclid = isset($_POST['fbclid']) ? $_POST['fbclid'] : '/';

    // if(strlen($utm_platform)>2){
    //     $utm_platform = $utm_platform.'.kz';
    //   }


    $form_data = [
        "url" => $url,
        "name" => $name,
        "phone" => $phone,
        "email" => $email,

        "lead_fields" => [
            'from' => $url,
            'utm_source' => $utm_source,
            'utm_campaign' => $utm_campaign,
            'utm_medium' => $utm_medium,
            'utm_term' => $utm_term,
            'utm_content' => $utm_content,
            'gclid' => $gclid,
            'yclid' => $yclid,
            'fbclid' => $fblid,
        ]
    ];

    $str = http_build_query($form_data);
    $curl = curl_init();
	curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $str);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_URL, 'https://ramsqz.com/api/client/save-lead');
	$result = curl_exec($curl);
	$result = json_decode($result, true);
	$lead_id = '/';
	
	if(isset($result['lead_id'])){
		$lead_id = $result['lead_id'];
	}
	
	// $form_data['lead_fields']['564858'] = $lead_id;
	curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($form_data));
	curl_setopt($curl, CURLOPT_URL, 'https://amoconnect.ru/amo-remaxqzgsx/api/slug/site');
	$result2 = curl_exec($curl);
	
    curl_close($curl);
	
}
?>