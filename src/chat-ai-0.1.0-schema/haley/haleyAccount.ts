import { Account } from '../vital/account';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccount
 */
export class HaleyAccount extends Account {
  public enableEcho?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccount';
  }

  /**
   * Get property definitions for HaleyAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#isEnableEcho',
        tsPropertyName: 'enableEcho',
        type: 'boolean',
        required: false
      }
    ];
  }


}
