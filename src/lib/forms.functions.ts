import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "@/lib/forms";

const LEAD_RECIPIENT = "goblu@trubluagency.co.za";
const AUTORESPONDER_SUBJECT = "Thank you for contacting Tru Blu Digital Marketing";
const AUTORESPONDER_BODY =
  "Thank you for reaching out to Tru Blu Digital Marketing. Your response has been successfully logged, and a representative from our agency will be in touch with you shortly.";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { success: true };

    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) throw new Error("Web3Forms is not configured.");

    let response: Response;
    try {
      response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${data.name} — ${data.service}`,
          from_name: "TRU BLU Website",
          to: LEAD_RECIPIENT,
          replyto: data.email,
          name: data.name,
          email: data.email,
          phone: data.phone,
          business: data.business ?? "",
          service_needed: data.service,
          also_interested_in: data.interests.join(", "),
          message: data.message ?? "",
          autoresponder_subject: AUTORESPONDER_SUBJECT,
          autoresponder_message: AUTORESPONDER_BODY,
        }),
      });
    } catch {
      return { success: false };
    }

    if (!response.ok || response.status >= 300) return { success: false };

    try {
      const result = (await response.json()) as { success?: boolean };
      return { success: result.success === true };
    } catch {
      return { success: false };
    }
  });