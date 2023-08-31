import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { IssueUI } from '../IssueUI/IssueUI';
import Spinner from '../Loading/Loading';

function IssueDetail() {
  const [markdownText, setMarkdownText] = useState('');
  const selector = useSelector(state => state.issue.issuesStore);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selector[id]) {
      const markdownData = selector[id]?.body || '';
      setMarkdownText(markdownData);
      setIsLoading(false);
    }
  }, [id, selector]);

  return (
    <DescriptionContainer>
      {isLoading ? (
        <CenteredSpinner>
          <Spinner />
        </CenteredSpinner>
      ) : (
        <>
          {selector[id] && (
            <ProfileContainer>
              <AvatarContainer>
                <Avatar src={selector[id].user.avatar_url} alt="Author's Avatar" />
                <AuthorName>{selector[id].user.login}</AuthorName>
              </AvatarContainer>
              <StyledIssue data={selector[id]} />
            </ProfileContainer>
          )}
          <StyledReactMarkdown>{markdownText}</StyledReactMarkdown>
        </>
      )}
    </DescriptionContainer>
  );
}

export default IssueDetail;

const CenteredSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;

const DescriptionContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: start;
  font-family: 'Arial', sans-serif;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  color: #333;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #444;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }

  a {
    color: #0077cc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background-color: #e6e6e6;
    padding: 2px 4px;
    border-radius: 4px;
  }

  p {
    margin-bottom: 15px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: purple;
  font-size: 1.3rem;
`;

const StyledIssue = styled(IssueUI)`
  color: #010101;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  max-width: 250px;
  margin-left: 20px;

  & > div {
    font-size: 0.85em;
    margin-bottom: 5px;
  }

  & p {
    margin-bottom: 5px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
