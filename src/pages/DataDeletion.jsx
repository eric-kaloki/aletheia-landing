import React from 'react';

const DataDeletion = () => {
  return (
    <div className="pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Account & Data Deletion Request</h1>
        <p className="text-slate-400 mb-12">Last updated: July 17, 2026</p>

        <div className="space-y-10 text-lg text-slate-300 leading-relaxed">
            <div className="bg-brandCyan/10 border border-brandCyan/20 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-brandCyan mb-2">TL;DR: You are entirely in control</h2>
                <p className="text-slate-300 text-base">Because Aletheia is a local-first application, <strong className="text-white">no account is created on our servers, and no data is sent to us.</strong> Therefore, there is no central account for us to delete. You can permanently delete all your data instantly directly from your device.</p>
            </div>

            <section>
                <h2 className="text-2xl font-bold text-white mb-6">How to permanently delete your data</h2>
                <p className="mb-6">To permanently erase all financial records, settings, and biometric configurations associated with Aletheia, follow these steps:</p>
                
                <ol className="list-decimal pl-6 space-y-6 text-slate-300">
                    <li>
                        <strong className="text-white">From inside the app:</strong> Open Aletheia, go to <em className="text-white">Settings</em>, scroll to the bottom, and select <em className="text-white">"Erase All Data"</em>.
                    </li>
                    <li>
                        <strong className="text-white">From your Android Device:</strong> 
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li>Go to your phone's <em className="text-white">Settings</em></li>
                            <li>Navigate to <em className="text-white">Apps &gt; Aletheia</em></li>
                            <li>Select <em className="text-white">Storage &amp; cache</em></li>
                            <li>Tap <em className="text-white">"Clear Storage" (or "Clear Data")</em></li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-white">By Uninstalling:</strong> Simply uninstalling the Aletheia application from your device will automatically and permanently purge the encrypted local SQLite database.
                    </li>
                </ol>
            </section>

            <section className="pt-10 border-t border-charcoal-800">
                <p className="text-slate-400 text-base italic">Because data is not synced to a cloud server, deleting the app or clearing its storage is irreversible. We cannot recover your data for you once it is deleted.</p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
