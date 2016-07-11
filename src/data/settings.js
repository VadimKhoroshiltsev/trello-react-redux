const Trello = window.Trello;

export function getOpenedBoard(){
  return new Promise((resolve, reject) => {
    Trello.get('/member/me/boards?filter=open', resolve, reject);
  });
}


export function getBoardLists(boardId) {
  return new Promise((resolve, reject) => {
    Trello.get(`/boards/${boardId}/lists?filter=open`, resolve, reject);
  });
}
