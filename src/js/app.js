/* eslint-disable max-classes-per-file */
// TODO: write your code here
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}

export const char1 = new Character('Character1');
export const char2 = new Character('Character2');
export const char3 = new Character('Character3');
// const team = new Team();
// team.add(char1);
// team.add(char1);
// team.addAll(char2, char3);
// console.log(team.toArray());
// console.log(team);
