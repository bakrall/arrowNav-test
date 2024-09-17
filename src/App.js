import './App.css';
import Component1 from './Component1';

import {
  FocusableElement,
  FocusableGroup
} from '@arrow-navigation/react'

// initArrowNavigation({preventScroll: true,
//   disableWebListeners: false, 
//   initialFocusElement: 'btn-1'
// })

function App() {
  return (
    <div className="App">
      <button>I am first on the page</button>
<div className="recipient-list">
              <span id="send_to_label">Send To:</span>
              
              <div id="ex2-grid" role="grid" className="pill-list" aria-labelledby="send_to_label" data-wrap-cols="true">
                <div role="row" className="pill-item" data-id="1">
                <FocusableGroup id="group-1">
                  <span role="gridcell">
                    <FocusableElement id="btn-1"><a id="r1" className="pill-name" tabIndex="-1" href="#">
                      Recipient Name 1
                      <FocusableElement id="btn-2"><span className="pill-remove" tabIndex="-1" role="button" aria-label="Remove" aria-labelledby="rb1 r1"> X </span>
                      </FocusableElement>
                      </a>
                  </FocusableElement></span>
                  </FocusableGroup>
                </div>
                <div role="row" className="pill-item" data-id="2">
                <FocusableGroup id="group-2">
                  <span role="gridcell">
                  
                  <FocusableElement id="btn-3"><a id="r2" className="pill-name" tabIndex="-1" href="#">Recipient Name 2</a>
                  </FocusableElement></span>
                  <span role="gridcell">
                    <FocusableElement id="btn-4"><span id="rb2" className="pill-remove" tabIndex="-1" role="button" aria-label="Remove" aria-labelledby="rb2 r2"> X </span>
                  </FocusableElement></span>
                  </FocusableGroup>
                </div>
                <div role="row" class="pill-item" data-id="2">
                  <span role="gridcell"><a id="r2" class="pill-name" tabindex="-1" href="#">Recipient Name 2</a></span>
                  <span role="gridcell"><span id="rb2" class="pill-remove" tabindex="-1" role="button" aria-label="Remove" aria-labelledby="rb2 r2"> X </span></span>
                </div>
              </div>
              
              <div id="recipient-form">
                <input id="add-recipient-input" type="text" aria-label="Add Recipient" placeholder="New Recipient Name"/>
                <button type="button" id="add-recipient-button">Add</button>
                <div className="accessible_elem">
                  Last change to recipient list:
                  <span aria-live="polite" aria-relevant="text" id="form-action-text"></span>
                </div>
              </div>
            </div>
          <Component1 />
    </div>
  );
}

export default App;
