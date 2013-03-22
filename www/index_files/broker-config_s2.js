/*
Copyright (c) 2013, comScore Inc. All rights reserved.
version: 5.0.3
*/
if(/[\w\.]+\/surface/i.test(SR_url)) {
	var allLinks = document.getElementsByTagName("a");
  function  checkLink(){
   for (var i = 0; i < allLinks.length; i++) {
  if(/https:\/\/(login|accountservices|myservice)\.(live|passport|surface)\.(com|net)/i.test(allLinks[i].href)){
    	if(allLinks[i].addEventListener){  		
    		hrefURL = allLinks[i].href;
      	allLinks[i].addEventListener('click',function(event){
        	_set_SessionCookie("captlinks", this.href);
          _set_SessionCookie("graceIncr", 1); 
        },false);
      }else{ 
        allLinks[i].attachEvent('onclick',function(){ 
         	_set_SessionCookie("graceIncr", 1);
         	_set_SessionCookie("captlinks", this.href);
        });
      }
    }
   }
}
setTimeout("checkLink();", 3000);
}
_set_SessionCookie("graceIncr", 0);

COMSCORE.SiteRecruit.Broker.config = {
	version: "5.0.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	thirdPartyOptOutCookieEnabled : false,
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",
	
	//events
	Events: {
		beforeRecruit: function() {
					}
	},
	
		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/learning/en/us/(?!(offers/virtualization-secampaign\\.aspx))', c: 'inv_c_MSLearning42.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/library/svy/int_cle_student\\.htm\\?', c: 'inv_c_p40683318-interstitial.js', f: 1, p: 2 	}
	,{m: '//[\\w\\.-]+/licensing/(?!(servicecenter|licensewise/|mla/))', c: 'inv_c_3331mt43.js', f: 0.197, p: 0 	}
	,{m: '//[\\w\\.-]+/nb-no/(default\\.aspx)?$', c: 'inv_c_p162091074-NORWEGIAN_HP.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/nb-no/download', c: 'inv_c_p162095591-DLC-NORWEGIAN.js', f: 0.5, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/nl-be/(default\\.aspx)?$', c: 'inv_c_p162091074-DUTCH-BE-HP.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/nl-be/download', c: 'inv_c_p162095591-DLC-NL-BE.js', f: 0.5, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/nl-nl/(default\\.aspx)?$', c: 'inv_c_p162091074-DUTCH-NL-HP.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/nl-nl/download', c: 'inv_c_p162095591-DLC-DUTCH.js', f: 0.042, p: 2 	}
	,{m: '//[\\w\\.-]+/nl-nl/windows/compatibility/.*/CompatCenter', c: 'inv_c_p176052898-NL-NL.js', f: 0.5, p: 4 	}
	,{m: '//(?!privacy)[\\w\\.-]+/pl-pl/(default\\.aspx)?$', c: 'inv_c_p162091074-PL-HP.js', f: 0.23, p: 1 	}
	,{m: '//[\\w\\.-]+/pl-pl/download', c: 'inv_c_p162095591-DLC-PL-PL.js', f: 0.053, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/pt-br/(default\\.aspx)?$', c: 'inv_c_p162091074-PT-BR.js', f: 0.038, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-br/download', c: 'inv_c_p162095591-DLC-PT-BR.js', f: 0.0062, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-br/windows/compatibility/.*/CompatCenter', c: 'inv_c_p176052898-PT-BR.js', f: 0.5, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/pt-pt/(default\\.aspx|$)', c: 'inv_c_p162091074-PT_HP.js', f: 0.37, p: 1 	}
	,{m: '//[\\w\\.-]+/pt-pt/download', c: 'inv_c_p162095591-DLC-PT.js', f: 0.0625, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/ru-ru/(default\\.aspx)?$', c: 'inv_c_p162091074-RU-RU.js', f: 0.026, p: 1 	}
	,{m: '//[\\w\\.-]+/ru-ru/download', c: 'inv_c_p162095591-DLC-RU-RU.js', f: 0.0046, p: 1 	}
	,{m: '//[\\w\\.-]+/ru-ru/windows/compatibility/.*/CompatCenter', c: 'inv_c_p176052898-RU-RU.js', f: 0.21, p: 0 	}
	,{m: '//[\\w\\.-]+/security', c: 'inv_c_3331mt49.js', f: 0.009, p: 0 	}
	,{m: '//[\\w\\.-]+/student/en(?!-us/app-development/windows-8\\.aspx)', c: 'inv_c_p40683318-1510.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/surface/en-.*.*/support', c: 'inv_c_p177004014-MS-Surface.js', f: 0.12, p: 0 	}
	,{m: '//(?!privacy)[\\w\\.-]+/sv-se/(default\\.aspx)?$', c: 'inv_c_p162091074-SWEDEN_HP.js', f: 0.33, p: 1 	}
	,{m: '//[\\w\\.-]+/sv-se/download', c: 'inv_c_p162095591-DLC-SWEDEN.js', f: 0.076, p: 1 	}
	,{m: '//[\\w\\.-]+/tr-tr/(default\\.aspx)?$', c: 'inv_c_p162091074-TR-HP.js', f: 0.19, p: 1 	}
	,{m: '//[\\w\\.-]+/tr-tr/download', c: 'inv_c_p162095591-DLC-TR-TR.js', f: 0.032, p: 1 	}
	,{m: '//[\\w\\.-]+/visualstudio/eng', c: 'inv_c_p94239075-VS-HP.js', f: 0.044, p: 0 	}
	,{m: '//[\\w\\.-]+/visualstudio/en-us', c: 'inv_c_p94239075.js', f: 0.035, p: 0 	}
	,{m: '//[\\w\\.-]+/windows/buy/(tr-tr|en-ca|en-gb|en-au|ja-jp|de-de|fr-fr|ru-ru|es-es|it-it|nl-nl)', c: 'inv_c_blank.js', f: 0, p: 5  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windows/enterprise/(?!(default\\.(aspx|html|mspx))|$)', c: 'inv_c_p38361073-DDS.js', f: 0.24, p: 1 	}
	,{m: '//[\\w\\.-]+/windows/internet-explorer/(?!welcome\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 1  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windowsphone/(cs-cz|de-at|de-ch|el-gr|en-hk|en-ie|en-in|en-sg|es-es|es-mx|fi-fi|fr-ch|fr-be|fr-ch|hu-hu|it-it|nb-no|nl-nl|pl-pl|pt-pt|sv-se|tr-tr|zh-hk|zh-tw)', c: 'inv_c_blank.js', f: 0, p: 0  ,halt: true 	}
	,{m: '//[\\w\\.-]+/windowsphone/de-de', c: 'inv_c_p127227702-DE-DE.js', f: 0.087, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/en-gb/(?!(welcome\\.aspx|cmpn/(att\\.aspx|bogo\\.aspx|t-mobile\\.aspx)))', c: 'inv_c_p127227702-EN-GB.js', f: 0.066, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/en-us/(?!(welcome\\.aspx|cmpn/(att\\.aspx|bogo\\.aspx|t-mobile\\.aspx)))', c: 'inv_c_p127227702-EN-US-P131919559.js', f: 0.0471, p: 4 	}
	,{m: '//[\\w\\.-]+/windowsphone/fr-fr', c: 'inv_c_p127227702-FR-FR.js', f: 0.14, p: 4 	}
	,{m: '//[\\w\\.-]+/zh-cn/(default\\.aspx|$)', c: 'inv_c_p162091074-ZH-CN-HP.js', f: 0.0135, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-cn/download', c: 'inv_c_p162095591-DLC-ZH.js', f: 0.0038, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-cn/windows/compatibility/.*/CompatCenter', c: 'inv_c_p176052898-ZH-CN.js', f: 0.22, p: 4 	}
	,{m: '//[\\w\\.-]+/zh-hk/(default\\.aspx)?$', c: 'inv_c_p162091074-ZH-HK-HP.js', f: 0.5, p: 3 	}
	,{m: '//[\\w\\.-]+/zh-hk/download', c: 'inv_c_p162095591-DLC-ZH-HK.js', f: 0.2, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-tw/(default\\.aspx)?$', c: 'inv_c_p162091074-ZH-TW-HP.js', f: 0.11, p: 1 	}
	,{m: '//[\\w\\.-]+/zh-tw/download', c: 'inv_c_p162095591-DLC-ZH-TW.js', f: 0.008, p: 1 	}
	,{m: '(//[\\w\\.-]+/sql/experience/(Default\\.aspx\\?loc=en)|(html/Default\\.aspx\\?loc=en)|(html/Events\\.aspx\\?loc=en)|(LearnSQL\\.aspx\\?h=t&loc=en)|(LearnSQL\\.aspx\\?loc=en)|(Events\\.aspx\\?loc=en)|(.*\\.wmv))|(/learning/en/us/(s|S)yndication(p|P)age\\.aspx)', c: 'inv_c_blank.js', f: 0, p: 3  ,halt: true 	}
]
};
COMSCORE.SiteRecruit.Broker.run();