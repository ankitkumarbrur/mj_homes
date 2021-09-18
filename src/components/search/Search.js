import React, { Fragment, useEffect } from "react";
import { useToasts } from "react-toast-notifications";

export default () => {
	const { addToast } = useToasts();
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
				onSubmit={(e) => {
					if (document.getElementsByName("q")[1].value == "") {
						e.preventDefault();
						console.log("hello");
						addToast("Enter a keyword to search for products", {
							appearance: "warning",
							autoDismiss: true,
						});
					} else {
						console.log("no hello");
					}
				}}
			>
				<input
					className="input-search"
					placeholder="Start Typing"
					name="q"
					type="text"
					formNoValidate
				/>

				<button type="submit" className="input-search-icon">
					<i className="pe-7s-search" />
				</button>
			</form>
		</div>
	);
};
