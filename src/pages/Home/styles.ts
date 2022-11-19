import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 10px;

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`
export const FilterInput = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 30%;
  margin: 0 auto 30px auto;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-family: 'regular';
  font-size: 15px;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 600px) {
    width: 80%;
    font-size: 14px;
  }
`

export const Loading = styled.img`
  display: block;
  width: 48px;
  margin: auto;
`
