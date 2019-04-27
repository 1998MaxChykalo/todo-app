import { TIME_DECREMENT } from './../../constants/index';
import 'jest';
import { watchTodoSearch, searchTodo, watchTimeTillEndTick } from './index';
import { debounce, put, delay } from 'redux-saga/effects';
import { updateSearchTerm, timeTillEndTick } from '../actions/todo/actions';

describe('Saga testing', () => {

  describe('watchTodoSearch saga testing', () => {
  
    it(`Should call updateSearchTerm actionCreator when
        stopped dipatching SEARCH_TERM_CHANGED action for 500ms`, () => {
          const searchTerm = 'BlaBla';
          const searchTodoIterator = searchTodo(updateSearchTerm(searchTerm) as any);
          expect(
            searchTodoIterator.next().value
          ).toEqual(
            put(updateSearchTerm(searchTerm))
          );
          
      });
    it('Should call timeTillEndTick actionCreator every second', () => {
      const iterator = watchTimeTillEndTick();
      expect(
        iterator.next().value
      ).toEqual(delay(TIME_DECREMENT));
      expect(iterator.next().value).toEqual(put(timeTillEndTick()));
    })
  })
})
