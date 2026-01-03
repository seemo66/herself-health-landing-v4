// ServicesSection Component
// Displays an image alongside service highlights and a list of key healthcare areas.

export default function ServicesSectionTwo() {
  return (
    <section className="m-auto flex flex-col gap-[40px] bg-white px-[30px] py-[37px] lg:flex-row lg:items-center lg:justify-center lg:gap-[54px] lg:py-[90px] lg:pt-12 xl:px-[155px]">
      {/* Responsive service image */}
      <picture className="block lg:aspect-auto lg:max-h-full lg:w-1/2">
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/services2-desktop.webp`}
          media="(min-width: 768px)"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/services2-mobile.webp`}
          alt="A nurse assists an older woman as they both review medical information on a tablet."
          className="h-full w-full rounded-[10px] object-cover 2xl:max-w-[643px]"
        />
      </picture>

      {/* Text content */}
      <div className="lg:w-1/2 xl:max-w-[605px]">
        <h2 className="title-font mb-4 lg:mb-[30px]">
          Your care is delivered through a membership.
        </h2>

        <p className="body-font">
          That membership gives you longer visits, easier access to your care team, and a personal
          plan for midlife health without feeling rushed. Appointments are designed for real
          conversations and follow-up, not quick checklists.
        </p>
      </div>
    </section>
  );
}
