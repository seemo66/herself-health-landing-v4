export default function GuideSection() {
  return (
    // main container with background color
    <div className="relative bg-[#9A0180]">
      {/* hero image container */}
      <div className="relative max-h-[828px] w-full">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/guide-bg-image-desktop.webp`}
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src={`${process.env.PUBLIC_URL}/images/guide-bg-image-mobile.webp`}
            alt="A woman in workout clothes smiling, with a water bottle in hand."
            className="block w-full object-cover md:min-h-[525px]"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div className="relative z-10 px-[30px] py-[35px] pb-[48px] md:absolute md:inset-0 md:flex md:items-center md:justify-start md:p-12 lg:px-[100px]">
        <div className="flex flex-col gap-4 md:w-[57%] md:min-w-[700px] md:rounded-lg md:bg-[#9A0180] md:px-14 md:py-10">
          {/* main headline */}
          <h2 className="title-font !text-white">Care built for this stage of life</h2>

          {/* main descriptive paragraphs */}
          <p className="body-font !text-white md:hidden lg:block lg:!text-[21px]">
            Hormones, sleep, heart health, bone health, weight, mood, and energy often change
            together during midlife. Addressing them well means looking at the full picture, not
            treating symptoms in isolation.
          </p>

          <p className="body-font !text-white md:hidden lg:!text-[21px] xl:block">
            Herself Health focuses exclusively on women in midlife, with providers who understand
            how these changes connect and how to guide you through them.
          </p>

          <div className="md:mt-7 md:flex md:flex-row-reverse">
            <img
              src={`${process.env.PUBLIC_URL}/images/brochure-cover.webp`}
              alt="Brouchure cover titled 'The Herself Health Guide to Midlife Care'."
              className="-mt-6 h-auto w-[179px] lg:w-[290px]"
            />

            <div>
              <h3 className="subtitle-font !text-white">
                Your free guide designed for women 50-64
              </h3>

              {/* call-to-action button */}
              <a
                className="button-font mt-4 flex h-[67px] w-full items-center justify-center rounded-lg bg-white text-center !text-[#9A0180] shadow-lg transition-colors duration-300 hover:bg-gray-200 lg:max-w-[330px]"
                href={`${process.env.PUBLIC_URL}/files/herself-health-guide.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download your free guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
