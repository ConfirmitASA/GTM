// JavaScript Document

function confirmitjs_getLocale(hybrisCode) {
	var confirmitvar_languageMapping = [  
	   {  
		  "langcode":"en_au",
		  "hybriscode":"au_1",
		  "l":"9",
		  "heading":"We value your feedback - en_au",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"de_at",
		  "hybriscode":"at_1",
		  "l":"7",
		  "heading":"We value your feedback - de_at",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"nl_be",
		  "hybriscode":"be_2",
		  "l":"12",
		  "heading":"We value your feedback (be_2)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"fr_be",
		  "hybriscode":"be_1",
		  "l":"19",
		  "heading":"We value your feedback (be_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"zh_cn",
		  "hybriscode":"cn_1",
		  "l":"32772",
		  "heading":"We value your feedback (cn_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"cs_cz",
		  "hybriscode":"cz_1",
		  "l":"5",
		  "heading":"We value your feedback (cz_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"da_dk",
		  "hybriscode":"dk_1",
		  "l":"6",
		  "heading":"We value your feedback (dk_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_ie",
		  "hybriscode":"ie_1",
		  "l":"9",
		  "heading":"We value your feedback (ie_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"fr_fr",
		  "hybriscode":"fr_1",
		  "l":"12",
		  "heading":"We value your feedback (fr_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"de_de",
		  "hybriscode":"de_1",
		  "l":"7",
		  "heading":"We value your feedback (de_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"nl_nl",
		  "hybriscode":"nl_1",
		  "l":"19",
		  "heading":"We value your feedback (nl_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_hk",
		  "hybriscode":"hk_1",
		  "l":"9",
		  "heading":"We value your feedback (hk_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"zh_hk",
		  "hybriscode":"hk_2",
		  "l":"3076",
		  "heading":"We value your feedback (hk_2)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"hu_hu",
		  "hybriscode":"hu_1",
		  "l":"14",
		  "heading":"We value your feedback (hu_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"it_it",
		  "hybriscode":"it_1",
		  "l":"16",
		  "heading":"We value your feedback (it_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"ja_jp",
		  "hybriscode":"jp_1",
		  "l":"17",
		  "heading":"We value your feedback (jp_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_my",
		  "hybriscode":"my_1",
		  "l":"9",
		  "heading":"We value your feedback (my_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_nz",
		  "hybriscode":"nz_1",
		  "l":"9",
		  "heading":"We value your feedback (nz_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"no_no",
		  "hybriscode":"no_1",
		  "l":"20",
		  "heading":"We value your feedback (no_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_ph",
		  "hybriscode":"ph_1",
		  "l":"9",
		  "heading":"We value your feedback (ph_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"pl_pl",
		  "hybriscode":"pl_1",
		  "l":"21",
		  "heading":"We value your feedback (pl_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"es_es",
		  "hybriscode":"pt_1",
		  "l":"10",
		  "heading":"We value your feedback (pt_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_sg",
		  "hybriscode":"sg_1",
		  "l":"9",
		  "heading":"We value your feedback (sg_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_za",
		  "hybriscode":"za_1",
		  "l":"9",
		  "heading":"We value your feedback (za_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_hk",
		  "hybriscode":"hk1",
		  "l":"9",
		  "heading":"We value your feedback (hk1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"es_es",
		  "hybriscode":"es_1",
		  "l":"10",
		  "heading":"We value your feedback (es_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"sv_se",
		  "hybriscode":"se_1",
		  "l":"29",
		  "heading":"We value your feedback (se_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"de_de",
		  "hybriscode":"ch_1",
		  "l":"7",
		  "heading":"We value your feedback (ch_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_tw",
		  "hybriscode":"tw_1",
		  "l":"9",
		  "heading":"We value your feedback (tw_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"zh_tw",
		  "hybriscode":"tw_2",
		  "l":"31748",
		  "heading":"We value your feedback (tw_2)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   },
	   {  
		  "langcode":"en_gb",
		  "hybriscode":"gb_1",
		  "l":"9",
		  "heading":"We value your feedback (gb_1)",
		  "message":"What do you think of our service? Take our short survey and let us know how we're doing.",
		  "messageAlt":"Please continue your visit, the survey will be started automatically when you leave.",
		  "buttonYes":"Take the Survey",
		  "buttonYesAlt":"Got it",
		  "buttonNo":" Dismiss"
	   }
	];
	
	var tmpLocale = jQuery.grep(confirmitvar_languageMapping, function( n, i ) { return (n.hybriscode.toLowerCase() == hybrisCode.toLowerCase()) });
	return tmpLocale? tmpLocale : jQuery.grep(confirmitvar_languageMapping, function( n, i ) { return (n.hybriscode.toLowerCase() == "gb_1") });
}