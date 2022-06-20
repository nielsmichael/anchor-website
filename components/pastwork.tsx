import React from 'react'
import Image from 'next/image'
import { ProjectBackground, ProjectContainer, ProjectLeft, ProjectRight } from './project'
import { TileBackground, TileContent, TileWrapper, Tile } from './tile'

const PastWork = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <ProjectBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <div>Home renovations on 412 Lee Ave.</div>
              <div className="text-3xl md:text-4xl font-semibold">
                Yearly Income: $16,200
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image
                src="/assets/properties/"
                layout="responsive"
                width={840}
                height={1640}
                alt="Image alt"
              />
            </ProjectRight>
          </ProjectContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <div>Home renovations on 412 Lee Ave.</div>
              <div className="text-3xl md:text-4xl font-semibold">
                Yearly Income: $16,200
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image
                src="/assets/properties/"
                layout="responsive"
                width={840}
                height={1640}
                alt="Image alt"
              />
            </ProjectRight>
          </ProjectContainer>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <ProjectContainer>
            <ProjectLeft progress={progress}>
              <div>Home renovations on 412 Lee Ave.</div>
              <div className="text-3xl md:text-4xl font-semibold">
                Yearly Income: $16,200
              </div>
            </ProjectLeft>
            <ProjectRight progress={progress}>
              <Image
                src="/assets/properties/"
                layout="responsive"
                width={840}
                height={1640}
                alt="Image alt"
              />
            </ProjectRight>
          </ProjectContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default PastWork
