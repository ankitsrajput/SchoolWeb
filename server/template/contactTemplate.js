
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const contactTemplate = (data = {}) => {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone) || "—";
  const subject = escapeHtml(data.subject) || "General Enquiry";
  const message = escapeHtml(data.message).replace(/\n/g, "<br/>");
  const firstName = (data.name || "").trim().split(" ")[0] || "them";
  const year = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Contact Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#F4F1EA;font-family:'Poppins',Arial,Helvetica,sans-serif;">

  <!-- preheader (hidden preview text in inbox) -->
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#F4F1EA;">
    New enquiry from ${name} - ${subject}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F1EA;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background-color:#890C25;padding:32px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:44px;height:44px;border-radius:50%;border:2px solid rgba(255,255,255,0.45);text-align:center;vertical-align:middle;" align="center">
                    <span style="font-size:20px;line-height:1;">&#127891;</span>
                  </td>
                  <td style="padding-left:12px;" valign="middle">
                    <div style="font-family:Georgia,'Playfair Display',serif;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.5px;line-height:1;">Sr. LS International</div>
                    <div style="color:rgba(255,255,255,0.65);font-size:10px;letter-spacing:2px;margin-top:3px;">Public School</div>
                  </td>
                </tr>
              </table>

              <div style="margin-top:24px;">
                <span style="display:inline-block;background-color:rgba(255,255,255,0.15);color:#ffffff;font-size:11px;letter-spacing:1px;text-transform:uppercase;padding:5px 12px;border-radius:20px;">
                  Website Contact Form
                </span>
              </div>

              <h1 style="margin:14px 0 0;color:#ffffff;font-family:Georgia,'Playfair Display',serif;font-size:23px;font-weight:600;">
                &#128233; New Contact Enquiry
              </h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:30px 36px 6px;">
              <p style="margin:0;color:#737477;font-size:14px;line-height:1.6;">
                Someone just reached out through the Sr. LS International Public School website. Their details are below.
              </p>
            </td>
          </tr>

          <!-- Detail rows -->
          <tr>
            <td style="padding:16px 36px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 1px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#F7F4EC;width:110px;border-radius:8px 0 0 0;">
                    <span style="color:#890C25;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Name</span>
                  </td>
                  <td style="padding:14px 16px;background-color:#F7F4EC;border-radius:0 8px 0 0;">
                    <span style="color:#1a1a1a;font-size:14px;font-weight:500;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background-color:#F7F4EC;">
                    <span style="color:#890C25;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Email</span>
                  </td>
                  <td style="padding:14px 16px;background-color:#F7F4EC;">
                    <a href="mailto:${email}" style="color:#1a1a1a;font-size:14px;font-weight:500;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background-color:#F7F4EC;">
                    <span style="color:#890C25;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Phone</span>
                  </td>
                  <td style="padding:14px 16px;background-color:#F7F4EC;">
                    <span style="color:#1a1a1a;font-size:14px;font-weight:500;">${phone}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;background-color:#F7F4EC;border-radius:0 0 0 8px;">
                    <span style="color:#890C25;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Subject</span>
                  </td>
                  <td style="padding:14px 16px;background-color:#F7F4EC;border-radius:0 0 8px 0;">
                    <span style="color:#1a1a1a;font-size:14px;font-weight:500;">${subject}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:26px 36px 0;">
              <p style="margin:0 0 10px;color:#1a1a1a;font-family:Georgia,'Playfair Display',serif;font-size:16px;font-weight:600;">
                Message
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-left:3px solid #890C25;padding:14px 18px;background-color:#fbfaf7;border-radius:0 6px 6px 0;">
                    <p style="margin:0;color:#4a4a4a;font-size:14px;line-height:1.7;font-style:italic;">
                      "${message}"
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:28px 36px 8px;" align="left">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:6px;background-color:#890C25;">
                    <a href="mailto:${email}" style="display:inline-block;padding:12px 26px;color:#ffffff;font-size:13.5px;font-weight:600;text-decoration:none;border-radius:6px;font-family:'Poppins',Arial,Helvetica,sans-serif;">
                      Reply to ${firstName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:30px 36px 0;">
              <div style="border-top:1px solid #ececec;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px 32px;" align="center">
              <p style="margin:0;color:#a3a3a3;font-size:11.5px;line-height:1.7;">
                This enquiry was submitted via the contact form at <strong style="color:#890C25;">srlsinternationalpublicschool.com</strong><br/>
                &copy; ${year} Sr. LS International Public School. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;
};

export default contactTemplate;