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
	} = useConfigurator();

	return (
		<div>
			<label>
				Shape:
				<select
					value={shape}
					onChange={(e) => setShape(e.target.value as ShapeOption)}
				>
					<option value='Round'>Round</option>
					<option value='Oval'>Oval</option>
					<option value='Emerald'>Emerald</option>
					<option value='Asscher'>Asscher</option>
				</select>
			</label>
			<br />
			<label>
				Band Color:
				<select
					value={bandColor}
					onChange={(e) => setBandColor(e.target.value as BandOption)}
				>
					<option value='gold'>Gold</option>
					<option value='rose_gold'>Rose Gold</option>
					<option value='white_gold'>White Gold</option>
				</select>
			</label>
			<br />
			<label>
				Stone Color:
				<select
					value={stoneColor}
					onChange={(e) => setStoneColor(e.target.value as StoneOption)}
				>
					<option value='diamond_pure'>Diamond</option>
					<option value='diamond_pink'>Pink Diamond</option>
					<option value='diamond_yellow'>Yellow Diamond</option>
					<option value='diamond_blue'>Blue Diamond</option>
					<option value='diamond_black'>Black Diamond</option>
				</select>
			</label>
			<br />
			<label>
				Has Halo:
				<input
					type='checkbox'
					checked={hasHalo}
					onChange={(e) => setHasHalo(e.target.checked)}
				/>
			</label>
		</div>
	);
};

export default CustomizationPanel;
