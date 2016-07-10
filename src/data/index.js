export function getBoards() {
  return [{
    id: "4eea4ffc91e31d1746000046",
    name: "Example Board",
    desc: "This board is used in the API examples",
    lists: [{
      id: "4eea4ffc91e31d174600004a",
      name: "To Do Soon"
    }, {
      id: "4eea4ffc91e31d174600004b",
      name: "Doing"
    }, {
      id: "4eea4ffc91e31d174600004c",
      name: "Done"
    }]
  }];
}

export function getCurrentBoard() {
  let board = {
    "name": "Work",
    "desc": "",
    "descData": null,
    "closed": false,
    "idOrganization": "563724467f0190be6e3eb8db",
    "pinned": null,
    "invitations": null,
    "shortLink": "c9Yaz7ts",
    "powerUps": [],
    "dateLastActivity": "2016-06-15T09:28:33.317Z",
    "idTags": [],
    "id": "56372404c057d997476b3c2a",
    "invited": false,
    "starred": true,
    "url": "https://trello.com/b/c9Yaz7ts/work",
    "prefs": {
      "permissionLevel": "org",
      "voting": "disabled",
      "comments": "members",
      "invitations": "members",
      "selfJoin": true,
      "cardCovers": true,
      "cardAging": "regular",
      "calendarFeedEnabled": false,
      "background": "545a6e002378b1b5567c32ce",
      "backgroundImage": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/1000x667/7b48e6346faa3e08141ce10eab5524cf/desk1.jpg",
      "backgroundImageScaled": [{
        "width": 140,
        "height": 100,
        "url": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/140x100/7d973223f436b812e2ec5d9a60ba630a/desk1.jpg"
      }, {
        "width": 256,
        "height": 192,
        "url": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/256x192/11f6a78f3eede03ee672435ccebcd565/desk1.jpg"
      }, {
        "width": 480,
        "height": 480,
        "url": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/b473103e1505145c0317e12cbc9677cb/desk1.jpg"
      }, {
        "width": 960,
        "height": 960,
        "url": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/960x960/4895fd78b87a8ce38d26a455803b1f08/desk1.jpg"
      }, {
        "width": 1000,
        "height": 667,
        "url": "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/1000x667/7b48e6346faa3e08141ce10eab5524cf/desk1.jpg"
      }],
      "backgroundTile": false,
      "backgroundBrightness": "unknown",
      "canBePublic": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "memberships": [{
      "id": "56372404c057d997476b3c3f",
      "idMember": "52a082b01c9a0eed7b004e4b",
      "memberType": "admin",
      "unconfirmed": false,
      "deactivated": false,
      "orgMemberType": "admin"
    }, {
      "id": "563736b64e48584f14d78a06",
      "idMember": "51751f79c7203fd27f002d33",
      "memberType": "admin",
      "unconfirmed": false,
      "deactivated": false,
      "orgMemberType": "admin"
    }],
    "subscribed": false,
    "labelNames": {
      "green": "",
      "yellow": "",
      "orange": "",
      "red": "Bug/Urgent",
      "purple": "Improvement",
      "blue": "Waiting",
      "sky": "",
      "lime": "",
      "pink": "",
      "black": ""
    },
    "dateLastView": "2016-07-06T12:40:31.665Z",
    "shortUrl": "https://trello.com/b/c9Yaz7ts"
  };
  let lists = getBoardLists(board.id);
  Object.assign(board, {
    lists,
    doneList: getDoneList(),
    currentListId: lists[0].id
  })
  return board;
}

export function getDoneList(){
  return {
    "id": "5637242af4b28d64cfad239f",
    "name": "Done",
    "cards": []
  }
}

export function getBoardLists(boardId) {
  return [{
    "id": "563724210ca903a0b5dad12d",
    "name": "ToDo",
    "cards": [{
      "id": "57502ca9e0e504ebd7f8250c",
      "name": "Explain in more details 'zoomLevel' options in dateBox card assigned to me",
      "desc": "Card title: Explain in more details 'zoomLevel' options in dateBox\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: June 2, 2016 at 03:42PM\nDescription: [3:37:41 PM] Александр Зиборов: the main issue - it is not clear for me direction form min to max [3:38:32 PM] Александр Зиборов: (min) 'month' -> 'year' -> 'decade' -> 'century' (max) [3:38:44 PM | Edited 3:38:47 PM] Александр Зиборов: or (max) 'month' -> 'year' -> 'decade' -> 'century' (min)\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1UhBYJS"
    }, {
      "id": "574efe291d1d497c719af327",
      "name": "Bootstrap integration sample demo on GitHub card assigned to me",
      "desc": "Card title: Bootstrap integration sample demo on GitHub\nAssigned by: Georgiy Sobolev - georgiysobolev\nAssigned at: June 1, 2016 at 06:11PM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1Xgw5Dz"
    }, {
      "id": "574c05d4df8e0666efd05d26",
      "name": "Set default value to null for datebox card assigned to me",
      "desc": "Card title: Set default value to null for datebox\nAssigned by: Georgiy Sobolev - georgiysobolev\nAssigned at: May 30, 2016 at 12:13PM\nDescription: Register BC ( and change this http://ift.tt/27YICP1)\nList: Done 16.1\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1qWDrh0"
    }, {
      "id": "5746bdf1cf8297c2dbdd8051",
      "name": "Fix Typos card assigned to me",
      "desc": "Card title: Fix Typos\nAssigned by: Andrey Ovchinnikov - andreyovchinnikov1\nAssigned at: May 26, 2016 at 10:39AM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1TBDC9k"
    }, {
      "id": "571a4e1b5c5606220d64fd4d",
      "name": "dxGolfClub on win8 devices does not work card assigned to me",
      "desc": "Card title: dxGolfClub on win8 devices does not work\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: April 22, 2016 at 06:56PM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1T3ydHq"
    }, {
      "id": "571a36dd0d5fc1a50830537c",
      "name": "Win8 theme - theme deprecation card assigned to me",
      "desc": "Card title: Win8 theme - theme deprecation\nAssigned by: Timophey Trainenkov - timopheytrainenkov\nAssigned at: April 22, 2016 at 05:30PM\nDescription:\nList: Planned\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1Whelp2"
    }, {
      "id": "57149e319befbac2c8d87f1a",
      "name": "dxDataBox: add adaptivity card assigned to me",
      "desc": "Card title: dxDataBox: add adaptivity\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: April 18, 2016 at 11:38AM\nDescription: T367728 - dxDateBox: displayed strangely on phones\nList: To Discuss\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/23RLWIM"
    }, {
      "id": "57149e31d533f0c81151db5c",
      "name": "DxThemes: attach css classes to body after set current theme card assigned to me",
      "desc": "Card title: DxThemes: attach css classes to body after set current theme\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: April 18, 2016 at 11:37AM\nDescription: http://ift.tt/23RLZ7A **Notify Poltavets after fix issue**\nList: Planned\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1r98vuJ"
    }, {
      "id": "57149e30f2479b406c41efa7",
      "name": "dxMask: add full value in maskRules card assigned to me",
      "desc": "Card title: dxMask: add full value in maskRules\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: April 18, 2016 at 11:36AM\nDescription:\nList: To Discuss\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1r98sPH"
    }, {
      "id": "56fce21515ae306636c79f36",
      "name": "dxValidation for invisible editors card assigned to me",
      "desc": "Card title: dxValidation for invisible editors\nAssigned by: Timophey Trainenkov - timopheytrainenkov\nAssigned at: March 31, 2016 at 11:35AM\nDescription: Чувак хочет скипать валидауию, если у кондейнера стоит display: none. Такой случай, скорее всего, нет смысла обрабатывать. Но почему бы не пропускать выполнение валидации, если у эдитора (или его контейнера) стоит наш visible: false? [4:04:42 PM] Oleg Larshin: Ну например, если я поставил галочку, что женат, то появится инпут с required валидацией, куда надо ввести имя жены:) [4:05:00 PM] Oleg Larshin: А если галочка не стоит - эдитор скрыт\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1MDhDRw"
    }, {
      "id": "56f8fe62f5bebaa16a4b6093",
      "name": "Set base constant on main page theme builder card assigned to me",
      "desc": "Card title: Set base constant on main page theme builder\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: March 28, 2016 at 12:43PM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1RnlwKx"
    }, {
      "id": "56f8fe611073abe1ca2b3aba",
      "name": "dxBox: publish shrink minSize maxSize option card assigned to me",
      "desc": "Card title: dxBox: publish shrink, minSize, maxSize option\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: March 28, 2016 at 12:43PM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/21OKOTz"
    }, {
      "id": "56f8fe6009a3699fcb35f1a0",
      "name": "Check bootstrap theme in dashboard card assigned to me",
      "desc": "Card title: Check bootstrap theme in dashboard\nAssigned by: Vadim Khoroshiltsev - vadimkhoroshiltsev\nAssigned at: March 28, 2016 at 12:43PM\nDescription:\nList: Doing\nBoard: !DevExtreme Franklin (Widgets)\nLink to Card: http://ift.tt/1Rnlwuj"
    }]
  }, {
    "id": "56372425cf288818aa81727f",
    "name": "Doing now",
    "cards": [{
      "id": "57517d00b8c84d6af06a60ae",
      "name": "http://www.engvid.com/",
      "desc": ""
    }, {
      "id": "575988e48f4b044f4faba91e",
      "name": "https://attendee.gotowebinar.com/register/492858660903174146",
      "desc": ""
    }]
  }, {
    "id": "5637242af4b28d64cfad239d",
    "name": "Done at the last day",
    "cards": []
  }]
}

export function getList(listId) {
  return {
    id: "4eea4ffc91e31d174600004a",
    name: "To Do Soon",
    cards: [{
      id: "4eea503791e31d1746000080",
      name: "Finish my awesome application"
    }]
  }
}

export function getUser() {

}
