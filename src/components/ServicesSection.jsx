// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSection() {
  return (
    <section
      className="m-auto flex flex-col gap-[40px] bg-white px-[30px] pt-[50px] py-[40px] 
                 xl:flex-row xl:items-center xl:justify-center xl:gap-[54px] xl:px-[155px] xl:py-[90px]"
    >
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] w-full xl:aspect-auto xl:w-[50%] md:max-h-[700px] xl:max-h-full">
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services-desktop.webp`}
          media="(min-width: 768px)"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/services-mobile.webp`}
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="xl:max-w-[605px]">
        <h2 className="mb-[16px] font-reckless text-[40px] leading-tight text-pink lg:text-[50px] 2xl:text-[60px]">
          Why care built for women 50 plus makes a difference
        </h2>

        <hr className="hidden lg:block my-6 border-t border-black" />

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
          Women face changes in heart health, bone health, memory and metabolism that often look
          different from what men experience. Yet many parts of healthcare still rely on research
          and standards built mostly around male bodies.
        </p>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
          <strong>
            That is why we built Herself Health, care designed for women, by women, and centered on
            what women want from their healthcare.
          </strong>
        </p>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
          Traditional coverage does not always support this proactive approach. We bill insurance
          for what it will cover, and your membership helps us offer the extra time and support that
          make your care feel truly personalized.
        </p>

        <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] lg:text-[20px]">
          <strong>With the Herself Health Membership, you get:</strong>
        </p>

        {/* Service highlights with checkmarks */}
        <ul className="mb-[25px] space-y-4 pl-0 font-untitled text-[20px] font-bold leading-6 text-[#6A0058]">
          {[
            'More time in every visit',
            'Women’s health expertise',
            'Midlife and menopause support',
            'Proactive, preventive care',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/checkmark-pink.svg`}
                alt="" // decorative, so we leave empty alt
                aria-hidden="true"
                className="h-5 w-5"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
