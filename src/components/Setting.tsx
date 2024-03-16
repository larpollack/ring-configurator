import {
	MeshReflectorMaterial,
	OrbitControls,
	PerspectiveCamera,
	Stage,
	SpotLight,
} from '@react-three/drei';
import { Ring } from './Ring';
import { Suspense } from 'react';

const Setting = () => {
	return (
		<mesh>
			<Stage environment='forest' intensity={0.7} castShadow={true}></Stage>
			<Suspense fallback={null}>
				<Ring />
			</Suspense>
			<meshNormalMaterial />
			<mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
				<planeGeometry args={[180, 180]} />
				<MeshReflectorMaterial
					blur={[800, 800]}
					resolution={2048}
					mixBlur={2}
					mixStrength={40}
					roughness={1.4}
					depthScale={0.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={2}
					color='#101010'
					metalness={0.3}
					mirror={0}
				/>
			</mesh>
			<PerspectiveCamera makeDefault position={[2, 7, 10]} />
			<OrbitControls
				minAzimuthAngle={undefined}
				maxAzimuthAngle={undefined}
				minPolarAngle={0}
				maxPolarAngle={Math.PI / 2 - 0.1}
				enableZoom={true}
			/>
			<directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />
		</mesh>
	);
};

export default Setting;
