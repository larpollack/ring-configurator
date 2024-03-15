import { createContext, useContext, ReactNode, useState } from 'react';

export type ShapeOption = 'Round' | 'Oval' | 'Emerald' | 'Asscher';

export type BandOption = 'gold' | 'rose_gold' | 'white_gold';

export type StoneOption =
	| 'diamond_pure'
	| 'diamond_pink'
	| 'diamond_yellow'
	| 'diamond_blue'
	| 'diamond_black';

interface ConfiguratorContextType {
	shape: ShapeOption;
	setShape: (shape: ShapeOption) => void;
	bandColor: BandOption;
	setBandColor: (bandColor: BandOption) => void;
	stoneColor: StoneOption;
	setStoneColor: (stoneColor: StoneOption) => void;
	hasHalo: boolean;
	setHasHalo: (hasHalo: boolean) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(
	undefined
);

const defaultSettings = {
	shape: 'Round' as ShapeOption,
	bandColor: 'gold' as BandOption,
	stoneColor: 'diamond_pure' as StoneOption,
	hasHalo: false,
};

interface ConfiguratorProviderProps {
	children: ReactNode;
}

const ConfiguratorProvider: React.FC<ConfiguratorProviderProps> = ({
	children,
}) => {
	const [shape, setShape] = useState<ShapeOption>(defaultSettings.shape);
	const [bandColor, setBandColor] = useState<BandOption>(
		defaultSettings.bandColor
	);
	const [stoneColor, setStoneColor] = useState<StoneOption>(
		defaultSettings.stoneColor
	);
	const [hasHalo, setHasHalo] = useState<boolean>(defaultSettings.hasHalo);

	const value = {
		shape,
		setShape,
		bandColor,
		setBandColor,
		stoneColor,
		setStoneColor,
		hasHalo,
		setHasHalo,
	};
	return (
		<ConfiguratorContext.Provider value={value}>
			{children}
		</ConfiguratorContext.Provider>
	);
};

export const useConfigurator = (): ConfiguratorContextType => {
	const context = useContext(ConfiguratorContext);
	if (context === undefined) {
		throw new Error(
			'useConfigurator must be used within a ConfiguratorProvider'
		);
	}
	return context;
};

export default ConfiguratorProvider;
