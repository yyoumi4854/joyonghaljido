import PaginationArticle from './PaginationArticle'
import styled from "styled-components";


const PaginationTest = () => {
    return (
      <>
        <EmptySpace/>
        <SelectStyle>
          <PaginationArticle/>
        </SelectStyle>
      </>
    );
}

const EmptySpace =  styled.div`
  height:110px;
`

const SelectStyle = styled.div`
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    
    color: #444;
    background-color: #fff;
    
    padding: .6em 1.4em .5em .8em;
    margin: 0;
    
    border: 1px solid #aaa;
    border-radius: .5em;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  }

  select:hover {
    border-color: #888;
  }

  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`

export default PaginationTest;