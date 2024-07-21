import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { VscChevronUp } from 'react-icons/vsc';
import styled from 'styled-components';

const ScrollbtnBg = styled.div`
    position: relative;
`;

const ScrollButton = styled(Button)`
    position: fixed;
    right: 20px;
    bottom: 30px;
    border-width: 2px;
    width: 50px;
    height: 45px;

    &.hide {
        display: none;
        transition: all 2s ease-in-out;
    }
`;

function Scrollbtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrolltop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <ScrollbtnBg>
            <ScrollButton 
                id='scroll_btn' 
                className={!isVisible ? 'hide' : ''} 
                variant="outline-warning" 
                onClick={scrolltop}
            >
                <VscChevronUp />
            </ScrollButton>
        </ScrollbtnBg>
    );
}

export default Scrollbtn;

