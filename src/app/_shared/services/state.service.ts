import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  _state = {
    History: []
  };

  get state() {
    return this._state = this._clone(this._state);
  }
  
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    const state = this.state;
    let o = null;
    if (state.hasOwnProperty(prop))
      o = state[prop];
    return o;
  }

  set(prop: string, value: any) {
    return this._state[prop] = value;
  }

  _clone(object) {
    return JSON.parse(JSON.stringify(object));
  }
}
