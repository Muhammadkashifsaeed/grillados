import React from 'react';
import TermsFr from '@/app/components/TermsFr';

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white relative overflow-hidden pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-[300px] md:h-[50vh] mb-12 flex items-center justify-center z-10">
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/Picture-back-ground.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-20 mt-8 md:mt-12">
        <div className="mb-10">
          <h1 className="text-[30px] md:text-[40px] leading-tight font-semibold text-black font-['Ribeat',sans-serif] uppercase tracking-wide">
            Legal Information
          </h1>
        </div>

        {locale === 'fr' ? (
          <TermsFr />
        ) : (
          <div className="text-black space-y-10 font-['Poppins',sans-serif] text-[14px] leading-[23px] font-normal">
            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Grillado's canada</h2>
              <p>The following outlines the conditions governing your access to and use of the services. By accessing or using any of the services, you agree to abide by these terms of service. If you do not agree with all the terms outlined in these terms of service, you are not permitted to access or use any of the services.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Modifications</h2>
              <p>Grillado’s reserves the right to modify these Terms of Service at any time by replacing them with updated terms. Notice of amendments will be published on its primary website at <a href="https://www.grillados.ca/" target="_blank" rel="noopener noreferrer" className="text-[#d72323] hover:underline font-semibold">www.Grillado’s.ca</a> for a period of 30 days. The revised terms of service will automatically become effective upon posting. Your ongoing use of the Services after the publication of the updated terms, along with the provided notice, indicates your acceptance of the modified Terms of Service. If you disagree with any of the terms in the amended Terms of Service, you must discontinue all use of the Services. These Terms of Service may not be altered otherwise.</p>
              <p className="mt-4">The initial paragraph of these Terms of Service specifies the date of the last amendment. Please revisit this section regularly to stay informed about any updates or changes.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">License</h2>
              <p>You are hereby given a non-exclusive and non-transferable license to access and utilize the Services in accordance with the terms outlined in these Terms of Service.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Accessing</h2>
              <p>To access and utilize the Services, you must adhere to the terms and conditions specified in these Terms of Service. Any unauthorized access or use will be deemed a trespass on Grillado’s computer systems, constituting an infringement of Grillado’s intellectual property and an unlawful utilization of Grillado’s assets.</p>
              <p className="mt-4">Certain sections of the Services may necessitate the use of a user ID, which could entail providing certain personal information to Grillado’s. By using the Services, you agree to (a) furnish truthful, accurate, current, and complete information about yourself as requested, and (b) promptly update this information to ensure its continued accuracy, currency, and completeness.</p>
              <p className="mt-4">Grillado’s retains the right, at its sole discretion, to suspend or terminate your present and future access and use of the Services if Grillado’s reasonably believes that your conduct or provision of information violates these Terms of Service.</p>
              <p className="mt-4">Grillado’s holds the right to observe your utilization of the Services to verify compliance with the terms outlined in these Terms of Service.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Applications</h2>
              <p>All Applications are strictly licensed to you in accordance with these Terms of Service, and all rights, title, and interest in and to the Applications shall always remain with Grillado’s. You shall have no right, title, or interest in or to any Applications except for the limited right to use them as specified in these Terms of Service. Upon termination of these Terms of Service or the termination of your right to use the Services, you are obligated to delete all copies of the Applications from your electronic device. You may not disassemble, decompile, reverse engineer, or attempt to generate any source code for any of the Applications.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Behavior</h2>
              <p>You are prohibited from creating, uploading, downloading, storing, or sharing any documents, information, content, or other material, including in your communications with other users of the Services, that:</p>
              <ul className="list-disc pl-6 md:pl-8 mt-4 space-y-3">
                <li>is false, misleading, deceptive, or fraudulent, including the failure to maintain accurate, true, and current information or the omission of any relevant information;</li>
                <li>is defamatory or libelous toward any individual or organization;</li>
                <li>Contains offensive, vulgar, or obscene content, or includes any nudity or pornography of any kind;</li>
                <li>violates, misappropriates, or infringes, or potentially violates, misappropriates, or infringes any third-party intellectual property or other proprietary rights, including but not limited to copyright, patent, trademark, trade secret, right of publicity, or right of privacy;</li>
                <li>Anything that poses a threat to the well-being of individuals, jeopardizes the integrity or security of computer systems, or disseminates viruses, Trojan horses, worms, time bombs, or other harmful computer programs is considered harmful or potentially harmful.</li>
                <li>Breaches any federal, state, provincial, or local law, statute, ordinance, or regulation in any jurisdiction, encompassing, but not limited to, those concerning export control, consumer protection, unfair competition, discrimination, or false advertising.</li>
                <li>Generates or potentially generates liability for Grillado’s or its service providers.</li>
                <li>Harms or has the potential to harm Grillado’s or its computer systems, as well as harms or potentially harms its service providers or their computer systems.</li>
                <li>Endorses, recommends, or supports, in any way, any of the aforementioned actions.</li>
              </ul>
              <p className="mt-4">Regarding any personal information within your content, you commit to adhering to all laws pertaining to personal information and privacy. You undertake not to gather, utilize, or disclose any personal information of any individual without the consent of that individual, unless such consent is exempted by law.</p>
              <p className="mt-4">Grillado’s retains the right to examine your content to verify its compliance with these Terms of Service. However, such review or its absence does not imply Grillado’s approval or endorsement of the material, nor does it signify that the material aligns with these Terms of Use.</p>
              <p className="mt-4">In relation to the Services or your engagements with other Service users, you are prohibited from:</p>
              <ul className="list-disc pl-6 md:pl-8 mt-4 space-y-3">
                <li>Engage in “stalking,” harassment, or threats directed towards any individual or organization.</li>
                <li>Try to impersonate or misrepresent your identity or affiliation with any person or entity.</li>
                <li>Engage in or attempt any dishonest, extortionate, or fraudulent acts, including actions that violate the rights of third parties.</li>
                <li>In relation to the Services, refrain from sending unsolicited communications to other users, unless expressly permitted by the Services and only within reasonable circumstances and quantities.</li>
                <li>You are prohibited from engaging in any form of discrimination, bigotry, racism, or hatred against any individual or group in any manner.</li>
                <li>You commit to refraining from employing spiders, robots, or any other automated mechanisms to search or monitor the content of the Services.</li>
                <li>You agree not to utilize any automated methods, including software, to disrupt or attempt to disrupt the Services or their utilization by any other user.</li>
                <li>You are prohibited from encouraging users to utilize a third-party service that is similar to or may compete with the Services.</li>
                <li>You are prohibited from endorsing, recommending, or supporting, in any way, any of the aforementioned actions.</li>
              </ul>
              <p className="mt-4">If you believe that any other user has behaved inappropriately, you should promptly report such individuals to Grillado’s. In case you suspect the issue may involve criminal activity, it is advisable to report the matter to the police.</p>
              <p className="mt-4">Grillado’s strongly urges you to exercise vigilance in all your interactions with other users of the Services.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Services</h2>
              <p>You acknowledge that Grillado’s will not be held liable for any delay or unavailability of any of the Services, whether caused by the actions or omissions of Grillado’s or any third party.</p>
              <p className="mt-4">Grillado’s reserves the right to modify, add, or remove from its Services at any time without prior notice. You agree to assume all risks, costs, and damages that may arise or be incurred as a result of such changes.</p>
              <p className="mt-4">Grillado’s does not utilize any verification processes to confirm the authenticity of individuals and ensure that they are who they claim to be.</p>
              <p className="mt-4">By accessing or using any of the Services, you agree to bear all risks of loss or damage that may arise from your interaction with any other user of the Services.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Links to Internet Resources</h2>
              <p>Links to other internet resources provided through the Services are offered as a courtesy, and you may only use them at your own risk. Grillado’s does not investigate, verify, monitor, or endorse the content, accuracy, opinions expressed, or any products or services obtained from or through these links. Grillado’s shall not be held responsible for any content or for any products or services obtained from or through those links.</p>
              <p className="mt-4">The provision of a link to a third-party website on the Services should not imply the existence of any partnership or other relationship.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">User Suggestions</h2>
              <p>Grillado’s may enable you to provide suggestions or comments about the Services or about Grillado’s other products and services. By making any suggestion or comment by or through the Services or otherwise, you agree to grant, and you will be thereby granting, to Grillado’s a world-wide, royalty-free, non-exclusive and irrevocable license to use that suggestion or comment in any manner that it may wish, including to improve its products and services and its organisation and its processes. You hereby agree and acknowledge that you will not receive any recognition or compensation in connection with the same.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Intellectual Property</h2>
              <p>Grillado’s holds proprietary rights, including copyrights and trademarks, in its Services. You are not permitted to modify, copy, publish, republish, transmit, sell, create derivative works, display, frame, or exploit in any way the Services or any content obtained from or through the Services, except as explicitly permitted as outlined on the Services.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Warranty Disclaimer</h2>
              <p>The Services are provided on an “as is” and “as available” basis, and your use of them is at your sole risk. Grillado’s makes no express or implied warranties, conditions, or representations whatsoever, and explicitly disclaims any such warranties, representations, or conditions, including, without limitation, correctness, merchantability, or fitness for a particular purpose, as implied by statute. The Services may contain bugs, errors, problems, viruses, or other limitations, and Grillado’s assumes no liability or responsibility for any such issues.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Limited Liability</h2>
              <p>Under no circumstances shall Grillado’s be liable for any incidental, special, indirect, or consequential damages or losses, including, without limitation, any interruption of business or related losses or expenses, loss of anticipated savings, lost opportunity, goodwill, revenue, data, or profit incurred or suffered by you. These damages may arise out of any failure of, or any defects or errors in, the Services, whether or not Grillado’s was informed of the possibility of such issues.</p>
              <p className="mt-4">Regardless of the circumstances, Grillado’s maximum aggregate liability under these Terms of Service, in relation to any failure of, or defects or errors in, the Services, arising in any manner whatsoever, shall be capped at the total amount paid by you to Grillado’s for the Services or $10.00 (CDN), whichever is greater.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Indemnity</h2>
              <p>You agree to indemnify and hold Grillado’s, its employees, officers, directors, agents, and partners harmless, including reasonable attorney fees, from any and all claims and demands made by anyone due to or arising from your use of the Services or your violation of these Terms of Service.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">No Agency</h2>
              <p>The involved entities are independent, and these Terms of Service do not intend to establish any agency, partnership, joint venture, employer-employee, or franchiser-franchisee relationship between them. Neither party shall make any statements or imply otherwise.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-[20px] leading-[26px]">Accessibility</h2>
              <p>Grillado’s Chickenland (Canada) Inc. is dedicated to providing service to all customers, including those with disabilities. This website is crafted to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 digital accessibility standards and has undergone compliance testing using various digital accessibility audit tools, such as Accessibility Insights and AChecker.</p>
            </section>

          </div>
        )}
      </div>
    </main>
  );
}
