import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SmsEndpoint
 */
export class SmsEndpoint extends Endpoint {
  public phoneNumber?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SmsEndpoint';
  }

  /**
   * Get property definitions for SmsEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPhoneNumber',
        tsPropertyName: 'phoneNumber',
        type: 'string',
        required: false
      }
    ];
  }


}
