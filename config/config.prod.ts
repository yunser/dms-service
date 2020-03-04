import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
    const config: PowerPartial<EggAppConfig> = {};

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

    config.security = {
        csrf: {
            enable: false
        }
    }

    config.cluster = {
        listen: {
            path: '',
            port: 7020,
            hostname: '0.0.0.0'
        }
    }

    console.log('config', config)

    return config;
};
