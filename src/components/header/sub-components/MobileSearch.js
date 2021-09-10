import React from "react";

const MobileSearch = () => {
	return (
		<div className="offcanvas-mobile-search-area">
			<form action="/shop-grid-standard">
				<input name="q" type="text" placeholder="Search ..." />
				<button type="submit">
					<i className="fa fa-search" />
				</button>
			</form>
		</div>
	);
};

export default MobileSearch;
