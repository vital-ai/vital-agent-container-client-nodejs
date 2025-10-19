import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailProfile
 */
export class EmailProfile extends EndpointProfile {
  public email?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailProfile';
  }

  /**
   * Get property definitions for EmailProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEmail',
        tsPropertyName: 'email',
        type: 'string',
        required: false
      }
    ];
  }


}
