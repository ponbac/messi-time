/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { signedIn, signedOut } from "../../features/auth/authSlice";
import { SUPABASE, updateUserData } from "../../utils/dataFetcher";

const SignInButton: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();

  async function signInWithDiscord() {
    const { user, session, error } = await SUPABASE.auth.signIn({
      provider: "discord",
    }, {
      redirectTo: 'http://localhost:3000/?authStatus=success',
    });

    dispatch(signedIn(user));
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithDiscord();
  };

  return <button onClick={handleClick}>Sign in with Discord</button>;
};

const SignOutButton: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();

  async function signOut() {
    const { error } = await SUPABASE.auth.signOut();

    dispatch(signedOut());
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signOut();
  };

  return <button onClick={handleClick}>Sign Out!</button>;
};

const SessionInfoButton: React.FC<{}> = ({}) => {
  async function updateMetadata() {
    const user = SUPABASE.auth.user();
    const userId = user?.id;
    if (userId) {
      updateUserData(
        userId,
        "Pontus",
        user.user_metadata.avatar_url,
        "Hackerutojvi"
      );
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    updateMetadata();
    console.log(SUPABASE.auth.user());
  };

  return <button onClick={handleClick}>Session Info!</button>;
};

export { SignInButton, SignOutButton, SessionInfoButton };
