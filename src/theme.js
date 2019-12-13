const theme = {
  colors: {
    primary: '#00ccb4',
    // https://zpl.io/VYoNZNE
    primaries: [
      '#a3ffe8', // Primary 100
      '#74f2d7', // Primary 200
      '#49e6c9', // Primary 300
      '#23d9bd', // Primary 400
      '#00ccb4', // Primary 500
      '#08af9f', // Primary 600
      '#048782', // Primary 700
      '#006166', // Primary 800
      '#00444d', // Primary 900
    ],
    secondary: '#ffb940',
    secondaries: [
      '#ffcc4b', // Secondary 400
      '#ffb940', // Secondary 500
      '#ff9913', // Secondary 600
    ],
    blacks: [
      '#fafafa',
      '#f5f5f5',
      '#eeeeee',
      '#e0e0e0',
      '#bdbdbd',
      '#9e9e9e',
      '#757575',
      '#616161',
      '#424242',
      '#212121',
    ],
  },
};

theme.colors.primaries.light = theme.colors.primaries[3];
theme.colors.primaries.dark = theme.colors.primaries[5];
theme.colors.secondaries.light = theme.colors.secondaries[0];
theme.colors.secondaries.dark = theme.colors.secondaries[2];

export default theme;
