import React, { Fragment, useEffect } from "react";

export default () => {
	useEffect(() => {
		document
			.getElementsByClassName("control")[0]
			.addEventListener("click", () => {
				document.getElementsByTagName("body")[0].classList.add("bod");
				document
					.getElementsByClassName("search")[0]
					.classList.add("search-active");
				document
					.getElementsByClassName("exp-head")[0]
					.classList.add("search-active");
				document.getElementsByClassName("input-search")[0].focus();
			});

		document
			.getElementsByClassName("icon-close")[0]
			.addEventListener("click", () => {
				document
					.getElementsByTagName("body")[0]
					.classList.remove("bod");
				document
					.getElementsByClassName("search")[0]
					.classList.remove("search-active");
				document
					.getElementsByClassName("exp-head")[0]
					.classList.remove("search-active");
			});
	});
	return (
		<div className="search">
			<i className="icon-close pe-7s-close"></i>
			<form
				className="search-input"
				action="/shop-grid-standard"
				method="get"
			>
				<input
					className="input-search"
					placeholder="Start Typing"
					name="q"
					type="text"
				/>

				<button type="submit" className="input-search-icon">
					<i className="pe-7s-search" />
				</button>
			</form>
		</div>
	);
};
