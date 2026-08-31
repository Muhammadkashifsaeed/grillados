import React from 'react';
import PrivacyFr from '@/app/components/PrivacyFr';

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white relative overflow-hidden pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] min-h-75 md:h-[50vh] mb-12 flex items-center justify-center z-10">
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
          <h1 className="text-7.5 md:text-10 leading-tight font-semibold text-black font-['Ribeat',sans-serif] uppercase tracking-wide">
            Privacy Policy
          </h1>
        </div>

        {locale === 'fr' ? (
          <PrivacyFr />
        ) : (
          <div className="text-black space-y-10 font-['Poppins',sans-serif] text-3.5 leading-5.75 font-normal">
            <section>
              <p>It seems like you’ve provided a passage from Grillado’s privacy policy. If you have any specific questions or if there’s anything you’d like assistance with regarding this privacy policy, please let me know! I can help clarify certain terms, provide general information on privacy policies, or answer any questions you may have.</p>
              <p className="mt-4">This Privacy Policy covers the following topics:</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">1. What is Personal Data?</h2>
              <p>Thank you for providing the specific definition of “Personal Data” as outlined in Grillado’s privacy policy. As per their definition, “Personal Data” includes a broad range of information about an identifiable individual.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">2. What information will Grillado's gather about me as Personal Data?</h2>
              <p>When utilizing any of our electronic Services, such as our mobile applications or websites, our web server automatically logs certain information. This includes your ISP (Internet Service Provider) name, IP (Internet Protocol) address, the website from which you accessed ours, the specific pages you navigate within our electronic Services and their sequence, along with the date and duration of your visit. Additionally, if you use any WIFI or Internet service provided at Grillado’s restaurants in Canada, we may gather details about the utilization of those services. This may encompass information about your device, the websites and webpages you explore, their sequence, and the date and duration of those visits.</p>
              <p className="mt-4">We collect personally identifiable information when you provide it, such as when making purchases, participating in online contests, registrations, competitions, engaging in message boards, surveys, polls, games, SMS, MMS, and other mobile services. Additionally, we may gather other details, including your interests, preferences, purchasing behavior, transactional information, geographical location, and demographics (e.g., age, gender, and income information). To enhance our understanding of you, we may combine the Personal Data received with other records, including those from telephone and direct purchases, to create a comprehensive customer profile.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">3. When and how is my consent obtained?</h2>
              <p>Grillado’s acquires Personal Data from you strictly on a voluntary basis, such as when you provide your email address or utilize our electronic Services. Generally, we seek your consent for the utilization or disclosure of your Personal Data at the point of collection. The nature of the consent, whether explicit or implied, is determined by the sensitivity of the Personal Data and the reasonable expectations of an individual in the given circumstances. Your usage of our Services implies your consent to the collection, use, and disclosures outlined in this Privacy Policy unless you notify us otherwise.</p>
              <p className="mt-4">As a prerequisite for providing a product or service, we will not compel you to grant consent for the gathering, utilization, or disclosure of information beyond what is necessary to fulfill the expressly stated and legitimate purposes for which the information is being supplied.</p>
              <p className="mt-4">You have the option to withdraw your consent at any time, taking into account legal or contractual constraints and providing reasonable notice. To initiate the withdrawal of consent, please reach out to us as detailed in Section 16 below. We will apprise you of the implications associated with withdrawing your consent.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">4. What does Grillado's policy on cookies entail?</h2>
              <p>We, along with our third-party service providers and partners, may employ “cookies” or similar technologies to enhance your online experience with our electronic Services and throughout the Internet. These “cookies” are files capable of identifying you as a unique user, storing personal preferences like product preferences, and providing information about the site pages you have visited and the sequence of your visits. Cookies and other technical data are utilized to personalize your interaction with our electronic Services, analyze usage patterns, track user trends, and facilitate authorized downloads for technical reasons related to your site usage. Cookies may be either permanent (persisting until you delete them) or temporary (lasting only until you close your browser).</p>
              <p className="mt-4">We may utilize “web beacons” to monitor your interactions with our sites. Web beacons, also known as web bugs, consist of code strings that enable the delivery of a graphic image on a web page. Their purpose is to transfer data, such as the IP (Internet Protocol) address of the computer that downloaded the page containing the web beacon, the URL (Uniform Resource Locator) of that page, the viewing time, the types of browsers used, and the identification number of any cookies previously placed by the server. When communicating with you through HTML-capable email, web beacons inform us about the reception and opening of our emails. Individually, cookies or web beacons do not contain or disclose any Personal Data. However, if you choose to provide us with Personal Data, it may be linked to the anonymous data stored in cookies and/or web beacons.</p>
              <p className="mt-4">While most browsers are configured to accept cookies by default, you have the option to modify your browser settings to reject cookies from our site or any other website if you prefer. Moreover, setting your web browser to display HTML emails as text-only may help prevent the use of some web beacons. It’s important to note that specific areas of our sites may require the use of cookies or similar devices for proper functionality, and adjusting your browser to reject cookies may impact the intended operation of those areas.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">5. In what ways will Grillado's utilize my Personal Data?</h2>
              <p>We collect information to:</p>
              <ul className="list-disc pl-6 md:pl-8 mt-4 space-y-3">
                <li>Provide services or products you request (e.g., send newsletters or other products/services based on your expressed interest).</li>
                <li>Enable your participation in interactive, social, and recreational activities on the site (e.g., message boards and discussion forums).</li>
                <li>Organize or conduct promotional activities, games, or events.</li>
                <li>Inform you about changes to our Services.</li>
                <li>Notify you of products, services, promotions, offers, and competitions that may interest you.</li>
                <li>Respond to your queries.</li>
                <li>Establish a more direct relationship with you for the purposes outlined in this section.</li>
                <li>Develop an online customer profile.</li>
                <li>Understand general customer trends and patterns to support existing and ongoing marketing strategies, provide a personalized experience, and enhance our products and services.</li>
              </ul>
              <p className="mt-4">If you choose to receive mobile services and content via SMS, MMS, and other mobile services, we use this information to deliver such services and content, conduct market research, track sales data, and plan other promotional activities of potential interest to you.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">6. How does Grillado's handle publicly available Personal Data?</h2>
              <p>If our Services provide any chat rooms, message boards, blogs, newsgroups, or forums, we gather the information you share in these spaces. The usage of such information will align with the principles outlined in this Privacy Policy. It’s important to recognize that these forums are inherently designed to be accessible to other users. We cannot assume responsibility for the utilization of Personal Data that you disclose in or through these chat rooms, message boards, blogs, newsgroups, or forums on our Services by other parties.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">7. Will Grillado's utilize my Personal Data for marketing purposes?</h2>
              <p>If granted your consent, we may also utilize your Personal Data for the following purposes:</p>
              <p className="mt-4">We may employ your Personal Data for the following purposes, provided we have your consent: Direct marketing of our own products and services, as well as those of other companies within the Grillado’s family of companies. This includes sending personalized advertisements tailored to your preferences, promoting specific products and/or services that we believe align with your interests based on the information we have about you. Direct marketing of products and services on behalf of carefully selected third parties, contingent upon your agreement to have your details shared with these third parties.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">8. What measures have been implemented to safeguard the security of my Personal Data?</h2>
              <p>While it’s impossible to guarantee absolute security on the Internet, we want to assure you that we have implemented reasonable technical and organizational security measures. These measures are designed to safeguard your Personal Data, mitigating the risk of unauthorized access, use, disclosure, or loss.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">9. In what manner will Grillado’s retain and store my Personal Data?</h2>
              <p>We store your Personal Data locally, and alternatively, it may be stored on and transferred to a central database located in the United Kingdom. Your information will not be retained for a duration longer than necessary for the purposes outlined in this Privacy Policy.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">10. Will my Personal Data be disclosed to any other parties?</h2>
              <p><strong>10.1. Grillado’s Entities:</strong> Your Personal Data may be shared with other entities within the Grillado’s network. Those entities within Grillado’s that have agreed to adhere to this Privacy Policy can access your data and use it for the purposes outlined herein. Additionally, we may disclose or transfer Personal Data to a third party in the event of a proposed or actual purchase, sale, lease, merger, amalgamation, or any other type of acquisition, disposal, transfer, conveyance, or financing involving Grillado’s or any of its business assets, shares, or divisions. This is done to ensure continuity in receiving the same products and services from the third party.</p>
              <p className="mt-4"><strong>10.2. Third Parties:</strong> We may reveal Personal Data about you to comply with applicable laws and regulations. Furthermore, we reserve the right to disclose such Personal Data to third parties in cases where complaints arise about your use of our Services and when, at our sole discretion, we believe that your use is inconsistent with the Privacy Policy or our terms of service. Information about users of our Services may also be shared in an anonymous or aggregate form with third parties, including advertisers and business partners, for understanding customer trends, patterns, and managing and improving our business relationships. Your Personal Data may be shared with third-party service providers who assist us in the activities described in this Privacy Policy. We contractually require these service providers to comply with this Privacy Policy. Additionally, Personal Data may be disclosed to third parties, such as auditors or legal advisors, to obtain professional advice. We may also share Personal Data with a third party if required or authorized by law, regulation, search warrant, subpoena, or court order.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">11. Hyperlinks, sponsors from third parties, advertisers, and ad servers</h2>
              <p>Some of our websites feature links to other sites not governed by this Privacy Policy, where information practices may differ from ours. Prior to submitting any Personal Data, users should refer to the privacy policies of these third-party sites, as we bear no responsibility for, nor control over, the Personal Data submitted to or collected by these external sites. On occasion, this site may provide content or programs sponsored by or co-branded with specific third parties (e.g., competitions or promotions). These third parties may access Personal Data voluntarily submitted by you to avail of the offer. We are not accountable for the collection and utilization of your Personal Data by these third parties. However, you will be notified, at the point of collecting such personally identifiable information, if these third parties will acquire such data, how it will be processed, and to whom it will be disclosed. In certain Services, third parties may present or serve advertisements, offer data collection, reporting, and ad response measurement, and assist in delivering pertinent marketing messages and advertisements. These third parties may have the ability to view, modify, or set their own cookies. The use of such technologies by these third parties is governed by their respective privacy policies and is not covered by this Privacy Policy.</p>
              <p className="mt-4">We engage certain third-party service providers that may independently collect, use, and disclose your personal information for their own business purposes. Specifically, we utilize Google Analytics, a web analytics service provided by Google. Google gathers data on how users interact with our electronic Services, offering insights into user details such as the type of device (computer, mobile phone, etc.) used to access our electronic Services. This includes additional information about users like browser type, operating system, IP address, referring URLs/system, actions taken, interactions with our electronic Services, and usage patterns. Google Analytics also provides aggregated data on our visitors, encompassing demographic and interest information. We leverage this information to comprehend our visitors better and enhance the quality of our electronic Services. It’s important to note that we cannot attribute any of this information to specific visitors, including demographic and interest details. Our access to this information is limited to a general statistical overview.</p>
              <p className="mt-4">While offering us this service, Google Analytics may gather information regarding your interactions with our electronic Services. They have the capability to link this information with other data they may have collected about you. Google Analytics may employ this combined information for their own business purposes, which could involve delivering targeted advertisements to you when you visit other websites on the Internet.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">12. Will my Personal Data be moved outside of the province where I reside?</h2>
              <p>For the purposes outlined in this Privacy Policy, Grillado’s or a third-party service provider may handle and store your Personal Data beyond the borders of the province in which you reside and/or outside of Canada. Specifically, your Personal Data may be transmitted to and processed in the United Kingdom, where Grillado’s central database operates. It’s important to note that the data protection and other laws in these foreign countries may not offer the same level of comprehensive protection as those in Canada. In certain situations, under the laws of these other jurisdictions, courts, law enforcement agencies, regulatory bodies, or security authorities may have the right to access your Personal Data. If you have further inquiries about our policies and practices regarding the engagement of foreign service providers, please reach out to our Privacy Officer using the contact information provided below.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">13. Additional gathering, utilization, and disclosure of my Personal Data</h2>
              <p>We may oversee your utilization of our Services to ensure their appropriate use, operation, and your adherence to any associated terms of services and agreements. Additionally, there are situations where the law allows or mandates the collection, utilization, and disclosure of personal information without the individual’s knowledge or consent. In such circumstances, we retain the right to collect, use, and disclose your personal information without your explicit knowledge or consent, as permitted or required by law.</p>
            </section>

            <section>
              <h2 className="mb-4 font-['Ribeat',sans-serif] font-semibold text-black text-5 leading-6.5">14. Changes to this Privacy Policy</h2>
              <p>Occasionally, we may update this Privacy Policy to align with company initiatives, alterations in the law or technology, or modifications in our procedures related to the collection and utilization of Personal Data. In the event of any changes to this Privacy Policy, the updated version will be published on this site to keep you informed. The date of the most recent revisions will be displayed at the top of this page. Rest assured that we will not employ or disclose Personal Data, provided to us in accordance with this Privacy Policy, in ways different from those elucidated above without notifying you. You will be given the opportunity to consent to any modified conditions pertaining to the use and disclosure of your Personal Data.</p>
            </section>

          </div>
        )}
      </div>
    </main>
  );
}
