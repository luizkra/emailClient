import React from 'react';

function SearchCustom(props) {
  const { customClass, filterList, click } = props;
  return (
      <div className="search-list">
          <form>
              <fieldset className="form-group">
                  <input type="text" className="form-search" placeholder="Search" onChange={console.log('hola')} />
              </fieldset>
          </form>
      </div>
  )
}

export default SearchCustom;