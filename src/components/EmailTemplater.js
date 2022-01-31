const EmailTemplater = (title = '', leadArticle = '') => {
  return `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
      <title></title>
      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
      <!--<![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          @media (max-width:660px) {
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .image_block img.big {
                  width: auto !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
          }
      </style>
  </head>
  
  <body style="background-color: #dde4ea; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dde4ea;" width="100%">
          <tbody>
              <tr>
                  <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="image_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" style="line-height:10px"><a
                                                                          href="https://www.ocmc.org/"
                                                                          style="outline:none" tabindex="-1"
                                                                          target="_blank"><img
                                                                              alt="Orthodox Christian Mission Center"
                                                                              src="http://secure.ocmc.org/images/content/pagebuilder/Red-on-White_-_higher_res.png"
                                                                              style="display: block; height: auto; border: 0; width: 320px; max-width: 100%;"
                                                                              title="Orthodox Christian Mission Center"
                                                                              width="320" /></a></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: top center; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 50px; padding-right: 50px; padding-top: 20px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="heading_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="text-align:center;width:100%;">
                                                                  <h1
                                                                      style="margin: 0; color: #555555; direction: ltr; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
                                                                      <strong><span style="color: #ce460e;">${title}
                                                                          </span></strong>
                                                                  </h1>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="image_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" style="line-height:10px"><img
                                                                          alt="The McClanahan Missionary Family"
                                                                          class="big"
                                                                          src="http://secure.ocmc.org/images/content/pagebuilder/IMG_2580_email.jpg"
                                                                          style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;"
                                                                          title="The McClanahan Missionary Family"
                                                                          width="640" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; background-position: top center; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 35px; padding-right: 35px; padding-top: 10px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="padding-top:20px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 16px; mso-line-height-alt: 21px; color: #555555; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; text-align: justify;">
                                                                          ${leadArticle}
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="10" cellspacing="0"
                                                          class="button_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://ocmc.org/mcclanahanfamily" style="height:42px;width:232px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#febe10"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a
                                                                          href="https://ocmc.org/mcclanahanfamily"
                                                                          style="text-decoration:none;display:inline-block;color:#000000;background-color:#febe10;border-radius:4px;width:auto;border-top:1px solid #febe10;border-right:1px solid #febe10;border-bottom:1px solid #febe10;border-left:1px solid #febe10;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                          target="_blank"><span
                                                                              style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                  style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>The
                                                                                      McClanahan
                                                                                      Family</strong></span></span></a>
                                                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      [[?[[S45:49326]]::TRUE::
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #7eaccd; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center;">
                                                                              <span
                                                                                  style="font-size:22px;color:#fefffe;">Here
                                                                                  are more ways you can</span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center;">
                                                                              <strong><span
                                                                                      style="color:#fefffe;font-size:42px;">ENGAGE
                                                                                      WITH MISSIONS</span></strong>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      ::
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #7eaccd; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center;">
                                                                              <span
                                                                                  style="font-size:22px;color:#fefffe;">Here's
                                                                                  another way you can</span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p
                                                                              style="margin: 0; font-size: 14px; text-align: center;">
                                                                              <strong><span
                                                                                      style="color:#fefffe;font-size:42px;">ENGAGE
                                                                                      WITH MISSIONS</span></strong>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      ]]
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <div class="spacer_block"
                                                          style="height:10px;line-height:10px;font-size:1px;"> </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #406784; padding-top: 0px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #393d47; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p style="margin: 0; text-align: center;"><span
                                                                                  style="font-size:34px;"><span
                                                                                      style="color:#ffffff;"><strong>Join
                                                                                          us TONIGHT at 7pm on OCN for an
                                                                                          interview with
                                                                                          a mission team
                                                                                          member!</strong></span></span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="image_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" style="line-height:10px"><img
                                                                          alt="Jeanette Aydlette teaching on a virtual mission team"
                                                                          class="big"
                                                                          src="http://secure.ocmc.org/images/content/pagebuilder/Forged_and_Woven.png"
                                                                          style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;"
                                                                          title="Jeanette Aydlette teaching on a virtual mission team"
                                                                          width="640" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #393d47; line-height: 1.2;">
                                                                          <p style="margin: 0; text-align: justify;"><span
                                                                                  style="color:#fefffe;"><span
                                                                                      style="font-size:20px;"><strong>Orthodox
                                                                                          Christian Network will feature
                                                                                          Jeanette Aydlette
                                                                                          tonight!</strong></span></span>
                                                                          </p>
                                                                          <p
                                                                              style="margin: 0; text-align: justify; mso-line-height-alt: 14.399999999999999px;">
                                                                               </p>
                                                                          <p style="margin: 0; text-align: justify;"><span
                                                                                  style="color:#fefffe;"><span
                                                                                      style="font-size:20px;">Join us
                                                                                      <strong>this evening at 7pm
                                                                                          EST</strong> to hear about her
                                                                                      experiences as an OCMC team member!
                                                                                      Click below to register and join
                                                                                      us!</span></span></p>
                                                                          <p
                                                                              style="margin: 0; text-align: justify; mso-line-height-alt: 14.399999999999999px;">
                                                                               </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="10" cellspacing="0"
                                                          class="button_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://myocn.net/lets-talk-live-forged-and-woven/" style="height:42px;width:308px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#febe10"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a
                                                                          href="https://myocn.net/lets-talk-live-forged-and-woven/"
                                                                          style="text-decoration:none;display:inline-block;color:#000000;background-color:#febe10;border-radius:4px;width:auto;border-top:1px solid #febe10;border-right:1px solid #febe10;border-bottom:1px solid #febe10;border-left:1px solid #febe10;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                          target="_blank"><span
                                                                              style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                  style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Let’s
                                                                                      Talk Live: Forged and
                                                                                      Woven</strong></span></span></a>
                                                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      [[?[[S45:49326]]::TRUE::
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <div class="spacer_block"
                                                          style="height:10px;line-height:10px;font-size:1px;"> </div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                          role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0"
                                          class="row-content stack" role="presentation"
                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                          width="640">
                                          <tbody>
                                              <tr>
                                                  <td class="column"
                                                      style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #406784; padding-top: 0px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                      width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #393d47; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p style="margin: 0; text-align: center;"><span
                                                                                  style="font-size:30px;"><span
                                                                                      style="color:#ffffff;"><strong>Special
                                                                                          OCMC Ambassador
                                                                                          Announcement</strong></span></span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0"
                                                          class="image_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td style="width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" style="line-height:10px"><img
                                                                          alt="Mission Sunday 2022" class="big"
                                                                          src="http://secure.ocmc.org/images/content/pagebuilder/272631193_10158928013543403_5658061003418900227_n.jpg"
                                                                          style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;"
                                                                          title="Mission Sunday 2022" width="640" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block"
                                                          role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                          width="100%">
                                                          <tr>
                                                              <td
                                                                  style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:15px;">
                                                                  <div
                                                                      style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                                      <div
                                                                          style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #393d47; line-height: 1.2;">
                                                                          <p
                                                                              style="margin: 0; font-size: 16px; text-align: justify;">
                                                                              <span
                                                                                  style="font-size:16px;color:#fffefe;">The
                                                                                  Mission Center has been preparing
                                                                                  for <strong>Mission Sunday</strong> held
                                                                                  this year
                                                                                  on <strong>Sunday</strong>, <strong>March
                                                                                      6, 2022</strong>. Mission Sunday is
                                                                                  the day, dedicated by the Assembly of
                                                                                  Bishops, for parishes across the U.S. to
                                                                                  come together and raise awareness for
                                                                                  Orthodox missions and the work of OCMC
                                                                                  within their communities.</span>
                                                                          </p>
                                                                          <p
                                                                              style="margin: 0; font-size: 16px; text-align: justify; mso-line-height-alt: 14.399999999999999px;">
                                                                               </p>
                                                                          <p
                                                                              style="margin: 0; font-size: 16px; text-align: justify;">
                                                                              <span
                                                                                  style="font-size:16px;color:#fffefe;">Join
                                                                                  us and speak at your
                                                                                  parish about Orthodox missions. Talk to
                                                                                  your priest and start planning for the
                                                                                  day. Contact Daniel Kindell at <a
                                                                                      aria-label="Link daniel@ocmc.org"
                                                                                      href="mailto:daniel@ocmc.org"
                                                                                      rel="noopener noreferrer"
                                                                                      style="text-decoration: underline; color: #fff2ac;"
                                                                                      tabindex="-1" target="_blank"
                                                                                      title="mailto:daniel@ocmc.org">daniel@ocmc.org</a> 
                                                                                  for presentation tools and OCMC
                                                                                  materials. Remember, we are here to
                                                                                  help!
                                                                                  Engage your parish by being an OCMC
                                                                                  presences during the first two weeks of
                                                                                  Great Lent.</span>
                                                                          </p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="10" cellspacing="0"
                                                          class="button_block" role="presentation"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                          width="100%">
                                                          <tr>
                                                              <td>
                                                                  <div align="center">
                                                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://ocmc.org/mcclanahanfamily" style="height:42px;width:232px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#febe10"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a
                                                                          href="http://secure.ocmc.org/site/Survey?ACTION_REQUIRED=URI_ACTION_USER_REQUESTS&SURVEY_ID=1542"
                                                                          style="text-decoration:none;display:inline-block;color:#000000;background-color:#febe10;border-radius:4px;width:auto;border-top:1px solid #febe10;border-right:1px solid #febe10;border-bottom:1px solid #febe10;border-left:1px solid #febe10;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                          target="_blank"><span
                                                                              style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                  style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Order
                                                                                      coin boxes and lesson
                                                                                      plans</strong></span></span></a>
                                                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      ::]]
  
                      <!-- new colored lines -->
                      <div style="background-color: transparent">
                          <div class="block-grid three-up no-stack" style="
      min-width: 320px;
      max-width: 640px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      margin: 0 auto;
      background-color: transparent;
      ">
                              <div style="
      border-collapse: collapse;
      display: table;
      width: 100%;
      background-color: transparent;
      ">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num4" style="
      display: table-cell;
      vertical-align: top;
      max-width: 320px;
      min-width: 212px;
      width: 213px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border: 0px solid transparent; padding: 0px">
                                              <!--<![endif]-->
                                              <table class="divider" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      min-width: 100%;
      text-size-adjust: 100%;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td class="divider_inner" style="
      word-break: break-word;
      vertical-align: top;
      min-width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 0px;
      " valign="top">
                                                              <table class="divider_content" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-top: 7px solid #69df57;
      height: 1px;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      " height="1" valign="top">
                                                                              &nbsp;
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num4" style="
      display: table-cell;
      vertical-align: top;
      max-width: 320px;
      min-width: 212px;
      width: 213px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border: 0px solid transparent; padding: 0px">
                                              <!--<![endif]-->
                                              <table class="divider" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      min-width: 100%;
      text-size-adjust: 100%;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td class="divider_inner" style="
      word-break: break-word;
      vertical-align: top;
      min-width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 0px;
      " valign="top">
                                                              <table class="divider_content" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-top: 7px solid #e0a031;
      height: 1px;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      " height="1" valign="top">
                                                                              &nbsp;
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td><td align="center" width="213" style="background-color:transparent;width:213px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num4" style="
      display: table-cell;
      vertical-align: top;
      max-width: 320px;
      min-width: 212px;
      width: 213px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border: 0px solid transparent; padding: 0px">
                                              <!--<![endif]-->
                                              <table class="divider" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      min-width: 100%;
      text-size-adjust: 100%;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td class="divider_inner" style="
      word-break: break-word;
      vertical-align: top;
      min-width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 0px;
      " valign="top">
                                                              <table class="divider_content" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-top: 7px solid #3898ec;
      height: 1px;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      " height="1" valign="top">
                                                                              &nbsp;
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <!-- end colored lines -->
                      <!-- footer starts -->
                      <div style="background-color: transparent">
                          <div class="block-grid two-up" style="
      min-width: 320px;
      max-width: 640px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      margin: 0 auto;
      background-color: transparent;
      ">
                              <div style="
      border-collapse: collapse;
      display: table;
      width: 100%;
      background-color: transparent;
      ">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="320" style="background-color:transparent;width:320px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num6" style="
      display: table-cell;
      vertical-align: top;
      max-width: 320px;
      min-width: 318px;
      width: 320px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border: 0px solid transparent; padding: 0px">
                                              <!--<![endif]-->
                                              <table class="divider" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      min-width: 100%;
      text-size-adjust: 100%;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td class="divider_inner" style="
      word-break: break-word;
      vertical-align: top;
      min-width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 0px;
      " valign="top">
                                                              <table class="divider_content" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-top: 1px solid transparent;
      height: 30px;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      " height="30" valign="top">
                                                                              &nbsp;
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <div class="img-container center autowidth"
                                                  style="padding-right: 0px; padding-left: 0px" align="center">
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
  [endif]--><a href="https://www.ocmc.org" target="_blank"><img class="center autowidth" style="
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      height: auto;
      border: 0;
      width: 100%;
      max-width: 320px;
      display: block;
      " title="Orthodox Christian Mission Center" src="http://secure.ocmc.org/images/content/pagebuilder/Red-on-White_-_higher_res.png"
                                                          border="0" alt="Orthodox Christian Mission Center" width="320"
                                                          align="center" /></a>
                                                  <!--[if mso]></td></tr></table><![endif]-->
                                              </div>
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                              <div style="
      color: #406784;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      line-height: 1.2;
      padding: 10px;
      ">
                                                  <div class="txtTinyMce-wrapper" style="
      line-height: 1.2;
      font-size: 12px;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      color: #406784;
      mso-line-height-alt: 14px;
      ">
                                                      <p style="
      font-size: 14px;
      line-height: 1.2;
      text-align: center;
      word-break: break-word;
      font-family: Montserrat, 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      mso-line-height-alt: 17px;
      margin: 0;
      ">
                                                          <span style="font-size: 14px">Orthodox Christian Mission
                                                              Center</span>
                                                      </p>
                                                      <p style="
      font-size: 14px;
      line-height: 1.2;
      text-align: center;
      word-break: break-word;
      font-family: Montserrat, 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      mso-line-height-alt: 17px;
      margin: 0;
      ">
                                                          <span style="font-size: 14px">&copy; 2021 All rights
                                                              reserved.</span>
                                                      </p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td><td align="center" width="320" style="background-color:transparent;width:320px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                  <div class="col num6" style="
      display: table-cell;
      vertical-align: top;
      max-width: 320px;
      min-width: 318px;
      width: 320px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="border: 0px solid transparent; padding: 0px">
                                              <!--<![endif]-->
                                              <table class="divider" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      min-width: 100%;
      text-size-adjust: 100%;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td class="divider_inner" style="
      word-break: break-word;
      vertical-align: top;
      min-width: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      padding: 0px;
      " valign="top">
                                                              <table class="divider_content" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-top: 1px solid transparent;
      height: 30px;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="vertical-align: top" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      " height="30" valign="top">
                                                                              &nbsp;
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                              <div style="
      color: #406784;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      line-height: 1.2;
      padding-top: 5px;
      padding-right: 0px;
      padding-bottom: 5px;
      padding-left: 0px;
      ">
                                                  <div class="txtTinyMce-wrapper" style="
      line-height: 1.2;
      font-size: 12px;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      color: #406784;
      mso-line-height-alt: 14px;
      ">
                                                      <p style="
      font-size: 24px;
      line-height: 1.2;
      text-align: center;
      word-break: break-word;
      font-family: Montserrat, 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      mso-line-height-alt: 29px;
      margin: 0;
      ">
                                                          <span style="font-size: 24px"><strong><span><span>Connect With
                                                                          Us</span></span></strong></span>
                                                      </p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <table class="social_icons" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0px;
      border-collapse: collapse;
      width: 100%;
      " border="0" cellspacing="0" cellpadding="0">
                                                  <tbody>
                                                      <tr style="vertical-align: top" valign="top">
                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      padding: 10px;
      " valign="top">
                                                              <table class="social_table" style="
      table-layout: fixed;
      vertical-align: top;
      border-spacing: 0;
      border-collapse: collapse;
      mso-table-tspace: 0;
      mso-table-rspace: 0;
      mso-table-bspace: 0;
      mso-table-lspace: 0;
      " border="0" cellspacing="0" cellpadding="0" align="center">
                                                                  <tbody>
                                                                      <tr style="
      vertical-align: top;
      display: inline-block;
      text-align: center;
      " align="center" valign="top">
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      padding-bottom: 0;
      padding-right: 2.5px;
      padding-left: 2.5px;
      " valign="top">
                                                                              <a href="https://www.facebook.com/OrthodoxChristianMissionCenter"
                                                                                  target="_blank"><img style="
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      height: auto;
      border: 0;
      display: block;
      " title="facebook" src="http://secure.ocmc.org/images/content/pagebuilder/facebook2x.png" alt="Facebook" width="32"
                                                                                      height="32" /></a>
                                                                          </td>
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      padding-bottom: 0;
      padding-right: 2.5px;
      padding-left: 2.5px;
      " valign="top">
                                                                              <a href="https://twitter.com/ocmc"
                                                                                  target="_blank"><img style="
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      height: auto;
      border: 0;
      display: block;
      " title="twitter" src="http://secure.ocmc.org/images/content/pagebuilder/twitter2x.png" alt="Twitter" width="32"
                                                                                      height="32" /></a>
                                                                          </td>
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      padding-bottom: 0;
      padding-right: 2.5px;
      padding-left: 2.5px;
      " valign="top">
                                                                              <a href="https://www.linkedin.com/company/orthodox-christian-mission-center"
                                                                                  target="_blank"><img style="
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      height: auto;
      border: 0;
      display: block;
      " title="linkedin" src="http://secure.ocmc.org/images/content/pagebuilder/linkedin2x.png" alt="Linkedin" width="32"
                                                                                      height="32" /></a>
                                                                          </td>
                                                                          <td style="
      word-break: break-word;
      vertical-align: top;
      padding-bottom: 0;
      padding-right: 2.5px;
      padding-left: 2.5px;
      " valign="top">
                                                                              <a href="https://www.instagram.com/orthodoxchristianmissioncenter"
                                                                                  target="_blank"><img style="
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      height: auto;
      border: 0;
      display: block;
      " title="instagram" src="http://secure.ocmc.org/images/content/pagebuilder/instagram2x.png" alt="Instagram"
                                                                                      width="32" height="32" /></a>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                              <div style="
      color: #406784;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      line-height: 1.2;
      padding: 10px;
      ">
                                                  <div class="txtTinyMce-wrapper" style="
      line-height: 1.2;
      font-size: 12px;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      color: #406784;
      mso-line-height-alt: 14px;
      ">
                                                      <p style="
      font-size: 14px;
      line-height: 1.2;
      text-align: center;
      word-break: break-word;
      font-family: Montserrat, 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      mso-line-height-alt: 17px;
      margin: 0;
      ">
                                                          <span style="font-size: 14px">220 Mason Manatee Way, St.
                                                              Augustine, FL
                                                              32086</span>
                                                      </p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <div class="button-container" style="padding: 10px" align="center">
                                                  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.ocmc.org/serve-from-home/give" style="height:31.5pt; width:112.5pt; v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><!
  [endif]--><a style="
      -webkit-text-size-adjust: none;
      text-decoration: none;
      display: inline-block;
      color: #ffffff;
      background-color: #3aaee0;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      width: auto;
      padding-top: 5px;
      padding-bottom: 5px;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      text-align: center;
      mso-border-alt: none;
      word-break: keep-all;
      border: 1px solid #3aaee0;
      " href="https://www.ocmc.org/serve-from-home/give" target="_blank"><span style="
      padding-left: 20px;
      padding-right: 20px;
      font-size: 16px;
      display: inline-block;
      letter-spacing: undefined;
      "><span style="
      font-size: 16px;
      line-height: 2;
      word-break: break-word;
      mso-line-height-alt: 32px;
      "><strong>DONATE</strong></span></span></a>
                                                  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                                              </div>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <div style="background-color: transparent">
                          <div class="block-grid" style="
      min-width: 320px;
      max-width: 640px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      margin: 0 auto;
      background-color: transparent;
      ">
                              <div style="
      border-collapse: collapse;
      display: table;
      width: 100%;
      background-color: transparent;
      ">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                  <div class="col num12" style="
      min-width: 320px;
      max-width: 640px;
      display: table-cell;
      vertical-align: top;
      width: 640px;
      ">
                                      <div class="col_cont" style="width: 100% !important">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div style="
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 0px;
      padding-left: 0px;
      border: 0px solid transparent;
      ">
                                              <!--<![endif]-->
                                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 20px; padding-bottom: 20px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                              <div style="
      color: #406784;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      line-height: 1.2;
      padding: 20px;
      ">
                                                  <div class="txtTinyMce-wrapper" style="
      color: #406784;
      font-size: 12px;
      line-height: 1.2;
      font-family: 'Montserrat', 'Trebuchet MS',
      'Lucida Grande', 'Lucida Sans Unicode',
      'Lucida Sans', Tahoma, sans-serif;
      mso-line-height-alt: 14px;
      ">
                                                      <p style="
      font-size: 12px;
      line-height: 1.2;
      word-break: break-word;
      text-align: center;
      mso-line-height-alt: 14px;
      margin: 0;
      ">
                                                          <span style="color: #406784">Changed your mind? You can
                                                              <span style="font-size: 12px"><a style="
      text-decoration: underline;
      color: #406784;
      " rel="noopener" href="http://secure.ocmc.org/site/CO" target="_blank">unsubscribe</a></span>
                                                              at any time.</span>
                                                      </p>
                                                      <p style="
      text-align: center;
      line-height: 1.2;
      word-break: break-word;
      mso-line-height-alt: 14px;
      margin: 0;
      ">
                                                          <a style="color: #406784" rel="noopener noreferrer"
                                                              href="http://secure.ocmc.org/site/MessageViewer"
                                                              target="_blank" data-auth="NotApplicable">View this email in
                                                              your browser.</a>
                                                      </p>
                                                      <p style="
      text-align: center;
      line-height: 1.2;
      word-break: break-word;
      mso-line-height-alt: 14px;
      margin: 0;
      ">
                                                          <a style="color: #406784" rel="noopener noreferrer"
                                                              href="http://secure.ocmc.org/site/TellAFriend"
                                                              target="_blank" data-auth="NotApplicable">Forward this email
                                                              to a friend.</a>
                                                      </p>
                                                  </div>
                                              </div>
                                              <!--[if mso]></td></tr></table><![endif]-->
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div>
                                          <!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
                      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  </td>
              </tr>
          </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
  </body>
  
  </html>`;
};

export default EmailTemplater;
