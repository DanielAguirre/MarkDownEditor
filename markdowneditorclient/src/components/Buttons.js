import styled from 'styled-components';
import {primary, danger, lightGrey} from '../utilities/colors';

export const PrimaryButton = styled.button`
    background-color: ${primary};
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-stretch: 100%;
    font-weight: 500;
    height: 36px;
    justify-content: center;
    letter-spacing: 1.25px;
    line-height: normal;
    min-width: 64px;
    height: 36px;
    outline-color: rgb(255, 255, 255);
    outline-style: none;
    outline-width: 0px;
`;

export const DangerButton = styled(PrimaryButton)`
    background-color: ${danger};
`;

export const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    background-color: ${lightGrey};
    position: relative;
    top: 2px;
    left: 40%;
`;