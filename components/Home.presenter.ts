import { inject, injectable, postConstruct } from "inversify";
import { makeAutoObservable, when } from "mobx";
import DataStore from "../stores/data.store";
import { ICardLaunch } from "../config/types";
import { mapLaunch } from "../utils/mapLaunch";

@injectable()
class HomePresenter {
    @postConstruct() onInit() {
        makeAutoObservable(this);
    }

    @inject(DataStore) private dataStore!: DataStore

    get launches(): ICardLaunch[] {
        return this.dataStore.launches.map((launch) => {
            return mapLaunch(launch)
        })
    }

    get loading() {
        return this.dataStore.loading
    }

}

export default HomePresenter;