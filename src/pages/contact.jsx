import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import mailgun from 'mailgun.js';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const handleSubmit = (e) => {
	e.preventDefault();
	const name = e.target.elements.name.value;
	const email = e.target.elements.email.value;
	const message = e.target.elements.message.value;
	const mailtoLink = `mailto:${INFO.main.email}?subject=New Message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
	window.location.href = mailtoLink;
  };

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>

						<div className="contact-form-container" onSubmit={handleSubmit}>
						<form className="contact-form">
							<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" name="name" placeholder="Enter your name" required />
							</div>
							<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" name="email" placeholder="Enter your email" required />
							</div>
							<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
							</div>
							<button type="submit" className="submit-btn">Submit</button>
						</form>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
