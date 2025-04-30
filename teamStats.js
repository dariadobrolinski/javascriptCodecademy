const team = {
    _players: [
      { firstName: 'First', lastName: 'Last', age: 25 },
      { firstName: 'Second', lastName: 'Player', age: 30 },
      { firstName: 'Third', lastName: 'Member', age: 28 }
    ],
    _games: [
      { opponent: 'First', teamPoints: 20, opponentPoints: 18},
      { opponent: 'Second', teamPoints: 18, opponentPoints: 30},
      { opponent: 'Third', teamPoints: 25, opponentPoints: 24},
    ],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  