import { useEffect, useState } from 'react';
import * as S from './styles';
import { isMobileCheck } from '../../util/utilFuncs';

export const CookiesNotice = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileCheck());
        if (localStorage.getItem('cookieConsent') === 'true') setConsented(true);
    }, []);

    const okClickHandler = () => {
        localStorage.setItem('cookieConsent', 'true');
        setConsented(true);
    };

    return (
        <>
            {!consented && (
                <S.Container>
                    <p>{!isMobile && 'To ensure a good user experience, '}
                        {isMobile ? 'T' : 't'}
                    his website makes use of functional cookies.</p>
                    <button onClick={okClickHandler}>Ok</button>
                </S.Container>
            )}
        </>
    );
};
