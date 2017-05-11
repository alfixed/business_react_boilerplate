import { APIgetList } from '../../api/lists';

export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const CHANGE_LIST_FIELD = 'CHANGE_LIST_FIELD';

function requestList() {
  return {
    type: REQUEST_LIST,
    payload: { isFetching: true },
  };
}

function receiveList(list) {
  return {
    type: RECEIVE_LIST,
    payload: { list, isFetching: false },
  };
}

export function fetchList(listId) {
  return (dispatch) => {
    dispatch(requestList());
    return APIgetList(listId)
    .then(response => response.json())
    .then(json => dispatch(receiveList(json)));
  };
}

export function changeListField(fieldObject) {
  return {
    type: CHANGE_LIST_FIELD,
    payload: { list: fieldObject, isEdit: true },
  };
}
