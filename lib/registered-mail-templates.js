
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
								<div style="font-size: 24px;font-weight: 750; line-height: 31.2px; color: rgb(255, 0, 0)">Einschreiben ID: TEST123</div>

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
								<div style="font-size: 16px; font-weight: 700; padding-top: 24px; line-height: 24px;">Ihr Einschreiben mit der EID: TEST123 wurde innerhalb von 7 vom Empf&auml;nger nicht abgeholt. Es erfolgte keine Zugestellung.</br></div>
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
											<div style="padding-right: 24px;  text-align: center; margin: auto;"><a style="text-decoration: none; color: #000000;" href="[EPOST_URL]" target="_blank"><img src="cid:epost.png" alt="Zustellung per ePost App"></a></div>
										</td>
									</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px; padding-left: 4px; padding-top: 14px;">2. Klicke auf den eMail Button f&uuml;r die Zustellung per eMail.</div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="padding-right: 24px;  text-align: center; margin: auto;"><a style="text-decoration: none; color: #000000;" href="[ACCEPT_URL]" target="_blank"><img src="cid:email.png" alt="Zustellung per eMail"></a></div>
										</td>
									</tr>
									<tr>
										<td>
											<div style="font-size: 14px; font-weight: 400; line-height: 22.4px; padding-left: 4px; padding-top: 14px;">3. Klicke auf den Ablehnen Button für die Annahmeverweigerung. </div>
										</td>
									</tr>
									<tr>
										<td align="center">
											<div style="padding-right: 24px;  text-align: center; margin: auto;"><a style="text-decoration: none; color: #000000;" href="[REJECT_URL]" target="_blank"><img src="cid:reject.png" alt="Annahmeverweigerung"></a></div>
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
// map your stages to template filenames
const TEMPLATES = {
  initial,
  error,
  arrival,
  timeout,
  reject,
  read,
  notification
};

/**
 * Returns your email HTML for any registered-mail stage.
 *
 * @param {'initial'|'error'|'arrival'|'timeout'|'reject'|'read'|'notification'} stage
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
    .replace(/\[SUBJECT\]/g,    fixMojibake(data.subject)   || '')
    .replace(/\[DAYS\]/g,       data.days != null ? String(data.days) : '')
}
function fixMojibake(str) {
  return Buffer.from(str, 'latin1').toString('utf8')
}
module.exports = { generateEmailHtml };