import { useState } from 'react'

import { CORE_CONCEPTS } from './data.js'
import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'
;<link rel='stylesheet' href='' />
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
	const [selectedTopic, setSelectedTopic] = useState()

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
						{CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
							Components
						</TabButton>
						<TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
							JSX
						</TabButton>
						<TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
							Props
						</TabButton>
						<TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
							State
						</TabButton>
					</menu>
					{!selectedTopic && <p>Please select a topic.</p>}
					{selectedTopic && (
						<div>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}

export default App

