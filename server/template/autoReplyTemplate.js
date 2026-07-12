// Basic HTML-escaping so a name typed into the form can't break the markup.
const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const autoReplyTemplate = (name) => {
  const safeName = escapeHtml(name);

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F1EA;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td align="center">
      <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width:480px;width:100%;background-color:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.06);">

        <tr>
          <td style="background-color:#890C25;padding:20px 30px;">
            <span style="font-size:20px;vertical-align:middle;">&#9989;</span>
            <span style="color:#ffffff;font-size:12px;letter-spacing:1px;text-transform:uppercase;margin-left:8px;vertical-align:middle;">Enquiry Received</span>
          </td>
        </tr>

        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 14px;color:#890C25;font-size:21px;">Thank You, ${safeName}!</h2>
            <p style="margin:0 0 8px;color:#333333;font-size:14.5px;line-height:1.6;">
              We have successfully received your enquiry.
            </p>
            <p style="margin:0;color:#333333;font-size:14.5px;line-height:1.6;">
              Our team will contact you shortly.
            </p>
            <div style="border-top:1px solid #eeeeee;margin:24px 0 18px;"></div>
            <strong style="color:#890C25;font-size:14.5px;">SR. L.S. International Public School</strong>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;
};

export default autoReplyTemplate;