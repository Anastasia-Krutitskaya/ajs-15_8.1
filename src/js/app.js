/* eslint-disable max-classes-per-file */
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
