import NetworkLayer from '../../network/Gateway';

const ADDSUCCESS = 'BookStore/Controller/ADDBOOK_SUCCESSFUL';
const ADDFAILED = 'BookStore/Controller/ADDBOOK_FAILED';
const REMOVESUCCESS = 'BookStore/Controller/REMOVEBOOK_SUCCESSFUL';
const REMOVEFAILED = 'BookStore/Controller/REMOVEBOOK_FAILED';
const FETCHSUCCESS = 'BookStore/Controller/FETCH_SUCCESSFUL';
const FETCHFAILED = 'BookStore/Controller/FETCH_FAILED';

const connection = new NetworkLayer();

export const addBook = ({ name, category, author }) => async (dispatch) => {
  const id = Date.now();
  connection.add(id, name, category, author).then((response) => {
    if (response.status === 201 && response.ok) {
      dispatch(
        {
          type: ADDSUCCESS,
          id,
          name,
          category,
          author,
        },
      );
    } else {
      dispatch(
        {
          type: ADDFAILED,
          id,
          name,
          category,
          author,
        },
      );
    }
  });
};

export const removeBook = (id) => async (dispatch) => {
  connection.remove(id).then((response) => {
    if (response.status === 201 && response.ok) {
      dispatch(
        {
          type: REMOVESUCCESS,
          id,
        },
      );
    } else {
      dispatch(
        {
          type: REMOVEFAILED,
          id,
        },
      );
    }
  });
};

export const fetchAllBooks = () => async (dispatch) => {
  connection.fetch().then((response) => {
    if (response.status === 200 && response.ok) {
      response.json().then((data) => {
        const keys = Object.keys(data);
        const bkData = [];
        keys.forEach((key) => {
          bkData.push({
            id: key,
            name: data[key][0].title,
            category: data[key][0].category,
            author: data[key][0].author,
          });
        });
        dispatch(
          {
            type: FETCHSUCCESS,
            library: bkData,
          },
        );
      });
    } else {
      dispatch(
        {
          type: FETCHFAILED,
          library: [],
        },
      );
    }
  });
};

const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADDSUCCESS:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          author: action.author,
        },
      ];
    case REMOVESUCCESS:
      return state.filter((book) => book.id !== action.id);
    case FETCHSUCCESS:
      return action.library;
    default:
      return state;
  }
};

export default Reducer;
