import React from 'react'
import { TileBackground, TileContent, TileWrapper, Tile } from "./tile";

const PastWork = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => <span>Foo {progress}</span>}
      ></Tile>
    </TileContent>
    <TileContent>Another Foo</TileContent>
    <TileContent>Bar</TileContent>
  </TileWrapper>
);

export default PastWork
