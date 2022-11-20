import { useContext } from 'react';
import { AppContext, ChatOverlay, IUser } from '../../AppContext';
import { ReactComponent as CommentsIcon } from '../../Assets/comments_icon.svg';
import { ReactComponent as HeartIcon } from '../../Assets/heart_empty_icon.svg';
import { dateToYMD } from '../../Helpers/dateUtils';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import './feedDrawer.scss';

interface IPost {
  id: number,
  author: IUser,
  date: Date,
  text: string,
  hearts: number,
  comments: number,
}

const feedList: IPost[] = [
  {
    id: 1,
    author: {
      pic: null,
      name: "Daniel Litt",
      id: 1,
    },
    date: new Date(),
    text: 'Reminder to self: Mental health is very important.',
    hearts: 14312,
    comments: 1678,
  },
  {
    id: 2,
    author: {
      pic: null,
      name: "Dana Park",
      id: 2,
    },
    date: new Date(),
    text: "I spent ~20,000+ hours programming in Emacs. I finally decided to switch to VSCode. It feels like saying goodbye to an old friend.\n\nIt's good to always be evolving, always willing to let go of the comfortable old way to discover a better new way.",
    hearts: 20312,
    comments: 2488,
  },
  {
    id: 3,
    author: {
      pic: null,
      name: "William Trinadad",
      id: 1,
    },
    date: new Date(),
    text: "Better algorithms have sped up computing by more than Moore's law.",
    hearts: 142,
    comments: 2,
  },
  {
    id: 4,
    author: {
      pic: null,
      name: "Amanda Clark",
      id: 3,
    },
    date: new Date(),
    text: "People who think @rustlang is a good programming language also think Arch Linux is a good operating system.",
    hearts: 112,
    comments: 10,
  },
  {
    id: 5,
    author: {
      pic: null,
      name: "Amanda Clark",
      id: 4,
    },
    date: new Date(),
    text: "",
    hearts: 1212,
    comments: 109,
  },
];

function FeedDrawer() {
  const handleItemClick = (item: IPost) => { };

  return (
    <LeftDrawer
      drawerTitle={'Posts'}
      itemList={feedList}
      handleItemClick={handleItemClick}
      content={(props: { item: IPost }) => <Post post={props.item} />}
    />
  );
}

function Post(props: { post: IPost }) {
  return (
    <>
      <div className='feed-item'>
        <div className='feed-header'>
          <div className='feed-profile-pic'></div>
          <div className='feed-author-name'>{props.post.author.name}</div>
          <div className='feed-date'>{dateToYMD(props.post.date, false)}</div>
        </div>
        <div className='feed-body'>
          {props.post.text}
        </div>
        <div className='feed-footer'>
          <div className='feed-comments'>
            <CommentsIcon />
            {props.post.comments}
          </div>
          <div className='feed-hearts'>
            <HeartIcon />
            {props.post.hearts}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedDrawer;