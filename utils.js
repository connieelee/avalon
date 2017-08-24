// ID generator - curtesy of: https://gist.github.com/gordonbrander/2230317
const ID = () => Math.random().toString(36).substr(2, 7);
const isOnMobileDevice = navigator => /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

function Quest(numParticipants) {
  this.status = 'pending';
  this.questMasterIdx = null;
  this.numParticipantsRequired = numParticipants;
  this.participants = [];
  this.votes = {};
}

const makeQuests = numPlayers => {
  const quests = {};
  if (numPlayers === 5) {
    quests[1] = new Quest(2);
    quests[1].questMasterIdx = 0;
    quests[2] = new Quest(3);
    quests[3] = new Quest(2);
    quests[4] = new Quest(3);
    quests[5] = new Quest(3);
  } else if (numPlayers === 6) {
    quests[1] = new Quest(2);
    quests[2] = new Quest(3);
    quests[3] = new Quest(4);
    quests[4] = new Quest(3);
    quests[5] = new Quest(4);
  } else if (numPlayers === 7) {
    quests[1] = new Quest(2);
    quests[2] = new Quest(3);
    quests[3] = new Quest(3);
    quests[4] = new Quest(4);
    quests[4].twoFailsRequired = true;
    quests[5] = new Quest(4);
  } else {
    quests[1] = new Quest(3);
    quests[2] = new Quest(4);
    quests[3] = new Quest(4);
    quests[4] = new Quest(5);
    quests[4].twoFailsRequired = true;
    quests[5] = new Quest(5);
  }
  return quests;
};

module.exports = {
  ID,
  isOnMobileDevice,
  makeQuests,
};
