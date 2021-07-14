import * as React from 'react';
import Layout from '../components/layout';

const Aboutpage = () => {
    return <Layout>
        <h1>About Page</h1>
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
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
                <button type="submit">Send</button>
            </p>
        </form>
    </Layout>
}
export default Aboutpage;