import { runGalaxy } from './team-cotton-galaxy';
import { runInputTest } from './input-test';

const tests = [runGalaxy, runInputTest];

const rootEl = document.getElementById('test-buttons');

tests.forEach((test) => {
  const testButton = document.createElement('button');
  testButton.innerHTML = test.name;
  testButton.style = 'margin: 10px;';
  testButton.onclick = () => {
    test();
    rootEl.hidden = true;
  };
  rootEl.appendChild(testButton);
});
