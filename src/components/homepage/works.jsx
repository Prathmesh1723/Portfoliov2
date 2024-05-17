import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="tcs.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Tata Consultancy Services</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>

						<div className="work">
							<img
								src="Neu.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Northeastern University</div>
							<div className="work-subtitle">
								Resident Security Officer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
