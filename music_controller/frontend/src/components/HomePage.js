import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import { Link } from 'react-router-dom';
export default function HomePage () {
  return (
    <>
      <ul>
        <li><Link to='/create-room'>Create a room</Link></li>
        <li><Link to='/room-join'>Join a room</Link></li>
      </ul>
    </>
  );
}
