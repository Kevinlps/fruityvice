import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: #f1e7fe;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto 20px auto;

  @media (max-width: 600px) {
    width: 80%;
  }
`

export const CryptoLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const CryptoTitle = styled.span`
  font-family: 'bold';
`

export const Price = styled.span`
  margin-left: auto;
  font-family: 'bold';
`

export const InfoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`
