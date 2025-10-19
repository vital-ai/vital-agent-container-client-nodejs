import { Login } from '../vital/login';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailLogin
 */
export class EmailLogin extends Login {
  public retired?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailLogin';
  }

  /**
   * Get property definitions for EmailLogin
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
