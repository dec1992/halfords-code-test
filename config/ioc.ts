import 'reflect-metadata'
import { Container } from 'inversify';


const getContainer = () => {
    const container = new Container({
        autoBindInjectable: true,
        defaultScope: 'Singleton',

    });
    return container;
};

const container = getContainer();

export default container;