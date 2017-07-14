function RoomDoesNotExistError(roomId) {
  this.type = 'joinErrors';
  this.message = `Room '${roomId}' does not exist. Is your room code valid?`;
}

function RoomFullError(roomId) {
  this.type = 'joinErrors';
  this.message = `Room ${roomId} is full.`;
}

function NameTakenError(name, roomId) {
  this.type = 'joinErrors';
  this.message = `Name '${name}' is already taken in room ${roomId}`;
}

module.exports.RoomDoesNotExistError = RoomDoesNotExistError;
module.exports.RoomFullError = RoomFullError;
module.exports.NameTakenError = NameTakenError;
