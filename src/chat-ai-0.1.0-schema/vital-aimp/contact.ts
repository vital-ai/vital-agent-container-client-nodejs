import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Contact
 */
export class Contact extends AIMPThing {
  public email?: string;
  public phoneNumber?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Contact';
  }

  /**
   * Get property definitions for Contact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEmail',
        tsPropertyName: 'email',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPhoneNumber',
        tsPropertyName: 'phoneNumber',
        type: 'string',
        required: false
      }
    ];
  }


}
