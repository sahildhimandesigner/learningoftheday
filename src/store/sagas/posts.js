import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../../firebase';
import * as actions from '../actions';

export function* getPostsSaga() {
    try {
        // const getAllPost = firebase.database().ref(`allPost`);
        // let reversedOrder = [];
        // getAllPost.on('value', function(snapshot){
        //     const getData = [];
        //     for(const key in snapshot.val()) {
        //             getData.push({
        //                 id: key,
        //                 name: snapshot.val()[key].name,
        //                 heading: snapshot.val()[key].title,
        //                 content: snapshot.val()[key].post,
        //                 date: (new Date(snapshot.val()[key].date)).toString()
        //             });
        //     }
        //     reversedOrder = getData.reverse();            
        // })
        // yield put(actions.setPosts(reversedOrder));

        const channel = new eventChannel(emiter => {
            const listener = firebase.database().ref(`allPost`).on("value", snapshot => {
              emiter({ data: snapshot.val() || {} });
            });
        
                // #2
            return () => {
              listener.off();
            };
          });
        
            // #3
          while (true) {
            const { data } = yield take(channel);
            console.log('mummy', data);
                // #4
            yield put(actions.setPosts(data));
          }
    } catch {
        yield put(actions.postFetchFailed())
    }
}