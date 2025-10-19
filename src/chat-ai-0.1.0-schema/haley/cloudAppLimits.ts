import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudAppLimits
 */
export class CloudAppLimits extends HaleyCloud {
  public dailyRequestLimit?: number;
  public dailyRequestInputLimit?: number;
  public dailyCostLimit?: number;
  public dailyRequestGenerationLimit?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudAppLimits';
  }

  /**
   * Get property definitions for CloudAppLimits
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestLimit',
        tsPropertyName: 'dailyRequestLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestInputLimit',
        tsPropertyName: 'dailyRequestInputLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyCostLimit',
        tsPropertyName: 'dailyCostLimit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestGenerationLimit',
        tsPropertyName: 'dailyRequestGenerationLimit',
        type: 'number',
        required: false
      }
    ];
  }


}
