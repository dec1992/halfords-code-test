import { injectable, postConstruct } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { API_URL } from '../config/constants';
import { ILaunch } from './data.types';

@injectable()
class DataStore {
    @postConstruct() onInit() {
        makeAutoObservable(this);
        this.init();
    }

    loading = false
    launches: ILaunch[] = []

    setLoading = (value: boolean) => this.loading = value
    setLaunches = (value: ILaunch[]) => this.launches = value

    init = async () => {
        this.setLoading(true)
        const response = await fetch(API_URL, {
            method: 'GET',
        });
        const json: ILaunch[] = await response.json()
        json.length = Math.min(json.length, 10);

        this.setLaunches(json)
        this.setLoading(false)
    }

}

export default DataStore;