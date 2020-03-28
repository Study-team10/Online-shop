import React from 'react';
import styled from 'styled-components';

const Star = () => {

    const StarDiv = styled.div`
        position: absolute;
        top: 4px;
        right: 8px;
        color: ${({ theme }) => theme.colors.orange};
        z-index: 900;
    `;

    const SpanStar = styled.span``;

    return (
        <StarDiv>
            <SpanStar>*</SpanStar>
        </StarDiv>
    )
}

export default Star;