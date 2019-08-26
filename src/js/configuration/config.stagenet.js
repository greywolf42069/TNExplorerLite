const nodeUrl = 'https://nodes-stagenet.wavesnodes.com';

export default {
    networkId: 'stagenet',
    displayName: 'Stagenet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api-stagenet.wavesplatform.com/v0',
    nodes: [{url: nodeUrl, maintainer: 'Waves', showAsLink: true}],
    faucet: {
        url: 'http://faucet-stagenet.wavesplatform.com',
        captchaKey: '6Lfir7MUAAAAAAWip4okLvtW8de3fvZaZbGVN-bn',
        address: '3Mi63XiwniEj6mTC557pxdRDddtpj7fZMMw'
    }
};
