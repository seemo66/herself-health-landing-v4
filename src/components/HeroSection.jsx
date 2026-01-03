// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="relative bg-tan">
      {/* hero image container */}
      <div className="relative max-h-[638px] w-full">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/hero-desktop.webp`}
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-mobile.webp`}
            alt="A woman in workout clothes smiling, with a water bottle in hand."
            className="block w-full object-cover md:min-h-[525px]"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div className="relative z-10 px-[30px] py-[35px] pb-[48px] md:absolute md:inset-0 md:flex md:items-center md:justify-start md:p-12 lg:px-[100px]">
        <div className="flex flex-col gap-4 md:w-[75%] lg:w-[55%] xl:w-[50%] 2xl:w-[48%]">
          {/* main headline */}
          <h1 className="title-font">Primary Care Designed for Women 50–64</h1>

          {/* subheadline */}
          <h2 className="subtitle-font">
            Care that gives you more time, easier access, and a clear plan for midlife health.
          </h2>

          {/* main descriptive paragraphs */}
          <p className="body-font md:hidden xl:block">
            Midlife health gets complicated. Getting care should not. Herself Health is primary care
            designed for this stage of life, so you can spend more time with your provider, get help
            when something feels off, and leave with a plan that actually makes sense.
          </p>

          {/* call-to-action button */}
          <button
            className="button-font mt-4 h-[67px] w-full rounded-lg bg-purple shadow-lg transition-colors duration-300 hover:bg-purple-dark md:w-[355px]"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See if this care fits your life
          </button>
        </div>
      </div>
    </div>
  );
}
