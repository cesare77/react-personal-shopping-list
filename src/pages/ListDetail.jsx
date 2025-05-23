import { useEffect, useContext, useCallback } from 'react';
import ItemsContext from '../context/Itemscontext';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ListItem from '../components/ListItem/ListItem';
import ListsContext from '../context/ListsContext';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

function ListDetail() {
  let navigate = useNavigate();
  const { listId } = useParams();

  const { loading, error, items, fetchItems } = useContext(ItemsContext);
  const { list, fetchList } = useContext(ListsContext);

  useEffect(() => {
    listId && !items.length && fetchItems(listId);
  }, [fetchItems, items, listId]);

  useEffect(() => {
    listId && fetchList(listId);
  }, [fetchList, listId]);

  return (
    <>
      {navigate && (
        <NavBar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
          title={list && list.title}
        />
      )}
      <ListItemWrapper>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          items.map((item) => <ListItem key={item.id} data={item} />)
        )}
      </ListItemWrapper>
    </>
  );
}

export default ListDetail;
