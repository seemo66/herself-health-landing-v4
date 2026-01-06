// AnnouncementsSection Component
// Displays an image alongside announcements and a list of key healthcare areas.

export default function AnnouncementsSection() {
  const sections = [
    {
      bgColor: '#FFF5EC',
      title: {
        text: 'Now accepting new members in Minneapolis–St. Paul',
        color: '#9A0180',
      },
      subtitle: {
        before: 'Questions before joining?',
        phone: '888-290-1209',
        after: 'to talk with our team',
        color: '#9A0180',
      },
      button: {
        text: '',
        bg: '',
        textColor: '',
      },
    },
    {
      bgColor: '#9A0180',
      title: {
        text: 'See what this membership includes',
        color: '#FFFFFF',
      },
      subtitle: {
        text: 'No obligation. Just clear details so you can decide if this care is right for you',
        color: '#FFFFFF',
      },
      button: {
        text: 'Get Started',
        bg: '#FFFFFF',
        textColor: '#9A0180',
        link: '',
      },
    },
  ];
  return (
    <div className="md:flex">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col gap-[30px] px-[30px] py-[47px] md:w-1/2 md:justify-center xl:px-[100px] xl:py-[60px] xl:text-center`}
          style={{ backgroundColor: section.bgColor }}
        >
          <h2 className="title-font xl:text-[60px]" style={{ color: section.title.color }}>
            {section.title.text}
          </h2>
          <p className="subtitle-font" style={{ color: section.subtitle.color }}>
            {section.subtitle.phone ? (
              <>
                {section.subtitle.before}
                <br />
                Call{' '}
                <a
                  href={`tel:${section.subtitle.phone.replace(/\D/g, '')}`}
                  className="font-bold"
                  style={{ color: section.subtitle.color }}
                >
                  {section.subtitle.phone}
                </a>{' '}
                {section.subtitle.after}
              </>
            ) : (
              section.subtitle.text
            )}
          </p>
          {section.button.text && (
            <button
              className="button-font m-auto h-[67px] w-full rounded-lg lg:max-w-[284px]"
              style={{ backgroundColor: section.button.bg, color: section.button.textColor }}
              onClick={() => {
                // scroll to waiting list section smoothly when button is clicked
                document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section.button.text}
            </button>
          )}
        </section>
      ))}
    </div>
  );
}
