import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
// import Resume from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

const Resume = () => {

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

  return (
    <React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>
                    <div className="pdf-container">
                        <iframe
                            title="PDF Viewer"
                            src="resume.pdf"
                            width="100%"
                            height="600px"
                        ></iframe>
                    </div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
  )
};

export default Resume;