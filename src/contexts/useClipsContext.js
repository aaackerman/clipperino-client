import React, { useContext, createContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const CLIPS = gql`
  {
    clips {
      title
      url
      embedUrl
      creatorName
    }
  }
`;

const ClipContext = createContext({});
const useClipsContext = () => useContext(ClipContext);

const ClipContextProvider = ({ children }) => {
  const clipsQuery = useQuery(CLIPS);

  return (
    <ClipContext.Provider value={clipsQuery}>{children}</ClipContext.Provider>
  );
};

export { ClipContextProvider, useClipsContext };
