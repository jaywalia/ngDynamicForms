import { Injectable } from '@angular/core';

import {QuestionBase} from './question-base';
import {QuestionDropDown} from './question-drop-down';
import {QuestionTextBox} from './question-text-box';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {
    let questions : QuestionBase<any>[] = [
      new QuestionDropDown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid' },
          {key: 'great', value: 'Great' },
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'},
        ],
        order: 3
      }),
      new QuestionTextBox({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        order : 1
      }),
      new QuestionTextBox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order:2
      })
    ];

    return questions.sort((a,b) => a.order - b.order );
  }
}
