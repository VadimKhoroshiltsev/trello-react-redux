const Trello = window.Trello;

export function getOpenedBoard(){
  return new Promise((resolve, reject) => {
    Trello.get('/member/me/boards?filter=open', resolve, reject);
  });
}

export function getBoardLists(board) {
  return new Promise((resolve, reject) => {
    Trello.get(`/boards/${board.id}/lists?filter=open`, resolve, reject);
  });
}
