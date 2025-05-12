
/**
 * Utility function to submit an email to the HOAGPT waitlist via Google Forms
 */
export async function submitToWaitlist(email: string): Promise<void> {
  // Google Form submission URL
  const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf8DXG7FD1eGCT_3hpNY9XNeJbcRytEH9pHZi5AsInn-C73vw/formResponse';
  
  // Encode the email for the form
  const formData = new URLSearchParams();
  formData.append('entry.1128523808', email);
  
  // Send the form data
  await fetch(formUrl, {
    method: 'POST',
    mode: 'no-cors', // Google Forms requires no-cors mode
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });
}
