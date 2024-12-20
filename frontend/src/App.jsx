import styled from 'styled-components';
import RepoCard from './components/RepoCard';
import { LoadingState } from './components/LoadingState';
import { ErrorState, RetryButton } from './components/ErrorState';
import { useRepositories } from './hooks/useRepositories';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.fontSize.large};
  margin-bottom: 20px;
`;

function App() {
  const { repos, loading, error, refetchRepos } = useRepositories('frontsennin');

  if (loading) return <LoadingState />;
  if (error) return (
    <ErrorState>
      <p>{error}</p>
      <RetryButton onClick={refetchRepos}>Tentar Novamente</RetryButton>
    </ErrorState>
  );

  return (
    <Container>
      <Title>GitHub Repositories</Title>
      {repos.map(repo => (
        <RepoCard 
          key={repo.id}
          name={repo.name}
          description={repo.description}
          stars={repo.stars}
          url={repo.url}
        />
      ))}
    </Container>
  );
}

export default App; 