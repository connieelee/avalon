/*
  GAME BOARDS: (P=players, M=minions, *=twoToFail)
    5P,  2M,  Quests: 2  -  3  -  2  -  3  -  3
    6P,  2M,  Quests: 2  -  3  -  4  -  3  -  4
    7P,  3M,  Quests: 2  -  3  -  3  -  4* -  4
    8P,  3M,  Quests: 3  -  4  -  4  -  5* -  5
    9P,  3M,  Quests: 3  -  4  -  4  -  5* -  5
    10P, 4M,  Quests: 3  -  4  -  4  -  5* -  5
*/

export function Quest(numParticipants, twoToFail) {
  this.results = [];
  this.numParticipants = numParticipants;
  this.twoToFail = twoToFail;
  this.masterId = null;
  this.participantIds = [];
}

const fivePlayers = {
  numPlayers: 5,
  numMinions: 2,
  quests: {
    1: new Quest(2, false),
    2: new Quest(3, false),
    3: new Quest(2, false),
    4: new Quest(3, false),
    5: new Quest(3, false),
  },
};

const sixPlayers = {
  numPlayers: 6,
  numMinions: 2,
  quests: {
    1: new Quest(2, false),
    2: new Quest(3, false),
    3: new Quest(4, false),
    4: new Quest(3, false),
    5: new Quest(4, false),
  },
};

const sevenPlayers = {
  numPlayers: 7,
  numMinions: 3,
  quests: {
    1: new Quest(2, false),
    2: new Quest(3, false),
    3: new Quest(3, false),
    4: new Quest(4, true),
    5: new Quest(4, false),
  },
};

const eightPlayers = {
  numPlayers: 8,
  numMinions: 3,
  quests: {
    1: new Quest(3, false),
    2: new Quest(4, false),
    3: new Quest(4, false),
    4: new Quest(5, true),
    5: new Quest(5, false),
  },
};

const ninePlayers = {
  numPlayers: 9,
  numMinions: 3,
  quests: {
    1: new Quest(3, false),
    2: new Quest(4, false),
    3: new Quest(4, false),
    4: new Quest(5, true),
    5: new Quest(5, false),
  },
};

const tenPlayers = {
  numPlayers: 10,
  numMinions: 4,
  quests: {
    1: new Quest(3, false),
    2: new Quest(4, false),
    3: new Quest(4, false),
    4: new Quest(5, true),
    5: new Quest(5, false),
  },
};

function makeBoard(numPlayers) {
  if (numPlayers === 5) return fivePlayers;
  if (numPlayers === 6) return sixPlayers;
  if (numPlayers === 7) return sevenPlayers;
  if (numPlayers === 8) return eightPlayers;
  if (numPlayers === 9) return ninePlayers;
  if (numPlayers === 10) return tenPlayers;
  throw new Error('You must have 5-10 Players!');
}

export default makeBoard;
