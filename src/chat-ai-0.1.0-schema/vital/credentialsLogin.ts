import { UserLogin } from './userLogin';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#CredentialsLogin
 */
export class CredentialsLogin extends UserLogin {
  public password?: string;
  public username?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#CredentialsLogin';
  }

  /**
   * Get property definitions for CredentialsLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      }
    ];
  }


}
