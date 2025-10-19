import { Question } from './question';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentQuestion
 */
export class PaymentQuestion extends Question {
  public provider?: string;
  public publicKey?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentQuestion';
  }

  /**
   * Get property definitions for PaymentQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProvider',
        tsPropertyName: 'provider',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPublicKey',
        tsPropertyName: 'publicKey',
        type: 'string',
        required: false
      }
    ];
  }


}
