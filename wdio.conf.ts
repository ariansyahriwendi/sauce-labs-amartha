export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    specs: [
        'test/features/**/*.feature'
    ],

    exclude: [
    ],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome'
    }],

    logLevel: 'silent',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 1,

    framework: 'cucumber',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            useCucumberStepReporter: true,
            disableMochaHooks: true
        }]
    ],

    cucumberOpts: {
        require: ['test/steps/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 10000,
        ignoreUndefinedDefinitions: false
    },

    afterStep: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

}