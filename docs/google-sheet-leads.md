# Google Sheet lead capture (zero backend)

Spreadsheet: https://docs.google.com/spreadsheets/d/1_kdzz44E2w4AV5Sr2i00XTpRtQ9jDlzdml8Bg5hOvnM
Tab used by the website: **Avedu_Web**
Web App URL: configured in `src/utils/submit-lead.ts`

All counseling forms (`CounselingForm` modal and `EmbeddedCounselingForm`) post JSON to the
Apps Script Web App via `submitLead()` with a honeypot field + 15s client rate limit.

## Apps Script (replace your current doPost with this)

Column order matches the Avedu_Web tab: TIMESTAMP | NAME | NUMBER | EMAIL | COURSE | STATE | LEAD SOURCE

```js
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var SPREADSHEET_ID = "1_kdzz44E2w4AV5Sr2i00XTpRtQ9jDlzdml8Bg5hOvnM";
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    var sheetName = (data.sheetName || "Avedu_Web").toString().trim();
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["TIMESTAMP","NAME","NUMBER","EMAIL","COURSE","STATE","LEAD SOURCE"]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || data.name || "",
      data.phoneNumber || data.phone || data.number || "",
      data.email || "",
      data.interestedCourse || data.course || "",
      data.state || data.location || "",
      data.leadSource || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, sheet: sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

After pasting: Deploy → Manage deployments → edit the existing deployment → New version → Deploy
(Execute as: Me, Who has access: Anyone). Keeping the same deployment preserves the `/exec` URL.

The site sends the request with `mode: "no-cors"` and `Content-Type: text/plain`, so no CORS
configuration is needed on the Apps Script side and it works from https://avedu.in/.
