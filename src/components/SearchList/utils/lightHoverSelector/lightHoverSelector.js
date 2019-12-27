import isMatch from 'lodash/isMatch';

const lightHoverSelector = (props) => isMatch(props, { theme: { theme: 'light' }, isHover: true });

export default lightHoverSelector;
