import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ReviewBody = ({ review }) => {
	const rating = (number) => {
		let container = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= number) {
				container.push(
					<BsFillStarFill
						key={i}
						size={13}
						color='#df2189'
						className='reviews__body__contents__info__rating__icon'
					/>
				);
			} else {
				container.push(
					<BsStar
						key={i}
						size={13}
						color='#df2189'
						className='reviews__body__contents__info__rating__icon'
					/>
				);
			}
		}
		return container;
	};
	return (
		<div className='col-4 p-15'>
			<div className='reviews__body animation'>
				<div className='reviews__body__contents'>
					<div className='reviews__body__contents__image'>
						<LazyLoadImage src={review.image} alt={review.image} />
					</div>
					<div className='reviews__body__contents__info'>
						<div className='reviews__body__contents__info__name'>
							{review.name}
						</div>
						<div className='reviews__body__contents__info__rating'>
							{rating(review.stars)}
						</div>
						<div className='reviews__body__contents__info__comment'>
							{review.comment}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ReviewBody;
