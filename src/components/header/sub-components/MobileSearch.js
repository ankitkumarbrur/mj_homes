import React from "react";
import { useToasts } from "react-toast-notifications";

const MobileSearch = () => {
	const { addToast } = useToasts();
	return (
		<div className="offcanvas-mobile-search-area">
			<form
				action="/shop-grid-standard"
				method="get"
				onSubmit={(e) => {
					if (document.getElementsByName("q")[1].value === "") {
						e.preventDefault();
						addToast("Enter a keyword to search for products", {
							appearance: "warning",
							autoDismiss: true,
						});
					}
				}}
			>
				<input name="q" type="text" placeholder="Search ..." />
				<button type="submit">
					<i className="fa fa-search" />
				</button>
			</form>
		</div>
	);
};

export default MobileSearch;
