import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Support() {

    useEffect(() => {
    document.title = 'OBTION | Support';
  }, []); 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Your request has been sent. Please wait till our team contacts you!");
        reset();
    };

    return (
        <section className="support-wrapper">
            <div className="support-container">
                <h1 className="support-head">SUPPORT</h1>
                <h2>Get in Touch with Obtion</h2><br />
                <p className="support-desc">
                    Have a question or need assistance? We're here to help!
                    <br />
                    Submit your query below, and our team will get back to you within 2-3 business days.
                </p>

                <div className="support-items">
                    <div className="support-item">
                        <h1><FontAwesomeIcon icon={faMapMarkerAlt} /></h1>
                        <p>Chitkara University, Punjab</p>
                    </div>
                    <div className="support-item">
                        <h1><FontAwesomeIcon icon={faPhoneAlt} /></h1>
                        <p>+91 12345-67890</p>
                    </div>
                    <div className="support-item">
                        <h1><FontAwesomeIcon icon={faEnvelope} /></h1>
                        <p><a className="support-mail" href="mailto:support@obtion.co.in">support@obtion.co.in</a></p>
                    </div>
                </div>

                <form className="support-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="support-form-head">Get in touch with us!</h1>

                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name", { required: true })}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />

                    <input
                        type="text"
                        placeholder="Write a Subject"
                        {...register("subject", { required: true })}
                    />

                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        {...register("message", { required: true })}
                    ></textarea>
                    <br />
                    <button type="submit" name="submit" value="Submit" className="btn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Support;