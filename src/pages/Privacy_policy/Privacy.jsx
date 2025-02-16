import './Privacy.css'

import { Helmet } from 'react-helmet-async';

const Privacy = () => {

  return (
    
    <main className='d-flex justify-content-center'>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet> 

      <div className='terms d-flex flex-column p-3 justify-content-center align-items-center'>
        <p >
        Your privacy is important to us. This policy explains how we collect, use, and protect your data when you use aminetriki site.
       </p>
<b>1. Data We Collect </b>
<p>
Non-personal data such as IP addresses, browser type, pages visited.

Cookies to enhance your experience.
</p>

<b>2. How We Use Your Data</b>
<p>
To improve our services.

To display relevant ads through Google Ads and other companies.
</p>
<b>3. Data Sharing</b>
<p>
We share your data only with service providers such as Google Ads.
</p>
<b>4. Cookies</b>
<p>
We use cookies to collect data. You can disable cookies from your browser settings.
</p>

<b>5. Security</b>
<p>
We take security measures to protect your data, but no system is 100% secure.
        </p>
<b>6. Changes</b>
<p>
We may update this privacy policy from time to time.
        </p>
<b>7. Contact Us</b>
<p>
For any privacy-related inquiries, contact us at [contact@aminetriki.com.tn].
        </p>
      </div>

    </main>
    
  )
}

export default Privacy