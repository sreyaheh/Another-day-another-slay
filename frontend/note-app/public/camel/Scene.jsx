/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/camel/scene.glb 
Author: P3dro nixye (https://sketchfab.com/pedrobhz45)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/camelo-minecraft-120-a271af3c418847bbbc96f57db2fbb114
Title: Camelo Minecraft 1.20
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.031, 1.625, -0.563]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} position={[0.031, -1.625, 0.563]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} position={[0.031, -1.625, 0.563]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_0} position={[0.031, -1.625, 0.563]} />
      </group>
      <group position={[-0.188, 2.75, -1.156]} rotation={[0, 0, -Math.PI / 4]}>
        <mesh geometry={nodes.Object_13.geometry} material={materials.material_0} position={[0.188, -2.75, 1.156]} />
      </group>
      <group position={[0.188, 2.75, -1.156]} rotation={[0, 0, Math.PI / 4]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.material_0} position={[-0.188, -2.75, 1.156]} />
      </group>
      <group position={[0, 1.625, 0.031]}>
        <mesh geometry={nodes.Object_19.geometry} material={materials.material_0} position={[0, -1.625, -0.031]} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.material_0} position={[0, -1.625, -0.031]} />
      </group>
      <group position={[-0.281, 1.313, -0.625]}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.material_0} position={[0.281, -1.313, 0.625]} />
      </group>
      <group position={[0.281, 1.313, -0.594]}>
        <mesh geometry={nodes.Object_27.geometry} material={materials.material_0} position={[-0.281, -1.313, 0.594]} />
      </group>
      <group position={[-0.281, 1.313, 0.656]}>
        <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} position={[0.281, -1.313, -0.656]} />
      </group>
      <group position={[0.281, 1.313, 0.656]}>
        <mesh geometry={nodes.Object_33.geometry} material={materials.material_0} position={[-0.281, -1.313, -0.656]} />
      </group>
      <group position={[0, 1.813, 0.875]} rotation={[-0.087, 0, 0]}>
        <mesh geometry={nodes.Object_36.geometry} material={materials.material_0} position={[0, -1.813, -0.875]} />
      </group>
      <group position={[0, 1.625, 0.031]}>
        <mesh geometry={nodes.Object_39.geometry} material={materials.material_0} position={[0, -1.625, -0.031]} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.material_0} position={[0, -1.625, -0.031]} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.material_0} position={[0, -1.625, -0.031]} />
      </group>
      <group position={[0, 1.625, -0.563]}>
        <mesh geometry={nodes.Object_46.geometry} material={materials.material_0} position={[0, -1.625, 0.563]} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.material_0} position={[0, -1.625, 0.563]} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.material_0} position={[0, -1.625, 0.563]} />
      </group>
      <group position={[-0.188, 2.563, -1.625]}>
        <mesh geometry={nodes.Object_53.geometry} material={materials.material_0} position={[0.188, -2.563, 1.625]} />
      </group>
      <group position={[0.188, 2.563, -1.625]}>
        <mesh geometry={nodes.Object_56.geometry} material={materials.material_0} position={[-0.188, -2.563, 1.625]} />
      </group>
      <group position={[0, 2.531, -1.594]}>
        <mesh geometry={nodes.Object_59.geometry} material={materials.material_0} position={[0, -2.531, 1.594]} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.material_0} position={[0, -2.531, 1.594]} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.material_0} position={[0, -2.531, 1.594]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
