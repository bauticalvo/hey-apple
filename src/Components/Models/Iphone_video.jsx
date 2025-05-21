import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Iphone(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/Models/iphone_video.glb')
  const { actions } = useAnimations(animations, group)


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="da5e46d806e244e2be00e3c2e402c138fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="Circle010" position={[7.94, 61.852, 6.767]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={3.777}>
                <mesh name="Circle010_black002_0" geometry={nodes.Circle010_black002_0.geometry} material={materials['black.002']} />
              </group>
              <group name="Circle011" position={[7.825, 71.855, 25.405]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={1.701}>
                <mesh name="Circle011_black002_0" geometry={nodes.Circle011_black002_0.geometry} material={materials['black.002']} />
              </group>
              <group name="Circle012" position={[7.924, 51.987, 25.288]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={2.424}>
                <mesh name="Circle012_black002_0" geometry={nodes.Circle012_black002_0.geometry} material={materials['black.002']} />
              </group>
              <group name="Circle013" position={[-4.604, 78.558, 7.249]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={1.643}>
                <mesh name="Circle013_black002_0" geometry={nodes.Circle013_black002_0.geometry} material={materials['black.002']} />
              </group>
              <group name="Cube014" position={[-0.328, 2.26, 0.199]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube014_apple_logo001_0" geometry={nodes.Cube014_apple_logo001_0.geometry} material={materials['apple_logo.001']} />
                <mesh name="Cube014_basecolor001_0" geometry={nodes.Cube014_basecolor001_0.geometry} material={materials['basecolor.001']} />
                <mesh name="Cube014_black002_0" geometry={nodes.Cube014_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cube014_glass002_0" geometry={nodes.Cube014_glass002_0.geometry} material={materials['glass.002']} />
                <mesh name="Cube014_metaL001_0" geometry={nodes.Cube014_metaL001_0.geometry} material={materials['metaL.001']} />
                <mesh name="Cube014_metalframe002_0" geometry={nodes.Cube014_metalframe002_0.geometry} material={materials['metalframe.002']} />
                <mesh name="Cube014_screen001_0" geometry={nodes.Cube014_screen001_0.geometry} material={materials.Video} />
              </group>
              <group name="Cube015" position={[0.034, -79.376, -0.696]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube015_Material001_0" geometry={nodes.Cube015_Material001_0.geometry} material={materials['Material.001']} />
              </group>
              <group name="Cube016" position={[-1.412, 78.525, -2.209]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cube016_black002_0" geometry={nodes.Cube016_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cube016_glass002_0" geometry={nodes.Cube016_glass002_0.geometry} material={materials['glass.002']} />
              </group>
              <group name="Cube017" position={[-0.395, -6.001, -38.303]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.482}>
                <mesh name="Cube017_black002_0" geometry={nodes.Cube017_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cube017_metalframe002_0" geometry={nodes.Cube017_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Cylinder018" position={[5.382, 71.83, 25.412]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="Cylinder018_black002_0" geometry={nodes.Cylinder018_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cylinder018_metalframe002_0" geometry={nodes.Cylinder018_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Cylinder019" position={[5.382, 51.985, 25.276]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="Cylinder019_black002_0" geometry={nodes.Cylinder019_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cylinder019_metalframe002_0" geometry={nodes.Cylinder019_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Cylinder020" position={[5.382, 61.853, 6.769]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="Cylinder020_black002_0" geometry={nodes.Cylinder020_black002_0.geometry} material={materials['black.002']} />
                <mesh name="Cylinder020_metalframe002_0" geometry={nodes.Cylinder020_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Cylinder021" position={[2.335, 75.921, 6.84]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Cylinder021_Material_0" geometry={nodes.Cylinder021_Material_0.geometry} material={materials['Material.002']} />
                <mesh name="Cylinder021_metalframe002_0" geometry={nodes.Cylinder021_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Cylinder022" position={[0.848, 47.824, 6.803]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={3.346}>
                <mesh name="Cylinder022_black002_0" geometry={nodes.Cylinder022_black002_0.geometry} material={materials['black.002']} />
              </group>
              <group name="len11001" position={[5.382, 71.83, 25.412]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="len11001_glass002_0" geometry={nodes.len11001_glass002_0.geometry} material={materials['glass.002']} />
              </group>
              <group name="len22001" position={[5.382, 61.853, 6.769]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="len22001_glass002_0" geometry={nodes.len22001_glass002_0.geometry} material={materials['glass.002']} />
              </group>
              <group name="len33001" position={[5.382, 51.985, 25.276]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[8.288, 8.288, 2.595]}>
                <mesh name="len33001_glass002_0" geometry={nodes.len33001_glass002_0.geometry} material={materials['glass.002']} />
              </group>
              <group name="Object003" position={[-0.191, -80.599, -0.721]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Object003_gray001_0" geometry={nodes.Object003_gray001_0.geometry} material={materials['gray.001']} />
              </group>
              <group name="Plane011" position={[5.841, 63.502, 15.678]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={19.937}>
                <mesh name="Plane011_basecolor001_0" geometry={nodes.Plane011_basecolor001_0.geometry} material={materials['basecolor.001']} />
                <mesh name="Plane011_glass002_0" geometry={nodes.Plane011_glass002_0.geometry} material={materials['glass.002']} />
              </group>
              <group name="Plane012" position={[5.367, 51.214, 0.79]} rotation={[-Math.PI / 4, 1.571, 0]} scale={0.394}>
                <mesh name="Plane012_metalframe002_0" geometry={nodes.Plane012_metalframe002_0.geometry} material={materials['metalframe.002']} />
              </group>
              <group name="Plane013" position={[-0.219, -81.443, 11.407]} rotation={[Math.PI / 2, 0, -2.356]} scale={1.058}>
                <mesh name="Plane013_metaL001_0" geometry={nodes.Plane013_metaL001_0.geometry} material={materials['metaL.001']} />
              </group>
              <group name="Plane014" position={[-0.219, -81.443, -20.018]} rotation={[Math.PI / 2, 0, -2.356]} scale={1.058}>
                <mesh name="Plane014_metaL001_0" geometry={nodes.Plane014_metaL001_0.geometry} material={materials['metaL.001']} />
              </group>
              <group name="Sphere010" position={[7.297, 71.865, 25.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.557, 1.255, 1.255]}>
                <mesh name="Sphere010_lensinglass_0" geometry={nodes.Sphere010_lensinglass_0.geometry} material={materials.lensinglass} />
              </group>
              <group name="Sphere011" position={[7.337, 51.995, 25.291]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.952, 2.145, 2.145]}>
                <mesh name="Sphere011_lensinglass_0" geometry={nodes.Sphere011_lensinglass_0.geometry} material={materials.lensinglass} />
              </group>
              <group name="Sphere012" position={[7.375, 61.87, 6.748]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.641, 2.918, 2.918]}>
                <mesh name="Sphere012_lensinglass_0" geometry={nodes.Sphere012_lensinglass_0.geometry} material={materials.lensinglass} />
              </group>
              <group name="Sphere013" position={[-4.094, 78.567, 7.254]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.538, 1.212, 1.212]}>
                <mesh name="Sphere013_lensinglass_0" geometry={nodes.Sphere013_lensinglass_0.geometry} material={materials.lensinglass} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Models/iphone_video.glb')
