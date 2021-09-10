import React, { Fragment, useEffect } from "react";

export default () => {
	useEffect(() => {
		document
			.getElementsByClassName("control")[0]
			.addEventListener("click", () => {
				document
					.getElementsByClassName("search")[0]
					.classList.add("search-active");
				document.getElementsByTagName("body")[0].classList.add("bod");
				document
					.getElementsByClassName("exp-head")[0]
					.classList.add("search-active");
			});

		document
			.getElementsByClassName("icon-close")[0]
			.addEventListener("click", () => {
				document
					.getElementsByClassName("search")[0]
					.classList.remove("search-active");
				document
					.getElementsByTagName("body")[0]
					.classList.remove("bod");
				document
					.getElementsByClassName("exp-head")[0]
					.classList.remove("search-active");
			});
	});
	return (
		<div className="search">
			<i className="icon-close pe-7s-close"></i>
			<div className="search-input">
				<input
					className="input-search"
					placeholder="Start Typing"
					type="text"
				/>
			</div>
		</div>
	);
};
