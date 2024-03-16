import { Canvas } from '@react-three/fiber';
import Setting from './components/Setting';
import CustomizationPanel from './components/CustomizationPanel';

function App() {
	return (
		<>
			<Canvas dpr={[1, 2]} shadows>
				<color attach='background' args={['#101010']} />
				<fog attach='fog' args={['#101010', 20, 40]} />
				<Setting />
			</Canvas>
			<div className='absolute top-4 left-4'>
				<CustomizationPanel />
			</div>
		</>
	);
}

export default App;
