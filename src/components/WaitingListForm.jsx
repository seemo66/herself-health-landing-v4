// waiting list form component
// handles user input, submission, and displays a temporary success message
import { useState, useEffect, useRef } from 'react';

// UTM tracking utility - supports Facebook ad parameters
function getUTMData() {
  if (typeof window === 'undefined') return {};

  // First try to get from sessionStorage
  const storedData = sessionStorage.getItem('utm_tracking');
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (e) {
      console.warn('Failed to parse stored UTM data:', e);
    }
  }

  // Fallback to URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
    fb_ad_id: urlParams.get('fb_ad_id') || '',
    campaign_id: urlParams.get('campaign_id') || '',
  };
}

export default function WaitingListForm() {
  // form state
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  });

  // submission state
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ref to hold the timeout ID for clearing
  const timerRef = useRef(null);

  // form field definitions for easier mapping (using Salesforce field names)
  const fields = [
    {
      id: 'FirstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      autoComplete: 'given-name',
    },
    {
      id: 'LastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Enter your last name',
      autoComplete: 'family-name',
    },
    {
      id: 'Email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your@email.com',
      autoComplete: 'email',
    },
    {
      id: 'Phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '(123) 456-7890',
      autoComplete: 'tel',
    },
  ];

  // track form interaction start
  const [formStarted, setFormStarted] = useState(false);

  // update form state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Track form start on first interaction
    if (!formStarted) {
      setFormStarted(true);
      if (typeof window !== 'undefined' && window.dataLayer) {
        const utmData = getUTMData();
        window.dataLayer.push({
          event: 'form_start',
          form_name: 'member',
          form_id: 'member-form',
          utm_source: utmData.utm_source,
          utm_medium: utmData.utm_medium,
          utm_campaign: utmData.utm_campaign,
          fb_ad_id: utmData.fb_ad_id,
          campaign_id: utmData.campaign_id,
          page_type: 'member_landing',
        });
      }
    }
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Get UTM data for tracking
      const utmData = getUTMData();

      // Submit to Salesforce API with proper structure
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 'member-form', // Form identifier
          fields: JSON.stringify(formData), // Salesforce fields
          form_title: 'Member', // Form title for tracking
          utm_data: JSON.stringify(utmData), // UTM tracking data
          page_lead_source: 'Membership', // utmData.utm_source, // Lead source for this page
          page_campaign_id: '', // No specific campaign for guide page
          form_source: 'member', // Specific form source identifier
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');

        // Track successful form submission in GTM
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'form_submit_success',
            form_name: 'member',
            form_id: 'member-form',
            utm_source: utmData.utm_source,
            utm_medium: utmData.utm_medium,
            utm_campaign: utmData.utm_campaign,
            fb_ad_id: utmData.fb_ad_id,
            campaign_id: utmData.campaign_id,
            page_type: 'member_landing',
          });
        }

        // clear any existing timer
        if (timerRef.current) clearTimeout(timerRef.current);

        // reset form and hide success message after 5 seconds
        timerRef.current = setTimeout(() => {
          setSubmitted(false);
          setFormData({ FirstName: '', LastName: '', Email: '', Phone: '' });
        }, 5000);
      } else {
        const errorData = await response.text();
        console.error('Form submission failed:', errorData);
        setError('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // cleanup timer on component unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="relative flex items-center justify-center md:justify-start">
      {/* success message overlay */}
      <div
        className={`absolute mb-3 font-reckless text-[24px] text-lg font-medium text-darkPink transition-opacity duration-700 ease-in-out xl:leading-tight ${
          submitted ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <p className="pb-2 text-2xl text-center lg:text-left">Thank you!</p>
        <p className="pb-5 text-2xl text-center lg:text-left">Your form has been submitted</p>
        {/* <a
          href="/files/herself-health-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-dusty-indego"
        >
          [Click here to download your free guide to feeling your best]
        </a>
        <p className="py-5">
          We'll reach out soon to answer any questions and help you schedule your first visit.
        </p>

        <p className="text-xl">Prefer to call now?</p>
        <a className="text-xl" href="tel:8882901209">
          (888) 290-1209
        </a> */}
      </div>

      {/* error message */}
      {error && (
        <div className="absolute top-0 left-0 right-0 px-4 py-3 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}

      {/* form container */}
      <form
        onSubmit={handleSubmit}
        className={`w-full transition-opacity duration-700 ease-in-out ${
          submitted ? 'pointer-events-none opacity-0' : 'opacity-100'
        } grid md:grid-cols-2 md:gap-x-[48px]`}
      >
        {fields.map(({ id, label, type, placeholder, autoComplete }) => (
          <div key={id}>
            {/* input label */}
            <label
              htmlFor={id}
              className="mb-1 block font-untitled text-[18px] font-normal text-[#1D2534]"
            >
              {label}
            </label>

            {/* input field */}
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="mb-4 w-full rounded-[5px] border border-darkPink px-[10px] py-[8px] font-untitled text-[18px] font-normal placeholder:text-pink"
              value={formData[id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`mb-2 mt-2 w-full rounded-[10px] p-[10px] text-[22px] transition-colors md:col-span-2 ${
            isLoading
              ? 'cursor-not-allowed bg-gray-400 text-gray-600'
              : 'bg-purple text-white hover:bg-purple/90'
          }`}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
