import { useDispatch } from 'react-redux';
import { remove } from '../../redux/items-slice';
import propTypes from 'prop-types';
import { ImBin2 } from 'react-icons/im';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button onClick={() => dispatch(remove(id))} type="button">
              <ImBin2 />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
};

export default ContactList;
