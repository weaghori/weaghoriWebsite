import React from 'react'
import styles from './style';

const TermsAndConditions = () => {
    return (
        <>
            <div className="w-full text-white px-6">
                <div className="max-w-[970px] w-full mx-auto py-10 md:py-20">
                    <h1 className="text-4xl md:text-6xl py-10">Terms and Conditions</h1>
                    <p>
                        Last updated: July 05, 2021
                        <br />
                        <br />
                        Please read these terms and conditions carefully before using Our
                        Service.
                    </p>

                    {/* Interpretation and Definitions */}
                    <div className="py-10">
                        <h2 className={`${styles.customH2} mb-4`}>
                            Interpretation and Definitions
                        </h2>
                        <h3 className={`${styles.customH2}`}>Interpretation</h3>
                        <p>
                            The words of which the initial letter is capitalized have meanings
                            defined under the following conditions. The following definitions
                            shall have the same meaning regardless of whether they appear in
                            singular or in plural.
                        </p>
                    </div>

                    {/* Definitions */}
                    <div>
                        <h2 className={`${styles.customH2}`}>Definitions</h2>
                        <p>For the purposes of these Terms and Conditions:</p>
                        <div>
                            <ul className="list-disc list-inside">
                                <li className="mb-[5px]">
                                    <b>Affiliate</b> means an entity that controls, is controlled
                                    by or is under common control with a party, where "control"
                                    means ownership of 50% or more of the shares, equity interest
                                    or other securities entitled to vote for election of directors
                                    or other managing authority.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Country </b> refers to: Maharashtra, India
                                </li>
                                <li className="mb-[5px]">
                                    <b>Company </b>(referred to as either "the Company", "We",
                                    "Us" or "Our" in this Agreement) refers to Aghori media house,
                                    Aghori Media House Pvt. Ltd. 204, Vaishali Shopping Center,
                                    Next to Natraj Market, S.V.Road, Malad West, Mumbai, 400064..
                                </li>
                                <li className="mb-[5px]">
                                    <b>Device </b>means any device that can access the Service
                                    such as a computer, a cellphone or a digital tablet.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Service </b> refers to the Website.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Terms and Conditions</b> (also referred as "Terms") mean
                                    these Terms and Conditions that form the entire agreement
                                    between You and the Company regarding the use of the Service.
                                    This Terms and Conditions agreement has been created with the
                                    help of the Terms and Conditions Generator.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Third-party Social Media Service </b>means any services or
                                    content (including data, information, products or services)
                                    provided by a third-party that may be displayed, included or
                                    made available by the Service.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Website </b>refers to We Aghori, accessible from
                                    https://weaghori.com/
                                </li>
                                <li className="mb-[5px]">
                                    <b>You </b>means the individual accessing or using the
                                    Service, or the company, or other legal entity on behalf of
                                    which such individual is accessing or using the Service, as
                                    applicable.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Acknowledgment */}
                    <div className="py-10">
                        <h2 className={`${styles.customH2}`}>Acknowledgment</h2>
                        <p>
                            These are the Terms and Conditions governing the use of this
                            Service and the agreement that operates between You and the
                            Company. These Terms and Conditions set out the rights and
                            obligations of all users regarding the use of the Service.
                            <br />
                            <br />
                            Your access to and use of the Service is conditioned on Your
                            acceptance of and compliance with these Terms and Conditions.
                            These Terms and Conditions apply to all visitors, users and others
                            who access or use the Service.
                            <br />
                            <br />
                            By accessing or using the Service You agree to be bound by these
                            Terms and Conditions. If You disagree with any part of these Terms
                            and Conditions then You may not access the Service.
                            <br />
                            <br />
                            You represent that you are over the age of 18. The Company does
                            not permit those under 18 to use the Service.
                            <br />
                            <br />
                            Your access to and use of the Service is also conditioned on Your
                            acceptance of and compliance with the Privacy Policy of the
                            Company. Our Privacy Policy describes Our policies and procedures
                            on the collection, use and disclosure of Your personal information
                            when You use the Application or the Website and tells You about
                            Your privacy rights and how the law protects You. Please read Our
                            Privacy Policy carefully before using Our Service.
                        </p>

                        {/* Links to Other Websites */}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                Links to Other Websites
                            </h2>
                            <p>
                                Our Service may contain links to third-party web sites or
                                services that are not owned or controlled by the Company.
                                <br /> <br />
                                The Company has no control over, and assumes no responsibility
                                for, the content, privacy policies, or practices of any third
                                party web sites or services. You further acknowledge and agree
                                that the Company shall not be responsible or liable, directly or
                                indirectly, for any damage or loss caused or alleged to be
                                caused by or in connection with the use of or reliance on any
                                such content, goods or services available on or through any such
                                web sites or services.
                                <br /> <br />
                                We strongly advise You to read the terms and conditions and
                                privacy policies of any third-party web sites or services that
                                You visit.
                            </p>
                        </div>

                        {/* Termination*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>Termination</h2>
                            <p>
                                We may terminate or suspend Your access immediately, without
                                prior notice or liability, for any reason whatsoever, including
                                without limitation if You breach these Terms and Conditions.
                                <br /> <br />
                                Upon termination, Your right to use the Service will cease
                                immediately.
                            </p>
                        </div>

                        {/* Limitation of Liability*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                Limitation of Liability
                            </h2>
                            <p>
                                Notwithstanding any damages that You might incur, the entire
                                liability of the Company and any of its suppliers under any
                                provision of this Terms and Your exclusive remedy for all of the
                                foregoing shall be limited to the amount actually paid by You
                                through the Service or 100 USD if You haven't purchased anything
                                through the Service.
                                <br /> <br />
                                To the maximum extent permitted by applicable law, in no event
                                shall the Company or its suppliers be liable for any special,
                                incidental, indirect, or consequential damages whatsoever
                                (including, but not limited to, damages for loss of profits,
                                loss of data or other information, for business interruption,
                                for personal injury, loss of privacy arising out of or in any
                                way related to the use of or inability to use the Service,
                                third-party software and/or third-party hardware used with the
                                Service, or otherwise in connection with any provision of this
                                Terms), even if the Company or any supplier has been advised of
                                the possibility of such damages and even if the remedy fails of
                                its essential purpose.
                                <br /> <br />
                                Some states do not allow the exclusion of implied warranties or
                                limitation of liability for incidental or consequential damages,
                                which means that some of the above limitations may not apply. In
                                these states, each party's liability will be limited to the
                                greatest extent permitted by law.
                            </p>
                        </div>

                        {/* "AS IS" and "AS AVAILABLE" Disclaimer*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                "AS IS" and "AS AVAILABLE" Disclaimer
                            </h2>
                            <p>
                                The Service is provided to You "AS IS" and "AS AVAILABLE" and
                                with all faults and defects without warranty of any kind. To the
                                maximum extent permitted under applicable law, the Company, on
                                its own behalf and on behalf of its Affiliates and its and their
                                respective licensors and service providers, expressly disclaims
                                all warranties, whether express, implied, statutory or
                                otherwise, with respect to the Service, including all implied
                                warranties of merchantability, fitness for a particular purpose,
                                title and non-infringement, and warranties that may arise out of
                                course of dealing, course of performance, usage or trade
                                practice. Without limitation to the foregoing, the Company
                                provides no warranty or undertaking, and makes no representation
                                of any kind that the Service will meet Your requirements,
                                achieve any intended results, be compatible or work with any
                                other software, applications, systems or services, operate
                                without interruption, meet any performance or reliability
                                standards or be error free or that any errors or defects can or
                                will be corrected.
                                <br /> <br />
                                Without limiting the foregoing, neither the Company nor any of
                                the company's provider makes any representation or warranty of
                                any kind, express or implied: (i) as to the operation or
                                availability of the Service, or the information, content, and
                                materials or products included thereon; (ii) that the Service
                                will be uninterrupted or error-free; (iii) as to the accuracy,
                                reliability, or currency of any information or content provided
                                through the Service; or (iv) that the Service, its servers, the
                                content, or e-mails sent from or on behalf of the Company are
                                free of viruses, scripts, trojan horses, worms, malware,
                                timebombs or other harmful components.
                                <br /> <br />
                                Some jurisdictions do not allow the exclusion of certain types
                                of warranties or limitations on applicable statutory rights of a
                                consumer, so some or all of the above exclusions and limitations
                                may not apply to You. But in such a case the exclusions and
                                limitations set forth in this section shall be applied to the
                                greatest extent enforceable under applicable law.
                            </p>
                        </div>

                        {/* Governing Law*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>Governing Law</h2>
                            <p>
                                The laws of the Country, excluding its conflicts of law rules,
                                shall govern this Terms and Your use of the Service. Your use of
                                the Application may also be subject to other local, state,
                                national, or international laws.
                            </p>
                        </div>

                        {/* Disputes Resolution*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>Disputes Resolution</h2>
                            <p>
                                If You have any concern or dispute about the Service, You agree
                                to first try to resolve the dispute informally by contacting the
                                Company.
                            </p>
                        </div>

                        {/* For European Union (EU) Users*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                For European Union (EU) Users
                            </h2>
                            <p>
                                If You are a European Union consumer, you will benefit from any
                                mandatory provisions of the law of the country in which you are
                                resident in.
                            </p>
                        </div>

                        {/* United States Legal Compliance*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                United States Legal Compliance
                            </h2>
                            <p>
                                You represent and warrant that (i) You are not located in a
                                country that is subject to the United States government embargo,
                                or that has been designated by the United States government as a
                                "terrorist supporting" country, and (ii) You are not listed on
                                any United States government list of prohibited or restricted
                                parties.
                            </p>
                        </div>

                        {/* Severability and Waiver*/}
                        <div className="py-4">
                            <h2 className={`${styles.customH2} py-2`}>
                                Severability and Waiver
                            </h2>
                            <h3 className={`${styles.customH2} py-2`}>Severability</h3>
                            <p>
                                If any provision of these Terms is held to be unenforceable or
                                invalid, such provision will be changed and interpreted to
                                accomplish the objectives of such provision to the greatest
                                extent possible under applicable law and the remaining
                                provisions will continue in full force and effect.
                            </p>
                            <br />
                            <br />

                            <h3 className={`${styles.customH2} py-2`}>Waiver</h3>
                            <p>
                                Except as provided herein, the failure to exercise a right or to
                                require performance of an obligation under this Terms shall not
                                effect a party's ability to exercise such right or require such
                                performance at any time thereafter nor shall be the waiver of a
                                breach constitute a waiver of any subsequent breach.
                            </p>
                            <br />
                            <br />

                            <h3 className={`${styles.customH2} py-2`}>
                                Translation Interpretation
                            </h3>
                            <p>
                                These Terms and Conditions may have been translated if We have
                                made them available to You on our Service. You agree that the
                                original English text shall prevail in the case of a dispute.
                            </p>
                            <br />
                            <br />

                            <h3 className={`${styles.customH2} py-2`}>
                                Changes to These Terms and Conditions
                            </h3>
                            <p>
                                We reserve the right, at Our sole discretion, to modify or
                                replace these Terms at any time. If a revision is material We
                                will make reasonable efforts to provide at least 30 days' notice
                                prior to any new terms taking effect. What constitutes a
                                material change will be determined at Our sole discretion.
                                <br />
                                <br />
                                By continuing to access or use Our Service after those revisions
                                become effective, You agree to be bound by the revised terms. If
                                You do not agree to the new terms, in whole or in part, please
                                stop using the website and the Service.
                            </p>
                        </div>

                        {/* Contact Us*/}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>Contact Us</h3>
                            <p>
                                If you have any questions about these Terms and Conditions, You
                                can contact us:
                            </p>

                            <ul className="list-disc list-inside py-4">
                                <a href="mailto:hello@weaghori.com">
                                    <li className="py-2">By email: hello@weaghori.com</li>
                                </a>
                                <a href="http://weaghori.com/contact">
                                    <li className="py-2">
                                        By visiting this page on our website:
                                        https://weaghori.com/contact
                                    </li>
                                </a>
                                <a href="tel:+91 76 000 69 666">
                                    <li className="py-2">By phone number: +91 76 000 69 666</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions
