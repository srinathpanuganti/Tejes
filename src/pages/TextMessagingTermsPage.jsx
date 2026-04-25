import React from "react";
import { TextMessagingTermsContent } from "../components/SmsPolicies";

const TextMessagingTermsPage = () => (
  <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur">
        <TextMessagingTermsContent />
      </div>
    </div>
  </main>
);

export default TextMessagingTermsPage;
