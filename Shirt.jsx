import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        castShadow
        receiveShadow
      >
       
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            anisotropy={16}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]} // Example position
            rotation={[0, 0, 0]} // Example rotation
            scale={0.15} // Example scale
            map={logoTexture} // Apply the same texture as decal
            depthTest={false} // Disable depth testing
            depthWrite={true} // Enable writing to depth buffer
            opacity={0.75} // Set opacity to 75%
            blendMode="NormalBlending" // Blend mode
            anisotropy={16} // Example anisotropy for texture quality
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
