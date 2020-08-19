import React, { Component } from 'react';
import StudentRow from './StudentRow';

import students from '../assets/students';

export default class Students extends Component {
  render() {
    let studentList = students;

    return (
      studentList.map(student => (
        <StudentRow student={student}/>
      ))
    );
  }
}
