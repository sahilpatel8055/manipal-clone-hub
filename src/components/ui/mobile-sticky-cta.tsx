import { MessageCircle, Phone, PhoneCall } from "lucide-react";
import { useCounselingForm } from "@/hooks/use-counseling-form";

export const AVEDU_PHONE = "8770012496";
export const AVEDU_PHONE_INTL = "918770012496";
export const AVEDU_WHATSAPP = `https://wa.me/${AVEDU_PHONE_INTL}?text=${encodeURIComponent(
  "Hi AVEDU, I want free counselling for an online degree.",
)}`;

/**
 * Mobile-only fixed bottom action bar: Call Now / WhatsApp / Callback.
 * Hidden on md+ so the desktop layout is untouched.
 */
const MobileStickyCTA = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  return (
    <>
      {/* spacer so page content is never hidden behind the bar */}
      <div className="h-[68px] md:hidden" aria-hidden="true" />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 divide-x divide-border">
          <a
            href={`tel:+91${AVEDU_PHONE}`}
            aria-label={`Call AVEDU on ${AVEDU_PHONE}`}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-primary"
          >
            <Phone className="h-5 w-5" />
            <span className="text-sm font-bold">Call Now</span>
          </a>
          <a
            href={AVEDU_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with AVEDU on WhatsApp"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[hsl(142_70%_35%)]"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-bold">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={openForm}
            aria-label="Request a callback from AVEDU"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-primary"
          >
            <PhoneCall className="h-5 w-5" />
            <span className="text-sm font-bold">Callback</span>
          </button>
        </div>
      </div>
      <CounselingFormComponent />
    </>
  );
};

export default MobileStickyCTA;
