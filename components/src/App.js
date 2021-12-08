
import './App.css';
import CommentDetail from './CommentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:40PM" content="It was a nice day" avatar={faker.image.imageUrl()} />
      </ApprovalCard>
      <CommentDetail author="Niteesh" timeAgo="Yesterday 4:40PM" content="It was awesome" avatar={faker.image.imageUrl()} />
    </div>
  );
}

export default App;
