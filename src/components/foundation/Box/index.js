import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('gap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('boxShadow')}
  ${propToStyle('alignItems')}
  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('borderRadius')}
  ${propToStyle('borderBottom')}
  
  ${propToStyle('border')}
  ${propToStyle('borderTop')}
  ${propToStyle('alignSelf')}
  ${propToStyle('minWidth')}
  ${propToStyle('maxWidth')}
  ${propToStyle('textAlign')}
  ${propToStyle('height')}

  ${propToStyle('borderRight')}
  ${propToStyle('cursor')}
  ${propToStyle('color')}
  ${propToStyle('position')}

  ${propToStyle('maxHeight')}
  ${propToStyle('top')}
  ${propToStyle('overflowY')}
`;
