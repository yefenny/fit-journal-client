import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ExerciseService from '../Services/ExerciseService';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import './ExerciseList.css';
class ExerciseList extends Component {
  state = {
    exercises: []
  };
  componentDidMount() {
    ExerciseService.getAllExercises().then((exercises) => {
      this.setState({
        exercises
      });
    });
  }
  render() {
    const items = this.state.exercises.map((sendObject) => {
      return (
        <li key={sendObject.id}>
          <ExerciseItem object={sendObject} />
        </li>
      );
    });
    return (
      <div className='exercises'>
        <div className='title-add'>
          <h2>Excercises</h2>
          <button
            type='button'
            className='add-exercise '
            onClick={() => {
              this.props.history.push('/new/exercise');
            }}
          >
            {' '}
            + Add
          </button>
        </div>
        <form className='searchForm'>
          <label htmlFor='searchBy'>Find:</label>
          <input type='text' name='searchBy' id='searchBy' />
          <button type='button' name='searchButton'>
            Search
          </button>
        </form>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default withRouter(ExerciseList);