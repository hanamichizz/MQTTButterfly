const defaultSettings = {
    clientId: 'mqtt-board-65d33dc2',
    wsOptions: {
      objectMode: false,
      perMessageDeflate: true
    },
    host: 'wss://mqtt.flespi.io',
    keepalive: 420,
    protocolVersion: 5,
    resubscribe: false,
    clean: true,
    username: '1u3Gt272iYMnDrzcTgnkUA9U9NHGMKxD2qajg5bmTNzm3YoM5zWNZTvYu3s6BQAt',
    password: '',
    properties: {
      topicAliasMaximum: 65535,
      requestResponseInformation: false,
      requestProblemInformation: false
    },
    will: {
      topic: undefined,
      payload: undefined,
      qos: 0,
      retain: false,
      properties: {
        willDelayInterval: undefined,
        payloadFormatIndicator: false,
        messageExpiryInterval: undefined,
        contentType: undefined,
        responseTopic: undefined,
        correlationData: undefined,
        userProperties: undefined
      }
    }
  },
  defaultSubscriber = {
    topic: '#',
    mode: 0,
    treeField: '',
    highlight: true,
    options: {
      qos: 0,
      nl: false,
      rap: false,
      rh: 0,
      properties: {
        subscriptionIdentifier: undefined,
        userProperties: undefined
      }
    },
    unsubscribeProperties: {
      userProperties: undefined
    }
  },
  defaultPublisher = {
    topic: 'my/topic',
    payload: '{"hello": "world"}',
    options: {
      qos: 0,
      retain: false,
      dup: false,
      properties: {
        payloadFormatIndicator: undefined,
        messageExpiryInterval: undefined,
        topicAlias: undefined,
        responseTopic: undefined,
        correlationData: undefined,
        userProperties: undefined,
        contentType: undefined
      }
    }
  }
export {
  defaultSettings,
  defaultSubscriber,
  defaultPublisher
}
