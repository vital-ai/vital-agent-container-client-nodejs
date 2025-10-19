import { Login } from '../vital/login';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterLogin
 */
export class TwitterLogin extends Login {
  public retired?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TwitterLogin';
  }

  /**
   * Get property definitions for TwitterLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isRetired',
        tsPropertyName: 'retired',
        type: 'boolean',
        required: false
      }
    ];
  }


}
