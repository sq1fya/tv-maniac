import styled from '@emotion/styled'

type Props = {
  value: number
}

const height = 20

export const Root = styled.span<Props>`
  display: inline-block;
  background: var(${({ value }) => (value > 4 ? '--success' : '--red')});
  color: #fff;
  height: ${height}px;
  min-width: 20px;
  border-radius: ${({ value }) => value}px;
  font-size: 12px;
  line-height: ${height}px;
  text-align: center;
  padding: 0 5px;
  strong {
    text-decoration: underline;
  }
`

export const BigRoot = styled(Root)`
  font-size: 20px;
`.withComponent('em')
