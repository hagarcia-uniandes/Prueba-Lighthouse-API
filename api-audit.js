'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;

class LoadAudit extends Audit {
    static get meta(){
        return{
            category: 'MyPerformance',
            id: 'api-audit',
            title: 'Schedule api initialized and ready',
            failureTitle: 'MyPerformance',
            description: 'Schedule api initialized and ready',
            requiredArtifacts: ['TimeToAPI']
        };
    }

    static audit(artifacts){
        const loadedTime = artifacts.TimeToAPI;
        const belowThreshold = loadedTime <= MAX_CARD_TIME;
        return{
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;