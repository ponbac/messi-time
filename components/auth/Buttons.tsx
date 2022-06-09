/* eslint-disable @next/next/no-img-element */
import { SUPABASE } from "../../utils/dataFetcher";

const SignInButton: React.FC<{}> = ({}) => {
  async function signInWithDiscord() {
    const { user, session, error } = await SUPABASE.auth.signIn({
      provider: "discord",
    });

    console.log(user);
    console.log(session);
    console.log(error);
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
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      console.log(SUPABASE.auth.session());
    };
  
    return <button onClick={handleClick}>Session Info!</button>;
  };

export { SignInButton, SignOutButton, SessionInfoButton };
