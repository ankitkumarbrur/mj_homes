import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function addGroups(node) {
  return (
    <>
      {node.map((child) =>
        child.type == "Group" ? (
          <group
            position={child.position}
            rotation={child.rotation}
            geometry={child.geometry}
            material={child.material}
            frustumCulled={child.frustumCulled}
            layers={child.layers}
            matrix={child.matrix}
            quaternion={child.quaternion}
            scale={child.scale}
            up={child.up}
            key={child.id}
          >
            {addGroups(child.children)}
          </group>
        ) : (
          <mesh
            position={child.position}
            rotation={child.rotation}
            geometry={child.geometry}
            material={child.material}
            frustumCulled={child.frustumCulled}
            layers={child.layers}
            matrix={child.matrix}
            quaternion={child.quaternion}
            scale={child.scale}
            up={child.up}
            key={child.id}
          >
            {addGroups(child.children)}
          </mesh>
        )
      )}
    </>
  );
}

function Model({nodes}) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  
  return (
    <scene dispose={null}>
      <group ref={ref}> { addGroups(nodes.scene.children) } </group>
    </scene>
  );
  
}

function Loading() {
  return (
    <mesh loading = {true} visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function ThreeD(props) {
  const [content, setContent] = useState(<Loading />)

  useEffect(()=>{
    const loader = new GLTFLoader();
    loader.load(props.url, function (nodes) {
      console.log(nodes)
      setContent(<Model nodes = {nodes}/>);
    },
      function (xhr) {
        // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log('Error: Unable to load 3d Model, try refreshing page');
      })
  }, [])

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        dispose={null}
      >
        <ambientLight dispose={null} intensity={0.7} />
        <spotLight
          dispose={null}
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        {content}
        <Environment preset="city" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={1}
          width={20}
          height={20}
          blur={1.5}
          far={0.8}
        />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </>
  );
}
