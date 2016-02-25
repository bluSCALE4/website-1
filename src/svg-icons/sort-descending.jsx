import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/svg-icon';

let SortDescending = (props) => (
  <SvgIcon {...props}>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M10,13V11H18V13H10M10,19V17H14V19H10M10,7V5H22V7H10M6,17H8.5L5,20.5L1.5,17H4V4H6V17Z" />
  </SvgIcon>
);
SortDescending = pure(SortDescending)
SortDescending.displayName = 'SortDescending';

export default SortDescending;
