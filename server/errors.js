function RoomDoesNotExistError(roomId) {
  this.type = 'joinError';
  this.message = `That room does not exist. Is your room code '${roomId}' valid?`;
}

module.exports.RoomDoesNotExistError = RoomDoesNotExistError;
