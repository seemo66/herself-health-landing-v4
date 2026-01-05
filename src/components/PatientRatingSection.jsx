// PatientRatingSection Component
// Displays patient ratings.

export default function PatientRatingSection() {
  return (
    <section className="bg-[#8755F1]/10 px-[30px] py-[30px] lg:flex lg:items-center lg:justify-center lg:gap-[72px] lg:py-[45px]">
      <div className="mb-4 flex gap-[19px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/star-icon-purple.png`}
            alt="star icon"
            className="h-[44px] w-[43px] lg:h-[57px] lg:w-[56px]"
          />
        ))}
      </div>
      <div id="guide">
        <p className="subtitle-font !font-bold">4.9 average patient rating</p>
        <p className="subtitle-font">Trusted by more than 10,000 patients</p>
      </div>
    </section>
  );
}
