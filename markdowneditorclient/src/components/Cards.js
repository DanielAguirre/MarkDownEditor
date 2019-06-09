import styled from '';
import { transition, black } from '../utilities';

export const Card = styled.div`
    background: white;
    border-radius: 5px;
    padding: 15px;
    /* color:${black} */
    max-width: 230px;
    margin: 0 auto;
    
    ${transition({
        property: 'box-shadow'
    })};
    
`;