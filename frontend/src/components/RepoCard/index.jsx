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

const Description = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  font-size: ${props => props.theme.typography.fontSize.small};
`;

const Stars = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.typography.fontSize.small};
  margin-top: 10px;
  display: block;
`;

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const RepoCard = ({ name, description, stars, url }) => {
  return (
    <Card>
      <Title>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      </Title>
      <Description>{description || 'No description available'}</Description>
      <Stars>⭐ {stars} stars</Stars>
    </Card>
  );
};

export default RepoCard; 