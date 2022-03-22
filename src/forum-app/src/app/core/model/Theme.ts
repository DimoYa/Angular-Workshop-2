import IBase from './Base';
import IUser from './User';

interface ITheme extends IBase {
  subscribers: string[];
  posts: string[];
  themeName: 'Angular 10';
  userId: IUser | null;
  postText: string;
}

export default ITheme;
