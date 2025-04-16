import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import ServiceNavigation from "../ServiceNavigation";
import grphicDesign from "../../assets/images/services/Graphic-Design.svg";
import observeLogo from "../../assets/images/services/graphic/OBSERVE_LOGO_DESIGN.png";
import ideaLogo from "../../assets/images/services/graphic/IDEA_LOGO_DESIGN.png";
import identityLogo from "../../assets/images/services/graphic/IDENTITY_LOGO_DESIGN.png";
import createLogo from "../../assets/images/services/graphic/CREATE_LOGO_DESIGN.png";
import trademarkLogo from "../../assets/images/services/graphic/TRADE_MARK_LOGO_DESIGN.png";
import businessCard from "../../assets/images/services/business/BUSINESS-CARD-VISITNG-CARD.png"
import letterHead from "../../assets/images/services/business/LETTERHEAD_STATIONEY_BRAND_COMPANY.png"
import envDesign from "../../assets/images/services/business/ENVELOPE_DESIGN_INVITEE_LETTER.png"
import invoiceImg from "../../assets/images/services/business/INVOICE_BUSINESS_BILLBOOK_CHALLANE.png"
import busDiary from "../../assets/images/services/business/BUSINESS_DIARY_NOTEPAD_WRITING_PAD.png"
import inviteeKit from "../../assets/images/services/corporate-kit/CORPORATE_KIT_INVITEE.png"
import companyProfile from "../../assets/images/services/corporate-kit/COMPANY_PROFILE_CORPORATE_PROFILE_BUSINESS.png"
import broucherKit from "../../assets/images/services/corporate-kit/BROCHURE_CORPORATE_KIT_CATALOGUE_DESIGN.png"
import rateCard from "../../assets/images/services/corporate-kit/RATECARD_MENU_COFFEE _TABLE_BOOK.png"
import calendar from "../../assets/images/services/corporate-kit/CALENDAR_CORPORATE_GIFT_MUG_BOOK_PEN.png"
import priceTag from "../../assets/images/services/packaging/PRICE_TAG_PACAGING_LABEL.png"
import shopBag from "../../assets/images/services/packaging/SHOPPING_BAG_CREATIVE_BAG.png"
import productBox from "../../assets/images/services/packaging/PRODUCT_BOX_PACKAGING.png"
import packagingBox from "../../assets/images/services/packaging/PACKAGING_INNOVATIVE_BOX_CREATIVE.png"
import voucherDm from "../../assets/images/services/marketing/MARKETING_VOUCHER_DM.png"
import posterFlyer from "../../assets/images/services/marketing/POSTER_FLYER_PHAMPHLET_MARKETING.png"
import dangler from "../../assets/images/services/marketing/DANGLER_MARKETING_BUNTINGS.png"
import tantCard from "../../assets/images/services/marketing/TANT_CARD_DESIGN_MARKETING_DISPLAY.png"
import newsPaper from "../../assets/images/services/marketing/NEWSPAPER_AD_MAGAZINE_DESIGN_MARKETING.png"
import standee from "../../assets/images/services/marketing/STANDEE_MARKETING_DESIGN.png"
import kiosk from "../../assets/images/services/marketing/KIOSK_MARKETING_PROMOTATION_PAID.png"
import banner from "../../assets/images/services/marketing/BANNER_MARKETING_AD_DESIGN_OFFER.png"
import hoarding from "../../assets/images/services/marketing/HOARDING_OUTDOOR_OOH_SIGN_BOARD_MARKETING.png"

const GraphicDesigning = () => {
    const currectContainer = useRef(null);
    useEffect(() => {
        console.log("first");
        // window.addEventListener("load", function () {
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // });
        if (currectContainer.current) {
            currectContainer.current.scrollTo(0, 0);
        }
    }, []);
    return (
        <>
            <div
                ref={currectContainer}
                className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white pt-[110px]`}
            >
                <div className="bg-[#bf132f] rounded-lg">
                    <img
                        className="max-w-[80%] mx-auto"
                        src={grphicDesign}
                        alt="services"
                    />
                </div>

                <div className="md:py-20 py-8">
                    <h1 className="text-3xl mb-8">Graphic designing</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            At Aghori Media House Pvt. Ltd, we are a creative and innovative
                            design agency specializing in a wide range of design services that
                            bring an artistic touch to communicate with your target audience.
                            Our graphic designers are young, creative, and dedicated to
                            producing unique, meaningful, and eye-catching designs for your
                            branding and business marketing purposes.
                        </p>
                        <br />
                        <p>
                            With a deep understanding of the power of visual communication, we
                            create designs that leave a lasting impact. From print materials
                            to websites, advertising, and brand identity, our goal-oriented
                            and result-based approach ensures that every design captures
                            attention and resonates with your audience.
                        </p>
                        <br />
                        <p>
                            We embrace creative freedom, allowing our designers to express
                            their imagination and bring your ideas to life. By staying updated
                            with the latest techniques and software, we deliver designs that
                            are not only visually stunning but also aligned with industry
                            trends.
                        </p>
                    </div>
                </div>

                {/* Logo start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">Logo</span>
                            <br /> Design
                        </h3>

                        <p>
                            Amidst the sea of competition, your brand logo has the power to
                            shine brightly, and grab the attention of your target audience.
                            Your logo design should possess an artistic touch that effectively
                            communicates with your audience. The logo should effectively
                            represent your company, its beliefs, and what it aims to offer.
                            Our artistic team at Aghori Media takes immense pleasure in this
                            challenging process of creativity. We also assist you in domain
                            name registration and registration of the trademark logo.
                        </p>
                        {/* icon */}
                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={observeLogo}
                                    alt="graphic"
                                    className="invert  w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">OBSERVE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={ideaLogo}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">IDEA</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={identityLogo}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">IDENTITY</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={createLogo}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">CREATE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={trademarkLogo}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">TRADEMARK</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo End */}

                {/* Business Stationery start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">BUSINESS</span>
                            <br /> STATIONERY
                        </h3>

                        <p>
                            Creating impressive business stationery is essential for
                            establishing a strong brand presence and leaving a memorable
                            impact. At our design agency, we recognize the significance of
                            professional stationery, including letterheads, business cards,
                            envelopes, invoices, and writing pads. Our team of experienced
                            designers specializes in crafting visually captivating and
                            cohesive designs that reflect your brand's professionalism and
                            attention to detail. By investing in custom stationery solutions,
                            you can enhance your credibility, make a lasting impression, and
                            demonstrate your commitment to excellence in all aspects of your
                            business. Elevate your brand image with our exceptional business
                            stationery services.
                        </p>
                        {/* icon */}
                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={businessCard}
                                    alt="graphic"
                                    className="invert  w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">BUSINESS CARD</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={letterHead}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">LETTERHEAD</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={envDesign}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">ENVELOPE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={invoiceImg}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">INVOICE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={busDiary}
                                    alt="graphic"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">WRITING PAD</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Business Stationery End */}

                {/* Corporate Kit start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">Corporate</span>
                            <br /> Kit
                        </h3>

                        <p>
                            As we know that visuals triumph text, eye-pleasing graphics become
                            more important. Marketing through brochures, pamphlets, calendars,
                            coffee table books, leaflets, and info graphics becomes
                            increasingly necessary. And these mediums need to deliver the
                            right visuals suitable for your brand. We take pride in creating
                            dynamic and relevant graphic designs that attract the attention of
                            the receiver.
                        </p>
                        {/* icon */}
                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={inviteeKit}
                                    alt="INVITE"
                                    className="invert  w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">INVITE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={companyProfile}
                                    alt="COMPANY-PROFILE"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">COMPANY PROFILE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={broucherKit}
                                    alt="BROCHURE"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">BROCHURE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={rateCard}
                                    alt="RATE-CARD"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">RATE CARD</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={calendar}
                                    alt="CALENDAR"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">CALENDAR</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Corporate Kit End */}

                {/* Packaging Kit start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">Packaging</span>
                            <br /> Kit
                        </h3>

                        <p>
                            The style of packaging also impacts the way a consumer views your
                            brand. It has to appeal to your audience. We align your brand
                            identity with our creative designs, to generate relevant and
                            appealing packaging designs. Our goal-oriented graphic designers
                            will help you design your cartons, packets, price tags, tickets,
                            etc. to further raise your brand awareness. These experts with
                            their wide imagination will leave no room for regret.
                        </p>
                        {/* icon */}
                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={priceTag}
                                    alt="PRICE-TAG"
                                    className="invert  w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">PRICE TAG</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={shopBag}
                                    alt="SHOPPING-BAG"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">SHOPPING BAG</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={productBox}
                                    alt="PRODUCT-BOX"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">PRODUCT BOX</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={packagingBox}
                                    alt="INNOVATIVE-BOX"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">INNOVATIVE BOX</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Packaging Kit End */}

                {/* Marketing Tools start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10">
                            <span className="font-extralight ">Marketing</span>
                            <br /> Tools
                        </h3>

                        <p>
                            With a handy team of designers, Aghori Media excels in the process
                            of creating visually enticing content. We commit to generating
                            compelling promotion and publicity content that brings your brand
                            in the limelight. All you need to do is trust us once. We can
                            efficiently translate your brand message into a visual delight.
                            From banners, standees, posters to clothing & magazine ads, we
                            design all and with passion.
                        </p>
                        {/* icon */}
                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={voucherDm}
                                    alt="VOUCHER"
                                    className="invert  w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">VOUCHER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={posterFlyer}
                                    alt="POSTER"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">POSTER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={dangler}
                                    alt="DANGLER"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">DANGLER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={tantCard}
                                    alt="TANT-CARD"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">TANT CARD</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={newsPaper}
                                    alt="NEWSPAPER"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">NEWSPAPER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={standee}
                                    alt="STANDEE"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">STANDEE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={kiosk}
                                    alt="KIOSK"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">KIOSK</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={banner}
                                    alt="BANNER"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">BANNER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img
                                    src={hoarding}
                                    alt="TANT-CARDHOARDING"
                                    className="invert w-[75%] mx-auto"
                                />
                                <h4 className="text-[14px] text-center">HOARDING</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Marketing Tools End */}

                {/* Navigation start */}
                <ServiceNavigation expertiseName={"graphic-designing"} />
                {/* Navigation start */}
            </div>
        </>
    );
};

export default GraphicDesigning
