const Trello = window.Trello;

export function getUser() {
  return new Promise(function(resolve, reject) {
      Trello.members.get('me').then(user => resolve(user), reject);
  });
}

export function logout() {
  Trello.deauthorize();
}
