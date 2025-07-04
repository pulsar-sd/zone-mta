'use strict';
const initial = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Aufgabequittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: [EID] wurde angenommen auf der Aufgabeplattform </br> Der Empfänger wurde benachrichtigt. Sobald der Empf&auml;nger den Empfang best&auml;tigt oder ablehnt erfolgt die Zustellung bzw. die L&ouml;schung des Einschreibens und sie erhalten eine Quittung.</div>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die zur Zustellung &uuml;bermittelte original eMail und die Quittung als Signiertes PDF-A mit den Details der &Uuml;bermittlung</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF für den sp&auml;teren Nachweis der &Uuml;bermittlung des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`
const error = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Fehlerquittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Bei der &Uuml;bertragung Deines Einschreiben mit der EID: [EID] trat ein fehler auf. Es erfolgte keine Zugestellung.</br></div>
							</td>
						</tr>
						<td>
							<table style="background-color: #ff3000; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
								<tr>
									<td align="center" style="padding-bottom: 14px;">
										<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Fehler!</a></div>
									</td>
								</tr>
								<tr>
									<td align="center">
										<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;text-align:  justify;">[ERR_MSG]</b></a></div>
									</td>
								</tr>
							</table>
						</td>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die original eMail und die Quittung als Signiertes PDF-A mit den Details des Fehlers. Das betreffende Einschreiben wurde gel&ouml;scht.</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF f&uuml;r den sp&auml;teren Nachweis der fehlerhaften Zustellung des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`
const arrival = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Zustellungsquittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: [EID] wurde vom Empf&auml;nger angenommen und per [CHANNEL] Zugestellt.</br></div>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die zugestellte original eMail und die Quittung als Signiertes PDF-A mit den Details der Zustellung</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF f&uuml;r den sp&auml;teren Nachweis der erfolgreichen Zustellung des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`
const timeout = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Verfallsquittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">Test Registered Mail</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: [EID] wurde innerhalb von 7 vom Empf&auml;nger nicht abgeholt. Es erfolgte keine Zugestellung.</br></div>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die original eMail und die Quittung als Signiertes PDF-A mit den Details des Verfalls. Das betreffende Einschreiben wurde gel&ouml;scht.</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF für den sp&auml;teren Nachweis des Verfalls des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`

const reject = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Ablehnungsquittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: [EID] wurde vom Empf&auml;nger abgeleht. Es erfolgte keine Zugestellung.</br></div>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die original eMail und die Quittung als Signiertes PDF-A mit den Details der Ablehnung. Das betreffende Einschreiben wurde gel&ouml;scht.</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF für den sp&auml;teren Nachweis der Ablehnung des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`

const read = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;">
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">&Ouml;ffnungsquittung</div>
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Einschreiben ID: [EID]</div>

							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: [EID] wurde vom Empf&auml;nger ge&ouml;ffnet.</br></div>
							</td>
						</tr>
						<tr>
							<td>
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Im Anhang finden sie die ge&ouml;ffnete original eMail und die Quittung als Signiertes PDF-A mit den Details der &Ouml;ffnung</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Bewahren sie das PDF f&uuml;r den sp&auml;teren Nachweis der &Ouml;ffnung des Einschreibens in ihren Unterlagen auf</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`

const notification = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 700;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Bold.woff") format("woff");
			font-display: swap;
			}
			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 400;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Rg.woff") format("woff");
			font-display: swap;
			}

			@font-face {
			font-family: "Frutiger Neue For Post";
			font-weight: 300;
			src:url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff2") format("woff2"),
				url("https://fonts.post.ch/frutigerneueforpost/v2/FrutigerNeueforPostW05-Lt.woff") format("woff");
			font-display: swap;
			}

			body {
				background-color: #ececec;
			}

			@media screen and (max-width: 600px) {
				.email-template {
					width: 100%;
				}
				body{
					margin: 0;
				}
			}
		</style>
	</head>
	<body>
		<table width="100%" bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="0">
			<tr>
				<td>
					<table
						style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;padding: 40px 56px 0px 56px; min-width: 430px;"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="430"
						class ="email-template"
					>
						<!-- Logo and Banner -->
						<tr>
							<td align= "left">
								<img src= "https://epost.ch/hs-fs/hubfs/Post_Logo_digital_RGB.png?width=144&upscale=true&name=Post_Logo_digital_RGB.png" alt="epost-logo" width="55" height="55" style="border-radius: 5px;"/>
							</td>
						</tr>
						<!-- Header with language links -->
						<tr>
							<td style="display: flex;padding-top: 40px; padding-bottom: 40px;font-size: 12px;">
								<!-- Language Links -->
							  <table>
									<tr>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=FR&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:fr.png" alt="Française"></a></td>
										<td style="padding-right: 24px;"><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=IT&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:it.png" alt="Italiano"></a></td>
										<td><a style="text-decoration: none; color: #000000;" href="https://app.epost.ch/invitation-email?lang=EN&data=U2ViYXN0aWFuOztlUG9zdCBTY2FuY2VudGVyOztUaGlzIGlzIGEgdmVyeSBsb25nIHRpdGxlLCBldmVuIHRvbyBsb25nIGZvciBhbiBFTUFJTC4gU2NoYXVlbiB3aXIgbWFsLCB3YXMgcGFzc2llcnQgw6TDlsO8KDEyMyErKsOnJSYvKCk9Pzs7ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKaGRYUnZiMjVpYjJGeVpHbHVaekF4UUdKbGNtZGxjaTV6ZUNKOS5EOWtLSnBOXzVlU1lCaHhLUU5qYTRNcDUxcmNjU1VsQ2ExcmRxYW9yeC1n" target="_blank"><img src="cid:en.png" alt="English"></a></td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- Email Body -->
						<tr>
							<td style="padding-bottom: 24px;"> 
								<!-- Email Content -->
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px;">Ein Einschreiben wartet auf Dich für die Zugestellung.</div>
							</td>
						</tr>
						<tr>
							<td>
								<table style="background-color: #000000; height: 24px;padding: 12px; width: 100%;">
									<tr>
										<td align="left">
											<div >
												<a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">
													<img src="https://api.epost.ch/resources/downloadpage/image/common-file-text-lock.png" alt="icon" width="24" height="24"/>
												</a>
											</div>
										</td>
										<td>
											<div style="font-size: 14px; font-weight: 700; padding-left: 16px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none; color: #ffffff;">[SUBJECT] + EID: [EID]</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td> 
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Eine verschl&uuml;sselte Zustellung erfolgt ausschliesslich in der ePost App. </br> Das eingeschriebene Dokument wird Dir zugestellt sobald du den Empfang autorisierst.</div>
							</td>
						</tr>
						<tr>
							<td style="padding-top: 40px;">
								<table>
									<tr>
										<td>
											<div style="font-size: 18px; font-weight: 750; line-height: 30px;">So gehst du vor:</div>
										</td>
									</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px; padding-left: 4px; padding-top: 14px;">1. Klicke auf den ePost Button f&uuml;r die Zustellung in der ePost App. Melde dich in der ePost App mit <b>[EMAIL]</b> an um dein Einschreiben zu lesen </div>
										</td>
									</tr>
									<tr>
  <td align="center">
    <a
      href=""
      target="_blank"
      style="
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
      "
    >
      <!-- YELLOW ePost BUTTON -->
      <table border="0" cellspacing="0" cellpadding="0" style="margin: 20px auto;">
        <tr>
          <td
            bgcolor="#FFCC00"
            style="
              padding: 16px 24px;
              border-radius: 4px;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #000000;
              text-align: center;
              font-weight: bold;
            "
          >
            Zustellung ePost
          </td>
        </tr>
      </table>
    </a>
  </td>
</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px; padding-left: 4px; padding-top: 14px;">2. Klicke auf den eMail Button f&uuml;r die Zustellung per eMail.</div>
										</td>
									</tr>
									<tr>
  <td align="center">
    <a
      href=""
      target="_blank"
      style="
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
      "
    >
      <!-- BLACK eMail BUTTON -->
      <table border="0" cellspacing="0" cellpadding="0" style="margin: 20px auto;">
        <tr>
          <td
            bgcolor="#000000"
            style="
              padding: 16px 24px;
              border-radius: 4px;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #ffffff;
              text-align: center;
              font-weight: bold;
            "
          >
            Zustellung eMail
          </td>
        </tr>
      </table>
    </a>
  </td>
</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px; padding-left: 4px; padding-top: 14px;">3. Klicke auf den Ablehnen Button für die Annahmeverweigerung. </div>
										</td>
									</tr>
									<tr>
  <td align="center">
    <a
      href=""
      target="_blank"
      style="
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
      "
    >
      <!-- RED Reject Button -->
      <table border="0" cellspacing="0" cellpadding="0" style="margin: 20px auto;">
        <tr>
          <td
            bgcolor="#FF3B30"
            style="
              padding: 16px 24px;
              border-radius: 4px;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #ffffff;
              text-align: center;
              font-weight: bold;
            "
          >
            Zurrückweisen
          </td>
        </tr>
      </table>
    </a>
  </td>
</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td> 
								<table style="background-color: #FFCC00; height: 90px;padding: 8px; width: 100%;margin-top: 24px;">
									<tr>
										<td align="center" style="padding-bottom: 14px;">
											<div style="font-size: 18px; font-weight: 750; color: #000000;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Wichtig!</a></div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="font-size: 14px; font-weight: 400; line-height: 22px;"><a href="https://api.epost.ch/eletter-qr" style="text-decoration: none;color: #000000;">Verwende bei der die Registrierung diese Email Adresse: <b>[EMAIL]</b></a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<!-- App Download Links -->
						<tr>
							<td style="display: flex; align-items: center; padding: 24px 0px 24px 0px;">
								<table><tr>
								<td style="padding-right: 5px"><a target="_blank" href="https://apps.apple.com/us/app/epost-app/id1571482864"><img src="https://api.epost.ch/resources/downloadpage/image/download_appstore.png" alt="ios" width="152"/></a></td>
								<td align="right"><a target="_blank" href="https://play.google.com/store/apps/details?id=ch.klara.epost"><img src="https://api.epost.ch/resources/downloadpage/image/download_googleplay.png" alt="android" width="152"/></a></td>
								</tr></table>
							</td>
						</tr>
						<!-- QR Code and Description -->
						
						<tr>
							<td style="padding-top: 40px;">
								<table>
									<tr>
										<td>
											<div style="font-size: 18px; font-weight: 750; line-height: 26px; padding-bottom: 8px;">Du hast die ePost App bereits?</div>
										</td>
									</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px;">Stelle sicher, dass du die Email Adresse [EMAIL] in deinem Profil hinzuf&uuml;gst und verifizierst.</div>
										</td>
									</tr>
									<tr></tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px;"><a style="color:#000000" href="https://www.epost.ch/de-ch/privatkunden/faq">Wie mache ich das?</a></div>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						
						<!-- Footer -->
						<tr>
							<td align="center" style="padding-top: 40px;font-size: 24px; font-weight: 750; line-height: 30px; display: flex; justify-content: center;">
								<!-- Footer Content -->
									<table style="width: 100%;">
										<tr>
											<td align="center">
												Herzliche Gr&uuml;sse
											</td>
										</tr>
										<tr>
											<td align="center">
												Dein ePost Team
											</td>
										</tr>
									</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td>
					<table style="font-family: Frutiger Neue For Post;width: 430px;margin: auto;background-color: white;font-size: 16px;"
					align="center"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="430">
						<!-- Social Media Links -->
						<tr>
							<td align="center">
								<hr align="center" style="background-color: #D1D1D1; margin-top: 32px;opacity: 20%;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-spacing: 20px; padding-bottom: 28px">
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px; color: #000000; font-weight: 700; text-align: center;">
											Folge uns
										</td>
									</tr>
									<tr>
										<td align="center">
											<table align="center" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.facebook.com/ePostSchweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-media-facebook-black-2x.png" alt="Facebook" width="10" style="max-width: 10px; width: 10px;"/>
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.youtube.com/@epostapp" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-video-youtube-clip-black-2x.png" alt="YouTube" width="14" style="max-width: 14px; width: 14px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.instagram.com/swiss_epost" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/social-instagram-black-2x.png" alt="Instagram" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
													<td align="center" style="padding: 0 12px;">
														<a href="https://www.linkedin.com/company/epost-schweiz" target="_blank" rel="noreferrer">
															<img src="https://www.klara.ch/hubfs/img/emails/icons/social-media/professional-network-linkedin-black-2x.png" alt="LinkedIn" width="16" style="max-width: 16px; width: 16px;" />
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td align="center" style="font-weight: 700;font-size: 12px;line-height: 22px;text-align: center;">
											ePost Service AG
										</td>
									</tr>
									<tr>
										<td align="center" style="font-size: 12px;line-height: 22px;text-align: center;">
											Schl&ouml;ssli Sch&ouml;negg - Wilhelmsh&ouml;he 1 - 6003 Luzern - Schweiz<br />
											Ein Unternehmen der Post und Teil der Axon Welt.
										</td>
									</tr>
									<!-- Legal Links -->
									<tr>
										<td align="center" style="font-size: 12px; line-height: 22px;">
											<!-- Legal Links -->
											<table align="center" style="opacity: 50%; font-size: 10px;"><tr>
												<td style="padding-right: 24px;"><a href="https://support.mylife.klara.ch/" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Support Center</i></a></td>
												<td style="padding-right: 24px;"><a href="https://www.epost.ch/datenschutzerklaerung" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>Datenschutz</i></a></td>
												<td><a href="https://www.epost.ch/de-ch/agb" target="_blank" rel="noreferrer" style="text-decoration: underline;color: #000000;"><i>AGB</i></a></td>
											</tr></table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</body>
</html>`
const apiResponse = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ePost API Notification Page</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: hidden;
        color: white;
        background: linear-gradient(135deg, #667eea, #764ba2, #6B8BFB, #8B5CF6);
        background-size: 400% 400%;
        animation: gradientAnimation 15s ease infinite;
      }
      @keyframes gradientAnimation {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .content-wrapper {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      }
      .image-container {
        margin-bottom: 20px;
      }
      .image-container svg {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        animation: pulse 2s infinite alternate;
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.05);
        }
      }
      .main-text {
        font-size: 2.5em;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
    </style>
  </head>
  <body>
    <div class="content-wrapper">
      <div class="image-container">
        <img style="border-radius: 50%; object-fit: cover;" src="data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAsRXhpZgAATU0AKgAAAAgAAQExAAIAAAAKAAAAGgAAAABHcmVlbnNob3QA/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgC+QL5AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9Pooor8APsAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAor5+lvbrzn/0mb7x/5aGmfbbr/n5m/wC/hr6X+wZf8/Pw/wCCfXf6sy/5+/h/wT6Eor57+23X/PzN/wB/DR9tuv8An5m/7+Gj+wZf8/Pw/wCCH+rMv+fv4f8ABPoSivnv7bdf8/M3/fw0fbbr/n5m/wC/ho/sGX/Pz8P+CH+rMv8An7+H/BPoSivnv7bdf8/M3/fw0fbbr/n5m/7+Gj+wZf8APz8P+CH+rMv+fv4f8E+hKK+e/tt1/wA/M3/fw0fbbr/n5m/7+Gj+wZf8/Pw/4If6sy/5+/h/wT6Eor57+23X/PzN/wB/DR9tuv8An5m/7+Gj+wZf8/Pw/wCCH+rMv+fv4f8ABPoSivnv7bdf8/M3/fw0fbbr/n5m/wC/ho/sGX/Pz8P+CH+rMv8An7+H/BPoSivnv7bdf8/M3/fw0fbbr/n5m/7+Gj+wZf8APz8P+CH+rMv+fv4f8E+hKK+e/tt1/wA/M3/fw0fbbr/n5m/7+Gj+wZf8/Pw/4If6sy/5+/h/wT6Eor5/gvbr7TH/AKTN98f8tD619AV5mOwDwbjeV73/AAPHzLLXgHG8ubmv0ttb/MKKK8v+PtxNbeArJ7aaSFjqcYLRsVJHlS8cVhgsM8XiIUE7cztc8WrU9nBz7HqFFfFP9raj/wA/91/3+b/Gj+1tR/5/7r/v83+NfY/6mz/5/L/wH/gnmf2mv5fxPtaivin+1tR/5/7r/v8AN/jR/a2o/wDP/df9/m/xo/1Nn/z+X/gP/BD+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AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+d5f8AXP8A7xptOl/1z/7xptfpq2P2BbBRRRTGeifCfrq3/bH/ANnr0avOfhP11b/tj/7PXo1fC5t/vs/l+SPzbO/+RhU+X/pKCiiivLPHCiiigAooooAKKKKAPNvit/x8aZ/uyfzWvPq9B+K3/Hxpn+7J/Na8+r7vKv8Ac4fP82fpWS/7hT+f5sKKKK9M9ckt/wDj5i/3x/Ovoavnm3/4+Yv98fzr6Gr5fPt6fz/Q+N4m3pfP9Aryr9oT/kn9j/2FI/8A0VLXqteVftCf8k/sf+wpH/6KlrhyT/kZUfU+HxX8CR850UUV+znzAUUUUAFFFFABRRRQAUUUUAFdR8Nf+SmaD/19rXL11Hw1/wCSmaD/ANfa1yY7/dav+F/kzSl/Ej6o+uaKKK/Cz6wKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+d5f9c/8AvGm06X/XP/vGm1+mrY/YFsFFFFMZ6J8J+urf9sf/AGevRq85+E/XVv8Atj/7PXo1fC5t/vs/l+SPzbO/+RhU+X/pKCiiivLPHCiiigAooooAKKKKAPNvit/x8aZ/uyfzWvPq9B+K3/Hxpn+7J/Na8+r7vKv9zh8/zZ+lZL/uFP5/mwooor0z1yS3/wCPmL/fH86+hq+ebf8A4+Yv98fzr6Gr5fPt6fz/AEPjeJt6Xz/QK8q/aE/5J/Y/9hSP/wBFS16rXlX7Qn/JP7H/ALCkf/oqWuHJP+RlR9T4fFfwJHznRRRX7OfMBRRRQAUUUUAFFFFABRRRQAV1Hw1/5KZoP/X2tcvXUfDX/kpmg/8AX2tcmO/3Wr/hf5M0pfxI+qPrmiiivws+sCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAo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ov8A0CLD/wABk/wrRoo9tU/mf3hyx7Gd/wAI9ov/AECLD/wGT/Cj/hHtF/6BFh/4DJ/hWjRR7ap/M/vDlj2M7/hHtF/6BFh/4DJ/hR/wj2i/9Aiw/wDAZP8ACtGij21T+Z/eHLHsZ3/CPaL/ANAiw/8AAZP8KP8AhHtF/wCgRYf+Ayf4Vo0Ue2qfzP7w5Y9jO/4R7Rf+gRYf+Ayf4U+HRNKt5llg0yzikQ5V0t0BU+xAq9RR7Wo/tP7w5Y9gooorIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z" alt="ePost Logo" />
      </div>
      <div class="main-text">
        [TEXT_HERE]
      </div>
    </div>
  </body>
  </html>
  `
// map your stages to template filenames
const TEMPLATES = {
  initial,
  error,
  arrival,
  timeout,
  reject,
  read,
  notification,
  apiResponse
};

/**
 * Returns your email HTML for any registered-mail stage.
 *
 * @param {'initial'|'error'|'arrival'|'timeout'|'reject'|'read'|'notification'|'apiResponse'} stage
 * @param {{ eid: string, subject?:string, sender?:string, recipient?:string, date?:string, days?:number, errorCode?:string }} data
 * @returns {string}
 */
function generateEmailHtml(stage, data) {
  const template = TEMPLATES[stage];
  if (!template) {
    throw new Error(`Unknown stage "${stage}"`);
  }


  // minimal placeholder replacement
  return template
    .replace(/\[EID\]/g,        data.eid)
    .replace(/\[DATE\]/g,       data.date      || '')
    .replace(/\[SENDER\]/g,     data.sender    || '')
    .replace(/\[ERR_MSG\]/g,    data.errMsg    || '')
    .replace(/\[CHANNEL\]/g,    data.channel   || '')
    .replace(/\[RECIPIENT\]/g,  data.recipient || '')
    .replace(/\[EPOST_URL\]/g,  data.epostUrl  || '')
    .replace(/\[ERROR_CODE\]/g, data.errorCode || '')
    .replace(/\[ACCEPT_URL\]/g, data.acceptUrl || '')
    .replace(/\[REJECT_URL\]/g, data.rejectUrl || '')
    .replace(/\[TEXT_HERE\]/g,  data.messageText  || '')
    .replace(/\[SUBJECT\]/g,    data.subject?fixMojibake(data.subject):''   || '')
    .replace(/\[DAYS\]/g,       data.days !== null ? String(data.days) : '')
}
function fixMojibake(str) {
  return Buffer.from(str, 'latin1').toString('utf8')
}
module.exports = { generateEmailHtml };