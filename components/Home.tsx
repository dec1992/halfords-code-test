import { observer } from "mobx-react-lite";
import useClass from "../utils/useClass";
import LoadingScreen from "./LoadingScreen";
import HomePresenter from "./Home.presenter";
import { toJS } from 'mobx'
import Launches from "./Launches";

const Home = () => {
    const { loading, launches } = useClass<HomePresenter>(HomePresenter)

    if (loading || !launches.length) return <LoadingScreen loading={loading} text={loading ? 'Loading...' : 'Unable to find any launches.'} />
    console.log(toJS(launches))

    return (

        <div className="container p-5">
            {launches.map((launch) => {
                return <Launches launch={launch} key={launch.name} />
            })}
        </div>
    );
}

export default observer(Home);