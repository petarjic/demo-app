import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: string;
}

const renderItem = ({ item }) => (
  <ListItem key={item.id} item={item} />
)

const ListScreen = () => {
  return (
    <SafeAreaView edges={['bottom']}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        data={ListData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
