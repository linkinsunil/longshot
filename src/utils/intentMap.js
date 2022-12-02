const intentMap = {
  0: {
    type: 'Commercial',
    hoverText: 'The user wants to investigate brands or services.',
    color: { bg: '#FCE081', text: '#A75800', hover: '#ffca6e' },
  },
  1: {
    type: 'Informational',
    hoverText: 'The user wants to find an answer to a specific question.',
    color: { bg: '#C4E5FE', text: '#006DCA', hover: '#61c6ff' },
  },
  2: {
    type: 'Navigational',
    hoverText: 'The user wants to find a specific page or site.',
    color: { bg: '#EDD9FF', text: '#8649E1', hover: '#c59dfa' },
  },
  3: {
    type: 'Transactional',
    hoverText: 'The user wants to complete an action (conversion).',
    color: { bg: '#9EF2C9', text: '#007C65', hover: '#11d6a6' },
  },
};

export { intentMap };
