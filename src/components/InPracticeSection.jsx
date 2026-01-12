// In Practice Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function InPracticeSection() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] py-[47px] lg:flex-row lg:items-center lg:justify-center lg:gap-[54px] lg:py-[90px] xl:px-[155px]">
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] lg:aspect-auto lg:max-h-full lg:w-1/2">
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/in-practice-desktop.webp`}
          media="(min-width: 768px)"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/in-practice-mobile.webp`}
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:w-1/2 xl:max-w-[605px]">
        <h2 className="title-font mb-4 lg:mb-[30px]">Real Care, Designed by Women, for Women.</h2>

        <p className="mb-6 body-font md:mb-8">
          Many women in their 50s find themselves in a gap: their OBGYN focuses on reproductive
          health, while standard primary care rushes them through 15-minute slots.
        </p>

        {/* Service highlights with checkmarks */}
        <ul className="pl-0 mb-6 space-y-4 list-font">
          {[
            '10,000+ Women Served across the Twin Cities',
            '97% Patient Satisfaction rate.',
            '4.9 Stars from 500+ Patients',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/checkmark-pink.svg`}
                alt="" // decorative, so we leave empty alt
                aria-hidden="true"
                className="h-[21px] w-[29px]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mb-5 flex gap-[19px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/images/star-icon-purple.png`}
              alt="star icon"
              className="h-auto w-[43px]"
            />
          ))}
        </div>

        <p className="text-[24px] font-medium italic leading-7 text-[#9A0180]">
          "I finally felt listened to, supported, and understood. The team that knows me best is
          always ready to help."
        </p>
      </div>
    </section>
  );
}
