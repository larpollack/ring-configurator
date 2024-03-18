import React from 'react';
import {
	useConfigurator,
	ShapeOption,
	StoneOption,
	BandOption,
} from '../contexts/Configurator';

const CustomizationPanel: React.FC = () => {
	const {
		shape,
		setShape,
		bandColor,
		setBandColor,
		stoneColor,
		setStoneColor,
		hasHalo,
		setHasHalo,
		hasAccents,
		setHasAccents,
		hasSideStones,
		setHasSideStones,
	} = useConfigurator();

	return (
		<div className='bg-violet-300/60 p-2 rounded-md'>
			<label>
				Stone Shape:&nbsp;
				<div className='flex space-x-2'>
					<button onClick={() => setShape('Round' as ShapeOption)}>
						<img
							src='round.png'
							alt='Round'
							className={`h-12 w-12 ${
								shape === 'Round' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
					<button onClick={() => setShape('Oval' as ShapeOption)}>
						<img
							src='oval.png'
							alt='Oval'
							className={`h-12 w-12 ${
								shape === 'Oval' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
					<button onClick={() => setShape('Emerald' as ShapeOption)}>
						<img
							src='emerald.png'
							alt='Emerald'
							className={`h-12 w-12 ${
								shape === 'Emerald' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
					<button onClick={() => setShape('Asscher' as ShapeOption)}>
						<img
							src='asscher.png'
							alt='Asscher'
							className={`h-12 w-12 ${
								shape === 'Asscher' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
				</div>
			</label>
			<br />
			<label>
				Band Color:&nbsp;
				<div className='flex space-x-4'>
					<button onClick={() => setBandColor('gold' as BandOption)}>
						<img
							src='gold.jpeg'
							alt='Gold'
							className={`h-10 w-10 ${
								bandColor === 'gold' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
					<button onClick={() => setBandColor('rose_gold' as BandOption)}>
						<img
							src='rose-gold.jpeg'
							alt='Rose Gold'
							className={`h-10 w-10 ${
								bandColor === 'rose_gold' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>

					<button onClick={() => setBandColor('white_gold' as BandOption)}>
						<img
							src='white-gold.jpeg'
							alt='White Gold'
							className={`h-10 w-10 ${
								bandColor === 'white_gold' ? 'ring-2 ring-black' : ''
							}`}
						/>
					</button>
				</div>
			</label>
			<br />
			<label>
				Stone Color:&nbsp;
				<div className='flex space-x-2'>
					<button
						className={`h-8 w-8 rounded-full ${
							stoneColor === 'diamond_pure' ? 'ring-2 ring-black' : ''
						}`}
						style={{ backgroundColor: '#ffffff' }}
						onClick={() => setStoneColor('diamond_pure' as StoneOption)}
					></button>
					<button
						className={`h-8 w-8 rounded-full ${
							stoneColor === 'diamond_pink' ? 'ring-2 ring-black' : ''
						}`}
						style={{ backgroundColor: '#ff69b4' }}
						onClick={() => setStoneColor('diamond_pink' as StoneOption)}
					></button>
					<button
						className={`h-8 w-8 rounded-full ${
							stoneColor === 'diamond_yellow' ? 'ring-2 ring-black' : ''
						}`}
						style={{ backgroundColor: '#ffff00' }}
						onClick={() => setStoneColor('diamond_yellow' as StoneOption)}
					></button>
					<button
						className={`h-8 w-8 rounded-full ${
							stoneColor === 'diamond_blue' ? 'ring-2 ring-black' : ''
						}`}
						style={{ backgroundColor: '#0000ff' }}
						onClick={() => setStoneColor('diamond_blue' as StoneOption)}
					></button>
					<button
						className={`h-8 w-8 rounded-full ${
							stoneColor === 'diamond_black' ? 'ring-2 ring-black' : ''
						}`}
						style={{ backgroundColor: '#000000' }}
						onClick={() => setStoneColor('diamond_black' as StoneOption)}
					></button>
				</div>
			</label>
			<br />
			<label>
				Add Hidden Halo?&nbsp;
				<input
					type='checkbox'
					checked={hasHalo}
					onChange={(e) => setHasHalo(e.target.checked)}
				/>
				&nbsp;Yes
			</label>
			<br />
			<label>
				Add Side Stones?&nbsp;
				<input
					type='checkbox'
					checked={hasSideStones}
					onChange={(e) => setHasSideStones(e.target.checked)}
				/>
				&nbsp;Yes
			</label>
			<br />
			<label>
				Add Diamond Accents?&nbsp;
				<input
					type='checkbox'
					checked={hasAccents}
					onChange={(e) => setHasAccents(e.target.checked)}
				/>
				&nbsp;Yes
			</label>
		</div>
	);
};

export default CustomizationPanel;
