import React from 'react'
import { ProjectBackground } from './project'
import { TileBackground, TileContent, TileWrapper, Tile } from './tile'

const PastWork = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground><ProjectBackground /></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <span className="text-9xl">Foo {progress}</span>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <span className="text-9xl">Another Foo {progress}</span>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <span className="text-9xl">You guessed it {progress}</span>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
)

export default PastWork
