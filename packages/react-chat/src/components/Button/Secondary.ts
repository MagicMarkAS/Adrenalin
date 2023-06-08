import { styled } from '@/styles';

import { Container } from './styled';

export const SecondaryButton = styled(Container, {
  height: '$sm',
  border: '1px solid $fadedPrimary',
  color: '$primary',
  backgroundColor: '$white',
  boxShadow: '0 1px 2px $shadow2',
  trans: ['border-color'],

  '&:hover': {
    borderColor: '$primary',
  },
});