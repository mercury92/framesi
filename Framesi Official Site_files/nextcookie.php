

function NextCookie(){

	this.version = "1.0.0";
	this.usePopupForDetails = true;
	this.ContentWidth= 1200;
	this.listPopup = true;
	this.textPolicy = true;
	this.titlePopupColor = "#1f1f1f";
	this.detailPageUrl = "cookie_policy.php";
	this.cookieName = "cookieDisclaimerShown";
	this.debugMode = false;
	this.text = "The Framesi website uses cookies to offer you the best navigation experience. You consent to the use of cookies by closing this banner. [detailPageUrl]Learn more[/detailPageUrl].";
	this.textColor = "#666261";
	this.textWidth = "800px";
    this.textFont = "12px";
	this.backgroundColor = "#ebebeb";
	this.color = "#5b5b5b";
	this.linkColor = "#2d8cc2";
	this.btnBackColor = "#2d8cc2";
	this.btnColorTxt = "#fff";
	this.message = "OK";
	this.btnWidth = "55px";
	this.additionalBarStyle = "";
	this.additionalLinkStyle = "";
	this.baseUrl = "http://cookie.nextmove.it";

	this.top = 0;


	this.enable = 1;

	this.Setup = function(){};

	this.SetupEvent = function(){
		if(navigator.userAgent.indexOf("MSIE 8") > -1)
		{
			window.attachEvent("onload", function(){
				nc.Init();
			});
		}
		else
		{
			window.addEventListener("load",function(){
			nc.Init();
			});
		}
	}

	this.Init = function(e){
		this.Setup();

			var style = "";

			if(this.top)
				style += ".nextcookie{z-index:999;position:fixed;top:-200px;left:0;right:0;background:"+this.backgroundColor+";color:"+this.color+";transition:top ease 1s;box-shadow:0px 0px 5px #aaa;opacity:0.95;border-bottom:1px solid black;border-bottom-color:rgba(0,0,0,0.3);"+this.additionalBarStyle+"}";
			else
				style += ".nextcookie{z-index:999;position:fixed;bottom:-200px;left:0;right:0;background:"+this.backgroundColor+";color:"+this.color+";transition:bottom ease 1s;box-shadow:0px 0px 5px #aaa;opacity:0.95;border-bottom:1px solid black;border-bottom-color:rgba(0,0,0,0.3);"+this.additionalBarStyle+"}";

			style += ".nextcookiePadding{width:100%; margin:auto;text-align:center;font-size:13px;font-family: verdana, arial, serif;}";
			style += ".nextcookie a{color:"+this.linkColor+";text-decoration:underline;"+this.additionalLinkStyle+"}";
			style += ".nextcookiePopupWrapper {display:none;position:fixed;z-index:999;top:0px;left:0px;right:0px;bottom:0px;background:rgba(0,0,0,0.5);}";
			style += ".nextcookiePopup {position:relative;height:700px;background:#ebebeb; font-family:arial;font-size:11px;margin: 5%;}";
			style += ".nextcookiePopup h1 {margin-bottom:10px;margin-top:20px;font-size:20px; color:#1f1f1f; }";
			style += ".nextcookiePopup h2 {margin-bottom:10px;margin-top:20px;font-size:15px;  color:#1f1f1f;}";
			style += ".nextcookiePopup h3 {margin-bottom:10px;margin-top:20px;font-size:13px;  color:#1f1f1f;}";
			style += ".nextcookiePopup ul {list-style:disc;margin-left:20px}";
			style += ".nextcookiePopupScroller {text-align:left !important;position:absolute;top:50px;bottom:50px;right:50px;left:50px;overflow-y:auto;color:#1f1f1f;width: calc(100% - 100px);word-wrap:break-word;}";
			style += ".bannerContent{margin:5px;width: 100%;}";
			style += ".titlePopup {font-size:13px; font-weight: bold; color:"+this.titlePopupColor+";}";
			style += "#text{font-family:arial;font-size:"+this.textFont+";text-align:left !important; float:left; color:"+this.textColor+";max-width: "+this.textWidth+";word-wrap: break-word; position:relative;  padding-bottom: 0px;top:0px;margin-right:5%}";
			style += "#okBtn{font-family:arial;font-size:11px;font-weight: bold; background-color: "+this.btnBackColor+"; color: "+this.btnColorTxt+"; display: block;height: 35px;line-height: 35px;text-decoration: none;width:"+this.btnWidth+";text-align: center; float:right;position: relative;border-radius:5px;}";
			style += "#CloseBtn{font-family:arial;font-size:11px; background-color: "+this.btnBackColor+"; color: "+this.btnColorTxt+"; display: block;height: 35px;line-height: 35px;text-decoration: none;width: 55px;text-align: center; float:right;margin-top: 15px;}";
			style += "#tableCookie {text-align: center;width: 90%;border-collapse: collapse;}";
			style += "#tableCookie td, #tableCookie th {border: 1px solid #bebebe;padding: 3px 7px 2px 7px;}";
			style += "#tableCookie th {padding-top: 5px;padding-bottom: 4px;}";
			style += ".divBtn {margin-right: 10%;}";
			var html = "";
			html += "<div id='nextcookie' class='nextcookie'>";
			html += "<div class='nextcookiePadding'>";
			html += "<table class='bannerContent'><tr>";
			if(this.usePopupForDetails){
				var action = "href='javascript:;' onclick='document.getElementById(\"nextcookiePopupWrapper\").style.display = \"block\"' ";
			}else{
				var action = "href='" + this.detailPageUrl + "' ";
			}
			html += "<td ><div id='text' style='margin-left:20px;'>"+this.text
			.replace("[detailPageUrl]", "<a "+action+">")
			.replace("[/detailPageUrl]", "</a>");
			if(this.top)
			html += "</div></td><td><div class='divBtn'><a id='okBtn' href='javascript:;' onclick='setCookieRead();document.getElementById(\"nextcookie\").style.top = \"-200px\"'>"+this.message+"</a></div></td>";
			else
			html += "<td><div class='divBtn'><a id='okBtn' href='javascript:;' onclick='setCookieRead();document.getElementById(\"nextcookie\").style.bottom = \"-200px\"'>"+this.message+"</a></div></td>";
			html += "</tr></table>";
			html += "</div>";
			html += "</div>";
			html += "</div>";

			var popupHtml = "<div id='nextcookiePopupWrapper' class='nextcookiePopupWrapper'>\n\<div class='nextcookiePopup'><div class='nextcookiePopupPadding'><a id='CloseBtn' href='javascript:;' onclick='document.getElementById(\"nextcookiePopupWrapper\").style.display=\"none\"'>CLOSE</a><div class='nextcookiePopupScroller'><h1>LEGAL NOTES</h1>The www.framesi.it website (the \"Site\") is an on-line information service provided by Framesi S.p.a., with headquarters in Paderno Dugnano, S.S. dei Giovi, 135, VAT number 00729650960.<br><br>Framesi S.p.A. welcomes you to its Site. By accessing the Site, you become a User and you accept and agree to observe and to comply with the terms of use listed below:<ul><li>Terms of use<li>Third party liability<li>Amendments to the legal notes<li>Applicable law and dispute settlement</ul><h2 style=\"color: #C92869;\">1. TERMS OF USE</h2><p>With access to the Site, the User is granted a non-exclusive licence restricted to the use of the aforementioned Site solely for private use.<br>The material contained in the Site is protected by copyright.<br>In accordance with the laws governing intellectual and industrial property rights, unless otherwise expressly stated or subject to written authorization from Framesi S.p.A., the contents of the Site cannot be fully or partially copied, modified, reproduced, transferred, uploaded, downloaded, published or distributed in any way.</p><h2 style=\"color: #C92869;\">2. THIRD PARTY LIABILITY</h2><p>Framesi S.p.A. will do everything possible to ensure that the Site can always be consulted, except in cases of Internet malfunctioning, Site maintenance or content updating.<br>Framesi S.p.A. cannot be held responsible for anything published on the Site, due to possible contamination on the part of third parties. Framesi S.p.A. shall therefore not respond for damages, loss or prejudices of any kind deriving from consulting the Site, or from any inaccuracies or errors in its contents.<br>Framesi S.p.A. cannot be held responsible for the contents of Internet sites that share hypertextual links with its own: Framesi S.p.A. has not checked the material or information given on such sites, so the User is the only person responsible for using and consulting these websites.</p><h2 style=\"color: #C92869;\">3. AMENDMENTS TO THE LEGAL NOTES</h2><p>Framesi S.p.a. is entitled to amend these Notes at any time in order to comply with new regulations or to improve the consultation thereof.</p><h2 style=\"color: #C92869;\">4. APPLICABLE LAW AND SETTLEMENT OF ANY DISPUTES</h2><p>The Legal Notes are governed by Italian law. Any controversy connected with the validity, interpretation and/or execution of these Legal Notes and connected with the Site, shall be the exclusive competence of the Milan Law Courts.</p>";

		   /* if(this.listPopup){
				popupHtml += "";
			} */

			if(this.textPolicy){
				var popupPolicy = "<h1>PRIVACY POLICY</h1>\
In compliance with obligations arising from national (Law by Decree 196 of June 30, 2003, Code in the Matter of Protection of Personal Data) and EU regulations (General Data Protection Regulation 679/2016, GDPR) and subsequent amendments, this site respects and safeguards the privacy of visitors and users, making every possible and proportionate effort not to act in a way prejudicial to user rights. This privacy policy applies exclusively to the online activities of this site and is valid for visitors/users of the site. It does not apply to information collected through channels other than this website. The purpose of the Privacy Notice is to provide the utmost transparency with regard to the information that the site collects and how it is used.\
<br><br>\
<h2 style=\"color: #C92869;\">DATA COLLECTED, PURPOSE AND NATURE OF PROCESSING</h2>\
Framesi S.p.A. will process your personal data as explained below.<br>\
1. Data collected in automatic.<br>\
The IT system and applications designed for the functioning of this website absorb, in the course of their normal functioning, certain data (the transmission of which is implicit in the use of the Internet communication protocols) potentially associated with identifiable users. Among the data collected are included the IP addresses and names of domain of the computers used by those who connect to the site, the URI (Uniform Resource Identifier) addresses of the resources requested, the time of the request, the method used for submitting the request to the server, the size of the file obtained in response, the numerical code indicating the status of the answer given by the server (positive result, error, etc.) and other parameters regarding the operating system, the browser and the user’s IT environment.<br>\
These data are processed, for the time strictly necessary, for the sole purpose of gleaning statistical information on site use and making sure the site is functioning properly. The providing of such data is mandated inasmuch as directly linked to the process of surfing the Internet.<br>\
Information collected in automatic is processed in automated form in the aggregate in order to verify the proper functioning of the site and for reasons of security. Such data are never used for the identification or profiling of the user, but only for purposes of safeguarding the site and its users. This information is processed in accordance with the legitimate interests of the Data Controller.<br>\
2. Data provided voluntarily by the user.<br>\
The voluntary and explicit sending of email to the addresses indicated in the different channels for accessing this site does not entail a request for consent. The filling in of any forms specifically prearranged entails the subsequent acquisition of the e-mail address and data pertaining to the sender/user, necessary in order to reply to requests and/or provide the required service. Specific concise forms for particular services by request will be displayed in the pages of the site. In order to be enabled to send the request the user will therefore explicitly have to agree to the use of the data contained in whatever form. Data provided voluntarily by the user by filling in whatever forms will be used exclusively for providing the service requested. Such information will be processed only subject to the explicit consent of the user.<br>\
The grant of these data is optional; if consent is not given the Data Controller will not be able to respond to user requests and/or to provide the service required.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">COOKIES</h2>\
As is customary practice on all websites, this site makes use of cookies, small files of text that allow storage of information on the preferences of visitors with the aim of improving the functioning of the site, simplifying surfing by automating the procedures, and analysis of site use.<br>\
Session cookies are essential to be able to distinguish among the connected users, and are useful for preventing a functionality requested from being sent to the wrong user, as well as for purposes of security to forestall cyber attacks on the site. Session cookies do not contain personal data and last just for the session in progress, that is until the closing of the browser. No consent is required for this type of cookie.<br>\
Functionality cookies utilized by the site are strictly necessary for site use; in particular, they are linked to an express functionality request made by the user, for which no consent is needed.<br>\
<br><br>\
<b>Disabling cookies</b>\
<br><br>\
Cookies are linked to the browser utilized and can be disabled directly by the browser, thus refusing/revoking consent to use of the cookies. It is necessary to bear in mind that disabling of the cookies might prevent the proper use of certain functions of the same site. Instructions for cookie disabling are found on the web pages of the browser utilized, e.g. Mozilla Firefox, Microsoft Internet Explorer, Google Chrome, etc.<br>\
<br><br>\
<b>Cookies of third parties</b>\
<br><br>\
This site acts as an intermediary for third-party cookies, used to be able to provide additional services and functionalities to visitors, and to enhance the use of the same site, such as buttons for social media or videos. This site has no control over cookies of this type, entirely managed by outsiders. Consequently, information on the use of said cookies and the purposes of the same, as well as on whatever disconnection modes, are provided directly by the third parties. In particular, this site uses Google Analytics cookies: an analytical tool by Google that uses performance cookies to collect anonymous surfing data (IP addresses with last octet truncated) and exclusively aggregated for the purpose of examining site use, reporting on site activities and providing other information, including the number of visitors and the pages visited. Google can also transfer this information to outsiders when required by law or where a third party processes said information on behalf of Google. Google will not associate the IP address with any other datum in its possession. Data transmitted to Google are stored at Google servers in the United States. Based on a specific agreement with Google, which is the designated Data Processor, Google undertakes to process data by request of the Data Controller, which requests are made by means of software settings. These settings are such as to deactivate the advertising and data-sharing options. More information on Google Analytics cookies is available on the page Google Analytics Cookie Usage on Websites. The user may selectively disenable data collection by Google Analytics by installing on his/her browser the component for the purpose (opt out).<br>\
<br><br>\
<b>Social Network Plug-in</b>\
<br><br>\
This site also incorporates plug-in and/or buttons for the social networks so as to allow easy sharing of the contents of your favorite social networks. These plug-ins are programed without any page-access cookie to safeguard user privacy. Cookies may be installed if so provided by the social networks only when the user makes voluntary use of the plug-in. It should be borne in mind that a user who surfs when logged in the social network has already agreed to the use of the cookies transmitted via this site at the time of registration with the social network. The collection and use of information obtained by means of the plug-in are regulated by the pertinent privacy policy of whatever social network.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">TRANSFER OF DATA EXTRA EU</h2>\
This site might share some of the data collected with services located outside the European Union, in particular with Google, Facebook and Microsoft via social plug-ins and the Google Analytics service. Data transfer is authorized on the basis of specific decisions of the European Union and of the Privacy Authority, particularly decision 1250/2016 (Privacy Shield), by virtue of which no further consent is required. The above-mentioned companies guarantee their participation in Privacy Shield.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">SECURITY MEASURES</h2>\
This site processes user data in a lawful and proper manner, taking appropriate security measures aimed at preventing unauthorized access, dissemination, modification or destruction of data. Processing is done by means of IT and/or telematics devices, with organizational modes and logics strictly related to the stated purposes. In addition to the Data Controller, in some cases access to data may be granted to given categories of personnel involved in the organization of the site (administrative, commercial, marketing, legal, system administrators) or external subjects (such as outside providers of technical services, hosting providers, IT companies, communication agencies) appointed by the external Data Controller/s or to comply with legal requirements or to fulfill your specific requests.<br>\
Your data will not be the object of dissemination in any way.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">SOURCE OF PERSONAL DATA</h2>\
Personal data in the possession of Framesi S.p.A. are collected directly from the concerned individual.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">PERIOD OF RETENTION</h2>\
The data collected will be kept for a time no longer than necessary to achieve the purpose of the processing (“principle of storage limitation,” Art. 5, GDPR) or in compliance with time limits set by rules of law. A check is performed periodically as to the obsolescence of the data retained in relation to the purpose of collection.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">RIGHTS OF THE DATA SUBJECT</h2>\
Pursuant to EU Regulation 679/2016 (GDPR) and national normative provisions the user may, in the manner and within the limits as provided by the rules in force, exercise the following rights:<br>\
- to obtain confirmation as to whether or not personal data concerning him/her exist (right of access);<br>\
- to be informed of the source of the personal data;<br>\
- to receive communication thereof in intelligible form<br>\
- to be informed of the logic applied, methods used and purpose of the processing;<br>\
- to request the updating, the rectification and/or the supplementation of the data, and to obtain the erasure, anynomization or blocking of data that have been processed unlawfully, including data whose retention is no longer necessary for the purposes for which they were collected;<br>\
- to receive, in the case of processing by consent, at the sole cost of whatever medium, your data provided to the Data Controller, in structured form readable by a data processor and in a format commonly used by an electronic device;<br>\
- to lodge a complaint with the Privacy Authority;<br>\
- more generally, to exercise all rights recognized pursuant to the legal provisions in force.<br>\
Requests involving such rights are made by applying to the Data Controller. When data are processed on the basis of legitimate interests the rights of the Data Subject are guaranteed in any case (except for right to portability not provided for by the rules), particularly the right to object to processing, which may be exercised by so applying to the Data Controller.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">DATA CONTROLLER</h2>\
The Data Controller pursuant to the laws in force is Framesi S.p.A. with office at S.S. dei Giovi 135 – 20037 Paderno Dugnano (MI), which can be contacted at the following e-mail address: risorseumane@pec.framesi.it";
				popupHtml += popupPolicy;
			}

			var bodies = document.getElementsByTagName("body");
			if(body = bodies[0]){
				var tempElement = document.createElement("div");
				tempElement.innerHTML = '<!--googleoff: all-->'+html + popupHtml+'<!--googleon: all-->';

				body.appendChild(tempElement);
			}


			var heads = document.getElementsByTagName("head");
			if(head = heads[0]){
				if(navigator.userAgent.indexOf("MSIE 8") > -1){
					var tempElement = document.createElement("style");
					tempElement.setAttribute('type', 'text/css');
					tempElement.setAttribute("id", "nextCookieCss");
					head.appendChild(tempElement);
					for(i=0; i<document.styleSheets.length; i++){
						if(document.styleSheets[i].id == "nextCookieCss"){
							document.styleSheets[i].cssText = style;
						}
					}
				}else{
					var tempElement = document.createElement("style");
					tempElement.innerHTML = style;
					head.appendChild(tempElement);
				}
			}
		if(this.debugMode || !this.GetCookie(this.cookieName)){
			if(this.top){
                setTimeout("document.getElementById('nextcookie').style.top = '0';", 500);

            }
			else{
                setTimeout("document.getElementById('nextcookie').style.bottom = '0';", 500);
            }
		}else{
            setTimeout("document.getElementById('nextcookie').style.display = 'none';", 500);

        }

	}

	this.SetCookie = function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	this.GetCookie = function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
}
