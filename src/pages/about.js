import * as React from 'react';
import Layout from '../components/layout';

const Aboutpage = () => {
    const formElement = React.useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(formElement.current)
        fetch('/contact', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
          alert(error))
      }
      


    return <Layout>
        <h1>About Page</h1>
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field" ref={formElement}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Role:
                    <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select>
                </label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <div data-netlify-recaptcha="true"></div>

            <p>
                <button type="submit" onClick={handleSubmit}>Send</button>
            </p>
        </form>
    </Layout>
}
export default Aboutpage;