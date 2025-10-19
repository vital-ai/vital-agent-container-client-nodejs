import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudAppActivity
 */
export class CloudAppActivity extends HaleyCloud {
  public dailyRequestCount?: number;
  public dailyCostAmount?: number;
  public dailyRequestInputCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudAppActivity';
  }

  /**
   * Get property definitions for CloudAppActivity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestCount',
        tsPropertyName: 'dailyRequestCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyCostAmount',
        tsPropertyName: 'dailyCostAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDailyRequestInputCount',
        tsPropertyName: 'dailyRequestInputCount',
        type: 'number',
        required: false
      }
    ];
  }


}
