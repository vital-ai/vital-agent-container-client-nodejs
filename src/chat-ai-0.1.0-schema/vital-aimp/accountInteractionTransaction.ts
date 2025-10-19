import { BaseInteractionTransaction } from './baseInteractionTransaction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountInteractionTransaction
 */
export class AccountInteractionTransaction extends BaseInteractionTransaction {
  public accountInteractionFee?: number;
  public accountInteractionTotalFee?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountInteractionTransaction';
  }

  /**
   * Get property definitions for AccountInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountInteractionFee',
        tsPropertyName: 'accountInteractionFee',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountInteractionTotalFee',
        tsPropertyName: 'accountInteractionTotalFee',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
