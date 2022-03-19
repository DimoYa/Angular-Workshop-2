import IBase from './Base';
import ITheme from './Theme';
import IUser from './User';

interface IPost extends IBase {
  likes: [];
  text: 'Angular is the best!';
  userId: IUser;
  themeId: ITheme;
}

export default IPost;
