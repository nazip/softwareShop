import React from 'react';
import PropTypes from 'prop-types';

const ListProducts = ({name, products}) => {
  return <table className="ui celled table">
    <thead>
      <tr>
        <th>Наименование</th>
        <th>Производитель</th>
        <th>Операцонная система</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="ui ribbon label">First</div>
        </td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
    <tfoot>
      <tr><th colspan="3">
        <div class="ui right floated pagination menu">
          <a class="icon item">
            <i class="left chevron icon"></i>
          </a>
          <a class="item">1</a>
          <a class="item">2</a>
          <a class="item">3</a>
          <a class="item">4</a>
          <a class="icon item">
            <i class="right chevron icon"></i>
          </a>
        </div>
      </th>
      </tr></tfoot>
  </table>;
};

ListProducts.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  os: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  vendor: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  }),
  price: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange:  PropTypes.func
  })

};

export default ListProducts;
