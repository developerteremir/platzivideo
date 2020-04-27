import React from 'react';
import '../assets/styles/Categories.scss';

const Categories = ( {children, title})=> (
	<div className="categories">
		<h3 className="categories__title">{title}</h3>
		{children}
	</div>	
);

export default Categories;