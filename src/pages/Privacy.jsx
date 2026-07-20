import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-400 mb-12">Last updated: July 17, 2026</p>

        <div className="space-y-10 text-lg text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. The Aletheia Philosophy: Zero Data Collection
            </h2>
            <p>
              Aletheia is built on a fundamental principle of absolute financial
              sovereignty. We do not want your data, we do not collect your
              data, and we do not have the technical ability to access your
              data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Local-First Architecture
            </h2>
            <p>
              All financial records, transactions, budgets, and settings are
              stored entirely on your device's local encrypted storage (SQLite
              database). Aletheia operates{" "}
              <strong className="text-white">100% offline</strong> by default.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. No External Servers or Analytics
            </h2>
            <p>
              The Aletheia mobile application does not transmit any financial
              data to external servers, cloud providers, or third-party
              analytics services. There are zero background network calls
              monitoring your behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Permissions
            </h2>
            <p>
              The app only requests permissions that are strictly necessary for
              its local operation, such as biometric authentication for the PIN
              Lock feature or local storage access for encrypted database
              exports. These remain entirely on-device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at aletheia-privacy@nextgenspark.co.ke.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
