import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

const MobileSearch = () => {
	const { addToast } = useToasts();
	const [search, setsearch] = useState("")
	return (
		<div className="offcanvas-mobile-search-area">
			<form
				action={"/shop-grid-standard?=" + search}
				method="get"
				onSubmit={(e) => {
					if (search == "") {
						e.preventDefault();
						addToast("Enter a keyword to search for products", {
							appearance: "warning",
							autoDismiss: true,
						});
					}



				}}
			>
				<input name="q" type="text" placeholder="Search ..." onChange={(e) => setsearch(e.target.value)} />
				<button type="submit">
					<i className="fa fa-search" />
				</button>
			</form>
		</div>
	);
};

export default MobileSearch;
