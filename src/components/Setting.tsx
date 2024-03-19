import {
	MeshReflectorMaterial,
	OrbitControls,
	PerspectiveCamera,
	Stage,
} from '@react-three/drei';
import { Ring } from './Ring';
import React, { useState, useEffect, Suspense } from 'react';

const isMobileScreen = () => window.innerWidth <= 768;
const Setting = () => {
	const [cameraPosition, setCameraPosition] = useState<
		[number, number, number]
	>([0, 4, 14]);

	useEffect(() => {
		const handleResize = () => {
			if (isMobileScreen()) {
				setCameraPosition([0, 3, 7]);
			} else {
				setCameraPosition([0, 4, 14]);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<mesh>
			<Stage environment='forest' intensity={1} castShadow={true}></Stage>
			<Suspense fallback={null}>
				<Ring />
			</Suspense>
			<meshNormalMaterial />
			<mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
				<planeGeometry args={[200, 400]} />
				<MeshReflectorMaterial
					blur={[800, 800]}
					resolution={2048}
					mixBlur={2}
					mixStrength={40}
					roughness={1}
					depthScale={0.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={2}
					color='#1b1b2b'
					metalness={0.8}
					mirror={0}
				/>
			</mesh>
			<PerspectiveCamera makeDefault position={cameraPosition} />
			<OrbitControls
				minAzimuthAngle={undefined}
				maxAzimuthAngle={undefined}
				minPolarAngle={0}
				maxPolarAngle={Math.PI / 2 - 0.1}
				enableZoom={true}
			/>
			<directionalLight position={[0, 10, 0]} intensity={2} castShadow />
		</mesh>
	);
};

export default Setting;
