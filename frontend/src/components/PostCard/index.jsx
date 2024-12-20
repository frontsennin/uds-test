import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.fontSize.medium};
  margin-bottom: 10px;
`;

const Body = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  font-size: ${props => props.theme.typography.fontSize.small};
`;

const Summary = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-style: italic;
  margin-top: 10px;
`;

const PostCard = ({ title, body, summary }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Body>{body}</Body>
      {summary && <Summary>{summary}</Summary>}
    </Card>
  );
};

export default PostCard; 