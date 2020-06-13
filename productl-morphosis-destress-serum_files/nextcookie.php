

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
	this.text = "Il sito Framesi utilizza cookie per offrirti la migliore esperienza di navigazione. Chiudendo questo banner acconsenti all'uso dei cookie. [detailPageUrl]Scopri di più[/detailPageUrl].";
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

			var popupHtml = "<div id='nextcookiePopupWrapper' class='nextcookiePopupWrapper'>\n\<div class='nextcookiePopup'><div class='nextcookiePopupPadding'><a id='CloseBtn' href='javascript:;' onclick='document.getElementById(\"nextcookiePopupWrapper\").style.display=\"none\"'>CHIUDI</a><div class='nextcookiePopupScroller'>";

		   /* if(this.listPopup){
				popupHtml += "";
			} */

			if(this.textPolicy){
				var popupPolicy = "<h1>PRIVACY POLICY</h1>\
In ottemperanza degli obblighi derivanti dalla normativa nazionale (D. Lgs. 30 giugno 2003 n. 196, Codice in materia di protezione dei dati personali) e comunitaria, (Regolamento europeo per la protezione dei dati personali n. 679/2016, GDPR) e successive modifiche, il presente sito rispetta e tutela la riservatezza dei visitatori e degli utenti, ponendo in essere ogni sforzo possibile e proporzionato per non ledere i diritti degli utenti. La presente privacy policy si applica esclusivamente alle attività online del presente sito ed è valida per i visitatori/utenti del sito. Non si applica alle informazioni raccolte tramite canali diversi dal presente sito web. Lo scopo dell'informativa privacy è di fornire la massima trasparenza relativamente alle informazioni che il sito raccoglie e come le usa.\
<br><br>\
<h2 style=\"color: #C92869;\">DATI RACCOLTI, FINALITA’ E NATURA DEI TRATTAMENTI</h2>\
Framesi S.p.A. tratterà i suoi dati personali quali:<br>\
1. Dati raccolti in automatico.<br>\
I sistemi informatici e gli applicativi dedicati al funzionamento di questo sito web rilevano, nel corso del loro normale funzionamento, alcuni dati (la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet) potenzialmente associati ad utenti identificabili. Tra i dati raccolti sono compresi gli indirizzi IP e i nomi di dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri riguardanti il sistema operativo, il browser e l’ambiente informatico utilizzato dall’utente.<br>\
Questi dati vengono trattati, per il tempo strettamente necessario, al solo fine di ricavare informazioni statistiche sull’uso del sito e per controllarne il regolare funzionamento. Il conferimento di tali dati è obbligatorio in quanto direttamente collegato all’esperienza di navigazione web.<br>\
Le informazioni raccolte in automatico sono trattate in forma automatizzata e raccolte in forma aggregata, al fine di verificare il corretto funzionamento del sito e per motivi di sicurezza. Tali dati non sono mai utilizzati per l’identificazione o la profilazione dell’utente, ma solo a fini della tutela del sito e dei suoi utenti. Tali informazioni sono trattate in base ai legittimi interessi del Titolare.<br>\
2. Dati forniti volontariamente dall’utente.<br>\
L’invio volontario ed esplicito di posta elettronica agli indirizzi indicati nei differenti canali di accesso di questo sito non comporta richiesta di consenso. La compilazione di eventuali form specificamente predisposti comporta la successiva acquisizione dell’indirizzo mail e dei dati del mittente/utente, necessari per rispondere alle istanze prodotte e/o erogare il servizio richiesto. Specifiche informative di sintesi saranno riportate o visualizzate nelle pagine del sito eventualmente predisposte per particolari servizi a richiesta (form). L’utente dovrà pertanto acconsentire esplicitamente all’utilizzo dei dati riportati in questi form per poter inviare la richiesta.<br>\
I dati forniti volontariamente dall’utente mediante compilazione di eventuali form verranno utilizzati esclusivamente per l’erogazione del servizio richiesto. Tali informazioni saranno trattate solo previo esplicito consenso da parte dell’utente. Il conferimento di questi dati è facoltativo, in caso di mancato conferimento il Titolare non potrà rispondere alle richieste dell’utente e/o erogare il servizio richiesto.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">COOKIES</h2>\
Come è d'uso su tutti i siti web, anche questo sito fa uso di cookies, piccoli file di testo che consentono di conservare informazioni sulle preferenze dei visitatori, per migliorare le funzionalità del sito, per semplificarne la navigazione automatizzando le procedure e per l'analisi dell'uso del sito.<br>\
I cookie di sessione sono essenziali per poter distinguere tra gli utenti collegati, e sono utili per evitare che una funzionalità richiesta possa essere fornita all'utente sbagliato, nonché per fini di sicurezza per impedire attacchi informatici al sito. I cookie di sessione non contengono dati personali e durano per la sola sessione in corso, cioè fino alla chiusura del browser. Per essi non occorre consenso.<br>\
I functionality cookie utilizzati dal sito sono strettamente necessari per l'uso del sito, in particolare sono collegati ad una espressa richiesta di funzionalità da parte dell'utente, per i quali non occorre alcun consenso.<br>\
<br><br>\
<b>Disabilitazione cookies</b>\
<br><br>\
I cookies sono collegati al browser utilizzato e possono essere disabilitati direttamente dal browser, così rifiutando/revocando il consenso all'uso dei cookies. Occorre tenere presente che la disabilitazione dei cookies potrebbe impedire il corretto utilizzo di alcune funzioni del sito stesso. Le istruzioni per la disabilitazione dei cookies si trovano alle pagine web del browser utilizzato, ad es. Mozilla Firefox, Microsoft Internet Explorer, Google Chrome, ecc.<br>\
<br><br>\
<b>Cookies di terze parti</b>\
<br><br>\
Il presente sito funge anche da intermediario per cookies di terze parti, utilizzati per poter fornire ulteriori servizi e funzionalità ai visitatori e per migliorare l'uso del sito stesso, come i pulsanti per i social, oppure video. Questo sito non ha alcun controllo sui cookie di questo tipo, interamente gestiti dalle terze parti. In conseguenza di ciò, le informazioni sull'uso dei detti cookies e sulle finalità degli stessi, nonché sulle modalità per l'eventuale disabilitazione, sono fornite direttamente dalle terze parti. In particolare il presente sito utilizza cookies di Google Analytics: uno strumento di analisi di Google che attraverso l'uso di cookies (performance cookies), raccoglie dati di navigazione anonimi (IP troncati all'ultimo ottetto) ed esclusivamente aggregati allo scopo di esaminare l'uso del sito da parte degli utenti, compilare report sulle attività nel sito e fornire altre informazioni, compreso il numero dei visitatori e le pagine visitate.<br>\
Google può anche trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google. Google non assocerà l'indirizzo IP a nessun altro dato posseduto da Google. I dati trasmessi a Google sono depositati presso i server di Google negli Stati Uniti. In base a specifico accordo con Google, che è designato quale responsabile del trattamento dei dati, questi si impegna a trattare i dati in base alle richieste del Titolare, impartite tramite le impostazioni del software. In base a tali impostazioni le opzioni pubblicitarie e di condivisione dei dati sono disattivate. Ulteriori informazioni sui cookies di Google Analytics si trovano alla pagina Google Analytics Cookie Usage on Websites. L'utente può disabilitare in modo selettivo la raccolta di dati da parte di Google Analytics installando sul proprio browser l'apposito componente fornito da Google (opt out).<br>\
<br><br>\
<b>Plugin Social Network</b>\
<br><br>\
Il presente sito incorpora anche plugin e/o bottoni per i social network, al fine di consentire una facile condivisione dei contenuti sui vostri social network preferiti. Tali plugin sono programmati in modo da non impostare alcun cookie all'accesso della pagina, per salvaguardare la privacy degli utenti. Eventualmente i cookie vengono impostati, se così previsto dai social network, solo quando l'utente fa effettivo e volontario uso del plugin. Si tenga presente che se l'utente naviga essendo loggato nel social network allora ha già acconsentito all'uso dei cookie veicolati tramite questo sito al momento dell'iscrizione al social network. La raccolta e l'uso delle informazioni ottenute a mezzo del plugin sono regolati dalle rispettive informative privacy dei social network.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">TRASFERIMENTO DI DATI IN PAESI EXTRA UE</h2>\
Il presente sito potrebbe condividere alcuni dei dati raccolti con servizi localizzati al di fuori dell'area dell'Unione Europea. In particolare con Google, Facebook e Microsoft tramite i social plugin e il servizio di Google Analytics. Il trasferimento è autorizzato in base a specifiche decisioni dell'Unione Europea e del Garante per la tutela dei dati personali, in particolare la decisione 1250/2016 (Privacy Shield), per cui non occorre ulteriore consenso. Le aziende sopra menzionate garantiscono la propria adesione al Privacy Shield.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">MISURE DI SICUREZZA</h2>\
Il presente sito tratta i dati degli utenti in maniera lecita e corretta, adottando le opportune misure di sicurezza volte ad impedire accessi non autorizzati, divulgazione, modifica o distruzione non autorizzata dei dati. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai dati categorie di incaricati coinvolti nell’organizzazione del sito (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, hosting provider, società informatiche, agenzie di comunicazione) nominati dal Titolare Responsabili esterni del Trattamento o per obblighi di legge o per adempiere a vostre specifiche richieste. I Suoi dati non saranno in alcun modo oggetto di diffusione.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">FONTE DEI DATI PERSONALI</h2>\
I dati personali di cui Framesi S.p.A. è in possesso sono raccolti direttamente presso l’interessato<br>\
<br><br>\
<h2 style=\"color: #C92869;\">PERIODO DI CONSERVAZIONE</h2>\
I dati raccolti verranno conservati per un arco di tempo non superiore al conseguimento delle finalità per le quali sono trattati (“principio di limitazione della conservazione”, art. 5, GDPR) o in base alle scadenze previste dalle norme di legge. La verifica sulla obsolescenza dei dati conservati in relazione alle finalità per cui sono stati raccolti viene effettuata periodicamente.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">DIRITTI DELL’INTERESSATO</h2>\
Ai sensi del Regolamento europeo 679/2016 (GDPR) e della normativa nazionale, l'utente può, secondo le modalità e nei limiti previsti dalla vigente normativa, esercitare i seguenti diritti:<br>\
- richiedere la conferma dell'esistenza di dati personali che lo riguardano (diritto di accesso);<br>\
- conoscerne l'origine;<br>\
- riceverne comunicazione intelligibile;<br>\
- avere informazioni circa la logica, le modalità e le finalità del trattamento;<br>\
- richiederne l'aggiornamento, la rettifica, l'integrazione, la cancellazione, la trasformazione in forma anonima, il blocco dei dati trattati in violazione di legge, ivi compresi quelli non più necessari al perseguimento degli scopi per i quali sono stati raccolti;<br>\
- nei casi di trattamento basato su consenso, ricevere al solo costo dell’eventuale supporto, i suoi dati forniti al Titolare, in forma strutturata e leggibile da un elaboratore di dati e in un formato comunemente usato da un dispositivo elettronico; - il diritto di presentare un reclamo all’Autorità di controllo (Garante Privacy);<br>\
- nonché, più in generale, esercitare tutti i diritti che gli sono riconosciuti dalle vigenti disposizioni di legge.<br>\
Le richieste vanno rivolte al Titolare del trattamento.<br>\
Nel caso in cui i dati siano trattati in base ai legittimi interessi sono comunque garantiti i diritti degli interessati al trattamento (tranne il diritto alla portabilità che non è previsto dalle norme), in particolare il diritto di opposizione al trattamento che può essere esercitato inviando una richiesta al Titolare del trattamento.<br>\
<br><br>\
<h2 style=\"color: #C92869;\">TITOLARE DEL TRATTAMENTO</h2>\
Titolare del trattamento ai sensi delle vigenti leggi è Framesi S.p.A. con sede in S.S. dei Giovi 135 – 20037 Paderno Dugnano (Mi), contattabile all’indirizzo di posta elettronica: risorseumane@pec.framesi.it";
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
