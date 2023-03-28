import Reaction_SVG from './assets/images/icon-reaction.svg'
import data from './data.json'

function App() {
	return (
		<div className='main_container'>
			<main className='responsive_wrapper'>
				<div className='result_card'>
					<h1 className='result_card_title'>Your Result</h1>
					<div className='circle'>
						<p className='large_number'>76</p>
						<p className='small_number'>of 100</p>
					</div>
					<div className='result_text_wrapper'>
						<h2 className='result_title'>Great</h2>
						<div className='result_message'>
							You scored higher than 65% of the people who have taken these tests.
						</div>
					</div>
				</div>
				<div className='summary_card'>
					<div className='summary_card_title'>Summary</div>
					<ul className='summary_result_list'>
						{data.map(item => (
							<li className='summary_result_list_item'>
								<div className='summary_icon_title_wrapper'>
									<div className='summary_result_item_icon'></div>
									<div className='summary_result_item_title'>{item.category}</div>
								</div>
								<div className='summary_result_item_score'>
									{item.score} <span className='summary_result_item_score_light'>/ 100</span>
								</div>
							</li>
						))}
						{/* <li className='summary_result_list_item'>
							<div className='summary_result_item_icon'></div>
							<div className='summary_result_item_title'>Memory</div>
							<div className='summary_result_item_score'>92 / 100</div>
						</li>
						<li className='summary_result_list_item'>
							<div className='summary_result_item_icon'></div>
							<div className='summary_result_item_title'>Verbal</div>
							<div className='summary_result_item_score'>61 / 100</div>
						</li>
						<li className='summary_result_list_item'>
							<div className='summary_result_item_icon'></div>
							<div className='summary_result_item_title'>Visual</div>
							<div className='summary_result_item_score'>72 / 100</div>
						</li> */}
					</ul>
					<button className='summary_button'>Continue</button>
				</div>
			</main>
			<footer className='attribution'>
				Challenge by{' '}
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='https://github.com/RickBr0wn'>Rick Brown</a>.
			</footer>
		</div>
	)
}

export default App
