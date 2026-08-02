// Zero-backend lead submission -> Google Apps Script Web App -> Google Sheet
// Sheet: Avedu_Web (https://docs.google.com/spreadsheets/d/1_kdzz44E2w4AV5Sr2i00XTpRtQ9jDlzdml8Bg5hOvnM)

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxDCGIr01-dyHzlxSGfWjz9cH0oL9Gqv-V7jODdrgLkJbR3MJY7oH8W5C1XwALG_lF8nQ/exec";

export const SHEET_NAME = "Avedu_Web";

const RATE_LIMIT_KEY = "avedu_last_lead_submit";
const RATE_LIMIT_MS = 15000; // 15s between submissions from one browser

export interface LeadInput {
  name: string;
  email: string;
  phone: string;
  state?: string;
  city?: string;
  course?: string;
  /** honeypot value — must be empty for a real human */
  website?: string;
  leadSource?: string;
}

export interface LeadResult {
  success: boolean;
  error?: string;
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  // Honeypot: silently accept bots without writing to the sheet
  if (input.website && input.website.trim() !== "") {
    return { success: true };
  }

  // Basic client-side rate limit
  try {
    const last = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0);
    if (last && Date.now() - last < RATE_LIMIT_MS) {
      return {
        success: false,
        error: "Please wait a few seconds before submitting again.",
      };
    }
  } catch {}

  const payload = {
    sheetName: SHEET_NAME,
    timestamp: new Date().toISOString(),
    // primary keys
    fullName: input.name?.trim() || "",
    name: input.name?.trim() || "",
    email: input.email?.trim() || "",
    phoneNumber: input.phone?.trim() || "",
    phone: input.phone?.trim() || "",
    number: input.phone?.trim() || "",
    interestedCourse: input.course || "",
    course: input.course || "",
    state: input.state || "",
    location: [input.city, input.state].filter(Boolean).join(", "),
    city: input.city || "",
    leadSource:
      input.leadSource ||
      (typeof window !== "undefined"
        ? `${window.location.origin === "https://avedu.in" ? "avedu.in" : window.location.host}${window.location.pathname}`
        : "avedu.in"),
    sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
  };

  try {
    // text/plain avoids a CORS preflight; Apps Script still receives the JSON body.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    try {
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
    } catch {}

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Network error" };
  }
}
