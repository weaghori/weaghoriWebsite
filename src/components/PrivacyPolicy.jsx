import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style'

const PrivacyPolicy = () => {
    return (
        <>
            <div className="w-full text-white px-6">
                <div className="max-w-[970px] w-full mx-auto py-10 md:py-20">
                    <h1 className="text-4xl md:text-6xl py-10">Privacy Policy</h1>
                    <p>
                        Last updated: June 01, 2021
                        <br />
                        <br />
                        This Privacy Policy describes Our policies and procedures on the
                        collection, use and disclosure of Your information when You use the
                        Service and tells You about Your privacy rights and how the law
                        protects You.
                        <br />
                        <br />
                        We use Your Personal data to provide and improve the Service. By
                        using the Service, You agree to the collection and use of
                        information in accordance with this Privacy Policy. This Privacy
                        Policy has been created with the help of the Privacy Policy
                        Generator.
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
                        <p>For the purposes of this Privacy Policy:</p>
                        <div>
                            <ul className="list-disc list-inside">
                                <li className="mb-[5px]">
                                    <b>Account</b> means a unique account created for You to
                                    access our Service or parts of our Service.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Company </b> (referred to as either "the Company", "We",
                                    "Us" or "Our" in this Agreement) refers to Aghori Media House,
                                    Aghori Media House Pvt. Ltd. 204, Vaishali Shopping Center,
                                    Next to Natraj Market, S.V.Road, Malad West, Mumbai, 400064..
                                </li>
                                <li className="mb-[5px]">
                                    <b>Cookies </b>are small files that are placed on Your
                                    computer, mobile device or any other device by a website,
                                    containing the details of Your browsing history on that
                                    website among its many uses.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Country </b>refers to: Maharashtra, India
                                </li>
                                <li className="mb-[5px]">
                                    <b>Device </b> means any device that can access the Service
                                    such as a computer, a cellphone or a digital tablet.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Personal Data</b> is any information that relates to an
                                    identified or identifiable individual.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Service </b>refers to the Website.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Service Provider </b> means any natural or legal person who
                                    processes the data on behalf of the Company. It refers to
                                    third-party companies or individuals employed by the Company
                                    to facilitate the Service, to provide the Service on behalf of
                                    the Company, to perform services related to the Service or to
                                    assist the Company in analyzing how the Service is used.
                                </li>
                                <li className="mb-[5px]">
                                    <b>Usage Data</b> refers to data collected automatically,
                                    either generated by the use of the Service or from the Service
                                    infrastructure itself (for example, the duration of a page
                                    visit).
                                </li>
                                <li className="mb-[5px]">
                                    <b>Website </b>refers to We aghori, accessible from
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

                    {/* Collecting and Using Your Personal Data */}
                    <div className="py-10">
                        <h2 className={`${styles.customH2}`}>
                            Collecting and Using Your Personal Data
                        </h2>
                        <h3 className={`${styles.customH2} py-2`}>
                            Types of Data Collected
                        </h3>

                        {/* Personal Data */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">Personal Data</h4>
                            <p>
                                While using Our Service, We may ask You to provide Us with
                                certain personally identifiable information that can be used to
                                contact or identify You. Personally identifiable information may
                                include, but is not limited to:
                            </p>
                            <ul className="list-disc list-inside py-2">
                                <li>Email address</li>
                                <li>First name and last name</li>
                                <li>Phone number</li>
                                <li>Usage Data</li>
                            </ul>
                        </div>

                        {/* Usage Data */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">Usage Data</h4>
                            <p>
                                Usage Data is collected automatically when using the Service.
                                <br />
                                <br />
                                Usage Data may include information such as Your Device's
                                Internet Protocol address (e.g. IP address), browser type,
                                browser version, the pages of our Service that You visit, the
                                time and date of Your visit, the time spent on those pages,
                                unique device identifiers and other diagnostic data.
                                <br />
                                <br />
                                When You access the Service by or through a mobile device, We
                                may collect certain information automatically, including, but
                                not limited to, the type of mobile device You use, Your mobile
                                device unique ID, the IP address of Your mobile device, Your
                                mobile operating system, the type of mobile Internet browser You
                                use, unique device identifiers and other diagnostic data.
                                <br />
                                <br />
                                We may also collect information that Your browser sends whenever
                                You visit our Service or when You access the Service by or
                                through a mobile device.
                            </p>
                        </div>

                        {/* Tracking Technologies and Cookies */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">
                                Tracking Technologies and Cookies
                            </h4>
                            <p>
                                We use Cookies and similar tracking technologies to track the
                                activity on Our Service and store certain information. Tracking
                                technologies used are beacons, tags, and scripts to collect and
                                track information and to improve and analyze Our Service. The
                                technologies We use may include:
                            </p>

                            <ul className="list-disc list-inside">
                                <li className="mb-[5px]">
                                    <b>Cookies or Browser Cookies.</b> A cookie is a small file
                                    placed on Your Device. You can instruct Your browser to refuse
                                    all Cookies or to indicate when a Cookie is being sent.
                                    However, if You do not accept Cookies, You may not be able to
                                    use some parts of our Service. Unless you have adjusted Your
                                    browser setting so that it will refuse Cookies, our Service
                                    may use Cookies.
                                </li>

                                <li className="mb-[5px]">
                                    <b>Flash Cookies.</b> Certain features of our Service may use
                                    local stored objects (or Flash Cookies) to collect and store
                                    information about Your preferences or Your activity on our
                                    Service. Flash Cookies are not managed by the same browser
                                    settings as those used for Browser Cookies. For more
                                    information on how You can delete Flash Cookies, please read
                                    "Where can I change the settings for disabling, or deleting
                                    local shared objects?" available at :{" "}
                                    <Link to="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_">
                                        Click here
                                    </Link>
                                </li>

                                <li className="mb-[5px]">
                                    <b>Web Beacons.</b> Certain sections of our Service and our
                                    emails may contain small electronic files known as web beacons
                                    (also referred to as clear gifs, pixel tags, and single-pixel
                                    gifs) that permit the Company, for example, to count users who
                                    have visited those pages or opened an email and for other
                                    related website statistics (for example, recording the
                                    popularity of a certain section and verifying system and
                                    server integrity).
                                </li>
                            </ul>
                            <br />
                            <p>
                                Cookies can be "Persistent" or "Session" Cookies. Persistent
                                Cookies remain on Your personal computer or mobile device when
                                You go offline, while Session Cookies are deleted as soon as You
                                close Your web browser. Learn more about cookies: Cookies: What
                                Do They Do?.
                                <br />
                                <br />
                                We use both Session and Persistent Cookies for the purposes set
                                out below:
                            </p>

                            <ul className="list-disc list-inside py-2">
                                <li>
                                    <b>Necessary / Essential Cookies</b>
                                    <br />
                                    <br />
                                    <b>Type:</b> Session Cookies
                                    <br />
                                    <b>Administered by:</b> Us
                                    <br />
                                    <b>Purpose:</b> These Cookies are essential to provide You
                                    with services available through the Website and to enable You
                                    to use some of its features. They help to authenticate users
                                    and prevent fraudulent use of user accounts. Without these
                                    Cookies, the services that You have asked for cannot be
                                    provided, and We only use these Cookies to provide You with
                                    those services.
                                </li>
                                <br />
                                <br />
                                <li>
                                    <b>Cookies Policy / Notice Acceptance Cookies</b>
                                    <br />
                                    <br />
                                    <b>Type:</b> Persistent Cookies
                                    <br />
                                    <b>Administered by:</b> Us
                                    <br />
                                    <b>Purpose:</b> These Cookies identify if users have accepted
                                    the use of cookies on the Website.
                                </li>
                                <br />
                                <br />
                                <li>
                                    <b>Functionality Cookies</b>
                                    <br />
                                    <br />
                                    <b>Type:</b> Persistent Cookies
                                    <br />
                                    <b>Administered by:</b> Us
                                    <br />
                                    <b>Purpose:</b> These Cookies allow us to remember choices You
                                    make when You use the Website, such as remembering your login
                                    details or language preference. The purpose of these Cookies
                                    is to provide You with a more personal experience and to avoid
                                    You having to re-enter your preferences every time You use the
                                    Website.
                                </li>
                            </ul>
                            <p>
                                For more information about the cookies we use and your choices
                                regarding cookies, please visit our Cookies Policy or the
                                Cookies section of our Privacy Policy.
                            </p>
                        </div>

                        {/* Use of Your Personal Data */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">Use of Your Personal Data</h4>
                            <p>
                                The Company may use Personal Data for the following purposes:
                            </p>

                            <ul className="list-disc list-inside py-2">
                                <li className="mb-[5px]">
                                    <b>To provide and maintain our Service,</b> including to
                                    monitor the usage of our Service.
                                </li>
                                <li className="mb-[5px]">
                                    <b>To manage Your Account:</b> to manage Your registration as
                                    a user of the Service. The Personal Data You provide can give
                                    You access to different functionalities of the Service that
                                    are available to You as a registered user.
                                </li>
                                <li className="mb-[5px]">
                                    <b>For the performance of a contract: </b> the development,
                                    compliance and undertaking of the purchase contract for the
                                    products, items or services You have purchased or of any other
                                    contract with Us through the Service.
                                </li>
                                <li className="mb-[5px]">
                                    <b>To contact You:</b> To contact You by email, telephone
                                    calls, SMS, or other equivalent forms of electronic
                                    communication, such as a mobile application's push
                                    notifications regarding updates or informative communications
                                    related to the functionalities, products or contracted
                                    services, including the security updates, when necessary or
                                    reasonable for their implementation.
                                </li>
                                <li className="mb-[5px]">
                                    <b>To provide You</b>with news, special offers and general
                                    information about other goods, services and events which we
                                    offer that are similar to those that you have already
                                    purchased or enquired about unless You have opted not to
                                    receive such information.
                                </li>
                                <li className="mb-[5px]">
                                    <b>To manage Your requests:</b> To attend and manage Your
                                    requests to Us.
                                </li>
                                <li className="mb-[5px]">
                                    <b>For business transfers: </b> We may use Your information to
                                    evaluate or conduct a merger, divestiture, restructuring,
                                    reorganization, dissolution, or other sale or transfer of some
                                    or all of Our assets, whether as a going concern or as part of
                                    bankruptcy, liquidation, or similar proceeding, in which
                                    Personal Data held by Us about our Service users is among the
                                    assets transferred.
                                </li>
                                <li className="mb-[5px]">
                                    <b>For other purposes:</b> We may use Your information for
                                    other purposes, such as data analysis, identifying usage
                                    trends, determining the effectiveness of our promotional
                                    campaigns and to evaluate and improve our Service, products,
                                    services, marketing and your experience.
                                </li>
                            </ul>

                            <br />

                            <p>
                                We may share Your personal information in the following
                                situations:
                            </p>

                            <ul className="list-disc list-inside py-2">
                                <li className="mb-[5px]">
                                    <b>With Service Providers:</b> We may share Your personal
                                    information with Service Providers to monitor and analyze the
                                    use of our Service, to contact You.
                                </li>

                                <li className="mb-[5px]">
                                    <b>For business transfers:</b> We may share or transfer Your
                                    personal information in connection with, or during
                                    negotiations of, any merger, sale of Company assets,
                                    financing, or acquisition of all or a portion of Our business
                                    to another company.
                                </li>

                                <li className="mb-[5px]">
                                    <b>With Affiliates:</b> We may share Your information with Our
                                    affiliates, in which case we will require those affiliates to
                                    honor this Privacy Policy. Affiliates include Our parent
                                    company and any other subsidiaries, joint venture partners or
                                    other companies that We control or that are under common
                                    control with Us.
                                </li>

                                <li className="mb-[5px]">
                                    <b>With business partners:</b> We may share Your information
                                    with Our business partners to offer You certain products,
                                    services or promotions.
                                </li>

                                <li className="mb-[5px]">
                                    <b>With other users:</b> when You share personal information
                                    or otherwise interact in the public areas with other users,
                                    such information may be viewed by all users and may be
                                    publicly distributed outside.
                                </li>

                                <li className="mb-[5px]">
                                    <b>With Your consent: </b> To We may disclose Your personal
                                    information for any other purpose with Your consent.
                                </li>
                            </ul>
                        </div>

                        {/* Retention of Your Personal Data */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">Retention of Your Personal Data</h4>
                            <p>
                                The Company will retain Your Personal Data only for as long as
                                is necessary for the purposes set out in this Privacy Policy. We
                                will retain and use Your Personal Data to the extent necessary
                                to comply with our legal obligations (for example, if we are
                                required to retain your data to comply with applicable laws),
                                resolve disputes, and enforce our legal agreements and policies.
                                <br />
                                <br />
                                The Company will also retain Usage Data for internal analysis
                                purposes. Usage Data is generally retained for a shorter period
                                of time, except when this data is used to strengthen the
                                security or to improve the functionality of Our Service, or We
                                are legally obligated to retain this data for longer time
                                periods.
                            </p>
                        </div>

                        {/* Transfer of Your Personal Data */}
                        <div className="py-4">
                            <h4 className="text-2xl py-2">Transfer of Your Personal Data</h4>
                            <p>
                                Your information, including Personal Data, is processed at the
                                Company's operating offices and in any other places where the
                                parties involved in the processing are located. It means that
                                this information may be transferred to — and maintained on —
                                computers located outside of Your state, province, country or
                                other governmental jurisdiction where the data protection laws
                                may differ than those from Your jurisdiction.
                                <br />
                                <br />
                                Your consent to this Privacy Policy followed by Your submission
                                of such information represents Your agreement to that transfer.
                                <br />
                                <br />
                                The Company will take all steps reasonably necessary to ensure
                                that Your data is treated securely and in accordance with this
                                Privacy Policy and no transfer of Your Personal Data will take
                                place to an organization or a country unless there are adequate
                                controls in place including the security of Your data and other
                                personal information.
                            </p>
                        </div>
                    </div>

                    {/* Disclosure of Your Personal Data */}
                    <div className="py-10">
                        <h2 className={`${styles.customH2}`}>
                            Disclosure of Your Personal Data
                        </h2>

                        {/* Business Transactions */}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>
                                Business Transactions
                            </h3>
                            <p>
                                If the Company is involved in a merger, acquisition or asset
                                sale, Your Personal Data may be transferred. We will provide
                                notice before Your Personal Data is transferred and becomes
                                subject to a different Privacy Policy
                            </p>
                        </div>

                        {/* Law enforcement */}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>Law enforcement</h3>
                            <p>
                                Under certain circumstances, the Company may be required to
                                disclose Your Personal Data if required to do so by law or in
                                response to valid requests by public authorities (e.g. a court
                                or a government agency).
                            </p>
                        </div>

                        {/* Other legal requirements */}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>
                                Other legal requirements
                            </h3>
                            <p>
                                The Company may disclose Your Personal Data in the good faith
                                belief that such action is necessary to:
                            </p>

                            <ul className="list-disc list-inside">
                                <li>Comply with a legal obligation</li>
                                <li>
                                    Protect and defend the rights or property of the Company
                                </li>
                                <li>
                                    Prevent or investigate possible wrongdoing in connection with
                                    the Service
                                </li>
                                <li>
                                    Protect the personal safety of Users of the Service or the
                                    public
                                </li>
                                <li>Protect against legal liability</li>
                            </ul>
                        </div>
                    </div>

                    {/* Security of Your Personal Data */}
                    <div className="py-10">
                        <h2 className={`${styles.customH2}`}>
                            Security of Your Personal Data
                        </h2>
                        <p>
                            The security of Your Personal Data is important to Us, but
                            remember that no method of transmission over the Internet, or
                            method of electronic storage is 100% secure. While We strive to
                            use commercially acceptable means to protect Your Personal Data,
                            We cannot guarantee its absolute security.
                        </p>

                        {/* Children's Privacy */}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>Children's Privacy</h3>
                            <p>
                                Our Service does not address anyone under the age of 13. We do
                                not knowingly collect personally identifiable information from
                                anyone under the age of 13. If You are a parent or guardian and
                                You are aware that Your child has provided Us with Personal
                                Data, please contact Us. If We become aware that We have
                                collected Personal Data from anyone under the age of 13 without
                                verification of parental consent, We take steps to remove that
                                information from Our servers.
                                <br /> <br />
                                If We need to rely on consent as a legal basis for processing
                                Your information and Your country requires consent from a
                                parent, We may require Your parent's consent before We collect
                                and use that information.
                            </p>
                        </div>

                        {/* Links to Other Websites*/}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>
                                Links to Other Websites
                            </h3>
                            <p>
                                Our Service may contain links to other websites that are not
                                operated by Us. If You click on a third party link, You will be
                                directed to that third party's site. We strongly advise You to
                                review the Privacy Policy of every site You visit.
                                <br /> <br />
                                We have no control over and assume no responsibility for the
                                content, privacy policies or practices of any third party sites
                                or services.
                            </p>
                        </div>

                        {/* Changes to this Privacy Policy*/}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>
                                Changes to this Privacy Policy
                            </h3>
                            <p>
                                We may update Our Privacy Policy from time to time. We will
                                notify You of any changes by posting the new Privacy Policy on
                                this page.
                                <br /> <br />
                                We will let You know via email and/or a prominent notice on Our
                                Service, prior to the change becoming effective and update the
                                "Last updated" date at the top of this Privacy Policy.
                                <br /> <br />
                                You are advised to review this Privacy Policy periodically for
                                any changes. Changes to this Privacy Policy are effective when
                                they are posted on this page.
                            </p>
                        </div>

                        {/* Contact Us*/}
                        <div className="py-4">
                            <h3 className={`${styles.customH2} py-2`}>Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, You can
                                contact us:
                            </p>

                            <ul className="list-disc list-inside py-4">
                                <a href="mailto:hello@weaghori.com">
                                    <li className="py-2">By email: hello@weaghori.com</li>
                                </a>
                                <a href="/contact">
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

export default PrivacyPolicy
