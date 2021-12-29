import React from 'react'
import styled from 'styled-components'  

function Section({title, description, backgroundimage, leftButton, rightButton}) {
    return (
        <Wrap bgImage={backgroundimage}>
            <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
            </ItemText>
            <Buttons>
                {/* we need to wrap buttons together so buttongroup */}
                <ButtonGroup>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                    {/* if right button exist then only shoe it otherwise hide it */}
                    {rightButton && 
                    <RightButton>
                        {rightButton}
                    </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    backgrouund-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    // to make the buttons and text model in column 
    display: flex;
    flex-direction: column;
    // after flex direction is done column justify and align functionality flips and justify is used for verticle alignment and align item is used for horizontal alignment
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    // to make buttons left and right we use flex
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 786px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

// inheriting leftbutton properties 
const RightButton = styled(LeftButton)`
    color: black;
    background-color: white;
    opacity: 0.65;
`

const DownArrow = styled.img`
    // margin-top: 20px;
    overflow-x: hidden;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`