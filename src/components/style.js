const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[40.8px] w-full",
    paragraph: "font-poppins  text-white text-[18px] leading-[30.8px]",


    customH2: "text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl my-2",
    customH3: "text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl my-2",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    maxWidth: "w-full md:max-w-screen-lg",
    maxContainerWidth: "md:max-w-[960px]",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;