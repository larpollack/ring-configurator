import { useState } from 'react';
import CustomizationPanel from './CustomizationPanel';
import { FiMenu, FiX } from 'react-icons/fi';

const PanelWrapper = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	return (
		<>
			<div className='text-[#cdc7ff] ml-2 mb-4 text-3xl font-Italiana'>
				Design Your Custom Ring
			</div>
			<div className='md:hidden z-20 relative'>
				{isMenuOpen ? (
					<FiX className='text-4xl float-right m-2' onClick={toggleMenu} />
				) : (
					<FiMenu className='text-4xl text-[#cdc7ff]' onClick={toggleMenu} />
				)}
			</div>
			<div
				className={` md:block ${
					isMenuOpen ? 'block' : 'hidden'
				} absolute top-14 left-0 w-full h-screen z-10 transform transition-transform duration-300 ease-in-out`}
			>
				<CustomizationPanel />
			</div>
		</>
	);
};

export default PanelWrapper;
