import { ICardLaunch } from "../config/types"

interface ILaunchesProps {
    launch: ICardLaunch
}

const Launches: React.FC<ILaunchesProps> = ({ launch }) => {
    return <div className="card">
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img
                            src={launch.imageUrl}
                            alt="Launch Image"
                        />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{launch.name}</p>
                    <p className="subtitle is-6">{new Date(launch.date).toLocaleDateString()}</p>
                </div>
            </div>

            <div className="content">{launch.result}</div>
            <div className="content">Core ID: {launch.coreId}</div>
            <div className="content">Payloads: {launch.payloads.join(', ')}</div>
        </div>
    </div>

}

export default Launches