import isMatch from 'lodash/isMatch';

const lightSelector = props => isMatch(props, { theme: { theme: 'light' } });

export default lightSelector;
