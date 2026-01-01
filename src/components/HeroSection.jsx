// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="bg-tan relative pb-8">
      {/* hero image container */}
      <div className="relative w-full max-h-[870px]">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/hero-desktop.webp`}
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-mobile.webp`}
            alt="A woman happily smiling."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div
        className="relative pt-[25px] pb-0 px-[30px] lg:px-[100px] 
                      md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10"
      >
        <div className="md:w-[55%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:max-w-7xl md:pr-8">
          {/* main headline */}
          <h1 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-[50px] xl:text-[60px]">
            Primary Care That Puts Women First
          </h1>

          {/* subheadline */}
          <h2 className="text-[24px] text-darkPink text-lg font-medium mb-3 xl:text-[30px] xl:leading-tight">
            Care designed for women's lives after 50.
          </h2>

          {/* main descriptive paragraphs */}
          <p className="font-untitled text-[#1D2534] text-[18px] mb-3 leading-tight md:text-[21px] md:hidden 2xl:block ">
            Too often, healthcare does not give women the high-quality, female-focused care they
            deserve. Many women are rushed through appointments, have symptoms brushed aside, or
            leave without clear answers. Your health changes during midlife, and your healthcare
            should change to fit your needs.
          </p>

          <p className="font-untitled text-[#1D2534] text-[18px] mb-7 md:text-[21px] md:hidden xl:block">
            <strong className="hidden lg:inline">
              The Herself Health Membership is different.
            </strong>
            You get longer visits, providers trained in women’s health, and a care team that
            connects hormones, sleep, mood, bone health, heart health, and more into one plan that
            fits your life.
          </p>

          {/* call-to-action button */}
          <button
            className="mb-7 w-full md:w-[312px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-4 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Become a Member
          </button>

          <p className="font-untitled text-[#1D2534] text-[14px] md:text-[21px] leading-tight">
            <em>
              Start your care with a team that understands what matters most to women in their
              healthcare.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
