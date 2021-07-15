import * as React from 'react';
import Layout from '../components/layout';
import { navigate } from 'gatsby'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const Aboutpage = () => {
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        }).then(() => navigate(form.getAttribute('action'))).catch((error) =>
            alert(error))
    }



    return <Layout>
        <h1>About Page</h1>
        <form name="contact" method="post" action="/about/"
            onSubmit={handleSubmit}
            data-netlify="true" data-netlify-honeypot="bot-field">

            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
            <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
            </p>

            <p>
                <label>Your Name: <input type="text" name="name" onChange={handleChange} /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" onChange={handleChange} /></label>
            </p>
            {/* <p>
                <label>Your Role:
                    <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select>
                </label>
            </p> */}
            <p>
                <label>Message: <textarea name="message" onChange={handleChange}></textarea></label>
            </p>

            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </Layout>
}
export default Aboutpage;