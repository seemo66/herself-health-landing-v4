// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    <section className="bg-white">
      {/* Hero wrapper with relative positioning for overlay form */}
      <div className="relative">
        {/* Hero image */}
        <div className="w-full">
          <picture>
            {/* Desktop image */}
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/waitlist-desktop.webp`}
              media="(min-width: 768px)"
            />
            {/* Mobile fallback */}
            <img
              src={`${process.env.PUBLIC_URL}/images/waitlist-mobile.webp`}
              alt="A woman wearing glasses stands in front of a closed door, looking directly at the camera"
              className="block w-full object-cover md:h-[787px] md:min-h-[694px]"
            />
          </picture>
        </div>

        {/* Overlay container for testimonial + form */}
        <div
          id="waiting-list"
          className="w-full px-[30px] py-[34px] md:absolute md:left-0 md:top-1/2 md:max-w-[822px] md:-translate-y-1/2 md:px-[30px] md:py-0 lg:left-[146px] lg:px-0"
        >
          {/* Testimonial block */}
          <div className="mb-[35px] md:text-center lg:mb-[40px]" id="call-now">
            {/* Mobile (pink) */}
            <img
              src={`${process.env.PUBLIC_URL}/images/quotations-icon-pink.png`}
              alt="Quotation mark icon"
              className="mb-[15px] block h-full w-[50px] md:hidden"
            />

            {/* md and up (white) */}
            <img
              src={`${process.env.PUBLIC_URL}/images/quotations-icon-white.png`}
              alt="Quotation mark icon"
              className="mb-[15px] hidden h-full w-[50px] md:mx-auto md:block"
            />
            <blockquote className="mb-[16px] font-untitled text-[18px] font-medium italic leading-6 text-pink md:px-16 md:text-[20px] md:text-white">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="mb-[16px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] md:hidden md:text-[20px]">
              – Jayne H.
            </p>
          </div>

          {/* Headline */}
          <h2 className="mb-[35px] font-reckless text-[40px] font-medium leading-[45px] text-pink md:hidden">
            Schedule Your Appointment
          </h2>
          {/* Description */}
          <p className="mb-[25px] font-untitled text-[18px] font-normal leading-6 text-[#1D2534] md:hidden">
            Fill out the form below and someone from our team will get back to you in 24 hours. 
          </p>

          {/* Form box */}
          <div className="rounded-[10px] border-pink bg-white md:border-[2px] md:px-[83px] md:py-[61px]">
            {/* Headline */}
            <h2 className="mb-[35px] hidden font-reckless text-[50px] font-medium leading-[45px] text-pink md:block">
              Schedule Your Appointment
            </h2>
            {/* Description */}
            <p className="mb-[25px] hidden font-untitled text-[18px] font-normal leading-6 text-[#1D2534] md:block lg:text-[20px]">
              Fill out the form below and someone from our team will get back to you in 24 hours. 
            </p>
            {/* Embedded form */}
            <WaitingListForm />
          </div>
        </div>
      </div>
    </section>
  );
}
