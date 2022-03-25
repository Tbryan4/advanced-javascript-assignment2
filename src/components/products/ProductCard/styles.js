import styled from 'styled-components';




const ProductCardStyles  = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    width: 100%;

    .product-card:hover {
        box-shadow: 0px 0px 15px 0px black;
        transition: 0.5s ease-out;
        cursor: pointer;

    }
    
`;

const CardContainer = styled.div `
    margin-top: 2rem;
    padding: 1rem;
    background-color: ${props => props.bc || "#a62121"}; ;
    width: calc(20% - 2rem);
    height: 23rem;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px black;

   
img {
    width: 15rem;
    height: 185.625px;
    filter: drop-shadow(0px 5px 4px black);   
}

img:hover {
    transform: rotate(5deg);
    transition:0.5s ease-in-out;
}
`

const ShoeFlex = styled.div `
    display: flex;
    justify-content: center;

    h3 {
        margin-top: 0.5rem;
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
    }

    p {
        margin-top: 0.4rem;
        color: white;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: center;
    }

    .price {
        font-size: 1.5rem;
    }
`

const IconFlex = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;

    .icon {
        color: gold;
        font-size: 2rem;
        cursor: pointer;
    }

    .icon:hover {
        filter: drop-shadow(0px 3px 0px black);
        transition:0.5s ease-in-out;
    }

    .buy-now:hover {
        background-color: white;
        color: black;
        transition: 0.5s ease-in-out;
    }
`

export {
    ProductCardStyles,
    CardContainer,
    ShoeFlex,
    IconFlex}