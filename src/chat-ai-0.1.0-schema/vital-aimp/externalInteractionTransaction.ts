import { BaseInteractionTransaction } from './baseInteractionTransaction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ExternalInteractionTransaction
 */
export class ExternalInteractionTransaction extends BaseInteractionTransaction {
  public externalInteractionFee?: number;
  public externalInteractionTotalFee?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ExternalInteractionTransaction';
  }

  /**
   * Get property definitions for ExternalInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExternalInteractionFee',
        tsPropertyName: 'externalInteractionFee',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasExternalInteractionTotalFee',
        tsPropertyName: 'externalInteractionTotalFee',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
