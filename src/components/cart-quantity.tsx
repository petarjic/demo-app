import {Dispatch, SetStateAction, Fragment} from 'react';
import styled from '@emotion/native';
import {Typography} from './typography';

type Props = {
  quantity: number;
  update: Dispatch<SetStateAction<number>>;
}

export const CartQuantity: React.FC<Props> = ({quantity, update}) => {
  return (
    <QuantityContainer>
      <Fragment>
        <QuantityButton
          onPress={() => update(quantity + 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">+</Typography>
        </QuantityButton>

        <Typography style={{textAlign: 'center', flex: 1}}>
          {quantity}
        </Typography>

        <QuantityButton
          onPress={() => quantity > 1 && update(quantity - 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </Fragment>
    </QuantityContainer>
  );
};


const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
