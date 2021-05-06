import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
  test = this.getPath();

  mentionConfig = {
    triggerChar: '{{',
    items: this.items,
    mentionSelect: (item) => `{${item.label}}}`,
    hasChildren: true,
    getChildren: (item) => ['a', 'b'],
    childTriggerRegex: /^[a-zA-Z_$][0-9a-zA-Z_$]*(\.?[a-zA-Z_$][0-9a-zA-Z_$]*)*$/
  }

  private getPath() {
    // the path provides direct access to the tests for e2e testing
    switch (window.location.pathname) {
      case '/config'   : return 'config';
      case '/events'   : return 'events';
      case '/async'    : return 'async';
      case '/options'  : return 'options';
      case '/templates': return 'templates';
      case '/pos'      : return 'pos';
      default          : return null;
    }
  }

  log(key, value) {
    console.log(key, value);
  }
}
