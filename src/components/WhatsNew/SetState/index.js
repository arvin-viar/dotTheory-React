import React, { Component } from 'react';

import Teacher from './Teacher';
import "./setstate.scss";

class SetState extends Component {

  state = {
    teacher: ''
  };

  updateTeacher = teacher => {
    const newTeacher = teacher;
    this.setState(state => {
      if (state.teacher === newTeacher) {
        return null;
      } else {
        return { teacher };
      }
    });
  }

  render() {
    const teachers = ['jay', 'vivianne', 'ecma', 'json'];

    return (
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="content-header__title">
            Set State
          </h1>
        </div>

        <div className="set-state">
          <div className="set-state__teachers">
            <h1>Teachers</h1>
            {
              teachers.map((teacher) =>
                <button
                  key={teacher}
                  type="button"
                  value={teacher}
                  onClick={e => this.updateTeacher(e.target.value)}
                >
                  {teacher}
                </button>
              )
            }
          </div>

          <div className="set-state__teacher">
            <Teacher teacher={this.state.teacher} />
          </div>
        </div>
      </div>
    );
  }
}

export default SetState;
