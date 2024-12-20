import styled from 'styled-components';

const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.error};
`;

export const RetryButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ErrorState = ({ children, onRetry }) => (
  <ErrorContainer>
    {children}
    {onRetry && <RetryButton onClick={onRetry}>Tentar Novamente</RetryButton>}
  </ErrorContainer>
); 