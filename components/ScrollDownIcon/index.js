import React from 'react';
import * as S from './styles';

export const ScrollDownIcon = React.forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <S.arrowFirst />
            <S.arrowSecond />
        </div>
    );
});

ScrollDownIcon.displayName = 'ScrollDownIcon';