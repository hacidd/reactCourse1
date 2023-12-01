import { useState } from 'react'; 

import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept.jsx';

import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx';
<link rel="stylesheet" href="" />
// function CoreConcept(props) {
// 	return (
// 	<li>
// 		<img src={props.image} alt={props.title} />
// 		<h3>{props.title}</h3>
// 		<p>{props.description}</p>
// 	</li>
// 	);
// }

function App() {
	const [ selectedTopic, setSelectedTopic ] = useState('Please click a button')

	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton)
		// console.log(selectedTopic)
	
	 }

	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
				<h2>Core Concepts</h2>
				<ul>
					<CoreConcept 
					title={CORE_CONCEPTS[0].title}
					description={CORE_CONCEPTS[0].description}
					image={CORE_CONCEPTS[0].image}
					/>
					<CoreConcept {...CORE_CONCEPTS[1]}
					/>
					<CoreConcept {...CORE_CONCEPTS[2]}
					/>
					<CoreConcept {...CORE_CONCEPTS[3]}
					/>
					

				</ul>

				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
						<TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
						<TabButton onSelect={() => handleSelect('State')}>State</TabButton>
					</menu>
					{selectedTopic}

				</section>
			</main>
		</div>
	);
}

export default App

