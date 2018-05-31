import React from 'react';



const Recommendations = (props) => {

	const recommendations =props.dummyRecommendationData;
  const ListItemsRecommendation = recommendations.map((recommendation, index) =>
    <li key={recommendation.id}>{recommendation.name} + {recommendation.profession}</li> 
  )

	return (
		<div> 
			<ul>{ListItemsRecommendation}</ul>
		</div>
	)
}



export default Recommendations