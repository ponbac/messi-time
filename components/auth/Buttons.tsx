/* eslint-disable @next/next/no-img-element */
import { SUPABASE, updateUserData } from "../../utils/dataFetcher";

const SignInButton: React.FC<{}> = ({}) => {
  async function signInWithDiscord() {
    const { user, session, error } = await SUPABASE.auth.signIn({
      provider: "discord",
    });

    
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithDiscord();
  };

  return <button onClick={handleClick}>Sign In!</button>;
};

const SignOutButton: React.FC<{}> = ({}) => {
  async function signOut() {
    const { error } = await SUPABASE.auth.signOut();
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signOut();
  };

  return <button onClick={handleClick}>Sign Out!</button>;
};

const SessionInfoButton: React.FC<{}> = ({}) => {
  async function updateMetadata() {
    const user = SUPABASE.auth.user()
    const userId = user?.id;
    if (userId) {
      updateUserData(userId, 'Pontus', user.user_metadata.avatar_url, 'Hackerutojvi');
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
