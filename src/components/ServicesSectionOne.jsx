// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSectionOne() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] py-[37px] pb-0 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[54px] lg:py-[90px] lg:pb-0 xl:px-[155px]">
      {/* Responsive service image */}
      <picture className="block aspect-[1.34] lg:aspect-auto lg:max-h-full lg:w-1/2">
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services1-desktop.webp`}
          media="(min-width: 768px)"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/services1-mobile.webp`}
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:w-1/2 xl:max-w-[605px]">
        <h2 className="title-font mb-4 lg:mb-[30px]">More time with your provider</h2>

        {/* Service highlights with checkmarks */}
        <ul className="list-font mb-[25px] space-y-4 pl-0">
          {[
            'Easier access when questions come up',
            'Appointments that fit real work and life schedules',
            'A clear, personalized plan for midlife health',
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
      </div>
    </section>
  );
}
