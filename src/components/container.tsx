import styled from '@emotion/native';

export const Container = styled.View<{verticalPaddingSize?: number}>(props => ({
  paddingHorizontal: 25,
  paddingVertical: props.verticalPaddingSize ?? 8,
}));
