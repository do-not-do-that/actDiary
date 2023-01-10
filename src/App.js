import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '테스터',
    content: 'hi! 테스트입니다',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '테스터훈',
    content: 'hi! 오늘은 오징어 튀김',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '오킹',
    content: '굿바이 짜장면',
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
