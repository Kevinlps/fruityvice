import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 10px;
`

export const InfoCard = styled.div`
  background-color: #f1e7fe;
  padding: 30px;
  border-radius: 15px;
  width: 30%;
  margin: 15px auto;
`

export const CardRow = styled.div`
  margin-bottom: 10px;
`

export const RowKey = styled.span`
  font-family: 'bold';
  margin-right: 10px;
`

export const RowValue = styled.span`
  font-family: 'regular';
`

export const BackLinkPanel = styled.div`
  margin: auto;
  width: 100px;
`

export const BackLink = styled(Link)`
  text-decoration: none;
`

export const BackButton = styled.button`
  width: 100%;
  background-color: #a537fd;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'bold';
  border: none;
  cursor: pointer;
`
