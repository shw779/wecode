import { Link } from 'react-router-dom';
import './Main.scss';
function Main() {
  return (
    <div className="firstpageMain">
      <Link to="login-haewon">
        <div className="firstListName">Fullstack 4기 설혜원</div>
      </Link>
    </div>
  );
}
export default Main;
