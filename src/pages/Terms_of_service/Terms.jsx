import './Terms.css'

import { Helmet } from 'react-helmet-async';

const Terms = () => {

  return (
    
    <main className='d-flex justify-content-center'>
      <Helmet>
        <title>Terms of Service</title>
      </Helmet> 
      <div className='terms d-flex flex-column p-3 justify-content-center align-items-center'>
        <p >
        Welcome to aminetriki site

By using this website, you agree to comply with these terms and conditions. If you do not agree to any of these terms, please do not use the website.
</p>
<b>1. Use of the Website </b>
<p>
You must not use the website for any illegal or prohibited purposes.

You may not attempt to hack the website or exploit any security vulnerabilities.

The site administration reserves the right to modify or discontinue any service at any time.
</p>

<b>2. Content and Services</b>
<p>
The website and services are provided “as is” without any warranties.

We are not responsible for any damages resulting from the use of the provided tools or services.
</p>
<b>3. Changes to Terms</b>
<p>
These terms may be modified at any time, and updates will be posted on this page.
</p>
<b>4. Governing Laws</b>
<p>
These terms are governed by the laws of the European Union, and any disputes shall be settled through the competent courts.
</p>
<b>5. Contact Us </b>
<p>
If you have any questions, please contact us at [contact@aminetriki.com.tn].
        </p>
      </div>

    </main>
    
  )
}

export default Terms