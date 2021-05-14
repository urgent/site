import MainWrapper from "../components/MainWrapper";
import { useSession } from 'next-auth/client'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';

export default function Home() {

  const [session] = useSession();

  if (session) {
    return (
      <RelayEnvironmentProvider environment={RelayEnvironment(session.token)}>
        <MainWrapper className="mainWrapper" />
      </RelayEnvironmentProvider>
    )
  }

  return (
    <MainWrapper className="mainWrapper" />
  )
}
