import React, { useContext } from 'react'
import styled from 'styled-components';
import ReactMarkdown from 'markdown-to-jsx';
import { EditorContext } from '../Context';

const Preview = () => {
    const {state} = useContext(EditorContext)
    const {actualFile} = state;

    return (
        <PreviewWrapper>
            <TitleWrapper>Preview</TitleWrapper>
            <MarkdowPreviewnWrapper>
                <ReactMarkdown>{actualFile.content}</ReactMarkdown> 
            </MarkdowPreviewnWrapper>
        </PreviewWrapper>
    )
}

const PreviewWrapper = styled.div`
    justify-self: stretch;
    text-align: center;
    border-right: 1px solid lightgrey;
    overflow: hidden;
    height:100%;
    width: 45%;
`;

const TitleWrapper = styled.h3`
    margin-top: 12px;
    margin-bottom: 15px;
`;
const MarkdowPreviewnWrapper = styled.div`
    width: 95%;
    height: 85%;
    margin-top: 35px;
    margin-left: 5px;
    border: 1px solid lightgrey;

`;
export default Preview;