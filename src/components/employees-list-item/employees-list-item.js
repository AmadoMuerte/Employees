import { Component } from 'react';
import './employees-list-item.css';

class  EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    }
  }

  liked = () => {
    this.setState((state) => ({
      like: state.like ? false : true
    }));
  };

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
      
    }))
  };

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase} = this.state;
    const {like} = this.state;
    let classNames = 'list-group-item d-flex justify-content-between';
    
    if (increase) {
      classNames += ' increase';
    }

    if (like) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label"
              onClick={this.liked} >{name}</span>
        <input type="text"  className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button"
                  className="btn-cookie btn-sm"
                  onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
                  className="btn-trash btn-sm"
                  onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <div className="fas fa-star"></div>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;


