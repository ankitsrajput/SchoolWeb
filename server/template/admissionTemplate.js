const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const ROWS = [
  ["Student Name", "studentName"],
  ["Date of Birth", "dob"],
  ["Gender", "gender"],
  ["Class Applying For", "className"],
  ["Father's Name", "fatherName"],
  ["Mother's Name", "motherName"],
  ["Phone", "phone"],
  ["Email", "email"],
  ["Address", "address"],
];

const admissionTemplate = (data = {}) => {
  const rowsHtml = ROWS.map(([label, key], i) => `
    <tr>
      <td style="padding:13px 18px;background-color:${i % 2 ? "#ffffff" : "#F7F4EC"};width:150px;">
        <span style="color:#890C25;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">${label}</span>
      </td>
      <td style="padding:13px 18px;background-color:${i % 2 ? "#ffffff" : "#F7F4EC"};">
        <span style="color:#1a1a1a;font-size:14px;font-weight:500;">${escapeHtml(data[key]) || "—"}</span>
      </td>
    </tr>`).join("");

  const message = escapeHtml(data.message) || "No message provided.";

  return `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F1EA;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td align="center">
      <table role="presentation" width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.06);">

        <tr>
          <td style="background-color:#890C25;padding:24px 30px;">
            <span style="color:#ffffff;font-size:19px;font-weight:600;">&#127891;&nbsp; New Admission Enquiry</span>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 30px 6px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-radius:8px;overflow:hidden;">
              ${rowsHtml}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 30px 8px;">
            <p style="margin:0 0 10px;color:#1a1a1a;font-size:16px;font-weight:600;">Parent's Message</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-left:3px solid #890C25;padding:14px 18px;background-color:#fbfaf7;">
                  <p style="margin:0;color:#4a4a4a;font-size:14px;line-height:1.7;font-style:italic;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:26px 30px 30px;">
            <div style="border-top:1px solid #ececec;padding-top:16px;">
              <p style="margin:0;color:#a3a3a3;font-size:11.5px;line-height:1.6;">
                Submitted via the admission enquiry form on the school website.
              </p>
            </div>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;
};

export default admissionTemplate;